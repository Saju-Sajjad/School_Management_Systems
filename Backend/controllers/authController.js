import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import User from "../models/User.js";
import dotenv from 'dotenv';

dotenv.config();

const JWT_SECRET = process.env.JWT_SECRET;
console.log("env", JWT_SECRET)
const ACCESS_TOKEN_EXPIRATION = '24h';
const REFRESH_TOKEN_EXPIRATION = '7d';

export const signup = async (req, res, next) => {
  const { name, email, password } = req.body;
  const avatar = req.file;

  try {
    let existingUser = await User.findOne({ email });
    if (existingUser) {
      console.log("User already exists");
      return res.status(400).json({ message: "User already exists" });
    }

    const hashPassword = bcrypt.hashSync(password, 10);
    const newUser = new User({
      name,
      email,
      password: hashPassword,
      avatar: avatar ? avatar.path : null,
      isAdmin: false
    });

    await newUser.save();
    return res.status(200).json({ message: "User created successfully", user: newUser });
  } catch (error) {
    console.error("Error in signup:", error);
    return res.status(500).json({ message: "Signup failed, please try again later." });
  }
};

const generateToken = (userId, expiresIn) => {
  return jwt.sign({ id: userId }, JWT_SECRET, { expiresIn });
};

export const login = async (req, res, next) => {
  const { email, password } = req.body;

  try {
    const existingUser = await User.findOne({ email });
    if (!existingUser) {
      return res.status(404).json({ message: "No user found" });
    }

    const isPasswordCorrect = await bcrypt.compare(password, existingUser.password);
    if (!isPasswordCorrect) {
      return res.status(401).json({ message: "Incorrect password" });
    }

    const accessToken = generateToken(existingUser._id, ACCESS_TOKEN_EXPIRATION);
    const refreshToken = generateToken(existingUser._id, REFRESH_TOKEN_EXPIRATION);

    res.cookie('token', accessToken, { httpOnly: true, sameSite: 'lax' });
    res.cookie('refreshToken', refreshToken, { httpOnly: true, sameSite: 'lax' });

    return res.status(200).json({ message: "Successfully logged in", existingUser });
  } catch (error) {
    console.error("Error in login:", error);
    return res.status(500).json({ message: "Login failed, please try again later." });
  }
};

export const verifyToken = (req, res, next) => {
  const accessToken = req.cookies.token;

  if (!accessToken) {
    return res.status(401).json({ message: "Unauthorized: No token provided" });
  }

  jwt.verify(accessToken, JWT_SECRET, (err, decoded) => {
    if (err) {
      return res.status(403).json({ message: "Unauthorized: Invalid token" });
    }
    req.user = decoded;
    next();
  });
};

export const logout = async (req, res) => {
  try {
    res.clearCookie('token');
    res.clearCookie('refreshToken');
    return res.status(200).json({ message: 'Logout successful' });
  } catch (error) {
    console.error('Error during logout:', error);
    return res.status(500).json({ message: 'Failed to logout' });
  }
};

export const refreshToken = (req, res, next) => {
  const refreshToken = req.cookies.refreshToken;

  if (!refreshToken) {
    return res.status(403).json({ message: "No refresh token provided" });
  }

  jwt.verify(refreshToken, JWT_SECRET, (err, decoded) => {
    if (err) {
      return res.status(403).json({ message: "Invalid refresh token" });
    }

    const accessToken = generateToken(decoded.id, ACCESS_TOKEN_EXPIRATION);
    res.cookie('token', accessToken, { httpOnly: true, sameSite: 'lax' });
    return res.status(200).json({ message: "Successfully refreshed access token", accessToken });
  });
};

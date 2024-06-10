import mongoose from 'mongoose';

const { Schema } = mongoose;

const userSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true,
    minlength: 6
  },
  avatar: {
    type: String
  },
  isAdmin: {
    type: Boolean,
    default: false // Default value is false
  }
}, { timestamps: true }); // Add timestamps option to automatically add createdAt and updatedAt fields

export default mongoose.model("User", userSchema);

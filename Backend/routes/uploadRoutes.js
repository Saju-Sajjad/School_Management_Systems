import express from 'express';
import upload from '../Utils/multer.js'; // Ensure the correct path

const router = express.Router();

router.post('/upload', upload.single('file'), (req, res) => {
  if (req.file) {
    res.status(200).json({ message: 'File uploaded successfully', fileUrl: req.file.location });
  } else {
    res.status(400).json({ message: 'File upload failed' });
  }
});

export default router;

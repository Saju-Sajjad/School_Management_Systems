// Import Multer
import multer from 'multer';

// Set storage engine
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './uploads/'); // Save uploaded files to the uploads folder
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + '-' + file.originalname); // Rename files to avoid conflicts
  }
});

// Initialize multer instance
const upload = multer({ storage: storage });
export default upload;


import multer from 'multer';
import path from 'path';

const uploadFolder = path.resolve(__dirname, '..', '..', 'uploads');

function generateFileName(req, file, cb) {
  const ext = path.extname(file.originalname);
  const name = path.basename(file.originalname, ext);
  cb(null, `${name}-${Date.now()}${ext}`);
}

export default {
  storage: multer.diskStorage({
    destination: uploadFolder,
    filename: generateFileName,
  }),
};

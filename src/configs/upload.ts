import multer from 'multer';
import path from 'path';

const uploadFolder = path.resolve(__dirname, '..', '..', 'uploads');

function generateFileName(_req: any, file: any, cb: any): void {
  const fileExtension = path.extname(file.originalname);
  const fileName = path.basename(file.originalname, fileExtension);
  cb(null, `${fileName}-${Date.now()}${fileExtension}`);
}

export default {
  storage: multer.diskStorage({
    destination: uploadFolder,
    filename: generateFileName,
  }),
};

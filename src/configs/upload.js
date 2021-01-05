const multer = require('multer');
const path = require('path');

const uploadFolder = path.resolve(__dirname, '..', '..', 'uploads');

function generateFileName(req, file, cb) {
  const ext = path.extname(file.originalname);
  const name = path.basename(file.originalname, ext);
  cb(null, `${name}-${Date.now()}${ext}`);
}

module.exports = {
  storage: multer.diskStorage({
    destination: uploadFolder,
    filename: generateFileName,
  }),
};

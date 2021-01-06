import express from 'express';
import multer from 'multer';

import uploadConfig from './configs/upload';

import BookingController from './controllers/BookingController';
import DashboardController from './controllers/DashboardController';
import SessionController from './controllers/SessionController';
import SpotController from './controllers/SpotController';

const routes = express.Router();
const upload = multer(uploadConfig);

routes.post('/sessions', SessionController.store);
routes.get('/spots', SpotController.index);
routes.post('/spots', upload.single('thumbnail'), SpotController.store);
routes.post('/spots/:spot_id/bookings', BookingController.store);
routes.get('/dashboard', DashboardController.show);

export default routes;

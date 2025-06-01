import express from 'express';
import {
  updateDoctor,
  deleteDoctor,
  getAllDoctor,
  getSingleDoctor,
  getDoctorByProfile,
  deleteDoctorByProfile
} from "../Controllers/doctorController.js";
import { authenticate, restrict } from '../auth/verifyToken.js';
import reviewRouter from './review.js';

const router = express.Router();
router.use("/:doctorId/reviews", reviewRouter);
router.get('/', getAllDoctor);
router.get('/:id', getSingleDoctor);
router.put('/:id', authenticate, restrict(['doctor']), updateDoctor);
router.delete('/:id', authenticate, restrict(['doctor']), deleteDoctor);
router.get('/profile/me', authenticate, restrict(['doctor']), getDoctorByProfile);
router.delete('/profile/me', authenticate, restrict(['doctor']), deleteDoctorByProfile);
export default router;

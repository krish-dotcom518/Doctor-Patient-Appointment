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

// Nested route for doctor reviews
router.use("/:doctorId/reviews", reviewRouter);



// Doctor-only routes
router.put('/:id', authenticate, restrict(['doctor']), updateDoctor);
router.delete('/:id', authenticate, restrict(['doctor']), deleteDoctor);

// 🔥 FIXED: This route must be accessible by logged-in doctors only
router.get('/profile/me', authenticate, restrict(['doctor']), getDoctorByProfile);

// Public routes
router.get('/', getAllDoctor);
router.get('/:id', getSingleDoctor);

// Self-delete (doctor deletes own profile)
router.delete('/profile/me', authenticate, restrict(['doctor']), deleteDoctorByProfile);

export default router;

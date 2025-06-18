import jwt from 'jsonwebtoken';
import Doctor from '../models/DoctorSchema.js';
import User from '../models/UserSchema.js';

// 🔐 Middleware to authenticate token
export const authenticate = async (req, res, next) => {
  const authHeader = req.headers.authorization;

  // Check if token exists and starts with Bearer
  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return res
      .status(401)
      .json({ success: false, message: 'No token, authorization denied' });
  }

  const token = authHeader.split(' ')[1];

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);

    // Store the decoded userId and role in request object
    req.userId = decoded.id;
    req.role = decoded.role;

    console.log('Authenticated user:', req.userId, 'Role:', req.role);
    next();
  } catch (err) {
    if (err.name === 'TokenExpiredError') {
      return res.status(401).json({ success: false, message: 'Token has expired' });
    }

    return res.status(401).json({ success: false, message: 'Invalid token' });
  }
};

// ⛔ Middleware to restrict access to specific roles
export const restrict = (roles) => {
  return async (req, res, next) => {
    const userId = req.userId;
    let user;

    try {
      const patient = await User.findById(userId);
      const doctor = await Doctor.findById(userId);

      if (patient) user = patient;
      if (doctor) user = doctor;

      // If user is not found or role is not authorized
      if (!user || !roles.includes(user.role)) {
        return res
          .status(403)
          .json({ success: false, message: 'Access denied' });
      }

      // Add user to request for downstream use if needed
      req.user = user;

      next();
    } catch (err) {
      return res.status(500).json({ success: false, message: 'Server error during role check' });
    }

  };
};

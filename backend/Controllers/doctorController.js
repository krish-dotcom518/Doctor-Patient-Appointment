import Booking from '../models/BookingSchema.js';
import Doctor from '../models/DoctorSchema.js'

export const updateDoctor = async(req, res)=>{
    const id = req.params.id

    try{
    const updatedDoctor = await Doctor.findByIdAndUpdate(id, {$set:req.body}, {new:true})

    res.status(200).json({success:true, message:'Successfully updated', data:updateDoctor})
}catch{
    res.status(500).json({success:false, message:'Failed to update'})
}
};

export const deleteDoctor = async(req, res)=>{
    const id = req.params.id

    try{
    await Doctor.findByIdAndDelete(id)

    res.status(200).json({success:true, message:'Successfully deleted',})
}catch{
    res.status(500).json({success:false, message:'Failed to delete'})
}
};

export const getSingleDoctor = async(req, res)=>{
    const id = req.params.id

    try{
    const doctor = await Doctor.findById(id).populate("reviews").select("-password")

    res.status(200).json({success:true, message:'Doctor Found', data: doctor,})
}catch{
    res.status(404).json({success:false, message:'No Doctor Found'})
}
};

export const getAllDoctor = async(req, res)=>{

    try{
        const { query } = req.query;
        const doctors = query
        ? await Doctor.find({
      isApproved: 'approved',
      $or: [
        { name: { $regex: query, $options: 'i' } },
        { specialization: { $regex: query, $options: 'i' } }
      ]
    }).select("-password")
  : await Doctor.find({}).select("-password");
    res.status(200).json({success:true, message:'Doctors Found', data: doctors,})
}catch{
    res.status(404).json({success:false, message:'Not Found'})
}
};
export const getDoctorByProfile = async(req, res)=>{
    const doctorId = req.userId
        try {
            const doctor = await Doctor.findById(doctorId)
    
            if(!doctor){
                return res.status(404).json({successfull:false, message:'Doctor not found'})
            }
            const {password, ...rest} = doctor._doc;
            const appointments=await Booking.find({doctor: doctorId})
            res.status(200).json({success:true, message:'Profile info is getting', data:{...rest, appointments},})
        } catch (error) {
            res.status(500).json({success:false, message:"Something went wrong, cannot get"})
        }
    };
export const deleteDoctorByProfile = async (req, res) => {
  const doctorId = req.userId; 

  try {
    const doctor = await Doctor.findByIdAndDelete(doctorId);

    if (!doctor) {
      return res.status(404).json({ success: false, message: 'Doctor not found' });
    }

    res.status(200).json({ success: true, message: 'Doctor account deleted successfully' });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Failed to delete doctor account' });
  }
};

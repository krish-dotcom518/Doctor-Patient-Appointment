import User from '../models/UserSchema.js'
import Booking from '../models/BookingSchema.js'
import Doctor from '../models/DoctorSchema.js'
export const updateUser = async(req, res)=>{
    const id = req.params.id

    try{
    const updatedUser = await User.findByIdAndUpdate(id, {$set:req.body}, {new:true})

    res.status(200).json({success:true, message:'Successfully updated', data:updatedUser})
}catch{
    res.status(500).json({success:false, message:'Failed to updated'})
}
};

export const deleteUser = async(req, res)=>{
    const id = req.params.id

    try{
    await User.findByIdAndDelete(id)

    res.status(200).json({success:true, message:'Successfully deleted',})
}catch{
    res.status(500).json({success:false, message:'Failed to delete'})
}
};

export const getSingleUser = async(req, res)=>{
    const id = req.params.id

    try{
    const user = await User.findById(id).select("-password")

    res.status(200).json({success:true, message:'User Found', data: user,})
}catch{
    res.status(404).json({success:false, message:'No User Found'})
}
};

export const getAllUser = async(req, res)=>{

    try{
    const users = await User.find({}).select("-password")

    res.status(200).json({success:true, message:'Users Found', data: users,})
}catch{
    res.status(404).json({success:false, message:'Not Found'})
}
};
export const getUserProfile = async(req, res)=>{
    const userId = req.userId
    try {
        const user = await User.findById(userId)

        if(!user){
            return res.status(404).json({successfull:false, message:'User not found'})
        }
        const {password, ...rest} = user._doc
        res.status(200).json({success:true, message:'Profile info is getting', data:{...rest}})
    } catch (error) {
        res.status(500).json({success:false, message:"Something went wrong, cannot get"})
    }
};

export const getMyAppointments = async(req,res)=>{
    try {
        const bookings = await Booking.find({user:req.userId})

        const doctorIds = bookings.map(el=>el.doctor.id)

        const doctors = await Doctor.find({_id:{$in:doctorIds}}).select('-password')

        res.status(200).json({success:true, message:'Appointments are getting', data:doctors})
    } catch (error) {
        res.status(500).json({success:false, message:"Something went wrong, cannot get"})
    }
}

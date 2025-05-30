import { useState } from 'react'
import { AiOutlineDelete } from 'react-icons/ai'

const Profile = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    bio: '',
    gender: '',
    specialization: '',
    ticketPrice: 0,
    qualifications: [{ startingDate: '', endingDate: '', degree: '', university: '' }],
    experiences: [{ startingDate: '', endingDate: '', position: '', hospital: '' }],
    timeSlots: [{ day: '', startingTime: '', endingTime: '' }],
    about: '',
    photo: null,
  })

  const handleInputChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleFileInputChange = e => {
    const file = e.target.files[0]
    if (file) {
      const reader = new FileReader()
      reader.onload = () => setFormData(prev => ({ ...prev, photo: reader.result }))
      reader.readAsDataURL(file)
    }
  }

  const addItem = (key, item) => {
    setFormData(prevFormData => ({
      ...prevFormData,
      [key]: [...prevFormData[key], item],
    }))
  }

  const handleReusableInputChangeFunc = (key, index, event) => {
    const { name, value } = event.target
    setFormData(prevFormData => {
      const updatedItems = [...prevFormData[key]]
      updatedItems[index] = {
        ...updatedItems[index],
        [name]: value,
      }
      return {
        ...prevFormData,
        [key]: updatedItems,
      }
    })
  }

  const deleteItem = (key, index) => {
    setFormData(prevFormData => ({
      ...prevFormData,
      [key]: prevFormData[key].filter((_, i) => i !== index),
    }))
  }

  const updateProfileHandler = async e => {
    e.preventDefault()
    // handle submit logic here
  }

  // Corrected add/delete/handle functions for qualifications and experiences:
  const addQualifications = e => {
    e.preventDefault()
    addItem('qualifications', { startingDate: '', endingDate: '', degree: '', university: '' })
  }

  const handleQualificationsChange = (e, index) => {
    handleReusableInputChangeFunc('qualifications', index, e)
  }

  const deleteQualifications = (e, index) => {
    e.preventDefault()
    deleteItem('qualifications', index)
  }

  const addExperiences = e => {
    e.preventDefault()
    addItem('experiences', { startingDate: '', endingDate: '', position: '', hospital: '' })
  }

  const handleExperiencesChange = (e, index) => {
    handleReusableInputChangeFunc('experiences', index, e)
  }

  const deleteExperiences = (e, index) => {
    e.preventDefault()
    deleteItem('experiences', index)
  }

  // Handle timeSlots change and delete similarly
  const handleTimeSlotsChange = (e, index) => {
    handleReusableInputChangeFunc('timeSlots', index, e)
  }

  const deleteTimeSlot = (e, index) => {
    e.preventDefault()
    deleteItem('timeSlots', index)
  }

  const addTimeSlot = e => {
    e.preventDefault()
    addItem('timeSlots', { day: '', startingTime: '', endingTime: '' })
  }

  return (
    <div>
      <h2 className="text-headingColor font-bold text-[24px] leading-9 mb-10 ">Profile Information</h2>
      <form>
        {/* Name */}
        <div className="mb-5">
          <p className="form__label">Name*</p>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            placeholder="Full Name"
            className="form__input"
          />
        </div>

        {/* Email */}
        <div className="mb-5">
          <p className="form__label">Email*</p>
          <input
            type="email"
            name="email"
            value={formData.email}
            readOnly
            aria-readonly
            disabled
            className="form__input"
          />
        </div>

        {/* Phone */}
        <div className="mb-5">
          <p className="form__label">Phone*</p>
          <input
            type="number"
            name="phone"
            value={formData.phone}
            onChange={handleInputChange}
            placeholder="Mobile Number"
            className="form__input"
          />
        </div>

        {/* Bio */}
        <div className="mb-5">
          <p className="form__label">Bio*</p>
          <input
            type="text"
            name="bio"
            value={formData.bio}
            onChange={handleInputChange}
            placeholder="Bio"
            className="form__input"
            maxLength={100}
          />
        </div>

        {/* Gender, Specialization, Ticket Price */}
        <div className="mb-5">
          <div className="grid grid-cols-3 gap-5 mb-[30px]">
            <div>
              <p className="form__label">Gender*</p>
              <select
                name="gender"
                value={formData.gender}
                onChange={handleInputChange}
                className="form__input py-3.5"
              >
                <option value="">Select</option>
                <option value="male">Male </option>
                <option value="female">Female </option>
                <option value="other">Other</option>
              </select>
            </div>
            <div>
              <p className="form__label">Specialization*</p>
              <select
                name="specialization"
                value={formData.specialization}
                onChange={handleInputChange}
                className="form__input py-3.5"
              >
                <option value="">Select</option>
                <option value="surgeon">Surgeon </option>
                <option value="neurologist">Neurologist </option>
                <option value="gynaecologist">Gynaecologist</option>
              </select>
            </div>
            <div>
              <p className="form__label">Doctor Fee*</p>
              <input
                type="number"
                placeholder="100"
                name="ticketPrice"
                value={formData.ticketPrice}
                className="form__input"
                onChange={handleInputChange}
              />
            </div>
          </div>
        </div>

        {/* Qualifications */}
        <div className="mb-5">
          <p className="form__label">Qualifications*</p>
          {formData.qualifications?.map((item, index) => (
            <div key={index}>
              <div className="grid grid-cols-2 gap-5">
                <div>
                  <p className="form__data">Starting Date</p>
                  <input
                    type="date"
                    name="startingDate"
                    value={item.startingDate}
                    className="form__input"
                    onChange={e => handleQualificationsChange(e, index)}
                  />
                </div>
                <div>
                  <p className="form__data">Ending Date</p>
                  <input
                    type="date"
                    name="endingDate"
                    value={item.endingDate}
                    className="form__input"
                    onChange={e => handleQualificationsChange(e, index)}
                  />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-5">
                <div>
                  <p className="form__data">Degree*</p>
                  <input
                    type="text"
                    name="degree"
                    value={item.degree}
                    className="form__input"
                    onChange={e => handleQualificationsChange(e, index)}
                  />
                </div>
                <div>
                  <p className="form__data">University*</p>
                  <input
                    type="text"
                    name="university"
                    value={item.university}
                    className="form__input"
                    onChange={e => handleQualificationsChange(e, index)}
                  />
                </div>
              </div>

              <button
                onClick={e => deleteQualifications(e, index)}
                className="bg-red-600 p-2 rounded-full text-white text-[18px] mt-2 mb-[30px] cursor-pointer"
              >
                <AiOutlineDelete />
              </button>
            </div>
          ))}
          <button
            onClick={addQualifications}
            className="bg-[#000] py-2 px-5 rounded text-white h-fit cursor-pointer"
          >
            Add Qualifications
          </button>
        </div>

        {/* Experiences */}
        <div className="mb-5">
          <p className="form__label">Experiences*</p>
          {formData.experiences?.map((item, index) => (
            <div key={index}>
              <div className="grid grid-cols-2 gap-5">
                <div>
                  <p className="form__data">Starting Date</p>
                  <input
                    type="date"
                    name="startingDate"
                    value={item.startingDate}
                    className="form__input"
                    onChange={e => handleExperiencesChange(e, index)}
                  />
                </div>
                <div>
                  <p className="form__data">Ending Date</p>
                  <input
                    type="date"
                    name="endingDate"
                    value={item.endingDate}
                    className="form__input"
                    onChange={e => handleExperiencesChange(e, index)}
                  />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-5">
                <div>
                  <p className="form__data">Position*</p>
                  <input
                    type="text"
                    name="position"
                    value={item.position}
                    className="form__input"
                    onChange={e => handleExperiencesChange(e, index)}
                  />
                </div>
                <div>
                  <p className="form__data">Hospital*</p>
                  <input
                    type="text"
                    name="hospital"
                    value={item.hospital}
                    className="form__input"
                    onChange={e => handleExperiencesChange(e, index)}
                  />
                </div>
              </div>

              <button
                onClick={e => deleteExperiences(e, index)}
                className="bg-red-600 p-2 rounded-full text-white text-[18px] mt-2 mb-[30px] cursor-pointer"
              >
                <AiOutlineDelete />
              </button>
            </div>
          ))}
          <button
            onClick={addExperiences}
            className="bg-[#000] py-2 px-5 rounded text-white h-fit cursor-pointer"
          >
            Add Experiences
          </button>
        </div>

        {/* Time Slots */}
        <div className="mb-5">
          <p className="form__label">Time Slots*</p>
          {formData.timeSlots?.map((item, index) => (
            <div key={index} className="grid grid-cols-4 gap-5 mb-3">
              <div>
                <p className="form__data">Day*</p>
                <select
                  name="day"
                  value={item.day}
                  onChange={e => handleTimeSlotsChange(e, index)}
                  className="form__input"
                >
                  <option value="">Select Day</option>
                  <option value="Monday">Monday</option>
                  <option value="Tuesday">Tuesday</option>
                  <option value="Wednesday">Wednesday</option>
                  <option value="Thursday">Thursday</option>
                  <option value="Friday">Friday</option>
                  <option value="Saturday">Saturday</option>
                  <option value="Sunday">Sunday</option>
                </select>
              </div>
              <div>
                <p className="form__data">Starting Time*</p>
                <input
                  type="time"
                  name="startingTime"
                  value={item.startingTime}
                  className="form__input"
                  onChange={e => handleTimeSlotsChange(e, index)}
                />
              </div>
              <div>
                <p className="form__data">Ending Time*</p>
                <input
                  type="time"
                  name="endingTime"
                  value={item.endingTime}
                  className="form__input"
                  onChange={e => handleTimeSlotsChange(e, index)}
                />
              </div>
              <div className="flex items-end">
                <button
                  onClick={e => deleteTimeSlot(e, index)}
                  className="bg-red-600 p-2 rounded-full text-white text-[18px] cursor-pointer"
                >
                  <AiOutlineDelete />
                </button>
              </div>
            </div>
          ))}
          <button
            onClick={addTimeSlot}
            className="bg-[#000] py-2 px-5 rounded text-white h-fit cursor-pointer"
          >
            Add Time Slot
          </button>
        </div>

        {/* About */}
        <div className="mb-5">
          <p className="form__label">About*</p>
          <textarea
            rows="4"
            name="about"
            value={formData.about}
            onChange={handleInputChange}
            className="form__input"
          />
        </div>

        {/* Photo */}
        <div className="mb-5">
          <p className="form__label">Upload Your Image</p>
          <input
            type="file"
            onChange={handleFileInputChange}
            className="form__input"
            accept="image/*"
          />
          {formData.photo && (
            <img
              src={formData.photo}
              alt="Profile preview"
              className="mt-3 w-32 h-32 object-cover rounded"
            />
          )}
        </div>

        <button
          className="bg-[#000] py-3 px-6 rounded text-white cursor-pointer"
          onClick={updateProfileHandler}
        >
          Update Profile
        </button>
      </form>
    </div>
  )
}

export default Profile

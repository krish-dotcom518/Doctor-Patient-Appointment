import React from 'react';
import DoctorCard from './../../components/Doctors/DoctorCard';
import { doctors } from './../../assets/data/doctors';
import Testimonial from './../../components/Testimonial/Testimonial';

const Doctors = () => {
  return (
    <>
      {/* Search Section */}
      <section className='bg-[#fff9ea]'>
        <div className='container text-center'>
          <h2 className='heading'>Find a Doctor</h2>
          <div className='max-w-[570px] mt-[30px] mx-auto bg-[#0066ff2c] rounded-md flex items-center justify-between'>
            <input 
              type='search' 
              className='py-4 pl-4 pr-2 bg-transparent w-full focus:outline-none cursor-pointer placeholder=text-textColor' 
              placeholder='Search Doctors' 
            />
            <button className='btn mt-0 rounded-[0px] rounded-r-md'>Search</button>
          </div>
        </div>
      </section>

      {/* Doctor Cards Section */}
      <section>
        <div className="container">
          <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5'>
            {doctors.map((doctor) => (
              <DoctorCard key={doctor.id} doctor={doctor} />
            ))}
          </div>
        </div>
      </section>

      {/* Patient Testimonials Section */}
      <section>
        <div className="container">
          <div className='xl:w-[470px] mx-auto text-center'>
            <h2 className='heading'>What Our Patients Say</h2>
            <ul className='text__para'>
              <li>1. "The doctors here truly care! They listened to my concerns and provided the best treatment. I feel healthier than ever!" – Mathew Thomas.</li>
              <li>2. "I was nervous about my surgery, but the medical team made me feel at ease. Their expertise and kindness made all the difference!" – Michael Tae.</li>
              <li>3. "From consultation to recovery, everything was smooth and professional. Highly recommend this hospital!" – Nick Jonas.</li>
            </ul>
          </div>

          {/* Swiper Testimonials */}
          <Testimonial />
        </div>
      </section>
    </>
  );
};

export default Doctors;

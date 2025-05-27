import React from 'react';
import { Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import patientAvatar from '/src/assets/images/patient-avatar.png';
import { HiStar } from 'react-icons/hi';

const testimonials = [
  {
    name: "Mathew Thomas",
    feedback: "The doctors here truly care! They listened to my concerns and provided the best treatment. I feel healthier than ever!",
  },
  {
    name: "Michael Tae",
    feedback: "Excellent service and compassionate staff. My recovery was smooth, thanks to their guidance!",
  },
  {
    name: "Nick jonas",
    feedback: "I was hesitant about my procedure, but the doctors reassured me at every step. Highly recommend!",
  },
];

const Testimonial = () => {
  return (
    <div className='mt-[30px] lg:mt-[55px]'>
      <Swiper
        modules={[Pagination]}
        spaceBetween={30}
        slidesPerView={1}
        pagination={{ clickable: true }}
        breakpoints={{
          640: { slidesPerView: 1, spaceBetween: 0 },
          768: { slidesPerView: 2, spaceBetween: 20 },
          1024: { slidesPerView: 2, spaceBetween: 30 }, // Showing 2 side-by-side
        }}
      >
        {testimonials.map((patient, index) => (
          <SwiperSlide key={index}>
            <div className='py-[30px] px-5 rounded-3 border border-gray-200 shadow-lg flex flex-col lg:flex-row gap-5'>
              <img src={patientAvatar} alt="Patient Avatar" className='w-16 h-16 rounded-full' />
              <div>
                <h4 className='text-[18px] leading-[30px] font-semibold text-headingColor'>{patient.name}</h4>
                <div className='flex gap-1 mt-1'>
                  {[...Array(5)].map((_, starIndex) => (
                    <HiStar key={starIndex} className='text-yellow-500 text-lg' />
                  ))}
                </div>
                <p className='mt-2 text-textColor text-sm'>{patient.feedback}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Testimonial;

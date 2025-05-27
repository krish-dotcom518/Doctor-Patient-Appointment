import React from 'react';
import heroImg01 from '/src/assets/images/hero-Img01.png'
import heroImg02 from '/src/assets/images/hero-Img02.png'
import heroImg03 from '/src/assets/images/hero-Img03.png'

const Home = () => {
  return (
    <>
      <section className='hero__section pt-[60px] 2xl:h-[800px]'>
        <div className='container'>
          <div className='flex flex-col lg:flex-row gap-[90px] items-center justify-between'>
            <div className='lg:w-[570px]'>
              <h1 className='text-[36px] leading-[46px] text-headingColor font-[800] md:text-[60px]'>
                We help patients live a healthy, long life
              </h1>
              <p className='text__para'>
                Welcome to MediCare, your one-stop solution for hassle-free doctor appointments! Whether you need a routine check-up or specialized medical care, our platform makes booking consultations easy and convenient. Browse expert doctors, check availability, and schedule your appointment—all in just a few clicks. Stay connected with healthcare professionals and manage your appointments effortlessly. Your health, your convenience, our priority! 🚀💙
              </p>
              <button className='btn'>Request an Appointment</button>
              <div className='mt-[30px] lg:mt-[40px] flex flex-col lg:flex-row lg:items-center gap-5 lg:gap-[30px]'>
                <div>
                  <h2 className='text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700] text-headingColor'>30+</h2>
                  <span className='w-[100px] h-2 bg-yellowColor rounded-full block mt-[-14px]'></span>
                  <p>Years of Experience</p>
                </div>
                <div>
                  <h2 className='text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700] text-headingColor'>15+</h2>
                  <span className='w-[100px] h-2 bg-purpleColor rounded-full block mt-[-14px]'></span>
                  <p>Clinic Location</p>
                </div>
                <div>
                  <h2 className='text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700] text-headingColor'>100%</h2>
                  <span className='w-[100px] h-2 bg-irisBlueColor rounded-full block mt-[-14px]'></span>
                  <p>Patients Satisfaction</p>
                </div>
              </div>
            </div>


            <div className='flex-gap-[30px] justify-end'>
              <img className='w-full' src={heroImg01}></img>
            </div>
            <div className='mt-[30px]'>
              <img src={heroImg02} className='w-full mb-[30px]'></img>
                <img src={heroImg03} className='w-full'></img>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Home;

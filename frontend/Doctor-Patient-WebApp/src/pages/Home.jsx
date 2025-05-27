import React from 'react';
import heroImg01 from '/src/assets/images/hero-Img01.png'
import heroImg02 from '/src/assets/images/hero-Img02.png'
import heroImg03 from '/src/assets/images/hero-Img03.png'
import icon01 from '/src/assets/images/icon01.png'
import icon02 from '/src/assets/images/icon02.png'
import icon03 from '/src/assets/images/icon03.png'
import { Link } from 'react-router-dom';
import { BsArrowRight } from 'react-icons/bs';
import About from '../components/About/About';
import ServiceList from '../components/Services/ServiceList';

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


            <div className='flex gap-[30px] justify-end'>
              <img className='w-full' src={heroImg01}></img>
            </div>
            <div className='mt-[30px]'>
              <img src={heroImg02} className='w-full mb-[30px]'></img>
                <img src={heroImg03} className='w-full'></img>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <div className='lg:w-[470px] mx-auto'>
            <h2 className='heading text-center'>
              Providing the best medical services!🏥 Your health, our priority!🩺✨
            </h2>
            <p className='text__para text-center'>🌍 World-class care for everyone!🏥 Our health system offers unmatched expert healthcare with compassion and excellence!🩺✨ Your well-being is our priority!🚀</p>
          </div>


          <div className='flex flex-wrap items-center justify-between flex-col md:flex-row gap-5 lg:gap-[30px] mt-[30px] lg:mt-[55px]'>
            

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-[30px] mt-[30px] lg:mt-[55px]'>
              <div className='py-[30px] px-5'>
                <div className='flex items-center justify-center'>
                  <img src={icon01}></img>
                </div>

                <div className='mt-[30px]'>
                  <h2 className='text-[26px] leading-9 text-headingColor font-[700] text-center'>Find a Doctor</h2>
                  <p className='text-[16px] leading-7 text-textColor font-[400] mt-4 text-center'>World class care for everyone!Our health system offers unmatched, expert health care! From lab to Clinic</p>
                  <Link to='/doctors' className='w-[44px] rounded-full border border-solid border-[#181A1E] mt-[30px] mx-auto flex items-center justify-center group hover:bg-primaryColor hover:border-none'>
                    <BsArrowRight className='group-hover:text-white w-6 h-5'/>
                  </Link>
                </div>
              </div>

              <div className='py-[30px] px-5'>
                <div className='flex items-center justify-center'>
                  <img src={icon02}></img>
                </div>

                <div className='mt-[30px]'>
                  <h2 className='text-[26px] leading-9 text-headingColor font-[700] text-center'>Find a Location</h2>
                  <p className='text-[16px] leading-7 text-textColor font-[400] mt-4 text-center'>World class care for everyone!Our health system offers unmatched, expert health care! From lab to Clinic</p>
                  <Link to='/doctors' className='w-[44px] rounded-full border border-solid border-[#181A1E] mt-[30px] mx-auto flex items-center justify-center group hover:bg-primaryColor hover:border-none'>
                    <BsArrowRight className='group-hover:text-white w-6 h-5'/>
                  </Link>
                </div>
              </div>

              <div className='py-[30px] px-5'>
                <div className='flex items-center justify-center'>
                  <img src={icon03}></img>
                </div>

                <div className='mt-[30px]'>
                  <h2 className='text-[26px] leading-9 text-headingColor font-[700] text-center'>Book Appointment</h2>
                  <p className='text-[16px] leading-7 text-textColor font-[400] mt-4 text-center'>World class care for everyone!Our health system offers unmatched, expert health care! From lab to Clinic</p>
                  <Link to='/doctors' className='w-[44px] rounded-full border border-solid border-[#181A1E] mt-[30px] mx-auto flex items-center justify-center group hover:bg-primaryColor hover:border-none'>
                    <BsArrowRight className='group-hover:text-white w-6 h-5'/>
                  </Link>
                </div>
              </div>


            </div>

          </div>
        </div>
      </section>

      <About />
      <section>
        <div className="container">
          <div className='xl:w-[470px] mx-auto'>
            <h2 className='heading text-center'>Our medical Services</h2>
            <p className='text__para'>🏥MediCare provides expert medical care with compassion and innovation!🩺✨From routine check-ups to specialized treatments, our world-class doctors ensure top-notch healthcare for everyone!🚀Your health, our priority!🌍💪</p>
          </div>
          <ServiceList />
        </div>
      </section>
    </>
  );
};
export default Home;

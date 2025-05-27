import React from 'react';
import heroImg01 from '/src/assets/images/hero-Img01.png'
import heroImg02 from '/src/assets/images/hero-Img02.png'
import heroImg03 from '/src/assets/images/hero-Img03.png'
import icon01 from '/src/assets/images/icon01.png'
import icon02 from '/src/assets/images/icon02.png'
import icon03 from '/src/assets/images/icon03.png'
import featureImg from '/src/assets/images/feature-Img.png'
import videoIcon from '/src/assets/images/video-icon.png'
import avatarIcon from '/src/assets/images/avatar-icon.png'
import { Link } from 'react-router-dom';
import { BsArrowRight } from 'react-icons/bs';
import About from '../components/About/About';
import ServiceList from '../components/Services/ServiceList';
import DoctorList from '../components/Doctors/DoctorList';
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
            <p className='text__para text-center'>🏥MediCare provides expert medical care with compassion and innovation!🩺✨From routine check-ups to specialized treatments, our world-class doctors ensure top-notch healthcare for everyone!🚀Your health, our priority!🌍💪</p>
          </div>
          <ServiceList />
        </div>
      </section>

      <section>
        <div className="container">
          <div className='flex items-center  justify-between flex-col lg:flex-row'>
            <div className='xl:w-[670px]'>
              <h2 className='heading'>Get Virtual Treatment <br /> anytime.</h2>
              <ul className='pl-4'>
                <li className='text__para'>
                  1.Schedule the appointment directly
                </li>
                <li className='text__para'>
                  2.Search for your physician here, and contact their office.
                </li>
                <li className='text__para'>
                  3.View our physicians who are accepting new patients, use the online scheduling tool to select an appointment time.
                </li>
              </ul>
              <Link to='/'><button className="btn">Learn more</button></Link>
            </div>
<div className='relative z-10 xl:w-[770px] flex justify-end mt-[50px] lg:mt-0'>
  <img src={featureImg} className='w-3/4' alt="Feature" />
  <div className='w-[150px] lg:w-[248px] bg-white absolute bottom-[50px] left-0 md:bottom-[100px] 
  md:left-5 z-20 p-2 pb-3 lg:pt-4 lg:px-4 lg:pb-[26px] rounded-[10px] flex flex-col items-center'>
  <div className='flex items-center gap-[6px] lg:gap-3'>
    <p className='text-[10px] leading-[10px] lg:text-[14px] lg:leading-5 text-headingColor font-[600]'>
      Tue, 24
    </p>
    <p className='text-[10px] leading-[10px] lg:text-[14px] lg:leading-5 text-textColor font-[400]'>
      10:00
    </p>
    <span className='w-6 h-6 lg:w-[40px] lg:h-[40px] flex items-center justify-center bg-yellowColor rounded-full py-1 px-[6px] lg:py-3 lg:px-[9px] ml-auto shadow-md'>
  <img src={videoIcon} alt="Video Icon" className='w-4 h-4 lg:w-[20px] lg:h-[20px]' />
</span>
  </div>
  <div className='w-[65px] lg:w-[96px] bg-[#CCF0F3] py-1 px-2 lg:py-[6px] lg:px-[10px] text-[8px] leading-[8px] 
  lg:text-[12px] lg:leading-4 text-irisBlueColor font-[500] mt-2 rounded-full'>
    Consultation
  </div>
  <div className='flex items-center gap=[6px] lg:gap-[10px] mt-2 lg:mt-[18px] '>
    <img src={avatarIcon} />
    <h4 className='text-[10px] leading-3 lg:text-[16px] lg:leading-[22px] font-[700] gtext-headingColor'>Manohar</h4>
  </div>
</div>
</div>
          </div>
        </div>
      </section>
      <section>
        <div className="container">
          <div className='xl:w-[470px] mx-auto'>
            <h2 className='heading text-center'>Our Great Doctors</h2>
            <p className='text__para text-center'>👨‍⚕️Medicare doctors are the heart of healthcare!🏥✨
              With skill, dedication, and compassion, they bring healing and hope to countless lives. 
              Their commitment to excellence shapes a healthier, brighter future.🩺💙</p>
          </div>
          <DoctorList />
        </div>
      </section>
    </>
  );
};
export default Home;

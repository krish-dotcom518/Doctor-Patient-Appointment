import React from 'react';
import aboutImg from '/src/assets/images/about.png';
import aboutCarding from '/src/assets/images/about-card.png';
import { Link } from 'react-router-dom'
const About = () => {
  return (
    <section>
      <div className='container'>
        <div className='flex justify-between gap-[50px] lg:gap-[130px] xl:gap-0 flex-col lg:flex-row'>

          {/* Main Image (Kept as Original) */}
          <div className="relative w-3/4 lg:w-1/2 xl:w-[770px] z-10 order-2 lg:order-1">
            <img src={aboutImg} alt="About Section"/>

            {/* Adjusted Overlay Card */}
            <div className='absolute z-[50] bottom-[10%] left-[10%] w-[180px] md:w-[280px]'>
              <img src={aboutCarding} alt="About Card" className='w-full' />
            </div>
          </div>
          <div className='w-full lg:w-1/2 xl:w-[670px] order-1 lg:order-2'>
            <h2 className='heading'>🌟Proud to be one of the nation's best!🏆✨Delivering excellence, innovation, and care every step of the way!🚀</h2>
            <p className='text__para'>India has recognized MediCare as a top healthcare provider!🏆✨With world-class doctors, cutting-edge facilities, and a commitment to excellence, it sets new standards in patient care!🏥🩺🚀</p>
            <Link to='/'>
            <button className='btn'>Learn More</button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

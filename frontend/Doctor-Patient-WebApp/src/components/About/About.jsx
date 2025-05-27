import React from 'react';
import aboutImg from '/src/assets/images/about.png';
import aboutCarding from '/src/assets/images/about-card.png';

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

        </div>
      </div>
    </section>
  );
};

export default About;

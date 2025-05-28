import React, { useState } from 'react'
import doctorImg from '/src/assets/images/doctor-img02.png'
import starIcon from '/src/assets/images/Star.png'
import DoctorAbout from './DoctorAbout'
import Feedback from './Feedback'
import SidePanel from './SidePanel'

const DoctorDetails = () => {
  const[tab,SetTab] = useState('about')
  return (
    <section>
      <div className='max-w-[1170px] px-5 mx-auto'>
        <div className='grid md:grid-cols-3 gap-[50px]'>
          <div className='md:col-span-2'>
            <div className='flex items-center gap-5'>
              <figure className='max-w-[200px] max-h-[200px]'>
                <img src={doctorImg} className='w-full'/>
              </figure>
              <div>
                <span className='bg-[#CCF0F3] text-irisBlueColor py-1 px-6 lg:py-2 lg:px-6 text-[12px] leading-4 
                lg:text-[16px] lg:leading-7 font-semibold rounded'>Surgeon</span>
                <h3 className='text-headinColor text-[22px] leading-9 mt-3 font-bold'>John Doe</h3>
                <div className='flex items-center gap-[6px]'>
                  <span className='flex items-center gap-[6px] text-[14px] leading-5 lg:text-[16px] lg:leading-7 
                  font-semibold text-headingColor'>
                    <img src={starIcon} /> 4.8
                  </span>
                  <span className='text-[14px] leading-5 lg:text-[16px] lg:leading-7 
                  font-semibold text-textColor'>(272)</span>
                </div>
                <p className='text__para text-[14px] leading-5 md:text-[15px] lg:max-w-[390px]'>A Medicare surgeon is a skilled professional committed to quality surgical care, balancing precision and 
                  compassion to restore health. They excel in life-saving procedures, ethical standards, and continuous learning, 
                  ensuring patients receive the best treatment.</p>
              </div>
            </div>

            <div className='mt-[50px] border-b border-solid border-[#0066ff34]'>
              <button onClick={()=>SetTab('about')} className={`${tab==='about' && 'border-b border-solid border-primaryColor '} py-2 px-5 text-[16px] leading-7 text-headingColor font-bold`}>About</button>
              <button onClick={()=>SetTab('feedback')} className={`${tab==='feedback' && 'border-b border-solid border-primaryColor '} py-2 px-5 text-[16px] leading-7 text-headingColor font-bold`}>Feedback</button>
            </div>
            <div className='mt-[50px]'>
               {tab==='about' && <DoctorAbout/>}
               {tab==='feedback' && <Feedback/>}
            </div>
          </div>
          <div>
            <SidePanel />
          </div>
        </div>
      </div>
    </section>
  )
}

export default DoctorDetails

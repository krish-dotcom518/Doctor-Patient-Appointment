import React from 'react'
import { formateDate } from '../../utils/formateDate'
const DoctorAbout = ({name, about, qualifications, experiences}) => {
  return (
    <div>
      <div>
        <h3 className='text-[20px] leading-[30px] text-headingColor font-semibold flex items-center gap-2'>About of 
            <span className='text-irisBlueColor font-bold text-[24px] leading-9'>Shakthi</span></h3>
        <p className='text__para'>
            A Medicare surgeon is a skilled professional committed to quality surgical care, balancing precision and 
                  compassion to restore health. They excel in life-saving procedures, ethical standards, and continuous learning, 
                  ensuring patients receive the best treatment.
        </p>
      </div> 
      <div className='mt-12'>
        <h3 className='text-[20px] leading-[30px] text-headingColor font-semibold'>Education</h3>
        <ul className='pt-4 md:p-5'>
            <li className='flex flex-col sm:flex-row sm:justify-between sm:items-end md:gap-5 mb-[30px] '>
                <div>
                    <span className='text-irisBlueColor text-[15px] leading-6 font-semibold'>{formateDate('06-04-2010')} - {formateDate('06-04-2013')}</span>
                    <p className='text-[16px] leading-6 font-medium text-textColor'>PhD in Surgeon</p>
                </div>
                <p className='text-[14px] leading-5 font-medium text-textColor'>New Apollo Hospital, India</p>

            </li>
            <li className='flex flex-col sm:flex-row sm:justify-between sm:items-end md:gap-5 mb-[30px] '>
                <div>
                    <span className='text-irisBlueColor text-[15px] leading-6 font-semibold'>{formateDate('07-21-2010')} - {formateDate('08-01-2013')}</span>
                    <p className='text-[16px] leading-6 font-medium text-textColor'>PhD in Surgeon</p>
                </div>
                <p className='text-[14px] leading-5 font-medium text-textColor'>New Apollo Hospital, India</p>

            </li>

        </ul>
      </div>

      <div className='mt-12'>
        <h3 className='text-[20px] leading-[30px] text-headingColor font-semibold'>Experience</h3>
        <ul className='pt-4 md:p-5'>
            <li className='flex flex-col sm:flex-row sm:justify-between sm:items-end md:gap-5 mb-[30px] '>
                <div>
                    <span className='text-irisBlueColor text-[15px] leading-6 font-semibold'>{formateDate('06-04-2015')} - {formateDate('06-04-2020')}</span>
                    <p className='text-[16px] leading-6 font-medium text-textColor'>Surgeon</p>
                </div>
                <p className='text-[14px] leading-5 font-medium text-textColor'>New Apollo Hospital, India</p>

            </li>

        </ul>
      </div>
    </div>
  )
}

export default DoctorAbout

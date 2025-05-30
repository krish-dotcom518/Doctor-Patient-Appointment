import React from 'react'
import useFetchData from '../../hooks/useFetchData'
import DoctorCard from '../../components/Doctors/DoctorCard'
import Loading from '../../components/Loader/Loading'
import Error from '../../components/Error/Error'
import { BASE_URL } from '../../config.js';

const MyBookings = () => {

  const {data:appointements, loading, error} = useFetchData(`${BASE_URL}/users/appointments/my-appointments`)
  return (
    <div>
      {loading && !error && < Loading/>}
      {error && !loading && <Error errMessage={error}/> }

      {!loading && !error && (<div className='grid grid-cols-1 lg:grid-cols-2 gap-5 '>
        {
          appointements.map(doctor=> <DoctorCard doctor={doctor} key={doctor._id}/>)
        }
        </div>)}
        {!loading && !error && appointements.length===0 && <h2 className='mt-5 text-center leading-7 
        text-[20px] font-semibold text-primaryColor'>You did not book any doctors yet </h2>}
    </div>
  )
}

export default MyBookings

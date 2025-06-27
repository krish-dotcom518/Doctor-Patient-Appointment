import React, { useState } from 'react';
import {useParams} from 'react-router-dom'
import { AiFillStar } from 'react-icons/ai';
import {BASE_URL} from '../../config.js'
import {toast} from 'react-toastify'
import HashLoader from 'react-spinners/HashLoader'
const FeedbackForm = () => {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(null);
  const [reviewText, setReviewText] = useState("");
  const [loading, setLoading] = useState(false)

  const {id} = useParams()
  const handleSubmitReview = async e=>{
    e.preventDefault()
    setLoading(true)
    try {
      if(!rating || !reviewText){
        setLoading(false)
        return toast.error('Rating and Review Fields are required')
      }
      const res = await fetch(`${BASE_URL}/doctors/${id}/reviews`,{
          method:'post',
          headers:{
            'Content-Type':'application/json',
            Authorization: `Bearer ${localStorage.getItem("token")}`
          },
          body: JSON.stringify({rating, reviewText})
        })
        const result = await res.json()
        if(!res.ok){
          throw new Error(result.message)
        }
        setLoading(false)
        toast.success(result.message)
    } catch (error) {
      setLoading(false)
      toast.error(error.message)
    }
  }
  return (
    <form action=''>
      <div>
        <h3 className='text-headingColor text-[16px] leading-6 font-semibold mb-4'>
          How would you rate the overall experience?*
        </h3>
        <div className="flex gap-2">
          {[...Array(5)].map((_, index) => {
            const starIndex = index + 1; 

            return (
              <button
                key={starIndex}
                type='button'
                className={`text-[22px] cursor-pointer bg-transparent border-none outline-none
                  ${starIndex <= (hover || rating) ? "text-yellow-500" : "text-gray-400"}`}
                onClick={() => setRating(starIndex)}
                onMouseEnter={() => setHover(starIndex)}
                onMouseLeave={() => setHover(null)}
                onDoubleClick={() => {
                  setHover(null);
                  setRating(0);
                }}
              >
                <AiFillStar />
              </button>
            );
          })}
        </div>
      </div>
      <div className='mt-[30px]'>
        <h3 className='text-headingColor text-[16px] leading-6 font-semibold mb-4'>
          Share your fedback Suggestions*
        </h3>
        <textarea className='border border-solid border-[#0066ff34] focus:outline outline-primaryColor w-full px-4 py-3 
        rounded-md' rows="5" placeholder='Write your suggestions/feedback' onChange={(e)=>setReviewText(e.target.value)}></textarea>
      </div>
      <button type='submit' className='btn' onClick={handleSubmitReview}>{loading? <HashLoader size={25} color='#fff'/>:'Submit Feedback'}</button>
    </form>
  );
};

export default FeedbackForm;

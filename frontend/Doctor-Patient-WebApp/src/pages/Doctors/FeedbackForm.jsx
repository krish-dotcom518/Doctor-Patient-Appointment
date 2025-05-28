import React, { useState } from 'react';
import { AiFillStar } from 'react-icons/ai';

const FeedbackForm = () => {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(null);
  const [reviewText, setReviewText] = useState("");

  const handleSubmitReview = async e=>{
    e.preventDefault()
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
      <button type='submit' className='btn' onClick={handleSubmitReview}>Submit Feedback</button>
    </form>
  );
};

export default FeedbackForm;

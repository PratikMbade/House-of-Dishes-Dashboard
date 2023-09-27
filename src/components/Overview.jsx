/* eslint-disable react/prop-types */
import React from 'react'


const Overview = ({form}) => {
    console.log(form.dishName)
  return (
    <div className='w-full h-96 top-5 font-bold bg-gray-900 text-xl text-white py-10 px-16'>
     
      <div>
       <p className='p-1'>Dish Name: <span className='!font-medium'>{form.name}</span></p> 
       <p className='p-1'>Veg or Non-veg: <span className='!font-medium'>{form.veg_non_veg}</span></p>
       <p className='p-1'>Popularity state: <span className='!font-medium'> {form.popularity_state}</span></p>
       <p className='p-1'>Cuisine: <span className='!font-medium'> {form.popularity_state}</span> </p>
       <p className='p-1'>Course Type: <span className='!font-medium'> {form.course_type}</span></p>
       <p className='p-1'>Cooking time:<span className='!font-medium'>{form.cooking_time}</span> </p>
       <p className='p-1'>Ingredients:<span className='!font-medium'>{form.ingredients}</span> </p>
       <p className='p-1'>Instructions :<span className='!font-medium'>{form.instructions}</span> </p>
      </div>

    
    
    </div>
  )
}

export default Overview

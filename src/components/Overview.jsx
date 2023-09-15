/* eslint-disable react/prop-types */
import React from 'react'


const Overview = ({form}) => {
    console.log(form.dishName)
  return (
    <div className='h-96 top-5 bg-gray-900 text-2xl text-white py-10 px-16'>
     
      <div>
       <p className='p-1'>Dish Name: {form.dishName}</p> 
       <p className='p-1'>Veg or Non-veg: {form.vegOrNonveg}</p>
       <p className='p-1'>Popularity state: {form.popularity}</p>
       <p className='p-1'>Cuisine: {form.cuisine}</p>
       <p className='p-1'>Course Type: {form.courseType}</p>
       <p className='p-1'>Cooking time: {form.cookTime}</p>
      </div>

    
    
    </div>
  )
}

export default Overview

import React from 'react'
import { Link } from 'react-router-dom'

const HeroSection = () => {
  return (
    <div className='container mx-auto px-12 w-full'>
      <div className='px-20 w-full flex flex-col items-center justify-center text-center'>
        <h4 className='text-5xl font-medium underline underline-offset-8'>Product Listing</h4>
        <div className='mt-20'>
          <p>No Product found</p>
          <Link to={"/create"} className='text-blue-500 hover:underline'>Create a Product</Link>
        </div>
        
      </div>
    </div>
  )
}

export default HeroSection
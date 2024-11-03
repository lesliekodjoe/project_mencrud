import React from 'react'
import HeroSection from '../sections/HeroSection'
import ProductCategorySection from '../sections/ProductCategorySection'
import FeaturedDealsSection from '../sections/FeaturedDealsSection'
import RecentPostSection from '../sections/RecentPostSection'

const LandingPage = () => {
  return (
    <div>
        <HeroSection/>
        <ProductCategorySection/>
        <FeaturedDealsSection/>
        <RecentPostSection/>
    </div>
  )
}

export default LandingPage
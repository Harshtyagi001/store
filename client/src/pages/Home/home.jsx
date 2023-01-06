import React from 'react'
import  Categories  from '../../components/Categories/categories'
import Contact from '../../components/Contact/contact'
import FeaturedProduct from '../../components/FeaturedProducts/featuredProduct'
import Slider from '../../components/Slider/slider'
import "./home.scss"

export const Home = () => {
  return (
    <div className='home'>
      <Slider/>
      <FeaturedProduct type="featured"/>
      <Categories/>
      <FeaturedProduct type="trending"/>
      <Contact/>
    </div>
  )
}

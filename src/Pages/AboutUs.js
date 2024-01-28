import React from 'react'

import { Hero } from '../Components/HeroBanner/Hero'

import Footer from '../Components/Footer/Footer'
import Vision from '../Components/About US/Vision'
import FaqComponent from '../Components/About US/FaqComponent'
import Testimonial from '../Components/About US/Testimonial'
import WhyUs from '../Components/About US/WhyUs'


export const AboutUs = () => {

  return (
   <div>
    <Hero heading={`Welcome to \nLandAssets Holdings`} desc={`Your Ultimate destination for prime\n land aquisitions`}  margin='4rem'/>
     <Vision/>
     <WhyUs/>
     <FaqComponent/>
     <Testimonial/>
    
    <Footer isTesti={true}/>

   </div>
  )
}

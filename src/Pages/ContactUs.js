import React from 'react'

import { Hero } from '../Components/HeroBanner/Hero'

import Footer from '../Components/Footer/Footer'
import ContactForm from '../Components/Forms/ContactForm'


export const ContactUs = () => {

  return (
   <div>
    <Hero heading={`Contact Us`} desc={`Get in touch with the LandAssets Team`} margin='6rem'/>
    <ContactForm/>
    <Footer />

   </div>
  )
}

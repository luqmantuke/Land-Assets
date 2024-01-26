import React from 'react'
import { Box } from '@chakra-ui/react'
import { Hero } from '../Components/HeroBanner/Hero'
import ServicesList from '../Components/Services/ServicesList'
import Footer from '../Components/Footer/Footer'


export const Services = () => {

  return (
   <div>
    <Hero heading={`Explore\nOur Services`} desc={`LandAssets ensures personalized service\nand unmatched expertise in securing your perfect plot`}  margin='4rem'/>
    <Box width='2px' height='7rem' backgroundColor='primary' position='relative' bottom='35px' margin='auto' />
    <ServicesList/>
    <Footer/>

   </div>
  )
}

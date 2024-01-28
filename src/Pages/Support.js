import React from 'react'
import { Box } from '@chakra-ui/react'
import { Hero } from '../Components/HeroBanner/Hero'

import Footer from '../Components/Footer/Footer'
import { SupportComp } from '../Components/Support/SupportComp'


export const Support = () => {

  return (
   <div className='page'>
    <Hero heading={`Can't find\nwhat you need`} desc={`An award winning customer care\nteam is here`} margin='4rem'/>
    <Box width='2px' height='7rem' backgroundColor='primary' position='relative' bottom='35px' margin='auto' />
   <SupportComp/>
    <Footer/>

   </div>
  )
}

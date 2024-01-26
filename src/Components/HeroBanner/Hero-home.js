import React from 'react'
import { Box } from '@chakra-ui/react';
import Navbar from './Navbar/Navbar.js';
import HeroContent from './HeroContent/HeroContent.js';




export const HeroHome = () => {
  return (
  
      
   <Box width='auto' bgImage= {`${process.env.PUBLIC_URL}/Assets/Images/Home-hero-bg.jpg`}  
      bgSize="cover"
      bgPosition="center"
      >
   <Navbar/>
   <HeroContent/>
   </Box>
      
        
  
  )
}

import React, { useState } from 'react';
import { Box, Image, VStack, Text, HStack } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import AboutUsData from './AboutUsData';


const Testimonial = () => {
  const [activeIndex, setActiveIndex] = useState(null);
 

 

  

  const handleImageClick = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (

    <VStack spacing={4} align="center" justify="center" mt='2rem' backgroundColor='#f0f4f2'>
        <Text fontSize={{base:'2rem',md:'3rem'}} top='71%' fontWeight='bold' pos={{base:'inherit',md:'absolute'}} color='about_heading'>Testimonials</Text>
        <Box  overflowY={{base:'auto',md:'inherit'}} height={{base:'500px',md:'auto'}}>
      {[0, 1].map((row) => (
        <HStack key={row} flexDirection={{base:'column',md:'row'}} spacing={4}  >
          {AboutUsData.testimonialsData.slice(row * 5, (row + 1) * 5).map((testimonial, index) => (
            <Box
              key={testimonial.id}
              p={4}
              display="flex"
              flexDirection="column"
              alignItems="center"
              gap="1rem"
              zIndex={1}
             mt={{base:'0rem',md:`${testimonial.gap}rem`}}
              width={{base:'100%',md:'100%'}} // 20% to have 5 columns
              cursor="pointer"
              transition="border 0.3s"
            >
                <Box border='7px solid gray '    transition="border 0.3s"  onClick={() => handleImageClick(index + row * 5)} borderRadius="full" borderColor={activeIndex === index + row * 5 ? 'about_heading' : 'gray.300'} >
                      
               
                <Image
                  src={`${process.env.PUBLIC_URL}/Assets/Images/${testimonial.image}`}
                  alt={`Testimonial ${testimonial.id}`}
                  width="70px"
                  borderRadius="full"
                  border="5px solid gray.300"
                  zIndex={999}
                 
                 
                />
                 </Box>
             <motion.div
                initial={{ height: 0, opacity: 0, position: 'absolute' }}
                animate={{
                  height: activeIndex === index + row * 5 ? 'auto' : 0,
                  opacity: activeIndex === index + row * 5 ? 1 : 0,
                  position:'relative'
                }}
                transition={{ duration: 0.3 }}
                mt={2}
               
                width="100%"
              >
                <Box >
                    <Text textAlign="center"  color='about_heading' fontWeight='bold' mb='4px'>{testimonial.name}</Text>
                <Text textAlign="center">{testimonial.description}</Text>
                </Box>
              
              </motion.div>
            </Box>
          ))}
        </HStack>
      ))}
      </Box>
    </VStack>
  );
};

export default Testimonial;

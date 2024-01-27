
import React from 'react';
import { Box, Flex, Heading, Image, Text, VStack } from '@chakra-ui/react';


const Vision = () => {
  return (
    <Flex margin={{base:'2rem 1.5rem',md:'3rem 4rem'}} flexDirection={{base:'column',md:'row'}} gap={{base:'1rem',md:'2rem'}}>
      {/* Left Side */}
      <Box p={8} py={{base:'1rem',md:'2rem'}} flex="1" alignItems='flex-start'>
        <Heading as="h2"fontSize={{base:'2rem',md:'3rem'}}  textAlign={{base:'center',md:'left'}} color='green.800'  mb={4}>
          About Us
        </Heading>
        <Text   fontSize={{base:'1.3rem',md:'1.7rem'}} color='gray.700' fontWeight='bold' textAlign={{base:'center',md:'left'}} mb={4}>
         LandAssets made my dream of owning the perfect property
        </Text>
        <Text textAlign={{base:'center',md:'left'}}>
        LandAssets made my dream of owning the perfect property a reality from understanding my preferences to guiding me through processes
        ,their team was dedicated and professional. LandAssets made my dream of owning the perfect property a reality from understanding my preferences to guiding me through
        </Text>
      </Box>

     
      <Box p={8} flex="1">
        <VStack align="start" spacing={4}>
       
          <Box>
          <Flex align="center" gap='1rem'>
            
             <Image src={`${process.env.PUBLIC_URL}/Assets/Images/vision@4x.png`}  width={{base:'40px',md:'50px'}}/>
              <Heading fontSize={{base:'2rem',md:'3rem'}}  color='green.800'>Mission</Heading>
            </Flex>
            <Text as="h3"  textAlign={{base:'center',md:'left'}} size="md" mb={2} mt='1rem' width={{base:'auto',md:'75%'}}>
            LandAssets made my dream of owning the perfect property a reality from understanding  my preferences to 
            </Text>
           
          </Box>

       
          <Box>
          <Flex align="center" gap='1rem'>
             
              <Image src={`${process.env.PUBLIC_URL}/Assets/Images/mission@4x.png`} width={{base:'40px',md:'50px'}}/>
              <Heading fontSize={{base:'2rem',md:'3rem'}} color='green.800'>Vision</Heading>
            </Flex>
            <Text as="h3"  textAlign={{base:'center',md:'left'}} size="md" mb={2}  width={{base:'auto',md:'75%'}} mt='1rem'>
            LandAssets made my dream of owning the perfect property a reality from understanding my preferences to 
            </Text>
           
          </Box>
        </VStack>
      </Box>
    </Flex>
  );
};


export default Vision;

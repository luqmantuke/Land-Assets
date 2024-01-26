import React from 'react';
import { Box, Heading, Text, Button, Image, Stack } from '@chakra-ui/react';

const HeroContent = () => {
  return (
    <Stack
      direction={{ base: 'column', md: 'row' }}
      align="center"
      justify="center"
      mx={{base:'1rem',md:'9rem'}}
      mt={{base:'3rem',md:'2rem'}}
   
      spacing={{ base: 4, md: 0 }}
    >
      {/* Left Side */}
      <Box p={4} textAlign={{base:'center',md:'left'}} flex="1" position={{base:'inherit',md:'relative'}}  bottom='40px' left='75px'>
        <Heading as="h1" color='white' fontSize={{ base: '2rem', md: '4.5rem' }} width={{base:'auto',md:'550px'}} mb={4}>
          Find it.Own it
        </Heading>
        <Text color='white' fontSize={{ base: 'md', md: '16px' }}  width={{base:'auto',md:'550px'}} mb={4}>
         Whether you need a residential or commercial plot of any size and guaranteed title deed,We've got you covered
        </Text>
        <Stack direction={{ base: 'column', md: 'row' }} spacing={2}>
          <ContentButton text=' View all estates' bg_color='none' />
          <ContentButton text='Start Selling today' bg_color='none' />
         
        
        </Stack>
      </Box>

      {/* Right Side */}
      <Box p={4} flex="1">
        <Image src= {`${process.env.PUBLIC_URL}/Assets/Images/lady.png`} alt="hero image" minW={{base:'240px',md:'550px'}} height={{base:'180px',md:'326px'}} position={{base:'inherit',md:'relative'}} right='10px'  />
      </Box>
    </Stack>
  );
};

const ContentButton = ({ text,bg_color }) => {


  return (
    <Button
      variant="outline"
      color='white'
      border='2px solid'
      backgroundColor={bg_color}
      borderRadius='5px'
      borderColor='btn_border'
      padding={5}
     
      fontSize={13}
      fontWeight='normal'
      _hover={{ bgColor: 'btn_border' }}
    >
      {text}
    </Button>
  );
};

export default HeroContent;

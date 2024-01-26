
import React from 'react';
import { Box, Heading, Button,Image } from '@chakra-ui/react';
import { Link } from 'react-router-dom';


const Agent = ({text,btn_txt,btn_bg,isEmpty}) => {
  return (

    <Box p={4} paddingBottom='4rem'  mx="auto" textAlign="center">
          <Link to="/customerDash">
        <Image
          src={`${process.env.PUBLIC_URL}/Assets/SVG/Left-Arrow.svg`}
          width="30px"
          ml='4rem'
          mb="1.5rem"
        />
      </Link>
      {isEmpty ?(

        <Box height='600px'>

        </Box>
      ):(
        <Box>
        <Heading fontSize={{base:'3rem',md:'5rem'}} mt={{base:'3rem',md:'5rem'}} fontWeight={{base:'700',md:'900'}} mb={4} color='footer_bg'>
        {text}
      </Heading>
      <Link to='/login'>
    
      <Button backgroundColor={btn_bg} fontSize={{base:'15px',md:'20px'}}  mt='2rem'  _hover={{backgroundColor:'green.800'}} color='white' py={{base:'25px',md:'30px'}} px={{base:'40px',md:'70px'}}>{btn_txt}</Button>
      </Link>
    </Box>
      )
    
    }
    </Box>
      
  );
};

export default Agent;

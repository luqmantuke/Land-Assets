import React from "react";
import { VStack, HStack, Text, Image } from "@chakra-ui/react";
import { Link } from "react-router-dom";


const IconBox = ({ image, text,linkTo }) => (
  <Link to={linkTo}>
  <VStack
    align="center"
    justifyContent="center"
    border="1px solid white"
    borderRadius="30px"
    p={{base:'20px',md:'30px'}}
    m={{base:'0rem',x_sm:'1rem',md:'0'}}
    mt={{base:'1.5rem',md:'0px'}}
    height={{base:'170px', x_sm:'190px',md:'240px'}}
    width={{base:'120px',x_sm:'130px',md:'170px'}}
    boxShadow="0px 4px 18px -7px rgba(0,0,0,0.66),0rem 6px 0px -1px #3db54a"
    transition="transform 0.3s ease-in-out"
    _hover={{ cursor: 'pointer', backgroundColor: 'footer_bg', color: 'white', transform: 'scale(1.1)' }}
  >
    <Image src={`${process.env.PUBLIC_URL}/Assets/Images/${image}`} alt="" width={{base:'40px',x_sm:'50',md:'60px'}} />
    <Text mt={2} >{text}</Text>
  </VStack>
  </Link>
);

export const DashboardContent = ({data}) => (
  <VStack spacing={10} align="center" py={{ base: '2rem', md: '4rem' }}>
    <HStack
      
      spacing={{ base: '1rem', md: '4rem' }}
      justifyContent='center'
       mx={{base:'0.2rem',x_sm:'2rem',md:'0'}}
      flexWrap="wrap"
    >
      {data.map((item, index) => (
        <IconBox key={index} image={item.icon} text={item.text} linkTo={item.linkTo} />
      ))}
    </HStack>
  </VStack>
);

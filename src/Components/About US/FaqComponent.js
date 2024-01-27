import React, { useState } from 'react';
import {
  Box,
  Flex,
  Heading,
  Text,
  VStack,
  Collapse,
  Button,
  IconButton,
  Image,

} from '@chakra-ui/react';
import {  MinusIcon,AddIcon } from '@chakra-ui/icons';
import AboutUsData from './AboutUsData';


const FaqComponent = () => {
  

  const [openFaq, setOpenFaq] = useState(null);

  const handleToggle = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <Flex margin={{base:'2rem 1.5rem',md:'5rem 4rem'}} flexDirection={{base:'column',md:'row'}}>
      {/* Left Side */}
      <Box p={8} flex="1">
        <Heading as="h2" fontSize={{base:'2.5rem',md:'3rem'}} textAlign={{base:'center',md:'left'}} fontWeight='bold' color='about_heading' mb={4}>
          FAQs
        </Heading>
        <Text  textAlign={{base:'center',md:'left'}} >Have Questions?.</Text>
        <Text  textAlign={{base:'center',md:'left'}} mb={4}>We have answers!</Text>
        <VStack align="start" spacing={4}>
          {AboutUsData.faqs.map((faq, index) => (
            <Box key={index} borderBottom="2px" borderColor="about_heading" w="100%">
              <Flex  align="center" p='0.4rem 0.5rem'>
              <IconButton
                  icon={ openFaq===index ? <MinusIcon color='about_heading'/> : <AddIcon  color='about_heading' />}
                  aria-label="Toggle FAQ"
                  onClick={() => handleToggle(index)}
                  _focus={{boxShadow:'none',background:'none'}}
                  _hover={{boxShadow:'none',background:'none'}}
                />
                <Text  textAlign='left' fontSize={{base:'10px',md:'17px'}}  fontWeight="400">{faq.question}</Text>
              
              </Flex>
              <Collapse in={openFaq === index} animateOpacity>
                <Box p={4}>
                  <Text textAlign='left' fontSize={{base:'12px',md:'16px'}}>{faq.answer}</Text>
                </Box>
              </Collapse>
            </Box>
          ))}
          <Button backgroundColor='about_heading' fontWeight='normal' color='white' borderRadius='0' px='20px' >
            VIEW ALL FAQs
          </Button>
        </VStack>
      </Box>

     
      <Box p={8} flex="1">
        <Image
          src={`${process.env.PUBLIC_URL}/Assets/Images/FAQs@4x.png`}
          alt="Placeholder Image"
          height={{base:'auto',md:'450px'}}
           
        />
      </Box>
    </Flex>
  );
};


export default FaqComponent;
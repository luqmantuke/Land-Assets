import React from 'react';
import {  HStack, VStack,  Text, Image,Box } from '@chakra-ui/react';


export const SupportComp = () => {

  const boxData = [
    { id: 1, icon: 'Whatsapp-support@4x.png', text1: 'Whatsapp',margin:'0px'  },
    { id: 2, icon: 'Mail-support@4x.png', text1: 'Email', margin:'20px' },
    { id: 3, icon: 'Faqs-support@4x.png', text1: 'FAQ',margin:'10px' },
  ];

  // Data for the rectangular box below
  const rectangularBoxData = { text: 'Giver our Coustomer care a call for any question that require\npersonalized attention or immediate assistance'};

  return (
    <VStack spacing={8}>
    <HStack spacing={16} justifyContent='center' flexDirection={{base:'column',md:'row'}} mx='2rem' width='100%'  >
      {boxData.map((box) => (
        <Box key={box.id} gap='1.5rem'  align="center"  display='flex' bg='white' p='20px' pt='40px' width='260px' height='230px' alignItems='center' border='1px solid white' flexDirection='column' borderRadius='20px' boxShadow='-0.1rem 8px 0px -1px #3db54a,0px 4px 18px -7px rgba(0,0,0,0.66)' transition='transform 0.3s ease-in-out' _hover={{cursor:'pointer', transform:'scale(1.1)'}}>
         <Image src={`${process.env.PUBLIC_URL}/Assets/Images/${box.icon}`} width='60px' />
          <Text textAlign='center' fontSize='1.5rem' mt={box.margin}>{box.text1}</Text>
          <Image src={`${process.env.PUBLIC_URL}/Assets/SVG/rightThin Arrow.svg`} width='30px'/>
        </Box>
      ))}
       </HStack>
       
      <HStack spacing={4} align="center" p='20px'  px={{base:'30px',md:'4rem'}} pt={{base:'30px',md:'20px'}} mx={{base:'2rem',md:'0'}} pb='0px' mt='2rem' mb='3rem' flexDirection={{base:'column',md:'row'}} boxShadow='0px 8px 0px -1px #3db54a' bg='#081d36' borderRadius='20px'  >
      <Image src={`${process.env.PUBLIC_URL}/Assets/Images/Call-Support@4x.png`} mb='20px' width='50px'/>
        <Text whiteSpace={{base:'normal',md:'pre-line'}} textAlign={{base:'center',md:'left'}} ml='20px' color='white' mb='20px'>{rectangularBoxData.text}</Text>
        <Image src={`${process.env.PUBLIC_URL}/Assets/Images/lady.png`} width={{base:'120px',md:'200px'}} height={{base:'auto',md:'120px'}}/>
      </HStack>
      </VStack>
  );
};



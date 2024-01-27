import React from 'react';
import { Flex, Input, Button, HStack, Image ,Box} from '@chakra-ui/react';


const ReferAgent = () => {
  return (
    <Flex align="center" flexDirection={{base:'column',md:'row'}}  gap='2rem'justifyContent='space-between'>
      {/* Left Element */}
      <HStack spacing={4} mr={4} flexDirection={{base:'column',md:'row'}} >
        <Input placeholder="Agent's Name" fontSize={{base:'10px',md:'13px'}} backgroundColor='gray.100' />
        <Box display='flex' gap='1rem' alignItems='center' width='100%'>

       
        <Input placeholder="Agent's Email Address" fontSize={{base:'10px',md:'13px'}} width='100%' minW={{base:'auto',md:'200px'}}   backgroundColor='gray.100'  />
        <Image src={`${process.env.PUBLIC_URL}/Assets/Images/Mail-support@4x.png`} alt="Icon" width={{base:'20px',md:'40px'}} height={{base:'20px',md:'auto'}} />
        </Box>
      </HStack>

      {/* Right Element */}
      <HStack spacing={4} flexDirection={{base:'column',md:'row'}} >
      
        <CustomButton img={'Whatsapp-support@4x.png'} text='Invite on Whatsapp'/>
        <CustomButton img={'copy-link@4x.png'} text='Copy Invitation'/>
       
      </HStack>
    </Flex>
  );
};

const CustomButton=({img,text})=>{
return(
    <Button  backgroundColor='gray.100' fontSize={{base:'10px',md:'inherit'}} fontWeight='normal' color='GrayText' display='flex' gap='1rem'>
    <Image src={`${process.env.PUBLIC_URL}/Assets/Images/${img}`} alt="Icon" width={{base:'15px',md:'20px'}} />
     {text}
    </Button>
)
}
export default ReferAgent;

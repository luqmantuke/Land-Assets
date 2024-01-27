import React from 'react';
import { Box, Image, Heading, Text, VStack, HStack, List, ListItem } from '@chakra-ui/react';

const Footer = ({isTesti}) => {
 
  const column1Data = [
    { id: 1, description: 'Whether you need a residential or commercial plot of any size and guaranteed title deed,We have got you covered' },
    {
      id: 2,
      subImages: [ 
        "facebook@4x.png",
    
      "instagram@4x.png",
      "twitter@4x.png",
      "whatsapp@4x.png",
      "youtube@4x.png",
      
      "linkedin@4x.png",
      ],
    },

  ];

  const column2Data = [
    { id: 1, heading: 'Company', options: ['About Us', 'Our Services', 'Our Estates', 'Agents'] },
   
  ];

  const column3Data = [
    { id: 1, heading: 'Support', options: ['Contacts', 'Live chats', 'FAQ', 'Tutorial'] },
  ];

  const column4Data = [
    { id: 1, heading: 'Legal', options: ['Terms of Use', 'Privacy Policy', 'Cookies Settings',''] },
  ];

  return (
    <Box as="footer" p={{base:'20px',md:'4rem'}} bg="footer_bg" color="white" mt={isTesti?'0':'3rem'} >
      <HStack  justify={{base:'center',md:'flex-start'}} gap={{base:'2rem',md:'6rem'}} margin={{base:'0 20px',x_sm:'0 40px',md:'0 50px'}} flexDirection={{base:'column',md:'row'}}>
      <VStack align={{base:'center',md:'flex-start'}} spacing={5} width={{base:'auto',md:'28%'}} textAlign={{base:'center',md:'left'}}>
          {/* Column 1 */}
          <Box>
            <Image src={`${process.env.PUBLIC_URL}/Assets/SVG/LandAssets Logo Green and white.svg`} alt="Main Image" margin={{base:'auto',md:'0px'}}  width='220px' height='80px' />
            <Text mb='1rem' fontSize='13px' lineHeight='25px'>{column1Data[0].description}</Text>
          </Box>

          <HStack justifyContent='space-between' spacing={3}>
            
            {column1Data[1].subImages.map((subImage, index) => (
              <Image key={index} src={`${process.env.PUBLIC_URL}/Assets/Images/${subImage}`} alt={`Sub Image ${index + 1}`} width={{base:'25px',x_sm:'32px',md:'32px'}} height={{base:'32px',md:'35px'}} _hover={{cursor:'pointer' }} />
            ))}
          </HStack>
        </VStack>


      <CustomColumn columnData={column2Data}/>
      <CustomColumn columnData={column3Data}/>
      <CustomColumn columnData={column4Data}/>

      </HStack>
    </Box>
  );
};

const CustomColumn=({columnData})=>{
    return(
        
        <VStack align={{base:'center',md:'flex-start'}}>
          {columnData.map((item) => (
            <Box key={item.id} mb={4}>
              <Heading fontSize='1.5rem' mb='1rem'  textAlign={{base:'center',md:'left'}} >{item.heading}</Heading>
              <List>
                {item.options.map((option) => (
                  <ListItem textAlign={{base:'center',md:'left'}} _hover={{cursor:'pointer' ,color:'white'}} color='#546e87' key={option}>{option}</ListItem>
                ))}
              </List>
            </Box>
          ))}
        </VStack>
    )
}
export default Footer;

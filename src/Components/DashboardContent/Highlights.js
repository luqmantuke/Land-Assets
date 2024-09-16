import React, { useState } from "react";
import {
  Box,
  Heading,
  Button,
  FormControl,
  FormLabel,
  Input,
  Image,
  Divider,
  Flex,
  Text,
  HStack,
  VStack,
  Grid,
  GridItem,
} from "@chakra-ui/react";

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Link } from "react-router-dom";

const CustomDatePicker = ({ selectedDate, handleChange }) => {
  
  return (
    <FormControl  background="gray.200" borderRadius='5px' >
      <FormLabel  fontSize={{base:'9px',md:'11px'}} color='gray.600'  position="absolute" left="11px" top='27%' transform="translateY(-50%)">Select Date Range</FormLabel>
      <DatePicker
      
        selected={selectedDate}
        placeholderText="dd Month yyyy"
        onChange={handleChange}
        showPopperArrow={true}
        dateFormat="d MMMM yyyy"
        dayClassName={(date) =>
          date.getTime() === selectedDate?.getTime()
            ? "selected-day"
            : "normal-day"
        }
        customInput={
          <Input
            border="none"
            borderRadius="3px"
           
            color='black'
             fontSize={{base:'11px',md:'15px'}}
            height={{ base: "19px", md: "24px" }}
            width="100%"
            padding="7px"
            pt='30px'
            pb='15px'
            borderBlock="1px solid gray.200"
            _hover={{
              borderColor: "none",
            }}
            _focus={{
              boxShadow: "none",
              borderColor: "gray.200",
            }}
          />
        }
      />
    </FormControl>
  );
};

const Highlights = ({ userStats }) => {
  console.log("userStats", userStats)
  const boxData = [
      { id: 1, heading: "Sales", desc: "Previous 30 Days", number: userStats?.total_sales || '0' },
      { id: 2, heading: "Leads", desc: "Previous 30 Days", number: userStats?.total_leads || '0' },
      { id: 3, heading: "Clicks", desc: "Previous 30 Days", number: userStats?.total_clicks || '0' },
      { id: 3, heading: "Commission Rate", desc: "", number: `${((parseFloat(userStats?.commission_rate || 0) * 100).toFixed(2).replace(/\.00$/, ''))}%` },
  ];
  const earningData = [
      { id: 1, heading: "Total Earning from Sales", amount: `TSh.${userStats?.total_sales_commission?.toLocaleString() || '0'}` },
      { id: 2, heading: "Total Earning from Leads", amount: `TSh.${userStats?.total_leads_earnings || '0'}`},
      { id: 3, heading: "Total Payout", amount: `TSh.${userStats?.total_payout?.toLocaleString() || '0'}`},
      { id: 3, heading: "Total Sales Commission",  amount: `TSh.${userStats?.total_sales_commission || '0'}` },
  ];
  const additionalData = [
    { id: 4, heading: "Referral Code", value: userStats?.referral_code || 'N/A' },
      { id: 1, heading: "Cost per Lead", value: `TSh ${userStats?.cost_per_lead || '0'}` },
      { id: 2, heading: "Cost per Click", value: `TSh ${userStats?.cost_per_click || '0'}` },
      { id: 3, heading: "Discount Percentage", value: `${((parseFloat(userStats?.discount_percentage || 0) * 100).toFixed(2).replace(/\.00$/, ''))}%` },
    
  ];
  const [selectedDate, setSelectedDate] = useState(null);

  const handleDateChange = (date) => {
      setSelectedDate(date);
  };

  return (
      <Box border="1px solid gray.800" boxShadow='0px 4px 18px -7px rgba(0,0,0,0.66)' width='90%' mx='auto' mt='2rem'  p="30px 40px" pb='60px' borderRadius="15px" background='white' >
          {/* <HStack justifyContent="space-between" flexDirection={{base:'column',md:'row'}} gap='1.5rem' alignItems='center'>
              <Heading mb={4} fontSize='1.3rem'>Highlights</Heading>
              <HStack flexDirection={{base:'column',x_sm:'row'}}>
                  <Link to='/agentDash/notifications' >
                      <Button backgroundColor="gray.200" padding={{base:'23px 18px',md:'23px 20px'}} fontSize={{base:'8px',md:'10px'}}>
                          <Image
                              src={`${process.env.PUBLIC_URL}/Assets/Images/client-notification@4x.png`}
                              width={{base:'16px',md:'20px'}}
                              mr={{base:'4px',md:'9px'}}
                          />
                          View all Notifications
                      </Button>
                  </Link>
                  <Box width={{base:'90%',x_sm:'45%'}}>
                      <CustomDatePicker
                          selectedDate={selectedDate}
                          handleChange={handleDateChange}
                      />
                  </Box>
              </HStack>
          </HStack>

          <Divider my={6} height="0.05rem" opacity='0.3' bg="black" /> */}
          <Flex justifyContent="space-between" flexDirection={{base:'column',md:'row'}} gap='2rem'>
              {additionalData.map((item) => (
                  <Box key={item.id} p={4} px='2rem' width={{base:'auto',md:'320px'}} height={{base:'100px',md:'120px'}} borderRadius="20px" boxShadow="0px 4px 18px -7px rgba(0,0,0,0.66),0rem 10px 0px -1px #3db54a">
                      <VStack alignItems='flex-start' mt={{base:'0.8rem',md:'1rem'}} align='center' spacing='0'>
                          <Text fontSize={{base:'13px',md:'17px'}} textAlign='left'>{item.heading}</Text>
                          <Heading fontSize={{base:'1rem',md:'1.5rem'}} textAlign='left' fontWeight='600'>{item.value}</Heading>
                      </VStack>
                  </Box>
              ))}
          </Flex>
          <Divider my={9} height="0.05rem" opacity='0.3' bg="black"  />

          <Flex justifyContent="space-between" flexDirection={{base:'column',md:'row'}} gap='2rem'>
              {boxData.map((box) => (
                  <Box key={box.id}  p={4} px='2rem' width={{base:'auto',md:'320px'}}   height={{base:'100px',md:'120px'}} borderRadius="20px"  boxShadow="0px 4px 18px -7px rgba(0,0,0,0.66),0rem 10px 0px -1px #3db54a">
                      <HStack spacing={{base:'2rem',md:'3rem'}} >
                          <VStack alignItems='flex-start' spacing='0'>
                              <Heading fontSize={{base:'1rem',x_sm:'1.5rem'}} fontWeight='600'>{box.heading}</Heading>
                              <Text fontSize={{base:'10px',x_sm:'13px'}} textAlign='left'  color='gray.500'>{box.desc}</Text>
                          </VStack>
                          <Box fontWeight="bold" fontSize={{base:'1.7rem',x_sm:'2.5rem',md:'3rem'}} mt={2}>
                              {box.number}
                          </Box>
                      </HStack>
                  </Box>
              ))}
          </Flex>

          <Divider my={9} height="0.05rem" opacity='0.3' bg="black"  />

          <Flex justifyContent="space-between" flexDirection={{base:'column',md:'row'}} gap='2rem'>
              {earningData.map((box) => (
                  <Box  key={box.id} p={4} px='2rem' width={{base:'auto',md:'320px'}}  height={{base:'100px',md:'120px'}} borderRadius="20px"  boxShadow="0px 4px 18px -7px rgba(0,0,0,0.66),0rem 10px 0px -1px #3db54a">
                      <VStack alignItems='flex-start' mt={{base:'0.8rem',md:'1rem'}} align='center' spacing='0'>
                          <Text fontSize={{base:'13px',md:'17px'}}  textAlign='left'    >{box.heading}</Text>
                          <Heading fontSize={{base:'1rem',md:'1.5rem'}}  textAlign='left'   fontWeight='600'>{box.amount}</Heading>
                      </VStack>
                  </Box>
              ))}
          </Flex>

          <Divider my={9} height="0.05rem" opacity='0.3' bg="black"  />

         
      </Box>
  );
};

export default Highlights;
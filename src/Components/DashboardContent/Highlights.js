import React, { useState } from "react";
import {
  Box,
  Heading,
  Button,
  Input,
  Image,
  Divider,
  Flex,
  Text,
  HStack,
} from "@chakra-ui/react";

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
const CustomDatePicker = ({ selectedDate, handleChange }) => {
  return (
    <DatePicker
      selected={selectedDate}
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
          borderRadius="0px"
          height={{ base: "19px", md: "24px" }}
          width="100%"
          padding="20px"
          background='gray.300'
          borderBlock='1px solid gray.200'
          _hover={{
            borderColor: "none",
          }}
          _focus={{
            boxShadow: "none",
            borderColor: "gray.300",
          }}
        />
      }
    />
  );
};
const Highlights = () => {

  const [selectedDate, setSelectedDate] = useState(null);

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };


  return (
    <Box>
      <HStack justifyContent='space-between'> 
        <Heading mb={4}>First Element</Heading>
        <HStack>

      
        <Button backgroundColor='gray.300' fontSize='12px'>
            <Image src={`${process.env.PUBLIC_URL}/Assets/Images/client-notification@4x.png`} width='20px' />
            View All Notifications
        </Button>
        {/* First Element */}
        <Box width="110px">
          <CustomDatePicker
            selectedDate={selectedDate}
            handleChange={handleDateChange}
          />
        </Box>
        </HStack>
      </HStack>

      <Divider my={4} />

     
      <Flex justifyContent="space-between">
        {[1, 2, 3].map((index) => (
          <Box key={index} p={4} border="1px" borderRadius="md">
            <Heading mb={2}>Box {index}</Heading>
            <Text>Subtext</Text>
            <Box fontWeight="bold" mt={2}>
              {index}
            </Box>
          </Box>
        ))}
      </Flex>

    
      <Divider my={4} />


      <Flex justifyContent="space-between">
        {[1, 2, 3].map((index) => (
          <Box key={index} p={4} border="1px" borderRadius="md">
            <Heading mb={2}>Box {index}</Heading>
            <Text>Subtext</Text>
            <Box fontWeight="bold" mt={2}>
              {index}
            </Box>
          </Box>
        ))}
      </Flex>
    </Box>
  );
};

export default Highlights;

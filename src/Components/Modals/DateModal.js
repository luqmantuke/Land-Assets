import React, { useState } from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  Divider,
  ModalBody,
  FormControl,
  FormLabel,
  Input,
  HStack,
  VStack,
  Image,
  Button,
  Box,
  Text,
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
          padding="0px"
          borderBottom="1px solid #37ab46"
          _hover={{
            borderColor: "none",
          }}
          _focus={{
            boxShadow: "none",
            borderColor: "#37ab46",
          }}
        />
      }
    />
  );
};

const DateModal = ({ isOpen, onClose }) => {
  const [estateName, setEstateName] = useState("");
  const [selectedDate, setSelectedDate] = useState(null);

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const handleSubmit = () => {
    // Handle form submission
    console.log("Estate Name:", estateName);
    console.log("Selected Date:", selectedDate);
    onClose(); // Close the modal after submission
    setEstateName("");
    setSelectedDate(null);
  };
  const ClearInput = () => {
    // Close the modal after submission
    setEstateName("");
    setSelectedDate(null);
    onClose();
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} onCloseComplete={ClearInput}>
      <ModalOverlay />
      <ModalContent
        minH={{ base: "90px", md: "120px" }}
        minWidth={{ base: "200px", md: "800px" }}
        padding={{ base: "20px 10px", md: "20px 30px" }}
        pt={{ base: "15px", md: "20px" }}
        mx={{ base: "1rem", md: "0" }}
      >
        <ModalHeader
          margin="0px"
          padding="0px"
          fontSize="1rem"
          fontWeight="bold"
          mb="1rem"
        >
          Book Site Visit
        </ModalHeader>
        <ModalCloseButton />

        <ModalBody display="flex" flexDir="column" gap="1rem" padding="0px">

          <Divider
            orientation="horizontal"
            size="large"
            opacity={1}
            borderColor="GrayText"
          />
          <VStack spacing={6}>
     {/* Estate name and date inputs */}
            <HStack justifyContent="space-between" width="100%">
              <FormControl>
                <CustomLabel text="Estate Name" />
                <CustomInput />
              </FormControl>
              <FormControl>
                <CustomLabel text="Select Date" />
                <CustomDatePicker
                  selectedDate={selectedDate}
                  handleChange={handleDateChange}
                />
              </FormControl>
            </HStack>
         {/* Privacy text and button */}
            <HStack justifyContent="space-between" width="100%">
              <Box display="flex">
                <Image
                  src={`${process.env.PUBLIC_URL}/Assets/Images/check@4x.png`}
                  width={{ base: "15px", md: "20px" }}
                  height={{ base: "15px", md: "20px" }}
                />
                <VStack spacing={0}>
                  <Text
                    color="GrayText"
                    padding="0px"
                    margin={0}
                    fontSize={{ base: "8px", md: "10px" }}
                  >
                    I Agree to LandAssets
                  </Text>
                  <Text
                    color="btn_border"
                    padding="0px"
                    margin={0}
                    fontSize={{ base: "8px", md: "10px" }}
                  >
                    Privacy Policy & Terms
                  </Text>
                </VStack>
              </Box>
              <Button
                backgroundColor="btn_bg"
                border="2px solid"
                fontSize={{ base: "10px", md: "12px" }}
                fontWeight="normal"
                px={{ base: "15px", md: "20px" }}
                borderColor="btn_border"
                _hover={{
                  backgroundColor: "#091c10",
                }}
                color="white"
                onClick={handleSubmit}
              >
                Book Now
              </Button>
            </HStack>
          </VStack>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};


const CustomInput = () => {
  return (
    <Input
      height={{ base: "19px", md: "24px" }}
      border="none"
      padding="0px"
      borderRadius="0px"
      boxShadow="transparent"
      borderBottom="1px solid #37ab46"
      width="90%"
      _hover={{
        borderColor: "none",
        boxShadow: "transparent",
      }}
      _focus={{
        boxShadow: "none",
        borderColor: "#37ab46",
      }}
    />
  );
};

const CustomLabel = ({ text }) => {
  return (
    <FormLabel
      margin="0px"
      color="btn_border"
      fontWeight="normal"
      fontSize={{ base: "12px", md: "15px" }}
      padding="0px"
    >
      {text}
    </FormLabel>
  );
};

export default DateModal;

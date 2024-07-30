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
  useToast,
} from "@chakra-ui/react";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import { SERVER_URL } from "../../utilities/constant/api/api_constant";

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

const DateModal = ({ isOpen, onClose, plot, userID }) => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [loading, setLoading] = useState(false);
  const toast = useToast();

  const handleDateChange = (date) => {
    
    setSelectedDate(date);
  };

  const handleSubmit = async () => {
    if (!selectedDate) {
      toast({
        title: "Error",
        description: "Please select a date",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
      return;
    }

    setLoading(true);
    const formattedDate = selectedDate.toISOString().split("T")[0];

    var formdata = new FormData();
    formdata.append("user_id", userID);
    formdata.append("plot_id", plot?.id);
    formdata.append("booked_date", formattedDate);

    var requestOptions = {
      method: 'POST',
      body: formdata,
      redirect: 'follow'
    };

    try {
      const response = await fetch(`${SERVER_URL}/api/book_visit_plot/`, requestOptions);
      const result = await response.json();
      if (result.status_code === 200) {
        toast({
          title: result.status,
          description: result.message,
          status: 'success',
          duration: 4000,
          isClosable: true,
        });
        onClose();
      } else {
        throw new Error(result.message || "Failed to book visit");
      }
    } catch (error) {
      toast({
        title: "Error",
        description: error.message,
        status: 'error',
        duration: 4000,
        isClosable: true,
      });
    } finally {
      setLoading(false);
    }
  };


  return (
    <Modal isOpen={isOpen} onClose={onClose} >
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

            <HStack justifyContent="space-between" width="100%">
           
              <FormControl>
                <CustomLabel  text="Select Date" />
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
                isLoading={loading}
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
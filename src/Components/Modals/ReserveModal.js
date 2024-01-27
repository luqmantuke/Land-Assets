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
  Checkbox,
} from "@chakra-ui/react";
import { reserveIcons } from "../EstateSection/estateData";

const ReserveModal = ({ isOpen, onClose }) => {
  const [check, setCheck] = useState(false);

  const handleCheck = () => {
    setCheck(!check);
  };

  const handleSubmit = () => {
    // Handle form submission

    onClose(); // Close the modal after submission
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
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
          RESERVE THIS PLOT
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
            <Box display="flex" width="100%">
              <FormControl>
                <CustomLabel text="Estate Name" />
                <CustomInput width="95%" />
              </FormControl>
              <FormControl ml={{ base: "1rem", md: "2rem" }}>
                <CustomLabel text="Plot Number" />
                <CustomInput width="80%" />
              </FormControl>
              <FormControl>
                <CustomLabel text="Reservation Fee" />
                <CustomInput width="95%" />
              </FormControl>
            </Box>
            <Box display="flex" width="100%">
              <FormControl width={{ base: "50%", md: "33%" }}>
                <CustomLabel text="Enter Phone Number" />
                <CustomInput width="90%" />
              </FormControl>

              <Box
                display="flex"
                gap="0.5rem"
                ml="1rem"
                flexWrap="wrap"
                justifyContent="space-around"
              >
                {reserveIcons.map((icon, index) => (
                  <Image
                    key={index}
                    _hover={{
                      cursor: "pointer",
                    }}
                    src={`${process.env.PUBLIC_URL}/Assets/Images/${icon}`}
                    alt={`Image ${index + 1}`}
                    width={{ base: "60px", md: "72px" }}
                    height={{ base: "30px", md: "40px" }}
                  />
                ))}
              </Box>
            </Box>

            <HStack
              justifyContent="space-between"
              width="100%"
              alignItems="start"
            >
              <VStack spacing={8}>
                <Box display="flex" flexDirection="column">
                  <Text fontSize={{ base: "10px", md: "15px" }} color="primary">
                    Note:
                  </Text>

                  <Text
                    fontSize={{ base: "8px", md: "12px" }}
                    color="gray"
                    width="85%"
                  >
                    This Reservation fee 10,0000 for plot No. 450 is valid for 7
                    days if the plot is not purchased within 7 days of
                    reservation,the reservation will be cancelled wihtout a
                    Refund
                  </Text>
                </Box>

                <Box display="flex" width="100%" gap="0.2rem">
                  <Checkbox
                    onChange={handleCheck}
                    border="none"
                    colorScheme="primary"
                    icon={
                      <Image
                        src={`/Assets/Images/${
                          check ? "check@4x.png" : "uncheck@4x.png"
                        }`}
                        width={check ? "auto" : "9px"}
                        mt={check ? "0px" : "3px"}
                        ml={check ? "3px" : "0px"}
                      />
                    }
                  />
                  <VStack spacing={0}>
                    <Text
                      color="GrayText"
                      padding="0px"
                      margin={0}
                      fontSize={{ base: "8px", md: "8px" }}
                    >
                      I Agree to LandAssets
                    </Text>
                    <Text
                      color="btn_border"
                      padding="0px"
                      margin={0}
                      fontSize={{ base: "8px", md: "8px" }}
                    >
                      Privacy Policy & Terms
                    </Text>
                  </VStack>
                </Box>
              </VStack>
              <Button
                backgroundColor="btn_bg"
                border="2px solid"
                fontSize={{ base: "8px", md: "12px" }}
                fontWeight="normal"
                px={{ base: "25px", md: "30px" }}
                borderColor="btn_border"
                _hover={{
                  backgroundColor: "#091c10",
                }}
                color="white"
                onClick={handleSubmit}
              >
                Reserve this Plot
              </Button>
            </HStack>
          </VStack>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

const CustomInput = ({ width }) => {
  return (
    <Input
      height={{ base: "16px", md: "24px" }}
      border="none"
      padding="0px"
      borderRadius="0px"
      boxShadow="transparent"
      borderBottom="1px solid #37ab46"
      width={width}
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
      fontSize={{ base: "8px", md: "15px" }}
      padding="0px"
    >
      {text}
    </FormLabel>
  );
};

export default ReserveModal;

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
  Stack,
} from "@chakra-ui/react";
import { reserveIcons } from "../EstateSection/estateData";

const BuyModal = ({ isOpen, onClose }) => {
  const [paymentOption, setPaymentOption] = useState("");
  const [check,setCheck]=useState(false);

  const handleCheck=()=>{
      setCheck(!check)
  }


  const handleSubmit = () => {
    // Handle form submission

    onClose(); // Close the modal after submission

    setPaymentOption("");
  };

  const ClearInput = () => {
    // Close the modal after submission

    setPaymentOption("");
    onClose();
  };

  const handlePaymentOptionChange = (option) => {
    // Toggle the selected checkbox
    if (paymentOption === option) {
      //here you can set the the value of price section and full payment option
      setPaymentOption("");
    } else {
      setPaymentOption(option);
    }
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
          BUY THIS PLOT
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
              <FormControl ml="2rem">
                <CustomLabel text="Plot Number" />
                <CustomInput width="80%" />
              </FormControl>
              <FormControl>
                <CustomLabel text="Price" />
                <CustomInput width="95%" />
              </FormControl>
            </Box>
            <Box display="flex" width="100%">
              <FormControl
                component="fieldset"
                width={{ base: "50%", md: "35%" }}
              >
                <VStack spacing={2}>
                  <Text
                    width="100%"
                    color="primary"
                    fontSize={{ base: "10px", md: "13px" }}
                  >
                    Please Confirm Your Payment terms:
                  </Text>
                  <HStack width="100%" mb="0.8rem">
                    <Stack direction="row">
                      <Checkbox
                        colorScheme="green"
                        isChecked={paymentOption === "full"}
                        _hover={{
                          boxShadow: "none",
                        }}
                        _focus={{
                          boxShadow: "none",
                        }}
                        onChange={() => handlePaymentOptionChange("full")}
                      >
                        <Text fontSize={{ base: "10px", md: "13px" }}>
                          Full Payment
                        </Text>
                      </Checkbox>
                      <Checkbox
                        shadow="none"
                        colorScheme="green"
                        _hover={{
                          boxShadow: "none",
                        }}
                        _focus={{
                          boxShadow: "none",
                        }}
                        isChecked={paymentOption === "partial"}
                        onChange={() => handlePaymentOptionChange("partial")}
                      >
                        <Text fontSize={{ base: "10px", md: "13px" }}>
                          Partial Payment
                        </Text>
                      </Checkbox>
                    </Stack>
                  </HStack>

                  {/* Partial Payment options */}
                  {paymentOption === "partial" && (
                    <HStack width="100%">
                      {/* here you can add the original installment and per month payment */}
                      <CustomButton
                        payment_txt="1st Install 2,40,000"
                        bg_color="primary"
                        txt_color="white"
                      />
                      <CustomButton
                        payment_txt="417,391/Month"
                        bg_color="#e6e9eb"
                        txt_color="black"
                      />
                    </HStack>
                  )}
                </VStack>
              </FormControl>

              <Box
                display="flex"
                gap="0.5rem"
                ml="0.5rem"
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

            <HStack justifyContent="space-between" width="100%">
              <Box display="flex" gap='0.2rem'>
              <Checkbox
            isChecked={check}
            onChange={handleCheck}
            border='none'
            colorScheme="primary"
            
           
            icon={<Image src={`/Assets/Images/${check? 'check@4x.png' : 'uncheck@4x.png'}`}  width={check?'auto':'9px'}  mt={check?'0px':'3px'} ml={check?'3px':'0px'}/>}
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
                Buy This Plot
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
      height={{ base: "19px", md: "24px" }}
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
const CustomButton = ({ payment_txt, bg_color, txt_color }) => {
  return (
    <Button
      backgroundColor={bg_color}
      color={txt_color}
      fontSize={{ base: "8px", md: "12px" }}
      fontWeight="normal"
      px={{ base: "10px", md: "20px" }}
      _hover={{
        backgroundColor: { bg_color },
        color: { txt_color },
        boxShadow: "none",
      }}
      _focus={{
        backgroundColor: { bg_color },
        color: { txt_color },
        boxShadow: "none",
      }}
    >
      {payment_txt}
    </Button>
  );
};

export default BuyModal;

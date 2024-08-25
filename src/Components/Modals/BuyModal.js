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
  VStack,
  Image,
  Button,
  Box,
  Text,
  Checkbox,
  Stack,
  HStack,
  useToast,
  Input,
} from "@chakra-ui/react";
import { reserveIcons } from "../EstateSection/estateData";
import { SERVER_URL } from "../../utilities/constant/api/api_constant.js";
import { formattedPrice } from "../../common/price/PriceFormatter.js";
import { phoneNumberFilter } from "../../common/phoneNumber/PhoneNumberFormat.js";


const BuyModal = ({ isOpen, onClose, plot, userID }) => {

  const [paymentOption, setPaymentOption] = useState(null);
  const [check, setCheck] = useState(false);
  const [loading, setLoading] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState("");
  const toast = useToast();

  const fullPaymentPrice = formattedPrice(plot?.plot_description?.cash_price);
  const firstInstallmentPrice = plot?.plot_description?.first_installment;
  const firstInstallmentPriceFormatted = formattedPrice(firstInstallmentPrice);
  const monthlyInstallment = formattedPrice(plot?.plot_description?.rest_installment);

  const handlePaymentOptionChange = (option) => {
    setPaymentOption(option);
  };

  const handleCheck = () => {
    setCheck(!check);
  };

  const handlePhoneNumberChange = (e) => {
    setPhoneNumber(e.target.value);
  };

  const handleSubmit = () => {
    if (!paymentOption) {
      toast({
        title: 'Error',
        description: 'Please select a payment option',
        status: 'error',
        duration: 4000,
        isClosable: true,
      });
      return;
    }

    if (!phoneNumber) {
      toast({
        title: 'Error',
        description: 'Please enter a phone number',
        status: 'error',
        duration: 4000,
        isClosable: true,
      });
      return;
    }

    const phoneNumberFiltered = phoneNumberFilter(phoneNumber);
    if (phoneNumberFiltered === 'invalid format') {
      toast({
        title: 'Error',
        description: 'Invalid phone number',
        status: 'error',
        duration: 4000,
        isClosable: true,
      });
      return;
    }

    setLoading(true);

    let apiEndpoint, amountPaid;

    if (paymentOption === 'full') {
      apiEndpoint = `${SERVER_URL}/api/full_purchase_plot/`;
      amountPaid = plot?.plot_description?.cash_price;
    } else if (paymentOption === 'partial') {
      apiEndpoint = `${SERVER_URL}/api/installment_purchase_plot/`;
      amountPaid = firstInstallmentPrice;

      if (monthlyInstallment && monthlyInstallment < firstInstallmentPrice) {
        toast({
          title: 'Error',
          description: `Monthly Installment Should Be Greater than ${firstInstallmentPriceFormatted}`,
          status: 'error',
          duration: 4000,
          isClosable: true,
        });
        setLoading(false);
        return;
      }
    } else {
      toast({
        title: 'Error',
        description: 'Please select a payment option',
        status: 'error',
        duration: 4000,
        isClosable: true,
      });
      setLoading(false);
      return;
    }

    var formdata = new FormData();
    formdata.append("user_id", userID);
    formdata.append("plot_id", plot?.id);
    formdata.append("amount_paid", amountPaid);
    formdata.append("phone_number", phoneNumberFiltered);
    formdata.append("payment_mode", "mno");

    var requestOptions = {
      method: 'POST',
      body: formdata,
      redirect: 'follow'
    };

    fetch(apiEndpoint, requestOptions)
      .then(response => response.json())
      .then(result => {
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
          throw new Error(result.message || "Failed to process payment");
        }
      })
      .catch(error => {
        console.error('error', error);
        toast({
          title: 'Error',
          description: error.message,
          status: 'error',
          duration: 4000,
          isClosable: true,
        });
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const ClearInput = () => {
    setPaymentOption(null);
    setCheck(false);
    setPhoneNumber("");
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
            <Box display="flex" width="100%" justifyContent="space-between">
              <Text fontWeight="bold">Estate: {plot?.estate?.estate_name}</Text>
              <Text fontWeight="bold">Plot Number: {plot?.plot_name}</Text>
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
                        _hover={{ boxShadow: "none" }}
                        _focus={{ boxShadow: "none" }}
                        onChange={() => handlePaymentOptionChange("full")}
                      >
                        <Text fontSize={{ base: "10px", md: "13px" }}>
                          Full Payment
                        </Text>
                      </Checkbox>
                      <Checkbox
                        shadow="none"
                        colorScheme="green"
                        _hover={{ boxShadow: "none" }}
                        _focus={{ boxShadow: "none" }}
                        isChecked={paymentOption === "partial"}
                        onChange={() => handlePaymentOptionChange("partial")}
                      >
                        <Text fontSize={{ base: "10px", md: "13px" }}>
                          Partial Payment
                        </Text>
                      </Checkbox>
                    </Stack>
                  </HStack>

                  {paymentOption === "full" && (
                    <Text fontWeight="bold">Full Payment: {fullPaymentPrice}</Text>
                  )}

                  {paymentOption === "partial" && (
                    <HStack width="100%">
                      <CustomButton
                        payment_txt={`1st Install ${firstInstallmentPriceFormatted}`}
                        bg_color="primary"
                        txt_color="white"
                      />
                      <CustomButton
                        payment_txt={`${monthlyInstallment}/Month`}
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
                    _hover={{ cursor: "pointer" }}
                    src={`${process.env.PUBLIC_URL}/Assets/Images/${icon}`}
                    alt={`Image ${index + 1}`}
                    width={{ base: "60px", md: "72px" }}
                    height={{ base: "30px", md: "40px" }}
                  />
                ))}
              </Box>
            </Box>

            <FormControl>
              <Text
                width="100%"
                color="primary"
                fontSize={{ base: "10px", md: "13px" }}
                mb={2}
              >
                Enter your phone number:
              </Text>
              <Input
                placeholder="Phone number"
                value={phoneNumber}
                onChange={handlePhoneNumberChange}
                width="100%"
              />
            </FormControl>

            <HStack justifyContent="space-between" width="100%">
              <Box display="flex" gap='0.2rem'>
                <Checkbox
                  onChange={handleCheck}
                  border='none'
                  colorScheme="primary"
                  icon={<Image src={`/Assets/Images/${check ? 'check@4x.png' : 'uncheck@4x.png'}`} width={check ? 'auto' : '9px'} mt={check ? '0px' : '3px'} ml={check ? '3px' : '0px'}/>}
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
                _hover={{ backgroundColor: "#091c10" }}
                color="white"
                onClick={handleSubmit}
                isLoading={loading}
                isDisabled={ !paymentOption || !phoneNumber}
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

export default BuyModal;



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

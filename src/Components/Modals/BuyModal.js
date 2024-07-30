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
  useToast,
} from "@chakra-ui/react";
import { reserveIcons } from "../EstateSection/estateData";
import { SERVER_URL } from "../../utilities/constant/api/api_constant.js";
import {formattedPrice} from "../../common/price/PriceFormatter.js";
import {phoneNumberFilter} from "../../common/phoneNumber/PhoneNumberFormat.js";

const BuyModal = ({ isOpen, onClose, plot, userID }) => {
  const [paymentPlan, setPaymentPlan] = useState(null);
  const [agreed, setAgreed] = useState(false);
  const [loading, setLoading] = useState(false);
  const [phoneNumberValue, setPhoneNumberValue] = useState(null);
  const [customInstallmentPrice, setCustomInstallmentPrice] = useState(null);
  const toast = useToast();

  const fullPaymentPrice = formattedPrice(plot?.full_payment);
  const installmentPaymentPrice = formattedPrice(plot?.partial_payment);
  const firstInstallmentPrice = plot?.first_installment;
  const firstInstallmentPriceFormatted = formattedPrice(firstInstallmentPrice);
  const restInstallment = plot?.rest_installment;
  const restInstallmentFormatted = formattedPrice(restInstallment);

  const handleCustomPrice = (event) => setCustomInstallmentPrice(event.target.value);

  const handlePaymentPlanChange = (plan) => {
    setPaymentPlan(plan);
  };

  const handleSubmit = () => {
    if (!phoneNumberValue) {
      toast({
        title: 'Error',
        description: 'Please input your phone number',
        status: 'error',
        duration: 4000,
        isClosable: true,
      });
      return;
    }

    const phoneNumberFiltered = phoneNumberFilter(phoneNumberValue);
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

    if (paymentPlan === 'full') {
      apiEndpoint = `${SERVER_URL}/api/full_purchase_plot/`;
      amountPaid = plot?.full_payment;
    } else if (paymentPlan === 'installment') {
      apiEndpoint = `${SERVER_URL}/api/installment_purchase_plot/`;
      amountPaid = customInstallmentPrice || firstInstallmentPrice;

      if (customInstallmentPrice && customInstallmentPrice < firstInstallmentPrice) {
        toast({
          title: 'Error',
          description: `Custom Installment Price Should Be Greater than ${firstInstallmentPriceFormatted}`,
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
        description: 'Please select a payment plan',
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

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>BUY THIS PLOT</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <VStack spacing={4}>
            <FormControl>
              <FormLabel>Phone Number</FormLabel>
              <Input 
                value={phoneNumberValue} 
                onChange={(e) => setPhoneNumberValue(e.target.value)}
                placeholder="Enter your phone number"
              />
            </FormControl>
            <FormControl>
              <FormLabel>Payment Plan</FormLabel>
              <Stack>
                <Checkbox 
                  isChecked={paymentPlan === 'full'} 
                  onChange={() => handlePaymentPlanChange('full')}
                >
                  Full Payment ({fullPaymentPrice})
                </Checkbox>
                <Checkbox 
                  isChecked={paymentPlan === 'installment'} 
                  onChange={() => handlePaymentPlanChange('installment')}
                >
                  Installment Payment
                </Checkbox>
              </Stack>
            </FormControl>
            {paymentPlan === 'installment' && (
              <FormControl>
                <FormLabel>Installment Amount</FormLabel>
                <Input 
                  value={customInstallmentPrice} 
                  onChange={handleCustomPrice}
                  placeholder={`Minimum ${firstInstallmentPriceFormatted}`}
                />
                <Text fontSize="sm" color="gray.500">
                  Remaining balance: {restInstallmentFormatted}
                </Text>
              </FormControl>
            )}
            <Checkbox isChecked={agreed} onChange={() => setAgreed(!agreed)}>
              I agree to the terms and conditions
            </Checkbox>
            <Button 
              onClick={handleSubmit} 
              isLoading={loading} 
              isDisabled={!agreed}
              colorScheme="blue"
            >
              Complete Purchase
            </Button>
          </VStack>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default BuyModal;
import React, { useState } from "react";
import {
  Flex,
  Box,
  Text,
  Input,
  Button,
  HStack,
  FormControl,
  FormLabel,
  Image,
  VStack,
} from "@chakra-ui/react";

const PaymentMethod = () => {
  const [selectedPayment, setSelectedPayment] = useState("");

  const paymentMethods = [
    {
      id: 1,
      icon: "Inactive-m-pesa@4x.png",
      hoverIcon: "Active-m-pesa@4x.png",
      label: "M-Pesa",
    },
    {
      id: 2,
      icon: "Inactive-tigopesa@4x.png",
      hoverIcon: "Active-tigopesa@4x.png",
      label: "Tigo Pesa",
    },
    {
      id: 3,
      icon: "Inactive-Airtelmoney@4x.png",
      hoverIcon: "Active-Airtelmoney@4x.png",
      label: "Airtel Money",
    },
    {
      id: 4,
      icon: "Inactive-halopesa@4x.png",
      hoverIcon: "Active-halopesa@4x.png",
      label: "Halo Pesa",
    },
    {
      id: 5,
      icon: "Inactive-Azampesa@4x.png",
      hoverIcon: "Active-Azampesa@4x.png",
      label: "Azam Pesa",
    },
    {
      id: 6,
      icon: "Inactive-Bank@4x.png",
      hoverIcon: "Active-Bank@4x.png",
      label: "Bank",
    },
    {
      id: 7,
      icon: "Inactive-Mastercard@4x.png",
      hoverIcon: "Active-Mastercard@4x.png",
      label: "MasterCard",
    },
  ];

  const handlePaymentSelect = (paymentLabel) => {
    setSelectedPayment(paymentLabel);
  };

  return (
    <Flex flexDirection={{base:'column',md:'row'}}>
      <Box width={{base:'100%',md:'30%'}} p={4}>
        <Text fontSize={{base:'13px',md:'17px'}} fontWeight="400" textAlign={{base:'center',md:'left'}} mb={4}>
          Select Payment Method
        </Text>
        <Flex flexWrap="wrap" justifyContent={{base:'center',md:'inherit'}}>
          {paymentMethods.map((method) => (
            <Box
              key={method.id}
              p={2}
              textAlign="center"
              cursor="pointer"
            
              onMouseDown={() => handlePaymentSelect(method.label)}
            >
              <Image
                src={`${process.env.PUBLIC_URL}/Assets/Images/${
                  selectedPayment === method.label
                    ? method.hoverIcon
                    : method.icon
                }`}
                alt={method.label}
                width={{base:'60px',md:'120px'}}
                height={{base:'60px',md:'80px'}}
              />
            </Box>
          ))}
        </Flex>
      </Box>

      <Box width={{base:'100%',md:'70%'}} borderRadius="15px" backgroundColor="gray.100" p={10}>
        <HStack justifyContent="space-between" flexDirection={{base:'column',md:'row'}} >
          <Text
            fontSize={{base:'13px',md:'17px'}}
            color="red"
            fontWeight="400"
            textAlign={{base:'center',md:'left'}}
            mb={4}
          >
            {`Cashing out with ${selectedPayment}`}
          </Text>
          <VStack opacity={0.6} alignItems="right" mb={{base:'1.5rem',md:'0'}}>
            <Text fontSize={{base:'13px',md:'17px'}} textAlign={{base:'center',md:'right'}} color="red">
              Maximum Payment
            </Text>
            <Text fontSize={{base:'13px',md:'17px'}}  textAlign={{base:'center',md:'right'}} color="black">
              TSh. 14,000,000
            </Text>
          </VStack>
        </HStack>
        <Box>
          <CustomInput label="Name" inputColor="black" />
          <CustomInput label="Phone Number" inputColor="black" />

          <HStack justifyContent="space-between" flexDirection={{base:'column',md:'row'}}>
            <CustomInput label="Phone Number" inputColor="primary" />
            <Button
              borderRadius="5px"
              fontWeight="normal"
              _hover={{ backgroundColor: "footer_bg" }}
              color="white"
              backgroundColor="footer_bg"
            >
              Cashout
            </Button>
          </HStack>
        </Box>
      </Box>
    </Flex>
  );
};

const CustomInput = ({ label, inputColor }) => {
  return (
    <FormControl width={{base:'100%',md:'50%'}} mb={6}>
      <FormLabel fontSize={{base:'13px'}} color="gray">{label}</FormLabel>
      <Input
        variant="flushed"
        borderBottomColor="gray.900"
        height={{base:'20px',md:'30px'}}
        color={inputColor}
      />
    </FormControl>
  );
};

export default PaymentMethod;

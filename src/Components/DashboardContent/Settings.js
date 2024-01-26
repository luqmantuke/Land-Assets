import React from "react";
import {
  Box,
  Heading,
  Flex,
  VStack,
  Input,
  Text,
  InputGroup,
  Switch,
  FormControl,
  FormLabel,
  Button,
  Select,
} from "@chakra-ui/react";

const Settings = () => {
  // add more countries as needed
  const LocationOptions = [
    { label: "Tanzania" },
    { label: "United States" },
    { label: "Germany" },
    { label: "United Kingdoms" },
    { label: "Japan" },
  ];
  const CurrencyOptions = [
    { label: "TSh.  TZS" },
    { label: "US $" },
    { label: "Euro €" },
    { label: "Pound £" },
    { label: "Yen ¥" },
  ];

  return (
    <Flex p={4}  flexDirection={{base:'column',md:'row'}} gap='1rem' mx="auto">
      {/* Left Part */}
      <Box flex="1">
        <Heading mb={4} fontSize="12px" textAlign="left" color="gray">
          Edit Profile
        </Heading>
        <Box borderWidth="1px" borderRadius="lg" p={4}>
          {/* Inputs for Edit Profile */}
          <VStack align="start" spacing={4}>
            <CustomInput label="Your Name" type="text" />
            <CustomInput label="Store Name" type="text" />

            <CustomDropdown label="Location" options={LocationOptions} />
            <CustomDropdown label="Currency" options={CurrencyOptions} />
            <CustomInput label="Email" type="text" />
            <CustomInput label="Phone" type="text" />
            <CustomInput label="Address" type="text" placehold="" />
          </VStack>
        </Box>
      </Box>

      {/* Right Part */}
      <Flex flex="1" gap='2rem' ml={{base:'0px',md:"4"}} direction="column">
     
       <Box>

     
        <Heading mb={4} fontSize="12px" textAlign="left" color="gray">
          Change Password
        </Heading>
        <Box borderWidth="1px" borderRadius="lg" p={4} mb={4}>
          {/* Inputs for Change Password */}
          <VStack align="start" spacing={4}>
            <CustomInput label="Current Password" type="password" />
            <CustomInput label="New Password" type="password" />
            <CustomInput label="Confirm Password" type="password" />
          </VStack>
        </Box>
        </Box>
        <Box>
        <Heading mb={4} fontSize="12px" textAlign="left" color="gray">
          Notifications
        </Heading>
        {/* Notifications Box */}
        <Box borderWidth="1px" borderRadius="lg" p={5}>
          <Box borderWidth="1px" borderRadius="lg" p={4}>
            {/* Elements for Notifications */}
            <VStack align="start" spacing={4}>
              <CustomSwitch
                heading="Order Confirmation"
                desc="You will be notified when customer orders product"
              />
              <CustomSwitch
                heading="Order Status Change"
                desc="You will be notified when customer makes changes in order"
              />
              <CustomSwitch
                heading="Order Delivered"
                desc="You will be notified when order will be delivered"
              />
              <CustomSwitch
                heading="Email Notification"
                desc="Turn on email notification to get updates thruogh email"
              />
            </VStack>
          </Box>
        
          </Box>
        
        </Box>
        <Button width='80px' backgroundColor='primary' color='white' _hover={{backgroundColor:'green.700'}} alignSelf={{base:'center',md:'end'}}>
            Submit
          </Button>
      </Flex>
    </Flex>
  );
};
const CustomInput = ({ label, type, placehold }) => {
  return (
    <>
      <FormControl>
        <FormLabel fontSize={{base:'9px',md:'13px'}}>{label}</FormLabel>

        <InputGroup>
          <Input  fontSize={{base:'9px',md:'13px'}} height={{base:'25px',md:'40px'}} type={type} placeholder={placehold} />
        </InputGroup>
      </FormControl>
    </>
  );
};
const CustomDropdown = ({ options, label }) => {
  return (
    <FormControl>
      <FormLabel  fontSize={{base:'9px',md:'13px'}}>{label}</FormLabel>
      <InputGroup>
        <Select fontSize={{base:'9px',md:'13px'}}>
          {options.map((option) => (
            <option key={option.label} value={option.label}>
              {option.label}
            </option>
          ))}
        </Select>
      </InputGroup>
    </FormControl>
  );
};
const CustomSwitch = ({ heading, desc }) => {
  return (
    <Flex justify="space-between" alignItems='flex-start' flexDirection={{base:'column',md:'row'}} gap={{base:'1rem',md:'auto'}} w="100%">
      <Box>
        <Text fontWeight="500" textAlign="left" fontSize="12px">
          {heading}
        </Text>
        <Text fontSize="10px" textAlign='left' color="gray.500">
          {desc}
        </Text>
      </Box>
      <Switch size={{base:'sm',md:'md'}} colorScheme="green" />
    </Flex>
  );
};

export default Settings;

import React from "react";
import { Box, Flex, Text, Input, Image } from "@chakra-ui/react";

const InputContainer = ({ inputData }) => {
  return (
    <Box
      p="4"
      display="flex"
      flexDirection={{ base: "column", md: "row" }}
      margin="auto"
      marginTop="2rem"
      width="95%"
      boxShadow="0 0 5px rgba(0, 0, 0, 0.1)"
      borderRadius="40px"
      bg="white"
      position="relative"
      zIndex={2}
    >
      {/* Left Side */}
      <Box
        flex="68%"
        borderRight={{ sm: "0px", md: "2px" }}
        borderRightColor={{ base: "transparent", md: "primary" }}
        mx="2rem"
        marginTop="3rem"
      >
        <Text
          fontSize="1.8rem"
          fontWeight="bold"
          mb="4"
          ml="20px"
          textAlign="left"
          color="#384a57"
        >
          Malimbika 1 Estate
        </Text>

        <Image
          src={`${process.env.PUBLIC_URL}/Assets/Images/Estate-Map.jpg`}
          alt="Placeholder"
          height={{ base: "auto", md: "500px" }}
          width={{ base: "auto", md: "750px" }}
          style={{ borderRadius: "8px" }}
        />
      </Box>

      {/* Right Side */}
      <Box flex="32%">
       
        <Flex
          direction="column"
          gap="1"
          textAlign="left"
          width="80%"
          mt="3rem"
          margin={{ base: "auto", md: "3rem 0px 0 " }}
        >
          <Flex
            direction="row"
            gap="1rem"
            justifyContent="space-between"
            paddingBottom="20px"
            borderBottom="2px"
            borderColor="primary"
          >
            <InputLabel label="Enter Desired Plot no" color="black" />
            <Input
              border="none"
              width="80px"
              height="30px"
              color="primary"
              fontWeight="bold"
              backgroundColor="#ededed"
              padding="2px 6px"
              _hover={{
                borderColor: "none",
              }}
              _focus={{
                boxShadow: "none",
                borderColor: "none",
              }}
            />
          </Flex>
          {inputData.map((data, index) => (
            <InputLabel key={index} label={data.label} color="primary">
              <Input
                border="none"
                borderRadius="0px"
                color="#384a57"
                borderBottom={index === inputData.length - 1 ? "none" : "2px"}
                height="24px"
                padding="0px"
                borderColor="primary"
                mb="0.4rem"
                value={data.value}
                onChange={(e) => {
                  const newValue = e.target.value;
                  data.value = newValue;
                }}
                _hover={{
                  borderColor: "primary",
                }}
                _focus={{
                  boxShadow: "none",
                  borderColor: "primary",
                }}
              />
            </InputLabel>
          ))}
        </Flex>
      </Box>
    </Box>
  );
};

const InputLabel = ({ label, children, color }) => {
  return (
    <Box>
      <Text color={color}>{label}</Text>
      {children}
    </Box>
  );
};

export default InputContainer;

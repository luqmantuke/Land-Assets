import React from "react";
import { Box, Flex, Checkbox, Button, Text, Divider } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const Payout = () => {
  return (
    <Box>
      <CustomElement
        earning="TSh. 12,000,000"
        earning_src="Total earining from sales"
        btn1_text="Account Details"
        btn2_text="Cashout"
      />
      <Divider my={4} height="0.1rem" bg="black" />
      <CustomElement
        earning="TSh. 2,000,000"
        earning_src="Total earining from Leads"
        btn1_text="Account Details"
        btn2_text="Cashout"
      />
      <Divider my={4} height="0.1rem" bg="black" />
    </Box>
  );
};

const CustomElement = ({ earning_src, earning, btn1_text, btn2_text }) => {
  return (
    <Flex
      alignItems="center"
      flexDirection={{ base: "column", md: "row" }}
      gap="1rem"
      paddingY="0.4rem"
      mx={{ base: "0.5rem", md: "2rem" }}
      justifyContent="space-between"
    >
      <Flex alignItems={{ base: "start", md: "center" }}>
        <Checkbox colorScheme="green" mr="1rem" />
        <Box display="flex" flexDirection="column" alignItems="flex-start">
          <Text
            fontWeight="bold"
            textAlign="left"
            fontSize={{ base: "10px", md: "14px" }}
          >
            {earning_src}
          </Text>
          <Text
            color="primary"
            fontWeight="bold"
            textAlign="left"
            fontSize={{ base: "1rem", md: "1.5rem" }}
          >
            {earning}
          </Text>
        </Box>
      </Flex>
      <Flex flexDirection="row" gap="1rem">
        <Button
          backgroundColor="gray.200"
          px={{ base: "10px", md: "20px" }}
          fontSize={{ base: "8px", md: "12px" }}
          _hover={{ backgroundColor: "primary", color: "white" }}
          height={{ base: "30px", md: "40px" }}
          color="gray.600"
          variant="outline"
        >
          {btn1_text}
        </Button>
        <Link to="/agentDash/paymentMethod">
          <Button
            backgroundColor="primary"
            px={{ base: "10px", md: "20px" }}
            _hover={{ backgroundColor: "primary" }}
            height={{ base: "30px", md: "40px" }}
            fontSize={{ base: "8px", md: "12px" }}
            color="white"
          >
            {" "}
            {btn2_text}
          </Button>
        </Link>
      </Flex>
    </Flex>
  );
};
export default Payout;

import React from "react";
import { Box, Input, Button, VStack, HStack } from "@chakra-ui/react";

const ContactForm = () => {
  return (
    <Box
      width="80%"
      mx="auto"
      mt={8}
      p={6}
      py="50px"
      px={{ base: "10px", md: "20px" }}
      bg="white"
      pos="relative"
      bottom="70px"
      borderRadius="25px"
      boxShadow="md"
      position="relative"
    >
      <VStack spacing={4} align="stretch" margin={{ base: "0", md: "0 40px" }}>
        <HStack
          spacing={{ base: "1rem", md: "1.5rem" }}
          flexDir={{ base: "column", md: "row" }}
        >
          <CustomInput
            inputTxt="First Name"
            labelLeft={{ base: "30px", md: "90px" }}
            labelTop={{ base: "13%", md: "14%" }}
          />
          <CustomInput inputTxt="Last Name" labelLeft={{base:'30px',md:'150px'}} labelTop={{base:'27%',md:'14%'}} labelRight={{base:'',md:'0'}} />
        </HStack>

        <CustomInput inputTxt="Email Address" labelLeft={{base:'30px',md:'90px'}} labelTop={{base:'41%',md:'31%'}} />
        <CustomInput inputTxt="Mobile No." labelLeft={{base:'30px',md:'90px'}} labelTop={{base:'55%',md:'47%'}} />
        <CustomInput
          inputTxt="Reasons for contact"
          labelLeft={{base:'30px',md:'90px'}}
          labelTop={{base:'69%',md:'64%'}}
        />

       
        <Box>
          <Button
            borderRadius="40px"
            margin="auto"
            height={{ base: "40px", md: "60px" }}
            backgroundColor="primary"
            color="white"
            px="3rem"
            _hover={{cursor:'pointer',backgroundColor:'btn_bg' }}
          >
            Submit
          </Button>
        </Box>
      </VStack>
    </Box>
  );
};

const CustomInput = ({ inputTxt, labelTop, labelLeft,labelRight }) => {
  return (
    <>
      <Input
        type="text"
        placeholder=" "
        borderRadius="40"
        fontSize={{base:'10px',md:'12px'}}
        border="1px solid #ccc"
        p={4}
        backgroundColor='#F6F8F8'
        
        pb='0'
        pl='30px'
        mb={2}
        height={{ base: "40px", md: "60px" }}
      />
      <Box
        pos="absolute"
        top={labelTop}
        zIndex='1'
        right={labelRight}
        transform="translateY(-50%)"
        left={labelLeft}
        fontWeight="bold"
        color="#B8B9B9"
        fontSize="10px"
      >
        {inputTxt}
      </Box>
    </>
  );
};

export default ContactForm;

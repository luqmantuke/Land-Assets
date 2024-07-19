import React from "react";
import { Box, Flex, Button, Image,Text } from "@chakra-ui/react";

const ButtonsContainer = ({
  leftButtons,
  rightButtons,
  flex_dir,
  Lbtn_margin,
  Rbtn_margin,
  box_height,
}) => {
  return (
    <Box
      alignItems="center"
      p="4"
      padding={{ base: "20px", md: "70px 3rem" }}
      height={{ base: `${box_height}`, md: "170px" }}
      boxShadow="0 0 5px rgba(0, 0, 0, 0.1)"
      borderRadius="40px"
      bg="white"
      display="flex"
      flexDirection={{ base: `${flex_dir}`, md: "row" }}
      backgroundColor="#0e8241"
      justifyContent="space-between"
      width="95%"
      margin="auto"
      position="relative"
      bottom="70px"
      zIndex="1"
    >
      {/* Left Side */}
      <Flex
        direction="row"
        align="center"
        gap="2"
        mt={{ base: `${Lbtn_margin}`, md: "3rem" }}
      >
        {leftButtons?.map((button, index) => (
          <Button
            key={index}
            variant="outline"
            color="black"
            width={{ base: "90px",x_sm:'110px', md: "auto" }}
            padding={{ base: "10px", md: "none" }}
            px={{ base: "10px", md: "20px" }}
            fontWeight="normal"
            fontSize={{  base: "8px",x_sm:'10px', md: "small" }}
            border="2px solid primary"
            backgroundColor="white"
            onClick={button.onClick}
          >
            <Image
              src={`${process.env.PUBLIC_URL}/Assets/Images/${button.icon}`}
              width={{ base: "10px", md: "18px" }}
              height={{ base: "10px", md: "18px" }}
              mr={{ base: "7px",x_sm:'10px' ,md: "15px" }}
            />
            {button.text}
          </Button>
        ))}
      </Flex>

      {/* Right Side */}
      <Flex
        direction="row"
        align="center"
        gap="2"
        mt={{ base: `${Rbtn_margin}`, md: "3rem" }}
      >
        {rightButtons?.map((button, index) => (
          <Button
            key={index}
            variant="outline"
            width={{ base: "70px",x_sm:'110px', md: "auto" }}
            fontWeight="light"
            padding={{ base: "10px", md: "none" }}
            px={{ base: "8px",x_sm:'10px', md: "20px" }}
            color="white"
            fontSize={{  base: "7px",x_sm:'10px', md: "small" }}
            border="2px solid #37ab46"
            backgroundColor="#0f301a"
            onClick={button.onClick}
            _hover={{
              backgroundColor: "#091c10",
            }}
          >
            <Text >{button.text}</Text>
          </Button>
        ))}
      </Flex>
    </Box>
  );
};

export default ButtonsContainer;

import React, { useState } from "react";
import { Box, VStack, Text, Image, Flex } from "@chakra-ui/react";
import AboutUsData from "./AboutUsData";

const WhyUs = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    if (currentIndex < AboutUsData.whyUs.length - 1) {
      setCurrentIndex((prevIndex) => prevIndex + 1);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prevIndex) => prevIndex - 1);
    }
  };

  return (
    <Flex
      margin={{ base: "2rem 1.5rem", md: "4rem 5rem" }}
      mt={{ base: "2rem", md: "8rem" }}
      justifyContent="center"
      gap="5rem"
      flexDirection={{ base: "column", md: "row" }}
    >
      <VStack align="start" width="auto" spacing={2} flex={1}>
        <Text
          fontSize={{ base: "2.4rem", md: "2.7rem" }}
          color="about_heading"
          mb={{ base: "1rem", md: "2rem" }}
          fontWeight="bold"
        >
          Why Choose US
        </Text>
        <Text
          fontSize={{ base: "1.7rem", md: "2rem" }}
          textAlign={{ base: "center", md: "left" }}
          color="gray.500"
        >
          {AboutUsData.whyUs[currentIndex].subheading}
        </Text>
        <Text
          textAlign={{ base: "center", md: "left" }}
          width={{ base: "100%", md: "90%" }}
        >
          {AboutUsData.whyUs[currentIndex].description}
        </Text>
      </VStack>

      <Box position="relative" borderRadius="md">
        <Image
          src={`${process.env.PUBLIC_URL}/Assets/Images/${AboutUsData.whyUs[currentIndex].image}`}
          alt={`Image ${currentIndex + 1}`}
          width="300px"
          height="400px"
          objectFit="cover"
          borderRadius="10px"
          mr={{ base: "0", md: "17rem" }}
          mx={{ base: "auto" }}
          transition="opacity 0.3s  easeInOut"
          opacity={currentIndex < AboutUsData.whyUs.length - 1 ? 1 : 1}
        />
        {currentIndex < AboutUsData.whyUs.length - 1 && (
          <Image
            src={`${process.env.PUBLIC_URL}/Assets/Images/${
              AboutUsData.whyUs[currentIndex + 1].image
            }`}
            alt={`Next Image ${currentIndex + 2}`}
            width="300px"
            height="400px"
            overflowX="hidden"
            objectFit="cover"
            display={{ base: "none", md: "block" }}
            position="absolute"
            transition="opacit 0.3s easeInOut"
            borderRadius="10px"
            bottom="12%"
            left="22rem"
            opacity={0.2}
          />
        )}
        <Image
          src={`${process.env.PUBLIC_URL}/Assets/Images/Right-Arrow@4x.png`}
          aria-label="Next"
          position="absolute"
          width="40px"
          top="50%"
          right={{ base: "0", md: "43%" }}
          _hover={{ cursor: "pointer" }}
          transform="translateY(-50%)"
          onClick={handleNext}
        />
        <Image
          src={`${process.env.PUBLIC_URL}/Assets/Images/Left-Arrow@4x.png`}
          aria-label="Previous"
          position="absolute"
          top="50%"
          _hover={{ cursor: "pointer" }}
          width="40px"
          left={{ base: "0", md: "-25px" }}
          transform="translateY(-50%)"
          onClick={handlePrev}
        />
      </Box>
    </Flex>
  );
};

export default WhyUs;

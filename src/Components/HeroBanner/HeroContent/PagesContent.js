import { Heading, VStack, Text } from "@chakra-ui/react";
import React from "react";

export const PagesContent = ({ heading_text, desc,mbottom,secondDesc,mb}) => {
  return (
    <VStack mt="3rem" alignItems="center" textAlign="center" width="100%">
      <Heading
        as="h1"
        mt='2rem'
        color="white"
        fontSize={{ base: "2rem", md: "4rem" }}
        width="auto"
        whiteSpace="pre-line"
      >
        {heading_text}
      </Heading>

      <Text
        color="primary"
        mx='2rem'
        fontSize={{ base: "md", md: "24px" }}
        width="auto"
        mb={mbottom}
        whiteSpace="pre-line"
      >
        {desc}
      </Text>
      <Text
        color="white"
        mx='1rem'
        fontSize={{ base: "md", md: "24px" }}
        width="auto"
        mb={mb}
        whiteSpace="pre-line"
        
      >
        {secondDesc}
      </Text>
    </VStack>
  );
};

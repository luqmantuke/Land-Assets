import React from "react";
import {
  Box,
  Flex,
  Heading,
  Text,
  Image,

  HStack,
} from "@chakra-ui/react";

const data = [
  {
    id: 1,
    heading: "Plot Sales",
    description: "The Sales of New built residential properties",
    imageUrl: "Plots-sales.svg",
  },
  {
    id: 2,
    heading: "Title deed processing",
    description: "We will process your request and deliver",
    imageUrl: "Title-deed.svg",
  },
  {
    id: 3,
    heading: "Consultancy",
    description: "Commercial land ownership consultancy",
    imageUrl: "Consultancy.svg",
  },
];

const ServicesList = () => {
  return (
    <Flex justifyContent="center" flexDirection={{base:'column',md:'row'}} gap={{base:'0.5rem',md:'0rem'}} margin={{base:'0',x_sm:'0 1rem',md:'0 6rem'}}>
      {data.map((item) => (
        <Box
          key={item.id}
          m={4}
          p='30px'
          borderWidth="1px"
          borderRadius="15px"
          backgroundColor="#f6f8f9 "
          height="180px"
          textAlign='left'
          transition='transform 0.3s ease-in-out' 
          _hover={{cursor:'pointer', transform:'scale(1.1)'}}
        >
          <Heading size="md">
            {item.heading}
          </Heading>
          <HStack gap='0px' >
            <Text>{item.description}</Text>

            <Image
              src={`${process.env.PUBLIC_URL}/Assets/SVG/${item.imageUrl}`}
              alt={`Image for ${item.heading}`}
              position="relative"
              top={{base:'30px',x_sm:'40px'}}
              height={{base:'60px',x_sm:'70px'}}
            />
          </HStack>
        </Box>
      ))}
    </Flex>
  );
};

export default ServicesList;

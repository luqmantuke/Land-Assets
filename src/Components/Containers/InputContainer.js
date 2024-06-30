import { usePlotFilterStore } from "../../store/Plot/PlotStore";
import React, { useState } from 'react';
import { Box, Text, Image, Flex, Input, Button,HStack } from '@chakra-ui/react';
import { ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons';
import {formattedPrice} from "../../common/price/PriceFormatter"


const InputContainer = ({ inputData }) => {
  const { plotNumber, setPlotNumber } = usePlotFilterStore();
  console.log("plot numner ", plotNumber)
    console.log("input data ", inputData.plot_name)
    const transformDetailsData = plotNumber ?   [
      { label: "Plot No", value:  inputData.plot_name},
      { label: "Plot Size (SQM)", value: inputData.plot_size },
      { label: "Price per 1 SQM (Cash Sale)", value:   `${formattedPrice(inputData.estate.cash_price_per_sqm)}` },
      { label: "Price/SQM (Partial Payment)", value: "Tsh. 22,000" },
      { label: "Total Cash Price", value: "12 Months" },
      { label: "Total Partial Payment Price", value: "Tsh. 3,400,000" },
      { label: "1st Installment", value: "Tsh. 523,000" },
      { label: "Monthly Installment", value: "Tsh. 523,000" },
    ]: [
      { label: "Estate Name", value: inputData.estate_name },
      { label: "Estate Size", value: inputData.estate_size },
      { label: "Distance from Kigamboni Ferry", value: inputData.distance_from_kigamboni_ferry },
      { label: "Distance from Main Road", value: inputData.distance_from_main_road },
      { label: "Distance from Ocean", value: inputData.distance_from_ocean },
      { label: "Number of Plots", value: inputData.number_of_plots },
      { label: "Payment Term", value: inputData.payment_terms },
      { label: "Cash Price per SQM", value: `${formattedPrice(inputData.cash_price_per_sqm)}` },
      { label: "Installment Price per SQM", value: `Tsh. ${formattedPrice(inputData.installment_price_per_sqm)}` },
    ];
  
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const images = plotNumber ? inputData.estate.media : inputData.media;

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };
  const InputLabel = ({ label, children, color }) => {
    return (
      <Box>
        <Text color={color}>{label}</Text>
        {children}
      </Box>
    );
  };

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
        flex="1"
        borderRight={{ sm: "0px", md: "2px" }}
        borderRightColor={{ base: "transparent", md: "primary" }}
        pr={{ md: "2rem" }}
      >
        <Text
          fontSize="1.8rem"
          fontWeight="bold"
          mb="4"
          textAlign="left"
          color="#384a57"
        >
          {plotNumber ? inputData.estate.estate_name : inputData.estate_name}
        </Text>

        <Box>
          <Image
            src={images[currentImageIndex].file}
            alt={`Image ${currentImageIndex + 1}`}
            width="100%"
            height="auto"
            objectFit="cover"
            borderRadius="8px"
          />
          <HStack justifyContent="center" mt={4} spacing={4}>
            <Button onClick={prevImage} leftIcon={<ChevronLeftIcon />} size="sm" variant="outline">
              Prev
            </Button>
            <Text fontSize="sm">
              Image {currentImageIndex + 1} of {images.length}
            </Text>
            <Button onClick={nextImage} rightIcon={<ChevronRightIcon />} size="sm" variant="outline">
              Next
            </Button>
          </HStack>
        </Box>
      </Box>

      {/* Right Side */}
      <Box flex="1" pl={{ md: "2rem" }} mt={{base:"2rem",md:"2rem", xl:"0rem", lg:"0rem"}}>
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
              onChange={(e) => setPlotNumber(e.target.value)} // update plot number in store
            />
          </Flex>
          {transformDetailsData.map((data, index) => (
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


export default InputContainer;
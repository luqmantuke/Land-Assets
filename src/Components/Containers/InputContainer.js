import React, { useState } from 'react';
import { Box, Text, Image, Flex, Input, Button, HStack, useToast } from '@chakra-ui/react';
import { ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons';
import usePlotStore from '../../store/Plot/PlotStore';
import { usePlotFilterStore } from '../../store/Plot/PlotStore';

// Define InputLabel component



// Define InputLabel component
const InputLabel = ({ label, children, color }) => (
  <Box>
    <Text color={color}>{label}</Text>
    {children}
  </Box>
);

const InputContainer = ({ inputData, isPlot, estate }) => {
  const { plotNumber, setPlotNumber } = usePlotFilterStore();
  const plots = usePlotStore((state) => state.plots);
  const toast = useToast();

  const handlePlotNumberChange = (e) => {
    setPlotNumber(e.target.value);
    if (!plots.some(plot => plot.plot_name === e.target.value)) {
      // toast({
      //   title: 'Invalid Plot Number',
      //   description: "This plot number doesn't exist in the current estate.",
      //   status: 'warning',
      //   duration: 3000,
      //   isClosable: true,
      // });
    }
  };

  const formattedPrice = (price) => {
    return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'TZS' }).format(price);
  };

  const transformDetailsData = isPlot ? [
    { label: "Plot No", value: inputData.plot_name },
    { label: "Plot Size (SQM)", value: inputData.plot_size },
    { label: "Price per 1 SQM (Cash Sale)", value: formattedPrice(inputData.plot_description?.cash_price_per_sqm) },
    { label: "Price/SQM (Partial Payment)", value: formattedPrice(inputData.plot_description?.installment_price_per_sqm) },
    { label: "Total Cash Price", value: formattedPrice(inputData.plot_description?.cash_price) },
    { label: "Total Partial Payment Price", value: formattedPrice(inputData.plot_description?.installment_price) },
    { label: "1st Installment", value: formattedPrice(inputData.plot_description?.first_installment) },
    { label: "Monthly Installment", value: formattedPrice(inputData.plot_description?.rest_installment) },
  ] : [
    { label: "Estate Name", value: inputData.estate_name },
    { label: "Estate Size", value: inputData.estate_size },
    { label: "Distance from Kigamboni Ferry", value: inputData.distance_from_kigamboni_ferry },
    { label: "Distance from Main Road", value: inputData.distance_from_main_road },
    { label: "Distance from Ocean", value: inputData.distance_from_ocean },
    { label: "Number of Plots", value: inputData.number_of_plots },
    { label: "Payment Term", value: inputData.payment_terms },
    { label: "Cash Price per SQM", value: formattedPrice(inputData.cash_price_per_sqm) },
    { label: "Installment Price per SQM", value: `Tsh. ${formattedPrice(inputData.installment_price_per_sqm)}` },
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = estate.media || [];

  const nextImage = () => setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  const prevImage = () => setCurrentImageIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);

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
      <Box flex="1" borderRight={{ sm: "0px", md: "2px" }} borderRightColor={{ base: "transparent", md: "primary" }} pr={{ md: "2rem" }}>
        <Text fontSize="1.8rem" fontWeight="bold" mb="4" textAlign="left" color="#384a57">
          {estate.estate_name}
        </Text>

        {images.length > 0 ? (
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
        ) : (
          <Text>No images available</Text>
        )}
      </Box>

      {/* Right Side */}
      <Box flex="1" pl={{ md: "2rem" }} mt={{base:"2rem", md:"2rem", xl:"0rem", lg:"0rem"}}>
        <Flex direction="column" gap="1" textAlign="left" width="80%" mt="3rem" margin={{ base: "auto", md: "3rem 0px 0 " }}>
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
              value={plotNumber}
              onChange={handlePlotNumberChange}
              border="none"
              width="80px"
              height="30px"
              color="primary"
              fontWeight="bold"
              backgroundColor="#ededed"
              padding="2px 6px"
              _hover={{ borderColor: "none" }}
              _focus={{ boxShadow: "none", borderColor: "none" }}
            />
          </Flex>
          {transformDetailsData.map((data, index) => (
            <InputLabel key={index} label={data.label} color="primary">
              <Input
                value={data.value || 'N/A'}
                readOnly
                border="none"
                borderRadius="0px"
                color="#384a57"
                borderBottom={index === transformDetailsData.length - 1 ? "none" : "2px"}
                height="24px"
                padding="0px"
                borderColor="primary"
                mb="0.4rem"
                _hover={{ borderColor: "primary" }}
                _focus={{ boxShadow: "none", borderColor: "primary" }}
              />
            </InputLabel>
          ))}
        </Flex>
      </Box>
    </Box>
  );
};

export default InputContainer;
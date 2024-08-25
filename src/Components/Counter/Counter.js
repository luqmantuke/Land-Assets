
import { Box, Text } from '@chakra-ui/react';
import { useState, useEffect } from 'react';

const Counter = () => {
  return (
    <Box
      bg="white"
      p="15px"
      margin='auto'
      width='82%'
      borderRadius="8px"
      display="flex"
      flexDirection={{base:'column',md:'row'}}
      justifyContent='space-evenly'
      gap='2rem'
      alignItems="center"
      position='relative'
      bottom='30px'
      boxShadow="0 0 5px rgba(0, 0, 0, 0.1)"
    >
      <CounterComponent endNumber={1400} text='Available Plots'/>
      <CounterComponent endNumber={107} text='Customers'/>
      <CounterComponent endNumber={22} text='Estates'/>
    </Box>
  );
};

const CounterComponent = ({ endNumber, text }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const duration = 2000; // Animation duration in milliseconds
    const interval = 50; // Update interval in milliseconds
    const steps = duration / interval;
    const increment = endNumber / steps;

    let currentCount = 0;
    const timer = setInterval(() => {
      currentCount += increment;
      if (currentCount >= endNumber) {
        clearInterval(timer);
        setCount(endNumber);
      } else {
        setCount(Math.floor(currentCount));
      }
    }, interval);

    return () => clearInterval(timer);
  }, [endNumber]);

  return (
    <Box display='flex' flexDirection='column' >
      <Text fontSize={{base:'2rem',md:'3rem'}} color='btn_bg' fontWeight='bolder'>
        {count}+
      </Text>
      <Text fontSize={{base:'1rem',md:'1.5rem'}} color='btn_bg'>
        {text}
      </Text>
    </Box>
  );
};

export default Counter;

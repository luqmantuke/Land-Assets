
import { Box, Text } from '@chakra-ui/react';

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
     <CounterComponent number='1400+' text='Available Plots'/>
     <CounterComponent number='107+' text='Customers'/>
     <CounterComponent number='22+' text='Estates'/>
    </Box>
  );
};

const CounterComponent=({number,text})=>{
   
   return(

    <Box display='flex' flexDirection='column' >
        <Text fontSize={{base:'2rem',md:'3rem'}} color='btn_bg' fontWeight='bolder'>
         {number}
        </Text>
        <Text fontSize={{bse:'1rem',md:'1.5rem'}} color='btn_bg'>
            {text}
        </Text>
    </Box>
   )
}

export default Counter;


import {CloseIcon,TimeIcon } from "@chakra-ui/icons";
import { Box, Flex, Heading, Text, } from '@chakra-ui/react';
import { Routes, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { initialNotificationsData } from "../DashboardTable/TablesData";




const Notification = () => {
  const [notificationsData, setNotificationsData] = useState(initialNotificationsData);

  const navigate = useNavigate();

  // Function to handle notification click
  const handleNotificationClick = (notificationId) => {
    // Redirect to NotificationDetails component with the notification ID
    navigate(`${notificationId}`);
  };
  // Function to handle notification close
  const handleNotificationClose = (notificationId) => {
    // Filter out the notification with the specified ID
    const updatedNotifications = notificationsData.filter((notification) => notification.id !== notificationId);
    setNotificationsData(updatedNotifications);
  };

  return (
    <Box width='100%' height='400px' m="auto" mt={{ base:'0rem',md:"4"}} overflowY="auto">
      {notificationsData.map((notification) => (
        <Flex
          key={notification.id}
          p="3"
          flexDirection={{base:'column',md:'row'}}
          borderBottom="1px solid"
          borderColor={( 'gray.600')}
          align="center"
          alignItems='start'
          gap='1rem'
          _hover={{cursor:'pointer'}}
         
          justify="space-between"
        >
        
         <CloseIcon color='white' bg='#DCDCDC' height='20px' width='20px' borderRadius='5px' padding='5px' onClick={() => handleNotificationClose(notification.id)} _hover={{cursor:'pointer'}}/>
        
       
          {/* Notification Content */}
          <Flex direction="column" width='70%' align="start"  onClick={() => handleNotificationClick(notification.id)}>
            <Heading
              as="h3"
              fontSize="12px"
              fontWeight="normal"
              textAlign='left'
              bg={notification.type === 'notification' ? 'primary' : 'orange'}
              color='white'
              p="1"
              borderRadius="2px"
            >
              {notification.heading}
            </Heading>

            <Text   textAlign='left' fontWeight="bold" color="black" mt="2">
              {notification.content}
            </Text>
            <Text textOverflow='clip'   textAlign='left' fontWeight="normal" color="gray.400" mt="2" >
              {notification.desc}
            </Text>
           
          </Flex>

          {/* Date and Time with Clock Icon */}
          <Flex direction="row" align="start" gap='0.3rem'>
         <TimeIcon/>  
         <Text fontSize='10px'>
            {notification.date_time}
         </Text>
          </Flex>
        </Flex>
      ))}
<Routes>

</Routes>

    </Box>
  );
};



export default Notification;

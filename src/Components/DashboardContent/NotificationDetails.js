// NotificationDetails.js
import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import { Link, useParams } from "react-router-dom";
import { CloseIcon, TimeIcon } from "@chakra-ui/icons";

const NotificationDetails = ({ notificationsData }) => {
  const { id } = useParams();
  console.log(id);

  // Find the clicked notification based on the ID from the URL params
  const selectedNotification = notificationsData.find(
    (notification) => notification.id === parseInt(id)
  );

  return (
    <Box>
      <Flex
        gap={{ base: "2rem", md: "4rem" }}
        alignItems="flex-start"
        flexDirection={{ base: "column", md: "row" }}
      >
        <Link to="/customerDash/notifications/">
          <CloseIcon
            color="white"
            bg="#DCDCDC"
            height="20px"
            width="20px"
            borderRadius="5px"
            padding="5px"
            _hover={{ cursor: "pointer" }}
          />
        </Link>
        <Box display="flex" flexDirection="column" width="70%">
          <Heading
            as="h3"
            fontSize="12px"
            fontWeight="normal"
            textAlign="center"
            width="100px"
            bg={
              selectedNotification.type === "notification"
                ? "primary"
                : "orange"
            }
            color="white"
            p="1"
            py="5px"
            borderRadius="4px"
          >
            {selectedNotification.heading}
          </Heading>
          <Text textAlign="left" fontWeight="bold" color="black" mt="3">
            {selectedNotification.content}
          </Text>
          <Text textAlign="left">{selectedNotification.desc}</Text>
        </Box>

        <Flex direction="row" align="start" gap="0.3rem">
          <TimeIcon />
          <Text fontSize="10px">{selectedNotification.date_time}</Text>
        </Flex>
      </Flex>
    </Box>
  );
};

export default NotificationDetails;

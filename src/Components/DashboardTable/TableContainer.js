import React from "react";
import {
  Box,
  Flex,
  Heading,
  Button,
  Divider,
  VStack,
  HStack,
  Text,
  Image,
} from "@chakra-ui/react";
import DashTable from "./DashTable";
import { Link } from "react-router-dom";
import Notification from "../DashboardContent/Notification";
import { SupportComp } from "../Support/SupportComp";
import NotificationDetails from "../DashboardContent/NotificationDetails";
import { initialNotificationsData } from "./TablesData";
import Settings from "../DashboardContent/Settings";



const TableContainer = ({ heading, buttons, elements, tableData, boxType,dashType }) => {
  return (
    <Box
      py={{ base: "30px", md: "40px" }}
      px={{ base: "10px", md: "50px" }}
      backgroundColor="white"
      border="1px solid white"
      borderRadius="10px"
      m="2rem"
    >
      <Link to={dashType==='agent'?'/agentDash':'/customerDash'}>
        <Image
          src={`${process.env.PUBLIC_URL}/Assets/SVG/Left-Arrow.svg`}
          width="30px"
          mb="1.5rem"
        />
      </Link>
      {/* Heading and Buttons */}
      <Flex
        align="center"
        flexDirection={{ base: "column", md: "row" }}
        gap="1rem"
        justify="space-between"
        mb="4"
      >
        <Heading fontSize="1.3rem">{heading.toUpperCase()}</Heading>
        <HStack spacing="2">
          {buttons.map((button, index) => (
            <Button
              key={index}
              backgroundColor={
                index === buttons.length - 1 ? "primary" : "gray.200"
              }
              color={index === buttons.length - 1 ? "white" : "font_gray"}
              fontWeight="normal"
              height="25px"
              px={{ base: "7px", md: "15px" }}
              _hover={{ backgroundColor: "green.700", color: "white" }}
              fontSize={{ base: "8px", md: "12px" }}
            >
              {button}
            </Button>
          ))}
        </HStack>
      </Flex>

      {/* Divider Line */}
      <Divider mb="4" height="2px" bg="black" />

      <HStack
        flexDirection={{ base: "column", md: "row" }}
        alignItems="center"
        spacing={{ base: "1.5rem", md: "1rem" }}
        align="start"
        mt="2rem"
        mb="2rem"
        justifyContent="space-around"
      >
        {elements.map(
          (element, index) =>
            element.data && (
              <Flex justifyContent="center" key={index} align="start">
                {/* Colored Box */}
                <Box
                  w="3"
                  h="3"
                  borderRadius="3px"
                  bgColor={element.color}
                  mr="3"
                  mt="2px"
                ></Box>

                {/* Text Lines */}
                <VStack align="start" spacing="0">
                  <Text
                    fontSize={{ base: "11px", md: "13px" }}
                    fontWeight="bold"
                  >
                    {element.data.title}
                  </Text>
                  <Text
                    fontSize={{ base: "1rem", md: "1.5rem" }}
                    fontWeight="bold"
                  >
                    {element.data.description}
                  </Text>
                </VStack>
              </Flex>
            )
        )}
      </HStack>

      {boxType === "notification" ? (
        <Notification />
      ) : boxType === "support" ? (
        <SupportComp />
      ) : boxType === "notificationDetail" ? (
        <NotificationDetails notificationsData={initialNotificationsData} />
      ) :  boxType === "settings"?(
        <Settings/>
      
           
      ):(
        <DashTable data={tableData} />
      )
    }
    </Box>
  );
};

export default TableContainer;

import React from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  HStack,
  Text,
  Image,
  Divider,
  Button,
} from "@chakra-ui/react";

const ShareModal = ({
  isOpen,
  onClose,
  title,
  icons,
  layoutType,
  additionalText,
}) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent minH={{base:'90px',md:'120px'}} minWidth={{base:'200px',md:'800px'}} padding={{ base: "20px 10px",md:"20px 40px" }} pt={{base:'15px',md:'20px'}} mx={{base:'1rem',md:'0'}}>
        <ModalHeader
          margin="0px"
          padding="0px"
          fontSize="1rem"
          fontWeight="bold"
          mb="1rem"
        >
          {title}
        </ModalHeader>
        <ModalCloseButton />
        <ModalBody display="flex" flexDir="column" gap="1rem" padding="0px">
          <Divider
            orientation="horizontal"
            size="large"
            opacity={1}
            borderColor="GrayText"
          />
          {layoutType === "icons" ? (
            <>
              <HStack spacing={4} justifyContent="space-between">
                {icons.map((icon, index) => (
                 
                    <Image
                      key={index}
                      src={`${process.env.PUBLIC_URL}/Assets/Images/${icon}`}
                      alt={`Icon ${index}`}
                      width={{base:'30px',md:'60px'}}
                      height={{base:'30px',md:'60px'}}
                    />
                  
                ))}
              </HStack>

              {additionalText && <Text mt={4}>{additionalText}</Text>}
            </>
          ) : (
            <>
              <HStack justifyContent="space-between">
                <Text color="primary" fontSize={{base:'0.7rem',md:'1rem'}}>{additionalText}</Text>
                <Button
                  backgroundColor="btn_bg"
                  border="2px solid"
                  px='20px'
                  borderColor='btn_border'
                  _hover={{
                    backgroundColor: "#091c10",
                  }}
                  color="white"
                >
                  View
                </Button>
              </HStack>
            </>
          )}
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default ShareModal;

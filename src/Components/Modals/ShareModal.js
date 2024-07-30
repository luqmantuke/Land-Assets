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
  useToast,
} from "@chakra-ui/react";

const ShareModal = ({
  isOpen,
  onClose,
  title,
  icons,
  layoutType,
  additionalText,
  sharedItem,
}) => {
  const toast = useToast();
  const getShareMessage = () => {
    if (sharedItem) {
      const itemType = sharedItem?.plot_name ? 'plot' : 'estate';
      const itemName = sharedItem?.plot_name || sharedItem?.name;
      const itemPrice = sharedItem?.cash_price_per_sqm || sharedItem?.cash_price_per_sqm;
      return `Check out this ${itemType} "${itemName}" on LandAsset, available for ${itemPrice}/SQM! ${window.location.href}`;
    }
    return `Check out this amazing opportunity on LandAsset! ${window.location.href}`;
  };
  const handleShare = (platform) => {
    const shareMessage = getShareMessage();

    const shareUrl = window.location.href; // Get the current URL
    let shareLink = '';

    
    switch (platform) {
      case 'whatsapp':
        shareLink = `https://wa.me/+255787835830?text=${encodeURIComponent(shareMessage)}`;
        break;
        case 'facebook':
          shareLink = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.href)}&quote=${encodeURIComponent(shareMessage)}`;
          break;
        case 'twitter':
          shareLink = `https://twitter.com/intent/tweet?text=${encodeURIComponent(shareMessage)}`;
          break;
        case 'linkedin':
          shareLink = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(window.location.href)}&summary=${encodeURIComponent(shareMessage)}`;
          break;
        case 'copy-link':
          navigator.clipboard.writeText(shareMessage).then(() => {
            toast({
              title: "Message copied",
              description: "The share message has been copied to your clipboard",
              status: "success",
              duration: 3000,
              isClosable: true,
            });
          });
          return;
      default:
        console.log(`Sharing via ${platform} is not implemented`);
        return;
    }

    if (shareLink) {
      window.open(shareLink, '_blank');
    }
  };

  const getPlatformFromIcon = (icon) => {
    return icon.split('@')[0];
  };

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
                    cursor="pointer"
                    onClick={() => handleShare(getPlatformFromIcon(icon))}
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

import React, { useState } from "react";
import {
  Box,
  Flex,
  Button,
  HStack,
  VStack,
  Collapse,
  Image,
  Text,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import { useAuth } from "../../../Hooks/Auth/AuthenticationContext";

const Navbar = () => {
  const auth = useAuth();

  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <Box paddingTop="1rem">
      <Flex
        align="center"
        mx={{ base: "1rem", md: "9rem" }}
        p={{ base: 3, md: 2 }}
        pt="1rem"
        justify="space-between"
      >
        {/* Company Logo */}
        <Box>
          <Image
            src={`${process.env.PUBLIC_URL}/Assets/Images/LandAssets-Logo.png`}
            alt="Company Logo"
            height={{ base: "30px", md: "45px" }}
          />
        </Box>

        {/* Hamburger Menu (Mobile) */}
        <Box display={{ base: "block", md: "none" }} onClick={handleToggle}>
          {isOpen ? (
            <></>
          ) : (
            <HamburgerIcon boxSize={6} color="white" />
          )}
        </Box>

        {/* Close Button (Mobile) */}
        {isOpen && (
          <Box
            display={{ base: "block", md: "none" }}
            onClick={handleClose}
            position="absolute"
            top="1rem"
            right="1rem"
            zIndex="999"
          >
            <CloseIcon boxSize={6} color="white" />
          </Box>
        )}

        {/* Navbar Links and Buttons (Desktop) */}
        <HStack spacing={4} display={{ base: "none", md: "flex" }}>
          <Link to="/">
            <NavbarLink text="Home" />
          </Link>
          <Link to='/aboutUs'>
            <NavbarLink text="About Us" />
          </Link>
          <Link to="/services">
            <NavbarLink text="Services" />
          </Link>
          <Link to="/support">
            <NavbarLink text="Support" />
          </Link>

          <Link to="/contactUs">
            <NavbarLink text="Contact Us" />
          </Link>
          <Flex direction="row" gap={2}>
           {auth.isAuthenticated === true ? <Link to="/customerDash">   <NavbarButton text="Dashboard" bg_color="none" />  </Link> :
            <Link to="/login">
              <NavbarButton text="Sign in" bg_color="none" />
            </Link> 
            }
            {auth.user.isAgent === 'True' ? <Link to="/agentDash">   <NavbarButton text="Agent Dashboard" bg_color="none" />  </Link> :
            <Link to="/signUp">
              <NavbarButton text="Become An Agent" bg_color="btn_bg" />
            </Link>}
          </Flex>
        </HStack>

        {/* Navbar Links and Buttons (Mobile) */}
        <Collapse in={isOpen} animateOpacity>
          <VStack
            spacing={4}
            align={{ base: "center", md: "stretch" }}
            mt={{ base: 4, md: 0 }}
            display={{ md: "none", base: "flex" }}
            width="100%"
          >
            <Link to="/">
              <NavbarLink text="Home" />
            </Link>
            <Link to="/aboutUs">
              <NavbarLink text="About Us" />
            </Link>
            <Link to="/services">
              <NavbarLink text="Services" />
            </Link>
            <Link to="/support">
              <NavbarLink text="Support" />
            </Link>

            <Link to="/contactUs">
              <NavbarLink text="Contact Us" />
            </Link>
            <Flex direction={{ base: "column", md: "row" }} gap={2}>
              <Link to="/login">
                <NavbarButton text="Sign in" bg_color="none" />
              </Link>
              <Link to="/signUp">
                <NavbarButton text="Become An Agent" bg_color="btn_bg" />
              </Link>
            </Flex>
          </VStack>
        </Collapse>
      </Flex>
    </Box>
  );
};

const NavbarLink = ({ text }) => {
  return (
    <Text
      href="#"
      _hover={{ borderBottom: `2px solid white`, color: "primary" }}
      color="white"
      padding="5px 5px"
      cursor="pointer"
      fontSize={12}
    >
      {text}
    </Text>
  );
};

const NavbarButton = ({ text, bg_color }) => {
  return (
    <Button
      variant="outline"
      color="white"
      border="2px solid"
      backgroundColor={bg_color}
      borderRadius="5px"
      borderColor="btn_border"
      padding={5}
      fontSize={{ base: "10px", md: "13px" }}
      fontWeight="normal"
      _hover={{ bgColor: "primary" }}
    >
      {text}
    </Button>
  );
};

export default Navbar;

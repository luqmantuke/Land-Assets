import React, { useState } from "react";
import {
  Box,
  Input,
  Button,
  VStack,
  HStack,
  Image,
  Text,
  Checkbox,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";

const LoginForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [check, setCheck] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [formError, setFormError] = useState(false);

  const handleCheck = () => {
    setCheck(!check);
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleLogin = () => {
    // Check for empty inputs
    if (!email || !password) {
      setError("Fill all inputs");
      setFormError(true);
    } else {
      // Perform login logic here
      setError("");
      setFormError(false); // Clear any previous error message
    }
  };

  return (
    <Box
      width={{ base: "60%", md: "50%" }}
      mx="auto"
      mt={8}
      p={6}
      py={{ base: "20px", md: "50px" }}
      px={{ base: "12px", md: "20px" }}
      bg="white"
      borderRadius="25px"
      boxShadow="md"
      position="relative"
    >
      <VStack
        spacing={{ base: "0.2rem", md: "0.5rem" }}
        align="stretch"
        margin={{ base: "0", md: "0 40px" }}
      >
        <Text
          textAlign="left"
          fontSize={{ base: "1.5rem", md: "2rem" }}
          fontWeight="bold"
        >
          Login
        </Text>
        <Box display="flex" gap={{ base: "0.2rem", md: "0.5rem" }}>
          <Text textAlign="left" fontSize={{ base: "7px", md: "15px" }}>
            Dont have an account?{" "}
          </Text>
          <Link to="/signUp">
            <Text
              color="primary"
              fontSize={{ base: "7px", md: "15px" }}
              fontWeight="bold"
              _hover={{ cursor: "pointer" }}
            >
              Create account{" "}
            </Text>
          </Link>
        </Box>

        <CustomInput
          inputTxt="Email Address"
          labelLeft={{ base: "30px", md: "90px" }}
          labelTop={{ base: "38%", md: "37%" }}
          inputImg="email-icon@4x.png"
          iconLeft={{ base: "80%", md: "33rem" }}
          iconTop={{ base: "41.5%", md: "41.5%" }}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          errorCheck={formError}
        />
        <CustomInput
          inputType={showPassword ? "text" : "password"}
          inputTxt="Password"
          labelLeft={{ base: "30px", md: "90px" }}
          labelTop={{ base: "59.7%", md: "59%" }}
          inputImg={showPassword ? "Hide-pass-icon@4x.png" : "show-pass-icon@4x.png"}
          iconLeft={{ base: "80%", md: "33rem" }}
          iconTop={{ base: "63%", md: "63%" }}
          isPassword={!showPassword}
          func={togglePasswordVisibility}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          errorCheck={formError}
        />

        {/* Error message */}
        {error && (
          <Text
            fontSize={{ base: "8px", md: "12px" }}
            color="red"
            mt="2px"
            pos="absolute"
            top="70%"
            ml={{ base: "17px", md: "30px" }}
          >
            {error}
          </Text>
        )}
        <HStack mt="10px" justifyContent="space-between">
          <Box display="flex" alignItems="center" gap="0px" width="100%">
            <Checkbox
              onChange={handleCheck}
              border="none"
              colorScheme="primary"
              icon={
                <Image
                  src={`/Assets/Images/${
                    check ? "check@4x.png" : "uncheck@4x.png"
                  }`}
                  width={check ? "20px" : "9px"}
                  mt={check ? "0px" : "2px"}
                  ml={check ? "3px" : "0px"}
                />
              }
            />
            <Text color="GrayText" fontSize={{ base: "6px", md: "12px" }}>
              Keep me Logged in
            </Text>
          </Box>
           <Link to={email ==='agent' && password === 'agent123' ? '/agentDash': email ==='customer' && password === 'customer123'?'/customerDash':null}>
          
          <Button
            borderRadius="40px"
            margin="auto"
            height={{ base: "30px", md: "50px" }}
            backgroundColor="#37ab46"
            color="white"
            fontSize={{ base: "8px", md: "12px" }}
            px={{ base: "1.3rem", md: "3rem" }}
            _hover={{ cursor: "pointer", backgroundColor: "btn_bg" }}
            onClick={handleLogin}
          >
            Login
          </Button>
          </Link>
        </HStack>
      </VStack>
    </Box>
  );
};

const CustomInput = ({
  inputTxt,
  labelTop,
  labelLeft,
  labelRight,
  inputImg,
  iconLeft,
  iconTop,
  inputType,
  func,
  value,
  onChange,

  errorCheck,
}) => {
  const isInputEmpty = value === "";

  return (
    <>
      <Input
        type={inputType}
        placeholder=" "
        mt="10px"
        borderRadius="40"
        fontSize={{ base: "10px", md: "12px" }}
        border={`1px solid ${isInputEmpty && errorCheck ? "red" : "#ccc"}`}
        p={4}
        backgroundColor="#F6F8F8"
        pb={{ base: "10px", md: "0" }}
        pl={{ base: "17px", md: "30px" }}
        mb={{ base: "0.5rem", md: "1rem" }}
        height={{ base: "30px", md: "60px" }}
        value={value}
        onChange={onChange}
      />
      <Box
        pos="absolute"
        top={labelTop}
        zIndex="1"
        right={labelRight}
        transform="translateY(-50%)"
        left={labelLeft}
        fontWeight="bold"
        color={isInputEmpty && errorCheck ? "red" : "#B8B9B9"}
        fontSize={{ base: "5px", md: "10px" }}
      >
        {inputTxt}
      </Box>
      <Image
        src={`${process.env.PUBLIC_URL}/Assets/Images/${inputImg}`}
        width={{ base: "10px", md: "20px" }}
        pos="absolute"
        top={iconTop}
        onClick={func}
        zIndex="1"
        transform="translateY(-50%)"
        left={iconLeft}
      />
    </>
  );
};

export default LoginForm;

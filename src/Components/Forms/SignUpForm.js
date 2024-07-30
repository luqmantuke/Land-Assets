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
  useToast,
} from "@chakra-ui/react";

import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../Hooks/Auth/AuthenticationContext";
import { registerUser } from "../../Api/Auth/AuthenticationApi";

const SignUpForm = () => {
  const auth = useAuth();
  const [showPassword, setShowPassword] = useState(false);
  const [check, setCheck] = useState(false);
  const [formError, setFormError] = useState(false);
  const toast = useToast();
  const navigate = useNavigate();

  // Input states
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [emailAddress, setEmailAddress] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleCheck = () => {
    setCheck(!check);
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleSignUp = () => {
    // Check for empty inputs and password match
    if (
      !firstName ||
      !lastName ||
      !emailAddress ||
      !mobileNumber ||
      !password ||
      !confirmPassword
    ) {
      setFormError(true);
      toast({
        title: "Error",
        description: "Please fill all fields",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    } else if (password !== confirmPassword) {
      setFormError(true);
      toast({
        title: "Error",
        description: "Passwords do not match",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    } else {
      setFormError(false);
      signUpUser();
    }
  };

  async function signUpUser() {
    setIsLoading(true);
    try {
      const response = await registerUser(
        `${firstName} ${lastName}`, // username
        emailAddress,
        password,
        mobileNumber,
        firstName,
        lastName
      );
      console.log(`response`, response);
      console.log(`response.data`, response.status_code);
      if (response.status_code === 201) {
        auth.login(response);
        toast({
          title: "Account created",
          description: "You have successfully signed up",
          status: "success",
          duration: 3000,
          isClosable: true,
        });
        navigate('/');
      } else {
        toast({
          title: "Error",
          description: response.message || "An error occurred during registration",
          status: "error",
          duration: 5000,
          isClosable: true,
        });
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "An error occurred while creating an account. Please contact support.",
        status: "error",
        duration: 5000,
        isClosable: true,
      });
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <Box
      width={{ base: "70%", md: "50%" }}
      mx="auto"
      mt={8}
      p={6}
      py={{ base: "20px", md: "50px" }}
      px={{ base: "15px", md: "30px" }}
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
          fontSize={{ base: "0.7rem", md: "2rem" }}
          fontWeight="bold"
        >
          Create new account
        </Text>
        <Box display="flex"  gap={{ base: "0.2rem", md: "0.5rem" }}>
          <Text textAlign="left" fontSize={{ base: "7px", md: "15px" }}>
            Already a member?
          </Text>
          <Link to="/login">
            <Text
              color="primary"
              fontSize={{ base: "7px", md: "15px" }}
              fontWeight="bold"
              _hover={{ cursor: "pointer" }}
            >
              Login
            </Text>
          </Link>
        </Box>
        <Box pt={{ base: "12px", md: "20px" }}>
          <HStack flexDirection={{base:'column',md:'row'}} gap={{base:'0px',md:'0.5rem'}}>
            <CustomInput
              inputTxt="First Name"
              labelLeft={{ base: "30px", md: "100px" }}
              labelTop={{ base: "19%", md: "26.5%" }}
              inputImg="profile@4x.png"
              iconLeft={{ base: "80%", md: "17rem" }}
              iconTop={{ base: "21.5%", md: "28.5%" }}
              id="firstName"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              formError={formError}
            />
            <CustomInput
              inputTxt="Last Name"
              labelLeft={{ base: "30px", md: "22rem" }}
              labelTop={{ base: "29%", md: "26.5%" }}
              inputImg="profile@4x.png"
              iconLeft={{ base: "80%", md: "32.5rem" }}
              iconTop={{ base: "31%", md: "28.5%" }}
              id="lastName"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              formError={formError}
            />
          </HStack>
          <CustomInput
            inputTxt="Email Address"
            labelLeft={{ base: "30px", md: "100px" }}
            labelTop={{ base: "39%", md: "39%" }}
            inputImg="email-icon@4x.png"
            iconLeft={{ base: "80%", md: "32.5rem" }}
            iconTop={{ base: "41%", md: "41%" }}
            id="emailAddress"
            value={emailAddress}
            onChange={(e) => setEmailAddress(e.target.value)}
            formError={formError}
          />
          <CustomInput
            inputTxt="Mobile Number"
            labelLeft={{ base: "30px", md: "100px" }}
            labelTop={{ base: "59%", md: "51.5%" }}
            inputImg="mobile@4x.png"
            iconLeft={{ base: "80%", md: "32.5rem" }}
            iconTop={{ base: "51%", md: "53.5%" }}
            id="mobileNumber"
            value={mobileNumber}
            onChange={(e) => setMobileNumber(e.target.value)}
            formError={formError}
          />

          <HStack flexDirection={{base:'column',md:'row'}} gap={{base:'0px',md:'0.5rem'}}>
            <CustomInput
              inputType={showPassword ? "text" : "password"}
              inputTxt="Password"
              labelLeft={{ base: "30px", md: "100px" }}
              labelTop={{ base: "59%", md: "64%" }}
              inputImg={showPassword ? "Hide-pass-icon@4x.png" : "show-pass-icon@4x.png"}
              iconLeft={{ base: "80%", md: "17rem" }}
              iconTop={{ base: "61%", md: "66.5%" }}
              isPassword={!showPassword}
              func={togglePasswordVisibility}
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              formError={formError}
            />
            <CustomInput
              inputType={showPassword ? "text" : "password"}
              inputTxt="Confirm Password"
              labelLeft={{ base: "30px", md: "22rem" }}
              labelTop={{ base: "69%", md: "64%" }}
              inputImg={showPassword ? "Hide-pass-icon@4x.png" : "show-pass-icon@4x.png"}
              iconLeft={{ base: "80%", md: "32.5rem" }}
              iconTop={{ base: "71%", md: "66.5%" }}
              isPassword={!showPassword}
              func={togglePasswordVisibility}
              id="confirmPassword"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              formError={formError}
            />
          </HStack>

          {formError && (
            <Text
              fontSize={{ base: "8px", md: "12px" }}
              color="red"
              mt="2px"
              pos="absolute"
              top={{base:'73%',md:'72%'}}
              ml={{ base: "17px", md: "30px" }}
            >
              Fill all inputs
            </Text>
          )}

          <HStack mt="10px" justifyContent="space-between">
            <Box
              display="flex"
              alignItems="center"
              gap={{ base: "0px", md: "0.2rem" }}
              width="100%"
            >
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
              <Box>
              <Text
                color="GrayText"
                textAlign="left"
                fontSize={{ base: "6px", md: "9px" }}
              >
                I agree to LandAssets
              </Text>
              <Text
                color="primary"
                textAlign="left"
                fontSize={{ base: "6px", md: "9px" }}
              >
                Privacy Policy & terms
              </Text>
              </Box>
              
            </Box>
            <Button
      borderRadius="40px"
      margin="auto"
      height={{ base: "20px", md: "50px" }}
      backgroundColor="#37ab46"
      color="white"
      fontSize={{ base: "6px", md: "12px" }}
      px={{ base: "1.3rem", md: "3rem" }}
      _hover={{ cursor: "pointer", backgroundColor: "btn_bg" }}
      onClick={handleSignUp}
      isLoading={isLoading}
      loadingText="Creating Account"
    >
      Create Account
    </Button>
          </HStack>
        </Box>

        <HStack
          mt={{ base: "1.5rem", md: "3rem" }}
          spacing={{ base: "0.4rem", md: "1rem" }}
        >
          <CustomText txt="Terms & Conditions" />
          <CustomText txt=" Privacy Policy" />
          <CustomText txt=" Help" />
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
  id,
  value,
  onChange,
  formError,
}) => {
  const isInputEmpty = value === "";
  return (
    <>
      <Input
        type={inputType}
        placeholder=" "
        mt={{base:'0px',md:'10px'}}
        borderRadius="40"
        fontSize={{ base: "8px", md: "12px" }}
        border={`1px solid ${formError && isInputEmpty ? "red" : "#ccc"}`}
        p={4}
        backgroundColor="#F6F8F8"
        pb="10px"
        pl={{ base: "12px", md: "30px" }}
        mb={{ base: "0.5rem", md: "1rem" }}
        height={{ base: "30px", md: "60px" }}
        id={id}
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
        color={formError && isInputEmpty ? "red" : "#B8B9B9"}
        fontSize={{ base: "5px", md: "10px" }}
      >
        {inputTxt}
      </Box>
      <Image
        src={`${process.env.PUBLIC_URL}/Assets/Images/${inputImg}`}
        width={{ base: "9px", md: "15px" }}
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

const CustomText = ({ txt }) => {
  return (
    <Text
      fontSize={{ base: "6px", md: "12px" }}
      _hover={{ cursor: "pointer", color: "primary" }}
    >
      {txt}
    </Text>
  );
};

export default SignUpForm;

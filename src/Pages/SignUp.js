import React from "react";

import { Hero } from "../Components/HeroBanner/Hero";

import Footer from "../Components/Footer/Footer";
import SignUpForm from "../Components/Forms/SignUpForm";

export const SignUp = () => {
  return (
    <div>
      <Hero
        heading={`Sign Up`}
        desc={`Create an account to get started on your property journey`}
        margin="4rem"
      />
      <SignUpForm/>

      <Footer />
    </div>
  );
};

import React from "react";
import { Box } from "@chakra-ui/react";
import Navbar from "./Navbar/Navbar.js";
import { PagesContent } from "./HeroContent/PagesContent.js";

export const Hero = ({ heading, desc, margin, secondDesc, mb }) => {
  return (
    <Box
      width="auto"
      bgImage={`${process.env.PUBLIC_URL}/Assets/Images/Home-hero-bg.jpg`}
      bgSize="cover"
      bgPosition="center"
    >
      <Navbar />
      <PagesContent
        heading_text={heading}
        desc={desc}
        mbottom={margin}
        secondDesc={secondDesc}
        mb={mb}
      />
    </Box>
  );
};

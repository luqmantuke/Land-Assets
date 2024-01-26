import React, { useState } from "react";
import ButtonsContainer from "../Containers/ButtonsContainer";
import InputContainer from "../Containers/InputContainer";
import { Box, Image } from "@chakra-ui/react";
import ShareModal from "../Modals/ShareModal.js";
import { estateData, plotData } from "./estateData.js";
import DateModal from "../Modals/DateModal.js";
import ReserveModal from "../Modals/ReserveModal.js";
import BuyModal from "../Modals/BuyModal.js";
import { Link } from "react-router-dom";

export const EstateSection = ({ isAgent }) => {
  // Share Modal useStates
  const [shareModalOpen, setshareModalOpen] = useState(false);
  const [modalTitle, setModalTitle] = useState("");
  const [modalIcons, setModalIcons] = useState("");
  const [modalLayoutType, setModalLayoutType] = useState("");
  const [modalAdditionalText, setModalAdditionalText] = useState("");
  // Date Modal useState
  const [dateModalOpen, setdateModalOpen] = useState(false);
  //Reserve Modal UseStates
  const [reserveModalOpen, setreserveModalOpen] = useState(false);
  //Buy Modal UseState
  const [buyModalOpen, setBuyModalOpen] = useState(false);

  //Buttons Data
  const estateLBtns = [
    {
      icon: "Share@4x.png",
      text: "Share this Estate",
      onClick: () =>
        handleButtonClick(
          "SHARE THIS ESTATE",
          [
            "whatsapp@4x.png",
            "instagram@4x.png",
            "facebook@4x.png",
            "youtube@4x.png",
            "twitter@4x.png",
            "linkedin@4x.png",
            "copy-link@4x.png",
          ],
          "icons",
          ""
        ),
    },
  ];
  const estateRBtns = [
    {
      text: "Book Physical Visit",
      onClick: () => openDateModal(),
    },
  ];
  const plotLBtns = [
    {
      icon: "client-wishlist@4x.png",
      text: "Add to Wish List",
      onClick: () =>
        handleButtonClick(
          "Wishlist",
          [],
          "headingOnly",
          "Successfully added to wish list"
        ),
    },
    {
      icon: "Share@4x.png",
      text: "Share this Estate",

      onClick: () =>
        handleButtonClick(
          "SHARE THIS ESTATE",
          [
            "whatsapp@4x.png",
            "instagram@4x.png",
            "facebook@4x.png",
            "youtube@4x.png",
            "twitter@4x.png",
            "linkedin@4x.png",
            "copy-link@4x.png",
          ],
          "icons",
          ""
        ),
    },
  ];

  const plotRBtns = [
    {
      text: "Buy This Plot",
      onClick: () => OpenBuyModal(),
    },
    {
      text: "Reserve This Plot",
      onClick: () => openReserveModal(),
    },
    {
      text: "Book Physical Visit",
      onClick: () => openDateModal(),
    },
  ];

  //Share Modal Function
  const handleButtonClick = (
    title,
    icons,
    modalLayoutType,
    modalAdditionalText
  ) => {
    setModalTitle(title);
    setModalIcons(icons);
    setModalLayoutType(modalLayoutType);
    setModalAdditionalText(modalAdditionalText);
    setshareModalOpen(true);
  };

  //Date Modal Functions
  const openDateModal = () => {
    setdateModalOpen(true);
  };

  const closeDateModal = (modal) => {
    setdateModalOpen(false);
  };

  //Reserve Modal Functions
  const openReserveModal = () => {
    setreserveModalOpen(true);
  };

  const closeReserveModal = () => {
    setreserveModalOpen(false);
  };

  //Buy Modal Functions
  const OpenBuyModal = () => {
    setBuyModalOpen(true);
  };
  const closeBuyModal = () => {
    setBuyModalOpen(false);
  };

  return (
    <div>
      {isAgent ? (
        <Link to="/agentDash">
          <Image
            src={`${process.env.PUBLIC_URL}/Assets/SVG/Left-Arrow.svg`}
            width="30px"
            my="1.5rem"
            ml="2rem"
          />
        </Link>
      ) : (
        <></>
      )}

      <Box>
        <InputContainer inputData={estateData} />
        <ButtonsContainer
          leftButtons={estateLBtns}
          rightButtons={estateRBtns}
          flex_dir={"row"}
          Lbtn_margin={"3rem"}
          Rbtn_margin={"3rem"}
          box_height={"170px"}
        />
        <ShareModal
          isOpen={shareModalOpen}
          onClose={() => setshareModalOpen(false)}
          title={modalTitle}
          icons={modalIcons}
          layoutType={modalLayoutType}
          additionalText={modalAdditionalText}
        />

        <DateModal onClose={closeDateModal} isOpen={dateModalOpen} />
        <ReserveModal onClose={closeReserveModal} isOpen={reserveModalOpen} />
        <BuyModal onClose={closeBuyModal} isOpen={buyModalOpen} />
      </Box>

      <Box marginTop="2rem">
        <InputContainer inputData={plotData} />
        <ButtonsContainer
          leftButtons={plotLBtns}
          rightButtons={plotRBtns}
          flex_dir={"column-reverse"}
          Lbtn_margin={"0.5rem"}
          Rbtn_margin={"4rem"}
          box_height={"200px"}
        />
      </Box>
    </div>
  );
};

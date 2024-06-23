import React, { useState } from "react";
import ButtonsContainer from "../Containers/ButtonsContainer";
import InputContainer from "../Containers/InputContainer";
import { Box, Image,Spinner,useToast } from "@chakra-ui/react";
import ShareModal from "../Modals/ShareModal.js";
import DateModal from "../Modals/DateModal.js";
import ReserveModal from "../Modals/ReserveModal.js";
import BuyModal from "../Modals/BuyModal.js";
import { Link } from "react-router-dom";
import useEstateStore from "../../store/Estate/EstateStore.js";
import usePlotStore from "../../store/Plot/PlotStore.js";
import { usePlotFilterStore } from "../../store/Plot/PlotStore.js";

export const EstateSection = ({ isAgent }) => {
  const [shareModalOpen, setshareModalOpen] = useState(false);
  const [modalTitle, setModalTitle] = useState('');
  const [modalIcons, setModalIcons] = useState('');
  const [modalLayoutType, setModalLayoutType] = useState('');
  const [modalAdditionalText, setModalAdditionalText] = useState('');
  const [dateModalOpen, setdateModalOpen] = useState(false);
  const [reserveModalOpen, setreserveModalOpen] = useState(false);
  const [buyModalOpen, setBuyModalOpen] = useState(false);
  const estates = useEstateStore((state) => state.estates);
  const estateLoading = useEstateStore((state) => state.isLoading);
const plots = usePlotStore((state)=>state.plots)
const plotLoading = usePlotStore((state)=>state.isLoading)
const plotNumber = usePlotFilterStore((state) => state.plotNumber); // get the plot number from store
const toast = useToast()

 console.log(`plotsss ${plots}`)

  const estateLBtns = [
    {
      icon: 'Share@4x.png',
      text: 'Share this Estate',
      onClick: () =>
        handleButtonClick(
          'SHARE THIS ESTATE',
          [
            'whatsapp@4x.png',
            'instagram@4x.png',
            'facebook@4x.png',
            'youtube@4x.png',
            'twitter@4x.png',
            'linkedin@4x.png',
            'copy-link@4x.png',
          ],
          'icons',
          ''
        ),
    },
  ];
  const estateRBtns = [
    {
      text: 'Book Physical Visit',
      onClick: () => openDateModal(),
    },
  ];
  const plotLBtns = [
    {
      icon: 'client-wishlist@4x.png',
      text: 'Add to Wish List',
      onClick: () =>
        handleButtonClick(
          'Wishlist',
          [],
          'headingOnly',
          'Successfully added to wish list'
        ),
    },
    {
      icon: 'Share@4x.png',
      text: 'Share this Estate',

      onClick: () =>
        handleButtonClick(
          'SHARE THIS ESTATE',
          [
            'whatsapp@4x.png',
            'instagram@4x.png',
            'facebook@4x.png',
            'youtube@4x.png',
            'twitter@4x.png',
            'linkedin@4x.png',
            'copy-link@4x.png',
          ],
          'icons',
          ''
        ),
    },
  ];

  const plotRBtns = [
    {
      text: 'Buy This Plot',
      onClick: () => OpenBuyModal(),
    },
    {
      text: 'Reserve This Plot',
      onClick: () => openReserveModal(),
    },
    {
      text: 'Book Physical Visit',
      onClick: () => openDateModal(),
    },
  ];

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

  const openDateModal = () => {
    setdateModalOpen(true);
  };

  const closeDateModal = () => {
    setdateModalOpen(false);
  };

  const openReserveModal = () => {
    setreserveModalOpen(true);
  };

  const closeReserveModal = () => {
    setreserveModalOpen(false);
  };

  const OpenBuyModal = () => {
    setBuyModalOpen(true);
  };

  const closeBuyModal = () => {
    setBuyModalOpen(false);
  };
//   if(plotNumber != null){
// var exists = plots.some(plot => plot.plot_name === plotNumber)
// if(!exists){
//   toast({
//     title: 'Invalid Plot Number.',
//     description: "Please input the plot number as seen from the map.",
//     status: 'error',
//     duration: 3000,
//     isClosable: true,
//   })
// }}

  return (
    <div>
{estateLoading == true || plotLoading == true ? <Spinner /> :
    
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
      ) : null}
      {plotNumber ? plots?.map((plot) => {

      
       return (
      
        <Box key={plot.id} marginTop="2rem">

          <InputContainer inputData={plot} />
          <ButtonsContainer
            leftButtons={plotLBtns}
            rightButtons={plotRBtns}
            flex_dir={'column-reverse'}
            Lbtn_margin={'0.5rem'}
            Rbtn_margin={'4rem'}
            box_height={'200px'}
          />
        </Box>
      )}):  estates?.map((estate) => (
        <Box key={estate.id} marginTop="2rem">
          <InputContainer inputData={estate} />
          <ButtonsContainer
            leftButtons={estateLBtns}
            rightButtons={estateRBtns}
            flex_dir={'column-reverse'}
            Lbtn_margin={'0.5rem'}
            Rbtn_margin={'4rem'}
            box_height={'200px'}
          />
        </Box>
      ))}

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
    </div>
}</div>);

};
 
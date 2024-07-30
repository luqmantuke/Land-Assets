import React, { useState } from "react";
import ButtonsContainer from "../Containers/ButtonsContainer";
import InputContainer from "../Containers/InputContainer";
import { Box, Image, Spinner, useToast } from "@chakra-ui/react";
import ShareModal from "../Modals/ShareModal.js";
import DateModal from "../Modals/DateModal.js";
import ReserveModal from "../Modals/ReserveModal.js";
import BuyModal from "../Modals/BuyModal.js";
import { Link, useNavigate } from "react-router-dom";
import useEstateStore from "../../store/Estate/EstateStore.js";
import usePlotStore from "../../store/Plot/PlotStore.js";
import { usePlotFilterStore } from "../../store/Plot/PlotStore.js";
import { SERVER_URL } from "../../utilities/constant/api/api_constant.js";
import { useAuth } from "../../Hooks/Auth/AuthenticationContext.jsx";

export const EstateSection = ({ isAgent }) => {
  const [shareModalOpen, setShareModalOpen] = useState(false);
  const [dateModalOpen, setDateModalOpen] = useState(false);
  const [reserveModalOpen, setReserveModalOpen] = useState(false);
  const [buyModalOpen, setBuyModalOpen] = useState(false);
  const [selectedPlot, setSelectedPlot] = useState(null);
  const [loading, setLoading] = useState(false);

  const estates = useEstateStore((state) => state.estates);
  const estateLoading = useEstateStore((state) => state.isLoading);
  const plots = usePlotStore((state) => state.plots);
  const plotLoading = usePlotStore((state) => state.isLoading);
  const plotNumber = usePlotFilterStore((state) => state.plotNumber);
  const toast = useToast();
  const auth = useAuth();
  const navigate = useNavigate();

  const handleShareEstate = () => {
    setShareModalOpen(true);
  };

  const handleAddToWishlist = async (plot) => {
    if(auth.isAuthenticated === false) {
      navigate('/login');
    }else{
    setLoading(true);
    var formdata = new FormData();
    formdata.append("user_id", auth.user.userId);
    formdata.append("plot_id", plot.id);

    var requestOptions = {
      method: 'POST',
      body: formdata,
      redirect: 'follow'
    };

    try {
      const response = await fetch(`${SERVER_URL}/api/add_plot_cart/`, requestOptions);
      const result = await response.json();
      if (result.status_code === 200) {
        toast({
          title: result.status,
          description: result.message,
          status: 'success',
          duration: 4000,
          isClosable: true,
        });
      } else {
        throw new Error(result.message || "Failed to add to wishlist");
      }
    } catch (error) {
      toast({
        title: "Error",
        description: error.message,
        status: 'error',
        duration: 4000,
        isClosable: true,
      });
    } finally {
      setLoading(false);
    }}
  };

  const handleBookVisit = (plot) => {
    if(auth.isAuthenticated === false) {
      navigate('/login');
    }
    setSelectedPlot(plot);
    setDateModalOpen(true);
  };

  const handleReservePlot = (plot) => {
    if(auth.isAuthenticated === false) {
      navigate('/login');
    }
    setSelectedPlot(plot);
    setReserveModalOpen(true);
  };

  const handleBuyPlot = (plot) => {
    if(auth.isAuthenticated === false) {
      navigate('/login');
    }
    setSelectedPlot(plot);
    setBuyModalOpen(true);
  };

  const estateLBtns = [
    {
      icon: 'Share@4x.png',
      text: 'Share this Estate',
      onClick: handleShareEstate,
    },
  ];

  const estateRBtns = [
    {
      text: 'Book Physical Visit',
      onClick: () => handleBookVisit(null),
    },
  ];

  const plotLBtns = [
    {
      icon: 'client-wishlist@4x.png',
      text: 'Add to Wish List',
      onClick: handleAddToWishlist,
      isLoading: loading
    },
    {
      icon: 'Share@4x.png',
      text: 'Share this Estate',
      onClick: handleShareEstate,
    },
  ];

  const plotRBtns = [
    {
      text: 'Buy This Plot',
      onClick: handleBuyPlot,
    },
    {
      text: 'Reserve This Plot',
      onClick: handleReservePlot,
    },
    {
      text: 'Book Physical Visit',
      onClick: handleBookVisit,
    },
  ];

  return (
    <div>
      {estateLoading || plotLoading ? (
        <Spinner />
      ) : (
        <div>
          {isAgent && (
            <Link to="/agentDash">
              <Image
                src={`${process.env.PUBLIC_URL}/Assets/SVG/Left-Arrow.svg`}
                width="30px"
                my="1.5rem"
                ml="2rem"
              />
            </Link>
          )}
          {estates?.map((estate) => {
            const matchingPlot = plotNumber
              ? plots.find(
                  (plot) =>
                    plot.plot_name === plotNumber && plot.estate.id === estate.id
                )
              : null;

            return (
              <Box key={estate.id} marginTop="2rem">
                <InputContainer
                  inputData={matchingPlot || estate}
                  isPlot={!!matchingPlot}
                  estate={estate}
                />
                <ButtonsContainer
                  leftButtons={matchingPlot ? plotLBtns.map(btn => ({...btn, onClick: () => btn.onClick(matchingPlot)})) : estateLBtns}
                  rightButtons={matchingPlot ? plotRBtns.map(btn => ({...btn, onClick: () => btn.onClick(matchingPlot)})) : estateRBtns}
                  flex_dir={'column-reverse'}
                  Lbtn_margin={'0.5rem'}
                  Rbtn_margin={'4rem'}
                  box_height={'200px'}
                />
              </Box>
            );
          })}

          <ShareModal
            isOpen={shareModalOpen}
            onClose={() => setShareModalOpen(false)}
          />
          <DateModal 
            isOpen={dateModalOpen} 
            onClose={() => setDateModalOpen(false)} 
            plot={selectedPlot}
            userID={auth.user?.userId}
          />
          <ReserveModal 
            isOpen={reserveModalOpen} 
            onClose={() => setReserveModalOpen(false)} 
            plot={selectedPlot}
            userID={auth.user?.userId}
          />
          <BuyModal 
            isOpen={buyModalOpen} 
            onClose={() => setBuyModalOpen(false)} 
            plot={selectedPlot}
            userID={auth.user?.userId}
          />
        </div>
      )}
    </div>
  );
};
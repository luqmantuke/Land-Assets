import React, { useState, useEffect } from "react";
import { Route, Routes } from 'react-router-dom';
import { Hero } from "../Components/HeroBanner/Hero";
import { DashboardContent } from "../Components/DashboardContent/DashboardContent";
import TableContainer from "../Components/DashboardTable/TableContainer";
import { Box } from "@chakra-ui/react";
import TablesData from "../Components/DashboardTable/TablesData";
import Agent from "../Components/DashboardContent/Agent";
import { useAuth } from "../Hooks/Auth/AuthenticationContext";
import { fetchUserPlots } from "../Api/Plots/PlotsApi";

export const CustomerDash = () => {
  const auth = useAuth();
  const [userPlots, setUserPlots] = useState([]);
  const [pendingPayments, setPendingPayments] = useState([]);
  const [bookedPlots, setBookedPlots] = useState([]);
  const [wishlistPlots, setWishlistPlots] = useState([]);
  const [resalePlots, setResalePlots] = useState([]);
  const [isAgent, setIsAgent] = useState(false);

  useEffect(() => {
    const loadUserPlots = async () => {
      try {
        const result = await fetchUserPlots(auth.user.userId);
        if (result.status === "success") {
          const allPlots = [...result.data.full_purchase_plots, ...result.data.installment_plots];
          const formattedPlots = allPlots.map(plot => ({
            "Plot No": plot.plot.plot_name,
            "Estate Name": plot.plot.estate.estate_name,
            "Size": `${plot.plot.plot_size} sqm`,
            "Price": `Tsh. ${plot.plot.plot_description.installment_price.toLocaleString()}`,
            "Pending Payment": plot.remaining_amount ? `Tsh. ${plot.remaining_amount.toLocaleString()}` : "Fully Paid"
          }));
          setUserPlots(formattedPlots);

          // Filter and format pending payments
          const pendingPaymentsData = allPlots
            .filter(plot => plot.remaining_amount > 0)
            .map(plot => ({
              "Plot No": plot.plot.plot_name,
              "Estate Name": plot.plot.estate.estate_name,
              "Pending Amount": `Tsh. ${plot.remaining_amount.toLocaleString()}`,
              "Due Date": plot.next_payment_date || "N/A"
            }));
          setPendingPayments(pendingPaymentsData);
        }
      } catch (error) {
        console.error("Error loading user plots:", error);
      }
    };

    const fetchBookedPlots = async () => {
      const formdata = new FormData();
      formdata.append("user_id", auth.user.userId);

      const requestOptions = {
        method: "POST",
        body: formdata,
        redirect: "follow"
      };

      try {
        const response = await fetch("https://land.haddypro.online/api/fetch_booked_plots/", requestOptions);
        const result = await response.json();

        if (result.status === "success") {
          const formattedBookedPlots = result.data.map(item => ({
            "Plot No": item.plot.plot_name,
            "Estate Name": item.plot.estate.estate_name,
            "Size": `${item.plot.plot_size} sqm`,
            "Price": `Tsh. ${item.plot.plot_description.installment_price.toLocaleString()}`,
            "Booked Date": item.booked_date
          }));
          setBookedPlots(formattedBookedPlots);
        }
      } catch (error) {
        console.error("Error fetching booked plots:", error);
      }
    };

    const fetchWishlistPlots = async () => {
      const formdata = new FormData();
      formdata.append("user_id", auth.user.userId);

      const requestOptions = {
        method: "POST",
        body: formdata,
        redirect: "follow"
      };

      try {
        const response = await fetch("https://land.haddypro.online/api/fetch_cart_plots/", requestOptions);
        const result = await response.json();

        if (result.status === "success") {
          const formattedWishlistPlots = result.data.map(item => ({
            "Plot No": item.plot.plot_name,
            "Estate Name": item.plot.estate.estate_name,
            "Size": `${item.plot.plot_size} sqm`,
            "Price": `Tsh. ${item.plot.plot_description.installment_price.toLocaleString()}`,
            "Location": `${item.plot.estate.location.location_name}, ${item.plot.estate.location.region.region_name}`
          }));
          setWishlistPlots(formattedWishlistPlots);
        }
      } catch (error) {
        console.error("Error fetching wishlist plots:", error);
      }
    };

    const fetchResalePlots = async () => {
      const formdata = new FormData();
      formdata.append("user_id", auth.user.userId);

      const requestOptions = {
        method: "POST",
        body: formdata,
        redirect: "follow"
      };

      try {
        const response = await fetch("https://land.haddypro.online/api/fetch_sold_plots/", requestOptions);
        const result = await response.json();

        if (result.status === "success") {
          const formattedResalePlots = result.data.map(item => ({
            "Plot No": item.plot.plot_name,
            "Estate Name": item.plot.estate.estate_name,
            "Size": `${item.plot.plot_size} sqm`,
            "Original Price": `Tsh. ${item.plot.plot_description.installment_price.toLocaleString()}`,
            "Resale Price": `Tsh. ${item.plot_new_price.toLocaleString()}`,
            "Date Issued": item.date_issued,
            "Status": item.sold ? "Sold" : "Available"
          }));
          setResalePlots(formattedResalePlots);
        }
      } catch (error) {
        console.error("Error fetching resale plots:", error);
      }
    };

    const checkAgentStatus = async () => {
      const formdata = new FormData();
      formdata.append("user_id", auth.user.userId);

      const requestOptions = {
        method: "POST",
        body: formdata,
        redirect: "follow"
      };

      try {
        const response = await fetch("https://land.haddypro.online/api/check_is_agent/", requestOptions);
        const result = await response.json();

        if (result.status === "success") {
          setIsAgent(result.is_agent);
        }
      } catch (error) {
        console.error("Error checking agent status:", error);
      }
    };

  

    loadUserPlots();
    fetchBookedPlots();
    fetchWishlistPlots();
    fetchResalePlots();
    checkAgentStatus();
  }, [auth.user.userId]);
  const handleSwitchToAgent = async () => {
    const formdata = new FormData();
    formdata.append("user_id", auth.user.userId);

    const requestOptions = {
      method: "POST",
      body: formdata,
      redirect: "follow"
    };

    try {
      const response = await fetch("https://land.haddypro.online/api/switch_to_agent/", requestOptions);
      const result = await response.json();

      if (result.status === "success") {
        setIsAgent(true);
        // You might want to update the auth context or show a success message
        console.log(result.message);
      }
    } catch (error) {
      console.error("Error switching to agent account:", error);
    }
  };
  return (
    <Box pb='3rem'>
      <Hero
        heading={auth.user.username}
        desc={`${auth.user.email}`}
        secondDesc={'Welcome back'}
        margin="0"
        mb="3.5rem"
      />

      <Routes>
        <Route path="/" element={<DashboardContent data={TablesData.Custmerdata}/> } />

        <Route path="/myPlots" element={
          <TableContainer 
            heading={TablesData.headings[0]} 
            buttons={TablesData.button2} 
            elements={TablesData.empty} 
            tableData={userPlots}
          />
        } />

        <Route path="/payments" element={
          <TableContainer 
            heading={TablesData.headings[1]} 
            buttons={TablesData.button2} 
            elements={TablesData.elements} 
            tableData={pendingPayments}
          />
        } />

        <Route path="/bookedPlots" element={
          <TableContainer 
            heading={TablesData.headings[2]} 
            buttons={TablesData.button1} 
            elements={TablesData.empty} 
            tableData={bookedPlots}
          />
        } />

        <Route path="/wishlist" element={
          <TableContainer 
            heading={TablesData.headings[3]} 
            buttons={TablesData.button1} 
            elements={TablesData.empty} 
            tableData={wishlistPlots}
          />
        } />

        <Route path="/resalePlots" element={
          <TableContainer 
            heading={TablesData.headings[4]} 
            buttons={TablesData.buttons3} 
            elements={TablesData.empty} 
            tableData={resalePlots}
          />
        } />

        <Route path="/becomeAgent" element={
          <Agent 
            text={isAgent ? 'You are already an agent' : 'Start Selling Today'} 
            btn_txt={isAgent ? 'Go to Agent Dashboard' : 'Switch Account'} 
            btn_bg='primary'  
            isEmpty={false}
            isAgent={isAgent}
            onSwitchToAgent={handleSwitchToAgent}
          />
        } />
      </Routes>
    </Box>
  );
};
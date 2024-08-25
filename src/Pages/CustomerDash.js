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
        }
      } catch (error) {
        console.error("Error loading user plots:", error);
      }
    };

    loadUserPlots();
  }, []);

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
        {/* Routes to all dashboard components */}
        <Route path="/" element={<DashboardContent data={TablesData.Custmerdata}/> } />

        <Route path="/myPlots" element={
          <TableContainer 
            heading={TablesData.headings[0]} 
            buttons={TablesData.button2} 
            elements={TablesData.empty} 
            tableData={userPlots}
          />
        } />

        <Route path="/payments" element={ <TableContainer heading={TablesData.headings[1]} buttons={TablesData.button2} elements={TablesData.elements} tableData={TablesData.paymentsTable}/> } />

        <Route path="/bookedPlots" element={ <TableContainer heading={TablesData.headings[2]} buttons={TablesData.button1} elements={TablesData.empty} tableData={TablesData.bookingTable}/> } />

        <Route path="/wishlist" element={ <TableContainer heading={TablesData.headings[3]} buttons={TablesData.button1} elements={TablesData.empty} tableData={TablesData.wishlistTable}/> } />

        <Route path="/resalePlots" element={ <TableContainer heading={TablesData.headings[4]} buttons={TablesData.buttons3} elements={TablesData.empty} tableData={TablesData.resaleTable}/> } />

        <Route path="/notifications/*" element={ <TableContainer heading={TablesData.headings[5]} buttons={TablesData.empty} elements={TablesData.empty} tableData={TablesData.empty} boxType='notification'/> } />
        <Route path="/notifications/:id" element={<TableContainer heading={TablesData.headings[5]} buttons={TablesData.empty} elements={TablesData.empty} tableData={TablesData.empty} boxType='notificationDetail'/>} />

        <Route path="/becomeAgent" element={ <Agent text='Start Selling Today' btn_txt='Switch Account' btn_bg='primary'  isEmpty={false}/> } />

        <Route path="/support" element={ <TableContainer heading={TablesData.headings[6]} buttons={TablesData.empty} elements={TablesData.empty} tableData={TablesData.myPlotsTable} boxType='support'/> } />
        <Route path="/settings" element={ <TableContainer heading={TablesData.headings[7]} buttons={TablesData.empty} elements={TablesData.empty} tableData={TablesData.myPlotsTable} boxType='settings'/> } />

        <Route path="/empty" element={<Agent isEmpty='true' />} />
      </Routes>
    </Box>
  );
};
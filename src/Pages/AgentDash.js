import React from "react";
import { Route, Routes } from "react-router-dom";
import { Hero } from "../Components/HeroBanner/Hero";
import { DashboardContent } from "../Components/DashboardContent/DashboardContent";
import TableContainer from "../Components/DashboardTable/TableContainer";
import { Box } from "@chakra-ui/react";
import TablesData from "../Components/DashboardTable/TablesData";

import { EstateSection } from "../Components/EstateSection/EstateSection";
import Highlights from "../Components/DashboardContent/Highlights";



export const AgentDash = () => {
  return (
    <Box pb="3rem">
      <Hero
        heading={`Demetrius Kanyankole`}
        desc={`+255 787 835 830 | dimy.kany@gmail.com `}
        secondDesc={"Welcome back"}
        margin="0"
        mb="3.5rem"
      />
<Highlights/>

      <Routes>
        {/* Routes to all dashboard components */}
        <Route
          path="/"
          exact
          element={<DashboardContent data={TablesData.Agentdata} />}
        />

        <Route
          path="/viewPlots"
          exact
          element={<EstateSection isAgent={true} />}
        />

        <Route
          path="/soldPlots"
          exact
          element={
            <TableContainer
              heading={TablesData.agent_headings[0]}
              buttons={TablesData.empty}
              elements={TablesData.empty}
              tableData={TablesData.myPlotsTable}
              dashType="agent"
            />
          }
        />

        <Route
          path="/pendingPayments"
          exact
          element={
            <TableContainer
              heading={TablesData.agent_headings[1]}
              buttons={TablesData.buttons4}
              elements={TablesData.elements}
              tableData={TablesData.pendingpaysTable}
              dashType="agent"
            />
          }
        />

        <Route
          path="/reservedPlots"
          exact
          element={
            <TableContainer
              heading={TablesData.agent_headings[2]}
              buttons={TablesData.buttons5}
              elements={TablesData.empty}
              tableData={TablesData.reservedTable}
              dashType="agent"
            />
          }
        />

        <Route
          path="/bookVisits"
          exact
          element={
            <TableContainer
              heading={TablesData.agent_headings[3]}
              buttons={TablesData.button1}
              elements={TablesData.empty}
              tableData={TablesData.bookingTable}
              dashType="agent"
            />
          }
        />
        <Route
          path="/payouts"
          exact
          element={
            <TableContainer
              heading={TablesData.agent_headings[4]}
              buttons={TablesData.empty}
              elements={TablesData.empty}
              tableData={TablesData.resaleTable}
              boxType='payout'
              dashType="agent"
            />
          }
        />
         <Route
          path="/paymentMethod"
          exact
          element={
            <TableContainer
              heading={TablesData.agent_headings[5]}
              buttons={TablesData.empty}
              elements={TablesData.empty}
              tableData={TablesData.resaleTable}
              boxType='paymentMethod'
              dashType='payment'
            />
          }
        />
        <Route
          path="/agentWishlist"
          exact
          element={
            <TableContainer
            heading={TablesData.agent_headings[4]}
            buttons={TablesData.button1}
            elements={TablesData.empty}
            tableData={TablesData.wishlistTable}
            dashType="agent"
          />
          }
        />
        <Route
          path="/support"
          exact
          element={
            <TableContainer
              heading={TablesData.headings[6]}
              buttons={TablesData.empty}
              elements={TablesData.empty}
              tableData={TablesData.myPlotsTable}
              boxType="support"
              dashType="agent"
            />
          }
        />
        <Route path="/referAgent" exact element={ <TableContainer
              heading={TablesData.agent_headings[6]}
              buttons={TablesData.empty}
              elements={TablesData.empty}
              tableData={TablesData.myPlotsTable}
              boxType="refer"
              dashType="agent"
            />} />
        <Route
          path="/agentSettings"
          exact
          element={
            <TableContainer
              heading={TablesData.headings[7]}
              buttons={TablesData.empty}
              elements={TablesData.empty}
              tableData={TablesData.myPlotsTable}
              boxType="settings"
              dashType="agent"
            />
          }
        />

    
      </Routes>
    </Box>
  );
};

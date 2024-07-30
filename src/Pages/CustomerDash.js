import React from "react";
import {  Route, Routes} from 'react-router-dom';
import { Hero } from "../Components/HeroBanner/Hero";
import { DashboardContent } from "../Components/DashboardContent/DashboardContent";
import TableContainer from "../Components/DashboardTable/TableContainer";
import { Box } from "@chakra-ui/react";
import TablesData from "../Components/DashboardTable/TablesData";
import Agent from "../Components/DashboardContent/Agent";
import { useAuth } from "../Hooks/Auth/AuthenticationContext";



export const CustomerDash = () => {
  const auth = useAuth();

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
  <Route  path="/" exact   element={<DashboardContent data={TablesData.Custmerdata}/> } />

  <Route  path="/myPlots" exact   element={ <TableContainer heading={TablesData.headings[0]} buttons={TablesData.button2} elements={TablesData.empty} tableData={TablesData.myPlotsTable}/> } />

  <Route  path="/payments" exact   element={ <TableContainer heading={TablesData.headings[1]} buttons={TablesData.button2} elements={TablesData.elements} tableData={TablesData.paymentsTable}/> } />

  <Route  path="/bookedPlots" exact   element={ <TableContainer heading={TablesData.headings[2]} buttons={TablesData.button1} elements={TablesData.empty} tableData={TablesData.bookingTable}/> } />

  <Route  path="/wishlist" exact   element={ <TableContainer heading={TablesData.headings[3]} buttons={TablesData.button1} elements={TablesData.empty} tableData={TablesData.wishlistTable}/> } />

  <Route  path="/resalePlots" exact   element={ <TableContainer heading={TablesData.headings[4]} buttons={TablesData.buttons3} elements={TablesData.empty} tableData={TablesData.resaleTable}/> } />

  <Route  path="/notifications/*" exact   element={ <TableContainer heading={TablesData.headings[5]} buttons={TablesData.empty} elements={TablesData.empty} tableData={TablesData.empty} boxType='notification'/> } />
  <Route path="/notifications/:id" exact element={<TableContainer heading={TablesData.headings[5]} buttons={TablesData.empty} elements={TablesData.empty} tableData={TablesData.empty} boxType='notificationDetail'/>} />

  <Route  path="/becomeAgent" exact   element={ <Agent text='Start Selling Today' btn_txt='Switch Account' btn_bg='primary'  isEmpty={false}/> } />

  <Route  path="/support" exact   element={ <TableContainer heading={TablesData.headings[6]} buttons={TablesData.empty} elements={TablesData.empty} tableData={TablesData.myPlotsTable} boxType='support'/> } />
  <Route  path="/settings" exact   element={ <TableContainer heading={TablesData.headings[7]} buttons={TablesData.empty} elements={TablesData.empty} tableData={TablesData.myPlotsTable} boxType='settings'/> } />

  <Route  path="/empty" exact   element={<Agent isEmpty='true' />} />
  </Routes>
      
 
       
       
     
   

      
       
    

  </Box>
  );
};

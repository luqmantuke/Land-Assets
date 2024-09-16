import React from "react";
import { Route, Routes } from "react-router-dom";
import { Hero } from "../Components/HeroBanner/Hero";
import { DashboardContent } from "../Components/DashboardContent/DashboardContent";
import TableContainer from "../Components/DashboardTable/TableContainer";
import { Box, Spinner } from "@chakra-ui/react";
import TablesData from "../Components/DashboardTable/TablesData";
import { EstateSection } from "../Components/EstateSection/EstateSection";
import Highlights from "../Components/DashboardContent/Highlights";
import { useAgentStatistics, useAgentStatisticsStore} from "../Hooks/Agent/useAgentStatistics";
import { useAuth } from "../Hooks/Auth/AuthenticationContext";

export const AgentDash = () => {
  const { user } = useAuth();
  const stats = useAgentStatisticsStore((state) => state.stats);
  const isLoading = useAgentStatisticsStore((state) => state.dataLoading);
  const isError = useAgentStatisticsStore((state) => state.isError);
  if (isLoading) return <div><Spinner /></div>;
  if (isError) return <div>Error fetching user statistics</div>;

console.log(stats)

  return (
    <Box pb="3rem">
      <Hero
        heading={`${user.username}`}
        desc={`${user.phoneNumber} | ${user.email}`}
        secondDesc={"Welcome back"}
        margin="0"
        mb="3.5rem"
      />
      <Highlights userStats={stats} />
    </Box>
  );
};

import { useQuery } from "@tanstack/react-query";
import { fetchAgentStatistics } from "../../Api/agent/agentsApi";
import { useAuth } from "../Auth/AuthenticationContext";

import { create } from "zustand";


export const useAgentStatisticsStore = create((set) => ({
    dataLoading: true,
    setDataLoading: (dataLoading) => set(() => ({ dataLoading })),
    
      stats: {},
      setStats: (stats) => set(() => ({ stats })),

    }));
    


export const useAgentStatistics = () => {

   const setStats = useAgentStatisticsStore((state) => state.setStats);
   const setDataLoading = useAgentStatisticsStore((state) => state.setDataLoading);
  const { user } = useAuth();

  const { data, isLoading, isError } = useQuery({
    queryKey: ['agentStatistics', user.userId],
    queryFn: () => fetchAgentStatistics(user.agentId),
    enabled: !!user.agentId,
  });

  if(!isLoading){
    setDataLoading(false);
  }
  if(data){
    setStats(data);
  }


  return {  isLoading, isError };
  
};
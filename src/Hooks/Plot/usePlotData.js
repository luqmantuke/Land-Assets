import usePlotStore from "../../store/Plot/PlotStore";
import { useQuery } from "@tanstack/react-query";
import { fetchPlots } from "../../Api/Plots/PlotsApi";

export const useFetchPlots = () => {
    const setPlots = usePlotStore((state) => state.setPlots);
    const pageNumber = usePlotStore((state) => state.pageNumber);
    // const setHasMore = usePlotsStore((state) => state.setHasMore);
    const setDataLoading = usePlotStore((state) => state?.setDataLoading);
  
    const { data, isLoading, isError } = useQuery({
      queryKey: ['plots', pageNumber],
      queryFn: () => fetchPlots(),
    
    });

    if(!isLoading){
        setDataLoading(false);
    }
 
  

    if(data){
    
      setPlots(data.data);



    }


    

    return { isLoading, isError };

 

  };
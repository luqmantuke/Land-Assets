import { fetchEstates } from "../../Api/Estate/EstateApi";
import useEstateStore from "../../store/Estate/EstateStore";

import { useQuery } from "@tanstack/react-query";


export const useFetchEstates = () => {
    const setEstates = useEstateStore((state) => state.setEstates);
    const pageNumber = useEstateStore((state) => state.pageNumber);
    // const setHasMore = useEstatesStore((state) => state.setHasMore);
    const setDataLoading = useEstateStore((state) => state?.setDataLoading);
  
    const { data, isLoading, isError } = useQuery({
      queryKey: ['estates', pageNumber],
      queryFn: () => fetchEstates(),
    
    });

    if(!isLoading){
        setDataLoading(false);
    }
 
  

    if(data){
    
      setEstates(data.data);



    }


    

    return { isLoading, isError };

 

  };
import { create } from "zustand";


const useEstateStore = create((set) => ({
    dataLoading: true,
    setDataLoading: (dataLoading) => set(() => ({ dataLoading })),
    
      estates: [],
      setEstates: (estates) => set(() => ({ estates })),
      pageNumber: 1,
      setPageNumber: (pageNumber) => set(() => ({ pageNumber })),
      hasMore: true,
      setHasMore: (hasMore) => set(() => ({ hasMore })),
    }));
    
    export default useEstateStore;
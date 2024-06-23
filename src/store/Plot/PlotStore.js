import { create } from "zustand";


const usePlotStore = create((set) => ({
    dataLoading: true,
    setDataLoading: (dataLoading) => set(() => ({ dataLoading })),
    
      Plots: [],
      setPlots: (Plots) => set(() => ({ Plots })),
      pageNumber: 1,
      setPageNumber: (pageNumber) => set(() => ({ pageNumber })),
      hasMore: true,
      setHasMore: (hasMore) => set(() => ({ hasMore })),
    }));
    
    export default usePlotStore;

  
    export const usePlotFilterStore = create((set) => ({
      plotNumber: null,
      setPlotNumber: (plotNumber) => set({ plotNumber }),
      // other state and actions can be added here
    }));
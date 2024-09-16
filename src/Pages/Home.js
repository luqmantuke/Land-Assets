import React from 'react'
import { HeroHome } from '../Components/HeroBanner/Hero-home'
import Counter from '../Components/Counter/Counter'
import { EstateSection } from '../Components/EstateSection/EstateSection'
import { useFetchEstates } from '../Hooks/Estate/useEsateData'
import useEstateStore from '../store/Estate/EstateStore'
import { useFetchPlots } from '../Hooks/Plot/usePlotData'
import { useAgentStatistics } from '../Hooks/Agent/useAgentStatistics'

export const Home = () => {
  useFetchEstates();
  useFetchPlots();
  useAgentStatistics();


  return (
    <div>
        
     <HeroHome/>
     <Counter/>

     <EstateSection isAgent={false}  />
      
     

       
    </div>
  )
}

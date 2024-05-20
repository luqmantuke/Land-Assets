import React from 'react'
import { HeroHome } from '../Components/HeroBanner/Hero-home'
import Counter from '../Components/Counter/Counter'
import { EstateSection } from '../Components/EstateSection/EstateSection'
import { useFetchEstates } from '../Hooks/Estate/useEsateData'

export const Home = () => {
  useFetchEstates();
  return (
    <div>
        
     <HeroHome/>
     <Counter/>

    <EstateSection isAgent={false}/>
      
     

       
    </div>
  )
}

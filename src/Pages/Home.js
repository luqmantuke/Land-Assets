import React from 'react'
import { HeroHome } from '../Components/HeroBanner/Hero-home'
import Counter from '../Components/Counter/Counter'
import { EstateSection } from '../Components/EstateSection/EstateSection'

export const Home = () => {
  return (
    <div>
        
     <HeroHome/>
     <Counter/>
    <EstateSection isAgent={false}/>
      
     

       
    </div>
  )
}

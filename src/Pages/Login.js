import React from 'react'

import { Hero } from '../Components/HeroBanner/Hero'

import Footer from '../Components/Footer/Footer'
import LoginForm from '../Components/Forms/LoginForm'


export const Login= () => {

  return (
   <div>
    <Hero heading={`Sign in`} desc={`Sign in to unlock best opportunities`}  margin='4rem'/>
    <LoginForm/>
    <Footer/>

   </div>
  )
}

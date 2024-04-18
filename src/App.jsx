import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Title from "./components/Title/Title";
import Create from "./components/Create/Create";

const App = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <div className="container">
        <Title title='Create' />
        <Create/>
        <Title title='Tournaments' /> 
        
      </div>
    </div>
  )
}

export default App
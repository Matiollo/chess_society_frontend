import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Title from "./components/Title/Title";
import Create from "./components/Create/Create";
import Streams from "./components/Streams/Streams";

const App = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <div className="container">
        <Title title='Create' />
        <Create/>
        <Title title='Tournaments' /> 
        {/* Torurnaments block */}
        <Title title='Watch' />
        <Streams />
      </div>
    </div>
  )
}

export default App
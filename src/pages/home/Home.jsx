import React from "react";
import Navbar from "@/src/components/Navbar/Navbar";
import Hero from "@/src/components/Hero/Hero";
import Title from "@/src/components/Title/Title";
import Create from "@/src/components/Create/Create";
// import Streams from "@/src/components/Streams/Streams";
import Footer from "@/src/components/Footer/Footer";
import Tournaments from "@/src/components/Tournaments/Tournaments";

const HomePage = () => {
  return (
    <div>
      <Navbar />
      <Hero/>
      <div className="container">
        <Title title='Create' />
        <Create/>
        <Title title='Tournaments' /> 
        <Tournaments />
        {/* <Title title='Watch' />
        <Streams /> */}
      </div>
      <Footer />
    </div>
  )
}

export default HomePage
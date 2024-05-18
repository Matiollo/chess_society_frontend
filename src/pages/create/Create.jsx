import React from "react";
import Navbar from "@/src/components/Navbar/Navbar";
import CreatePage from "@/src/components/CreatePage/CreatePage";
import Footer from "@/src/components/Footer/Footer";

const App = () => {
    return (
      <div>
          <Navbar />
          <CreatePage default_tab='single-game' />
          <Footer additional_style='dark-footer' />
      </div>
    )
}
  
export default App
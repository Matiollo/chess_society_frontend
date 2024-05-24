import React from "react";
import DarkNavbar from "@/src/components/Navbar/DarkNavbar";
import TournamentEdit from "@/src/components/TournamentEdit/TournamentEdit";
import Footer from "@/src/components/Footer/Footer";

const App = () => {
    return (
      <div>
          <DarkNavbar />
          <TournamentEdit />
          <Footer additional_style='dark-footer' />
      </div>
    )
}
  
export default App
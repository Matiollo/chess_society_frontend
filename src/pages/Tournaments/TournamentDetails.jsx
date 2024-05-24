import React from "react";
import DarkNavbar from "@/src/components/Navbar/DarkNavbar";
import TournamentDetailsPage from "@/src/components/TournamentDetailsPage/TournamentDetailsPage";
import Footer from "@/src/components/Footer/Footer";

const App = () => {
    return (
      <div>
          <DarkNavbar />
          <TournamentDetailsPage />
          <Footer additional_style='dark-footer' />
      </div>
    )
}
  
export default App
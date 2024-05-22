import React from "react";
import DarkNavbar from "@/src/components/Navbar/DarkNavbar";
import TournamentsPage from "@/src/components/TournamentsPage/TournamentsPage";
import Footer from "@/src/components/Footer/Footer";

const App = () => {
    return (
      <div>
          <DarkNavbar />
          <TournamentsPage />
          <Footer />
      </div>
    )
}
  
export default App
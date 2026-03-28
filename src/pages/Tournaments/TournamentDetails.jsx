import React from "react";
import { useParams } from "react-router-dom";
import DarkNavbar from "@/src/components/Navbar/DarkNavbar";
import TournamentDetailsPage from "@/src/components/TournamentDetailsPage/TournamentDetailsPage";
import Footer from "@/src/components/Footer/Footer";

const TournamentDetails = () => {
    const { id } = useParams();
    return (
      <div>
          <DarkNavbar />
          <TournamentDetailsPage id={id} />
          <Footer additional_style='dark-footer' />
      </div>
    )
}
  
export default TournamentDetails
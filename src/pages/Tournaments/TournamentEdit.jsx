import React from "react";
import { useParams } from "react-router-dom";
import DarkNavbar from "@/src/components/Navbar/DarkNavbar";
import TournamentEdit from "@/src/components/TournamentEdit/TournamentEdit";
import Footer from "@/src/components/Footer/Footer";

const TournamentEditPage = () => {
    const { id } = useParams();
    return (
      <div>
          <DarkNavbar />
          <TournamentEdit id={id} />
          <Footer additional_style='dark-footer' />
      </div>
    )
}
  
export default TournamentEditPage
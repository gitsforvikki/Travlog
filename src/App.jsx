import { useState } from "react";
import Adventure from "./components/body-compos/Adventure";
import AllDestination from "./components/body-compos/AllDestination";
import DreamDesignation from "./components/body-compos/DreamDestination";
import Service from "./components/body-compos/Service";
import TopDesignation from "./components/body-compos/TopDesignation";
import Footer from "./components/footer/Footer";
import Bar from "./components/header-compos/Bar";
import Dashboard from "./components/header-compos/Dashboard";
import MiniNavbar from "./components/header-compos/MiniNavbar";
import Navbar from "./components/header-compos/Navbar";
import CarouselControl from "./components/body-compos/CarouselControl";

export default function App() {
  const [isHidden, setIsHidden] = useState(true);
  const handleClick = () => setIsHidden(!isHidden);
  return (
    <div className="mb-36">
      <Bar onClickHandler={handleClick} />
      {isHidden && <MiniNavbar />}

      <Navbar />
      <Dashboard />
      
      <Service />
      <TopDesignation />
      {/* <CarouselControl/> */}
      <DreamDesignation />
      <AllDestination />
      <Adventure />
      <Footer />
    </div>
  );
}

import { useState } from "react";
import Adventure from "./components/body-compos/Adventure";
import AllDestination from "./components/body-compos/AllDestination";
import DreamDesignation from "./components/body-compos/DreamDestination";
import Service from "./components/body-compos/Service";
import Footer from "./components/footer/Footer";
import Bar from "./components/header-compos/Bar";
import Dashboard from "./components/header-compos/Dashboard";
import MiniNavbar from "./components/header-compos/MiniNavbar";
import Navbar from "./components/header-compos/Navbar";
import CarouselControl from "./components/body-compos/CarouselControl";

export default function App() {
  const [isHidden, setIsHidden] = useState(false);
  const handleClick = () => setIsHidden(!isHidden);
  return (
    <div className="mb-36 container mx-auto overflow-hidden">
      <Bar onClickHandler={handleClick} />
      {isHidden && <MiniNavbar />}
      <Navbar />
      <Dashboard />
      <Service />
      <CarouselControl />
      <DreamDesignation />
      <AllDestination />
      <Adventure />
      <Footer />
    </div>
  );
}

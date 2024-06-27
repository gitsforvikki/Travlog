import AllDestination from "./components/body-compos/AllDestination";
import DreamDesignation from "./components/body-compos/DreamDestination";
import Service from "./components/body-compos/Service";
import TopDesignation from "./components/body-compos/TopDesignation";
import Dashboard from "./components/header-compos/Dashboard";
import Navbar from "./components/header-compos/Navbar";

export default function App() {
  return (
    <div className="mb-36">
    <Navbar/>
    <Dashboard/>
    <Service/>
    <TopDesignation/>
    <DreamDesignation/>
    <AllDestination/>
    
    </div>
  )
}
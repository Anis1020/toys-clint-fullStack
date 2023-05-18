import { Outlet } from "react-router-dom";
import "./App.css";

import Footer from "./Pages/HomePages/Footer";
import NavBar from "./Pages/NavBar/NavBar";

function App() {
  return (
    <>
      <NavBar></NavBar>
      <div className="h-full ">
        <Outlet />
      </div>
      <Footer />
    </>
  );
}

export default App;

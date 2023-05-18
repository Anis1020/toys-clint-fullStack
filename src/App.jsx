import { Outlet } from "react-router-dom";
import "./App.css";
import NavBar from "./Pages/HomePages/NavBar";
import Footer from "./Pages/HomePages/Footer";

function App() {
  return (
    <>
      <NavBar></NavBar>
      <div className="h-screen ">
        <Outlet />
      </div>
      <Footer />
    </>
  );
}

export default App;

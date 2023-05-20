import { Outlet, useNavigation } from "react-router-dom";
import "./App.css";

import Footer from "./Pages/HomePages/Footer";
import NavBar from "./Pages/NavBar/NavBar";

function App() {
  const navigation = useNavigation();
  return (
    <>
      <NavBar></NavBar>
      <div className="h-full ">
        {navigation.state === "loading" ? (
          <progress className="progress w-56 bg-red-600"></progress>
        ) : (
          ""
        )}

        <Outlet />
      </div>
      <Footer />
    </>
  );
}

export default App;

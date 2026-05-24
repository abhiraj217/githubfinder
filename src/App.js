import Navbar from "./components/navbar/Navbar";
import { ToastContainer } from "react-toastify";
import { Outlet } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <>
      <ToastContainer />
      <Navbar />
      <Outlet />
    </>
  );
}

export default App;

import Header from "./Header";
import Footer from "./Footer";
import "./Dashbord.css";
import { Outlet } from "react-router-dom";
// Create this file for styles

function Main() {
  return (
    <div className="main-layout">
      <Header />
      <div className="main-content">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}
export default Main;
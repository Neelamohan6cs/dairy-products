import { Outlet } from "react-router-dom";
import Header from "./Header";

function Myorders() {
  return (
    <div>
      <Header />
      {/* Child pages will render here */}
      <div className="orders-body">
        <Outlet />
      </div>
    </div>
  );
}

export default Myorders;

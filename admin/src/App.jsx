import { Navbar } from "./Components/Navbar/Navbar";
import { Sidebar } from "./Components/Sidebar/Sidebar";
import { Route, Routes,useLocation } from "react-router-dom";
import { Add } from "./Pages/Add/Add";
import { List } from "./Pages/List/List";
import { Order } from "./Pages/Orders/Order";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Login } from "./Components/Login/Login";
import { Dashboard } from "./Components/Dashboard/Dashboard";

const App = () => {
  const location = useLocation();
  return (
    <div>
      <ToastContainer />
      <Navbar />
      <hr />
      <div className="app-content">
      {location.pathname !== '/' && <Sidebar />}
        <Routes>
          <Route path="/" element={<Login/>}></Route>
          <Route path="/dashboard" element={<Dashboard/>}></Route>
          <Route path="/add" element={<Add  />}></Route>
          <Route path="/list" element={<List  />}></Route>
          <Route path="/orders" element={<Order  />}></Route>
        </Routes>
      </div>
    </div>
  );
};
export default App;

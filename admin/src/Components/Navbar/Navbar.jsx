import "./Navbar.css";
import { assets } from "../../assets/assets";
import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { StoreContext } from "../../Context/StoreContext";

export const Navbar = () => {
  const { token, setToken } = useContext(StoreContext);
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("token");
    setToken("");
    navigate("/");
  };
  return (
    <div className="navbar">
      <Link to="/dashboard">
        {" "}
        <img className="logo" src={assets.logo} alt="" />
      </Link>
      {!token ? (
        <div></div>
      ) : (
        <div>
          <img className="profile" src={assets.profile_image} alt="" />
          <p onClick={logout}>
            {" "}
            <img src={assets.logout_icon} alt="" />
            Logout
          </p>
        </div>
      )}
    </div>
  );
};

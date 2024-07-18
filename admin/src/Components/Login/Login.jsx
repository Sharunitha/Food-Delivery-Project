import { useState } from 'react';
import './Login.css'
import { useContext } from 'react';
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from 'react-router-dom';
import { StoreContext } from '../../Context/StoreContext';

export const Login = () => {
  const { url, setToken } = useContext(StoreContext);
  const navigate=useNavigate()
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const onChangeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setData((data) => ({ ...data, [name]: value }));
  };

  const onLogin = async (event) => {
    event.preventDefault();
    const response = await axios.post(url+"/api/admin/login", data);
    if (response.data.success) {
      setToken(response.data.token);
      localStorage.setItem("token", response.data.token);
      navigate("/dashboard");
    } else {
      toast.error(response.data.message);
    }
  };

  return (
    <div className={`login-popup`} >
      <form className="login-popup-container" onSubmit={onLogin}>
        <div className="login-popup-title">
          <h2>Login</h2>
        </div>
        <div className="login-popup-input">
          <input
            onChange={onChangeHandler}
            value={data.name}
            name="email"
            type="email"
            placeholder="Your email"
            required
          />
          <input
            onChange={onChangeHandler}
            value={data.password}
            name="password"
            type="password"
            placeholder="Password"
            required
          />
        </div>
        <button type="submit">
         Login
        </button>

      </form>
    </div>
  )
}

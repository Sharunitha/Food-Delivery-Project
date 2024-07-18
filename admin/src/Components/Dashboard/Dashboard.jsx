import { useContext, useEffect, useState } from 'react';
import './Dashboard.css'
import { StoreContext } from '../../Context/StoreContext';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


export const Dashboard = () => {
  const [user,setUser]=useState(0);
  const [food,setFood]=useState(0);
  const [order,setOrder]=useState(0);
  const{url,token}=useContext(StoreContext);
  const navigate= useNavigate();

  useEffect(() => {
    if (!token) {
      navigate('/');
      return;
    }
    axios.get(url + '/api/dashboard')
      .then(res => {
        if (res.data.success) {
          setUser(res.data.user);
          setFood(res.data.food);
          setOrder(res.data.order);
        }
      })
      .catch(err => {
        console.error('Error fetching dashboard data:', err);
      });
  }, [url, token, navigate]);
  return (
    <div className="widgets">
        <div className="widget">
          <h3>Total Users</h3>
          <p>{user}</p>
        </div>
        <div className="widget">
          <h3>Total Orders</h3>
          <p>{order}</p>
        </div>
        <div className="widget">
          <h3>Total Products</h3>
          <p>{food}</p>
        </div>
    </div>
  );
};

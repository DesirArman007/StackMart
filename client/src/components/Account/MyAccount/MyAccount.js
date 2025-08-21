import Account from '../Account';
import './MyAccount.css';
import { Link, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';

const MyAccount = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const token = localStorage.getItem("token");

  const handleLogout = () => {
    localStorage.removeItem("token");
    setUser(null);
    navigate("/account/login");
  };

  useEffect(() => {
    if (!token) {
      navigate("/account/login");
      return;
    }

    const fetchUser = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/auth/me", {
          headers: { Authorization: `Bearer ${token}` }
        });
        setUser(res.data);
      } catch (err) {
        console.error(err);
        navigate("/account/login");
      }
    };

    fetchUser();
  }, [token, navigate]);

  if (!user) return <div>Loading...</div>;

  return (
    <Account>
      <div className="order__history__container">
        <div className="order__history">
          <div className="order__history__header">Order History</div>
          <div className="order__history__detail">
            You have not placed any orders yet
          </div>
        </div>
      </div>

      <div className="account__details__container">
        <div className="account__details__header">
          <div className="details__header">Account Details</div>
          <div className="logout__action" onClick={handleLogout}>
            Logout
          </div>
        </div>

        <div className="account__details">
          <div className="account__holder__name">{user.firstName} {user.lastName}</div>
          <div className="account__holder__email">{user.email}</div>
          <div className="manage__account__action">
            <Link to="/account/manage">Manage account</Link>   
          </div>
        </div>
      </div>
    </Account>
  );
};

export default MyAccount;

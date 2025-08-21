import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Checkout.css";

const Checkout = () => {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      setIsLoggedIn(false);
    } else {
      setIsLoggedIn(true);
    }
    setLoading(false);
  }, []);

  const handleCheckout = (e) => {
    e.preventDefault();
    if (!isLoggedIn) {
      alert("Please log in first to proceed to checkout");
      navigate("/account/login");
      return;
    }
    navigate("/payment");
  };

  if (loading) {
    return <div>Loading...</div>; // wait until login check finishes
  }

  return (
    <div className="checkout">
      <h2 className="checkout__header">Checkout Page</h2>
      <button
        type="button"
        onClick={handleCheckout}
        className="checkout__button"
      >
        Proceed to Payment
      </button>
    </div>
  );
};

export default Checkout;

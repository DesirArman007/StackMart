import { useNavigate } from "react-router-dom";
import "./Checkout.css";

const Checkout = () => {
    const navigate = useNavigate();
const handleCheckout = (e) => {
    e.preventDefault(); // 👈 prevents page reload
    console.log("Button clicked");
    navigate("/payment");
};



    return (
        <div className="checkout">
            <h2 className="checkout__header">Checkout Page</h2>
          <button type="button" onClick={handleCheckout} className="checkout__button">
  Proceed to Payment
</button>

        </div>
    );
};

export default Checkout;

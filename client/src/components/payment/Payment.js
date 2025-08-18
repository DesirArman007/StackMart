import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const Payment = () => {
  const { orderId } = useParams();

  const loadRazorpayScript = () => {
    return new Promise((resolve) => {
      const script = document.createElement('script');
      script.src = 'https://checkout.razorpay.com/v1/checkout.js';
      script.onload = () => resolve(true);
      script.onerror = () => resolve(false);
      document.body.appendChild(script);
    });
  };

  const startRazorpayPayment = async (orderId) => {
    try {
      const res = await axios.get(`http://localhost:5000/api/payment/${orderId}`);
      const order = res.data;

      const key = process.env.REACT_APP_RAZORPAY_KEY_ID;
      console.log("✅ Razorpay Key:", key);
      console.log("📦 Order:", order);

      const options = {
        key,
        amount: order.amount,
        currency: order.currency,
        name: 'Your Company',
        description: 'Order Payment',
        order_id: order.id,
        handler: function (response) {
          alert('✅ Payment Successful');
          console.log('🎉 Payment response:', response);
        },
        prefill: {
          name: 'Test User',
          email: 'test@example.com',
          contact: '9999999999',
        },
        theme: {
          color: '#F37254',
        },
      };

      const rzp = new window.Razorpay(options);
      rzp.open();
    } catch (error) {
      console.error('🔥 Error starting Razorpay:', error);
    }
  };

  useEffect(() => {
    const start = async () => {
      const loaded = await loadRazorpayScript();
      if (!loaded) {
        alert('❌ Razorpay SDK failed to load.');
        return;
      }

      if (orderId) {
        await startRazorpayPayment(orderId);
      }
    };

    start();
  }, [orderId]);

  return (
    <div style={{ padding: '2rem' }}>
      <h2>🔄 Redirecting to Razorpay...</h2>
    </div>
  );
};

export default Payment;

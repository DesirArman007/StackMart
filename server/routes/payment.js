const express = require("express");
const router = express.Router();
const cors = require("cors");
const razorpay = require("../config/razorpay");
const crypto = require("crypto");

// 1. Create Razorpay Order
router.post("/", cors(), async (req, res) => {
    const { amount } = req.body;

    const options = {
        amount: amount * 100, // Razorpay uses paise
        currency: "INR",
        receipt: "receipt_" + Date.now()
    };

    try {
        const order = await razorpay.orders.create(options);
        res.status(200).json(order);
    } catch (err) {
        console.error("Error creating Razorpay order:", err);
        res.status(500).json({ error: "Failed to create Razorpay order" });
    }
});

// 2. Fetch Razorpay Order by ID (for frontend)
router.get("/:orderId", cors(), async (req, res) => {
    const { orderId } = req.params;

    try {
        const order = await razorpay.orders.fetch(orderId);
        res.status(200).json(order);
    } catch (err) {
        console.error("Error fetching Razorpay order:", err);
        res.status(500).json({ error: "Failed to fetch Razorpay order" });
    }
});

// 3. Verify Payment Signature
router.post("/verify", cors(), (req, res) => {
    const { razorpay_order_id, razorpay_payment_id, razorpay_signature } = req.body;

    const hmac = crypto.createHmac("sha256", process.env.RAZORPAY_KEY_SECRET);
    hmac.update(`${razorpay_order_id}|${razorpay_payment_id}`);
    const generated_signature = hmac.digest("hex");

    if (generated_signature === razorpay_signature) {
        res.status(200).json({ message: "Payment verified successfully" });
    } else {
        res.status(400).json({ error: "Invalid signature. Verification failed." });
    }
});

module.exports = router;

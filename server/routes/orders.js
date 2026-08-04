const express = require("express");
const router = express.Router();

const {
    getOrders,
    addOrder,
    updateOrderStatus,
    deleteOrder
} = require("../controllers/orderController");

// Get all orders
router.get("/", getOrders);

// Add a new order
router.post("/", addOrder);

// Update order status
router.put("/:id", updateOrderStatus);

// Delete an order
router.delete("/:id", deleteOrder);

module.exports = router;

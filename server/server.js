const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();

app.use(cors());
app.use(express.json());

// Import Routes
const menuRoutes = require("./routes/menu");
const bookingRoutes = require("./routes/booking");
const orderRoutes = require("./routes/orders");

// API Routes
app.use("/api/menu", menuRoutes);
app.use("/api/bookings", bookingRoutes);
app.use("/api/orders", orderRoutes);

// Home Route
app.get("/", (req, res) => {
    res.json({
        message: "Welcome to Restaurant Management System API"
    });
});

// Server
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

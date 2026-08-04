const express = require("express");
const router = express.Router();

const {
    getBookings,
    addBooking,
    updateBooking,
    deleteBooking
} = require("../controllers/bookingController");

// Get all bookings
router.get("/", getBookings);

// Add a booking
router.post("/", addBooking);

// Update a booking
router.put("/:id", updateBooking);

// Delete a booking
router.delete("/:id", deleteBooking);

module.exports = router;

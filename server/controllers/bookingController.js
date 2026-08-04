const db = require("../db");

// Get all bookings
exports.getBookings = (req, res) => {
    const sql = "SELECT * FROM bookings ORDER BY booking_date, booking_time";

    db.query(sql, (err, results) => {
        if (err) {
            return res.status(500).json({
                success: false,
                message: err.message
            });
        }

        res.status(200).json({
            success: true,
            count: results.length,
            data: results
        });
    });
};

// Add a booking
exports.addBooking = (req, res) => {
    const {
        customer_name,
        phone,
        booking_date,
        booking_time,
        guests
    } = req.body;

    const sql = `
        INSERT INTO bookings
        (customer_name, phone, booking_date, booking_time, guests)
        VALUES (?, ?, ?, ?, ?)
    `;

    db.query(
        sql,
        [customer_name, phone, booking_date, booking_time, guests],
        (err, result) => {
            if (err) {
                return res.status(500).json({
                    success: false,
                    message: err.message
                });
            }

            res.status(201).json({
                success: true,
                message: "Booking created successfully.",
                bookingId: result.insertId
            });
        }
    );
};

// Update booking
exports.updateBooking = (req, res) => {
    const { id } = req.params;
    const {
        customer_name,
        phone,
        booking_date,
        booking_time,
        guests
    } = req.body;

    const sql = `
        UPDATE bookings
        SET customer_name=?, phone=?, booking_date=?, booking_time=?, guests=?
        WHERE id=?
    `;

    db.query(
        sql,
        [customer_name, phone, booking_date, booking_time, guests, id],
        (err) => {
            if (err) {
                return res.status(500).json({
                    success: false,
                    message: err.message
                });
            }

            res.json({
                success: true,
                message: "Booking updated successfully."
            });
        }
    );
};

// Delete booking
exports.deleteBooking = (req, res) => {
    const { id } = req.params;

    const sql = "DELETE FROM bookings WHERE id=?";

    db.query(sql, [id], (err) => {
        if (err) {
            return res.status(500).json({
                success: false,
                message: err.message
            });
        }

        res.json({
            success: true,
            message: "Booking deleted successfully."
        });
    });
};

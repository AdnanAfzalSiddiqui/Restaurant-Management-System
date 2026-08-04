const db = require("../db");

// Get all orders
exports.getOrders = (req, res) => {
    const sql = "SELECT * FROM orders ORDER BY order_date DESC";

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

// Add a new order
exports.addOrder = (req, res) => {
    const {
        customer_name,
        item_name,
        quantity,
        total_price,
        status
    } = req.body;

    const sql = `
        INSERT INTO orders
        (customer_name, item_name, quantity, total_price, status)
        VALUES (?, ?, ?, ?, ?)
    `;

    db.query(
        sql,
        [customer_name, item_name, quantity, total_price, status],
        (err, result) => {
            if (err) {
                return res.status(500).json({
                    success: false,
                    message: err.message
                });
            }

            res.status(201).json({
                success: true,
                message: "Order placed successfully.",
                orderId: result.insertId
            });
        }
    );
};

// Update order status
exports.updateOrderStatus = (req, res) => {
    const { id } = req.params;
    const { status } = req.body;

    const sql = "UPDATE orders SET status=? WHERE id=?";

    db.query(sql, [status, id], (err) => {
        if (err) {
            return res.status(500).json({
                success: false,
                message: err.message
            });
        }

        res.json({
            success: true,
            message: "Order status updated successfully."
        });
    });
};

// Delete an order
exports.deleteOrder = (req, res) => {
    const { id } = req.params;

    const sql = "DELETE FROM orders WHERE id=?";

    db.query(sql, [id], (err) => {
        if (err) {
            return res.status(500).json({
                success: false,
                message: err.message
            });
        }

        res.json({
            success: true,
            message: "Order deleted successfully."
        });
    });
};

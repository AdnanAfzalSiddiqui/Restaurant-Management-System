const db = require("../db");

// Get all menu items
exports.getMenu = (req, res) => {
    const sql = "SELECT * FROM menu";

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

// Add a menu item
exports.addMenuItem = (req, res) => {
    const { item_name, category, price, availability } = req.body;

    const sql =
        "INSERT INTO menu (item_name, category, price, availability) VALUES (?, ?, ?, ?)";

    db.query(
        sql,
        [item_name, category, price, availability],
        (err, result) => {
            if (err) {
                return res.status(500).json({
                    success: false,
                    message: err.message
                });
            }

            res.status(201).json({
                success: true,
                message: "Menu item added successfully.",
                id: result.insertId
            });
        }
    );
};

// Update a menu item
exports.updateMenuItem = (req, res) => {
    const { id } = req.params;
    const { item_name, category, price, availability } = req.body;

    const sql =
        "UPDATE menu SET item_name=?, category=?, price=?, availability=? WHERE id=?";

    db.query(
        sql,
        [item_name, category, price, availability, id],
        (err) => {
            if (err) {
                return res.status(500).json({
                    success: false,
                    message: err.message
                });
            }

            res.json({
                success: true,
                message: "Menu item updated successfully."
            });
        }
    );
};

// Delete a menu item
exports.deleteMenuItem = (req, res) => {
    const { id } = req.params;

    const sql = "DELETE FROM menu WHERE id=?";

    db.query(sql, [id], (err) => {
        if (err) {
            return res.status(500).json({
                success: false,
                message: err.message
            });
        }

        res.json({
            success: true,
            message: "Menu item deleted successfully."
        });
    });
};

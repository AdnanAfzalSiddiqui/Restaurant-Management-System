const express = require("express");
const router = express.Router();

const {
    getMenu,
    addMenuItem,
    updateMenuItem,
    deleteMenuItem
} = require("../controllers/menuController");

// Get all menu items
router.get("/", getMenu);

// Add a new menu item
router.post("/", addMenuItem);

// Update a menu item
router.put("/:id", updateMenuItem);

// Delete a menu item
router.delete("/:id", deleteMenuItem);

module.exports = router;

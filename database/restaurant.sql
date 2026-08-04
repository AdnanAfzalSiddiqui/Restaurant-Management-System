CREATE DATABASE IF NOT EXISTS restaurant_db;
USE restaurant_db;

-- ==========================
-- MENU TABLE
-- ==========================

CREATE TABLE menu (
    id INT AUTO_INCREMENT PRIMARY KEY,
    item_name VARCHAR(100) NOT NULL,
    category VARCHAR(50) NOT NULL,
    price DECIMAL(10,2) NOT NULL,
    availability ENUM('Available','Unavailable') DEFAULT 'Available'
);

INSERT INTO menu (item_name, category, price, availability) VALUES
('Margherita Pizza','Pizza',249.00,'Available'),
('Veg Burger','Burger',149.00,'Available'),
('Chicken Biryani','Main Course',299.00,'Available'),
('Pasta Alfredo','Pasta',279.00,'Available'),
('Cold Coffee','Beverage',129.00,'Available');

-- ==========================
-- BOOKINGS TABLE
-- ==========================

CREATE TABLE bookings (
    id INT AUTO_INCREMENT PRIMARY KEY,
    customer_name VARCHAR(100) NOT NULL,
    phone VARCHAR(15) NOT NULL,
    booking_date DATE NOT NULL,
    booking_time TIME NOT NULL,
    guests INT NOT NULL
);

-- ==========================
-- ORDERS TABLE
-- ==========================

CREATE TABLE orders (
    id INT AUTO_INCREMENT PRIMARY KEY,
    customer_name VARCHAR(100) NOT NULL,
    item_name VARCHAR(100) NOT NULL,
    quantity INT NOT NULL,
    total_price DECIMAL(10,2) NOT NULL,
    status ENUM('Pending','Preparing','Completed','Cancelled') DEFAULT 'Pending',
    order_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO orders
(customer_name,item_name,quantity,total_price,status)
VALUES
('John Doe','Margherita Pizza',2,498.00,'Completed'),
('Alice Smith','Veg Burger',1,149.00,'Preparing');

const API_BASE = "http://localhost:5000/api";

// -------------------------
// Booking Form
// -------------------------

const bookingForm = document.getElementById("bookingForm");

if (bookingForm) {
    bookingForm.addEventListener("submit", async (e) => {
        e.preventDefault();

        const booking = {
            customer_name: document.getElementById("customerName").value,
            phone: document.getElementById("phone").value,
            booking_date: document.getElementById("bookingDate").value,
            booking_time: document.getElementById("bookingTime").value,
            guests: document.getElementById("guests").value
        };

        try {
            const response = await fetch(`${API_BASE}/bookings`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(booking)
            });

            const data = await response.json();

            if (data.success) {
                alert("Table booked successfully!");
                bookingForm.reset();
            } else {
                alert(data.message);
            }

        } catch (error) {
            alert("Unable to connect to server.");
        }
    });
}

// -------------------------
// Order Form
// -------------------------

const orderForm = document.getElementById("orderForm");

if (orderForm) {

    const prices = {
        "Margherita Pizza": 249,
        "Veg Burger": 149,
        "Chicken Biryani": 299,
        "Pasta Alfredo": 279,
        "Cold Coffee": 129
    };

    orderForm.addEventListener("submit", async (e) => {

        e.preventDefault();

        const item = document.getElementById("foodItem").value;
        const quantity = Number(document.getElementById("quantity").value);

        const order = {
            customer_name: document.getElementById("customerName").value,
            item_name: item,
            quantity: quantity,
            total_price: prices[item] * quantity,
            status: "Pending"
        };

        try {

            const response = await fetch(`${API_BASE}/orders`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(order)
            });

            const data = await response.json();

            if (data.success) {

                alert(
                    `Order placed successfully!\n\nTotal: ₹${order.total_price}`
                );

                orderForm.reset();

            } else {

                alert(data.message);

            }

        } catch (error) {

            alert("Unable to connect to server.");

        }

    });

}

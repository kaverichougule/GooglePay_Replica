document.addEventListener("DOMContentLoaded", () => {
    const startPaymentButton = document.getElementById("start-payment");
    const paymentStatus = document.querySelector(".payment-status");

    startPaymentButton.addEventListener("click", () => {
        paymentStatus.textContent = "Processing...";

        // Simulate a payment process using a Promise with a random outcome
        simulatePayment()
            .then(() => {
                paymentStatus.textContent = "Payment successful!";
            })
            .catch(() => {
                paymentStatus.textContent = "Payment failed. Please try again.";
            });
    });

    // Simulate payment process (resolve for success, reject for failure)
    function simulatePayment() {
        return new Promise((resolve, reject) => {
            // Simulate asynchronous payment process with a delay
            setTimeout(() => {
                const randomOutcome = Math.random();
                if (randomOutcome < 0.7) {
                    resolve(); // Payment successful
                } else {
                    reject(); // Payment failed
                }
            }, 2000); // Simulate a 2-second payment process
        });
    }
});

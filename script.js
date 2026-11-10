document.addEventListener("DOMContentLoaded", () => {
    const toast = document.getElementById("toastNotification");

    // Helper function to show notifications
    function showToast(message) {
        if (!toast) return;
        toast.textContent = message;
        toast.classList.remove("hidden");
        setTimeout(() => {
            toast.classList.add("hidden");
        }, 3000);
    }

    // Home Page: Order Button Logic
    const orderBtn = document.getElementById("orderBtn");
    if (orderBtn) {
        orderBtn.addEventListener("click", () => {
            showToast("Success! Your KINETix Electric Lime is on its way.");
        });
    }

    // Contact Page: Form Submit Logic
    const contactForm = document.getElementById("contactForm");
    if (contactForm) {
        contactForm.addEventListener("submit", (e) => {
            e.preventDefault(); // Prevents page reload
            showToast("Message sent! Our team will get back to you shortly.");
            contactForm.reset(); // Clears the form fields
        });
    }
});
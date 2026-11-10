document.addEventListener("DOMContentLoaded", () => {
    const toast = document.getElementById("toastNotification");

    // Toast logic
    function showToast(message) {
        if (!toast) return;
        toast.textContent = message;
        toast.classList.remove("hidden");
        setTimeout(() => {
            toast.classList.add("hidden");
        }, 3000);
    }

    // Order button
    const orderBtn = document.getElementById("orderBtn");
    if (orderBtn) {
        orderBtn.addEventListener("click", () => {
            showToast("Success! Your KINETix is on its way.");
        });
    }

    // Contact form
    const contactForm = document.getElementById("contactForm");
    if (contactForm) {
        contactForm.addEventListener("submit", (e) => {
            e.preventDefault();
            showToast("Message sent! Our team will get back to you.");
            contactForm.reset();
        });
    }

    // Theme Toggle Logic
    const themeToggleBtn = document.getElementById("themeToggle");
    
    // Check saved theme or default to dark
    const currentTheme = localStorage.getItem("theme") || "dark";
    document.documentElement.setAttribute("data-theme", currentTheme);
    
    if (themeToggleBtn) {
        themeToggleBtn.addEventListener("click", () => {
            let theme = document.documentElement.getAttribute("data-theme");
            if (theme === "dark") {
                document.documentElement.setAttribute("data-theme", "light");
                localStorage.setItem("theme", "light");
            } else {
                document.documentElement.setAttribute("data-theme", "dark");
                localStorage.setItem("theme", "dark");
            }
        });
    }
});

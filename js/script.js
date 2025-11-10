document.getElementById('year').textContent = new Date().getFullYear();
// Handle contact form submission without reload
const form = document.getElementById("contact-form");
const status = document.getElementById("form-status");

if (form) {
  form.addEventListener("submit", async (event) => {
    event.preventDefault(); // Stop normal form submission

    // Collect form data
    const formData = new FormData(form);

// Handle contact form submission without reload, including file uploads
const form = document.getElementById("contact-form");
const status = document.getElementById("form-status");

if (form) {
  form.addEventListener("submit", async (event) => {
    event.preventDefault();

    const formData = new FormData(form);

    try {
      const response = await fetch(form.action, {
        method: form.method,
        body: formData, // FormData automatically handles files safely
        headers: { Accept: "application/json" },
      });

      if (response.ok) {
        status.textContent = "✅ Message sent successfully!";
        status.style.color = "green";
        form.reset();
      } else {
        status.textContent = "❌ Oops! Something went wrong. Please try again.";
        status.style.color = "red";
      }
    } catch (error) {
      status.textContent = "⚠️ Network error — please try again later.";
      status.style.color = "orange";
    }

    // Clear status message after 5 seconds
    setTimeout(() => {
      status.textContent = "";
    }, 5000);
  });
}

    setTimeout(() => {
  status.textContent = "";
}, 5000); // Clear message after 5 seconds

  });
}

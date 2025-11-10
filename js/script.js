document.getElementById('year').textContent = new Date().getFullYear();
// Handle contact form submission without reload
const form = document.getElementById("contact-form");
const status = document.getElementById("form-status");

if (form) {
  form.addEventListener("submit", async (event) => {
    event.preventDefault(); // Stop normal form submission

    // Collect form data
    const formData = new FormData(form);

    try {
      const response = await fetch(form.action, {
        method: form.method,
        body: formData,
        headers: { Accept: "application/json" },
      });

      if (response.ok) {
        status.textContent = "✅ Message sent successfully!";
        status.style.color = "green";
        form.reset(); // Clear the form
      } else {
        status.textContent = "❌ Oops! Something went wrong.";
        status.style.color = "red";
      }
    } catch (error) {
      status.textContent = "⚠️ Network error — please try again later.";
      status.style.color = "orange";
    }
  });
}

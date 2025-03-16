// Register Form
document.getElementById("registerForm")?.addEventListener("submit", async (e) => {
  e.preventDefault();
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  const response = await fetch("/api/register", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name, email, password }),
  });

  const data = await response.json();
  if (response.ok) {
    alert("Registration successful! Please login.");
    window.location.href = "/login.html";
  } else {
    alert(`Error: ${data.error}`);
  }
});

// Login Form
document.getElementById("loginForm")?.addEventListener("submit", async (e) => {
  e.preventDefault();
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  const response = await fetch("/api/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, password }),
  });

  const data = await response.json();
  if (response.ok) {
    localStorage.setItem("user", JSON.stringify(data.user));
    window.location.href = "/index.html";
  } else {
    alert(`Error: ${data.error}`);
  }
});

// Logout Button
document.getElementById("logoutButton")?.addEventListener("click", async () => {
  const response = await fetch("/api/logout", {
    method: "POST",
  });

  const data = await response.json();
  if (response.ok) {
    localStorage.removeItem("user");
    window.location.href = "/index.html";
  } else {
    alert(`Error: ${data.error}`);
  }
});

// Check if user is logged in
const user = JSON.parse(localStorage.getItem("user"));
if (user) {
  document.getElementById("userInfo").textContent = `Welcome, ${user.email}`;
  document.getElementById("logoutButton").style.display = "block";
}

document.getElementById("loginForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const email = document.getElementById("email").value;
  const role = document.getElementById("role").value;

  localStorage.setItem("userEmail", email);
  localStorage.setItem("userRole", role);

  if (role === "eleve") {
    window.location.href = "eleve.html";
  } else if (role === "prof") {
    window.location.href = "prof.html";
  } else if (role === "cpe") {
    window.location.href = "cpe.html";
  }
});

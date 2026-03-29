(function protectPage() {
  const userRaw = localStorage.getItem("amar_google_user");

  if (!userRaw) {
    window.location.href = "./login.html";
    return;
  }

  let user;
  try {
    user = JSON.parse(userRaw);
  } catch {
    localStorage.removeItem("amar_google_user");
    window.location.href = "./login.html";
    return;
  }

  const brandEl = document.querySelector(".brand");
  if (brandEl && user.name) {
    brandEl.textContent = user.name;
  }

  const logoutBtn = document.getElementById("logoutBtn");
  if (logoutBtn) {
    logoutBtn.addEventListener("click", () => {
      localStorage.removeItem("amar_google_user");
      window.location.href = "./login.html";
    });
  }
})();
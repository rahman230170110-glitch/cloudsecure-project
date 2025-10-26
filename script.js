window.addEventListener("load", () => {
  const isSecure = window.location.protocol === "https:";
  const status = document.getElementById("status");

  if (isSecure) {
    status.textContent = "✅ Koneksi aman (HTTPS aktif)";
    status.style.color = "lime";
  } else {
    status.textContent = "⚠️ Koneksi tidak aman (gunakan HTTPS)";
    status.style.color = "red";
  }
});

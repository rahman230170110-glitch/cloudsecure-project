window.addEventListener("load", () => {
  const httpsStatus = document.getElementById("httpsStatus");

  if (window.location.protocol === "https:") {
    httpsStatus.innerHTML = "✅ HTTPS Status: <span class='active'>ACTIVE</span>";
    httpsStatus.style.color = "#64ffda";
  } else {
    httpsStatus.innerHTML = "⚠️ HTTPS Status: NOT SECURE";
    httpsStatus.style.color = "red";
  }
});

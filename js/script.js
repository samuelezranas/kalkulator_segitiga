document.getElementById("hitungLuas").addEventListener("click", function () {
  const base = parseFloat(document.getElementById("base").value);
  const height = parseFloat(document.getElementById("height").value);

  if (!isNaN(base) && !isNaN(height)) {
    const luas = 0.5 * base * height;

    document.getElementById("luas").textContent = "Luas: " + luas.toFixed(2);
  } else {
    document.getElementById("luas").textContent = "Luas: ";
  }
});
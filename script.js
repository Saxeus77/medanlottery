function generateNumber() {
  const random = Math.floor(Math.random() * 10000).toString().padStart(4, '0');

  const resultBox = document.getElementById("resultBox");
  resultBox.innerHTML = ''; // Kosongkan sebelumnya

  for (const digit of random) {
    const ball = document.createElement("div");
    ball.className = "ball";
    ball.textContent = digit;
    resultBox.appendChild(ball);
  }

  const now = new Date();
  document.getElementById("date").textContent = now.toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric"
  });

  document.getElementById("time").textContent = now.toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit"
  });
}

// Panggil langsung saat halaman terbuka
generateNumber();

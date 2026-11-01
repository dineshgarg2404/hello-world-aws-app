function updateClock() {
  const clockEl = document.getElementById('clock');
  clockEl.textContent = new Date().toLocaleString();
}

updateClock();
setInterval(updateClock, 1000);

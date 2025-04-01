/* Task 13
Create an object `timer` with `seconds` and a method `start()` that counts seconds up.
Display the timer in an HTML element and update it every second.
*/

// Your code here
const timer = {
  seconds: 0,
  intervalId: null,
  start() {
    this.intervalId = setInterval(() => {
      this.seconds += 1;
      document.getElementById("timer-display").textContent = this.seconds;
    }, 1000);
  },
  stop() {
    clearInterval(this.intervalId);
    this.intervalId = null;
  },
};
document.getElementById("start-button").addEventListener("click", () => {
  timer.start();
  document.getElementById("start-button").disabled = true;
  document.getElementById("stop-button").disabled = false;
});

document.getElementById("stop-button").addEventListener("click", () => {
  timer.stop();
  document.getElementById("start-button").disabled = false;
  document.getElementById("stop-button").disabled = true;
});

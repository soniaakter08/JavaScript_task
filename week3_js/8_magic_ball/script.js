function shakeBall() {
  const responses = [
    "Yes, definitely!",
    "It is certain.",
    "Reply hazy, try again.",
    "Ask again later.",
    "Better not tell you now.",
    "My sources say no.",
    "Outlook not so good.",
    "Signs point to yes.",
  ];

  const answerElement = document.getElementById("answer");
  const ball = document.getElementById("ball");

  // Add shake effect
  ball.classList.add("shake");
  setTimeout(() => {
    ball.classList.remove("shake");

    // Get a random response
    const randomIndex = Math.floor(Math.random() * responses.length);
    answerElement.textContent = responses[randomIndex];
  }, 500);
}

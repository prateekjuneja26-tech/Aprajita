const noButton = document.getElementById("no");

noButton.addEventListener("mouseover", () => {
  const x = Math.random() * (window.innerWidth - 100);
  const y = Math.random() * (window.innerHeight - 50);

  noButton.style.position = "absolute";
  noButton.style.left = `${x}px`;
  noButton.style.top = `${y}px`;
});

document.getElementById("yes").addEventListener("click", () => {
  alert("YAYYY ❤️🥰 Best decision ever!");
});

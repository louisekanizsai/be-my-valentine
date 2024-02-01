// creating page content

function createElement(type, className, innerText = "") {
  const element = document.createElement(type);
  element.className = className;
  if (innerText) element.innerText = innerText;
  return element;
}

const mainText = createElement("h1", "main-text", "Will you be my valentine?");

const mainContainer = document.querySelector(".main-container");
const yesBtn = createElement("button", "btn", "yes");
const noBtn = createElement("button", "btn", "no");
const img = createElement("img", "img");
const hearts = createElement("div", "hearts");
img.src = "https://ibb.co/p4FVb1N";
hearts.append(img);
const buttonsContainer = document.querySelector(".btns-container");
buttonsContainer.append(yesBtn, noBtn);
mainContainer.append(mainText, hearts, buttonsContainer);

// btns functionality

function getRandomPosition(element) {
  const x = window.innerWidth - element.clientWidth;
  const y = window.innerHeight - element.clientHeight;
  const randomX = Math.floor(Math.random() * x);
  const randomY = Math.floor(Math.random() * y);
  return { x: randomX, y: randomY };
}

noBtn.addEventListener("mouseover", () => {
  const newPos = getRandomPosition(noBtn);
  noBtn.style.position = "absolute";
  noBtn.style.left = `${newPos.x}px`;
  noBtn.style.top = `${newPos.y}px`;
});

yesBtn.addEventListener("click", () => {
  window.location.href = "./html/yes.html";
});

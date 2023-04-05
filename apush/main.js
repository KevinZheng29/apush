import "./style.css";

let box = [];
let position = "";

let sprite =
  "https://i.pinimg.com/originals/63/91/03/639103eff63de2e26c5e1ecd0365712f.png";
for (let i = 1; i < 101; i++) {
  box[i] = document.getElementById(`box${i}`);
}
box[1].innerHTML =
  box[1].innerHTML = `<div><img class="sprite" src ="${sprite}"></div>`;

function clear() {
  box.forEach((box) => {
    box.innerHTML = "";
  });
}

box.forEach((box) => {
  box.addEventListener("click", function () {
    clear();
    box.innerHTML = `<div><img class="sprite" src ="${sprite}"></div>`;
    position = box.id;
    alertladder();
  });
});

function alertladder() {
  console.log(position);
  if (position === "box2") {
    console.log("u reached a ladder");
  } else if (position === "box7") {
    console.log("u reached a ladder");
  }
}

import "./style.css";

let noticepage = document.getElementById("gameplaymessagepage");

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
    noticepage.innerHTML =
      "<div><h1>You reached a ladder!</h1><button id='box2climb' class='climbbtn'>Climb Up</button></div>";
    let btnbox2 = document.getElementById("box2climb");
    btnbox2.addEventListener("click", function () {
      clear();
      box[38].innerHTML = `<div><img class="sprite" src ="${sprite}"></div>`;
      noticepage.innerHTML = "";
    });
  } else if (position === "box7") {
    console.log("u reached a ladder");
    noticepage.innerHTML =
      "<div><h1>You reached a ladder!</h1><button id='box7climb' class='climbbtn'>Climb Up</button></div>";
    let btnbox7 = document.getElementById("box7climb");
    btnbox7.addEventListener("click", function () {
      clear();
      box[14].innerHTML = `<div><img class="sprite" src ="${sprite}"></div>`;
      noticepage.innerHTML = "";
    });
  } else if (position === "box8") {
    console.log("u reached a ladder");
    noticepage.innerHTML =
      "<div><h1>You reached a ladder!</h1><button id='box8climb' class='climbbtn'>Climb Up</button></div>";
    let btnbox8 = document.getElementById("box8climb");
    btnbox8.addEventListener("click", function () {
      clear();
      box[31].innerHTML = `<div><img class="sprite" src ="${sprite}"></div>`;
      noticepage.innerHTML = "";
    });
  } else if (position === "box15") {
    console.log("u reached a ladder");
    noticepage.innerHTML =
      "<div><h1>You reached a ladder!</h1><button id='box15climb' class='climbbtn'>Climb Up</button></div>";
    let btnbox15 = document.getElementById("box15climb");
    btnbox15.addEventListener("click", function () {
      clear();
      box[26].innerHTML = `<div><img class="sprite" src ="${sprite}"></div>`;
      noticepage.innerHTML = "";
    });
  } else if (position === "box21") {
    console.log("u reached a ladder");
    noticepage.innerHTML =
      "<div><h1>You reached a ladder!</h1><button id='box21climb' class='climbbtn'>Climb Up</button></div>";
    let btnbox21 = document.getElementById("box21climb");
    btnbox21.addEventListener("click", function () {
      clear();
      box[42].innerHTML = `<div><img class="sprite" src ="${sprite}"></div>`;
      noticepage.innerHTML = "";
    });
  } else if (position === "box28") {
    console.log("u reached a ladder");
    noticepage.innerHTML =
      "<div><h1>You reached a ladder!</h1><button id='box26climb' class='climbbtn'>Climb Up</button></div>";
    let btnbox26 = document.getElementById("box26climb");
    btnbox26.addEventListener("click", function () {
      clear();
      box[84].innerHTML = `<div><img class="sprite" src ="${sprite}"></div>`;
      noticepage.innerHTML = "";
    });
  } else if (position === "box36") {
    console.log("u reached a ladder");
    noticepage.innerHTML =
      "<div><h1>You reached a ladder!</h1><button id='box36climb' class='climbbtn'>Climb Up</button></div>";
    let btnbox36 = document.getElementById("box36climb");
    btnbox36.addEventListener("click", function () {
      clear();
      box[44].innerHTML = `<div><img class="sprite" src ="${sprite}"></div>`;
      noticepage.innerHTML = "";
    });
  } else if (position === "box51") {
    console.log("u reached a ladder");
    noticepage.innerHTML =
      "<div><h1>You reached a ladder!</h1><button id='box51climb' class='climbbtn'>Climb Up</button></div>";
    let btnbox51 = document.getElementById("box51climb");
    btnbox51.addEventListener("click", function () {
      clear();
      box[67].innerHTML = `<div><img class="sprite" src ="${sprite}"></div>`;
      noticepage.innerHTML = "";
    });
  } else if (position === "box71") {
    console.log("u reached a ladder");
    noticepage.innerHTML =
      "<div><h1>You reached a ladder!</h1><button id='box71climb' class='climbbtn'>Climb Up</button></div>";
    let btnbox71 = document.getElementById("box71climb");
    btnbox71.addEventListener("click", function () {
      clear();
      box[91].innerHTML = `<div><img class="sprite" src ="${sprite}"></div>`;
      noticepage.innerHTML = "";
    });
  } else if (position === "box78") {
    console.log("u reached a ladder");
    noticepage.innerHTML =
      "<div><h1>You reached a ladder!</h1><button id='box78climb' class='climbbtn'>Climb Up</button></div>";
    let btnbox78 = document.getElementById("box78climb");
    btnbox78.addEventListener("click", function () {
      clear();
      box[98].innerHTML = `<div><img class="sprite" src ="${sprite}"></div>`;
      noticepage.innerHTML = "";
    });
  } else if (position === "box87") {
    console.log("u reached a ladder");
    noticepage.innerHTML =
      "<div><h1>You reached a ladder!</h1><button id='box87climb' class='climbbtn'>Climb Up</button></div>";
    let btnbox87 = document.getElementById("box87climb");
    btnbox87.addEventListener("click", function () {
      clear();
      box[94].innerHTML = `<div><img class="sprite" src ="${sprite}"></div>`;
      noticepage.innerHTML = "";
    });
  }
}

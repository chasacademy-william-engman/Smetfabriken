let count = 0;

function updateCount() {
  document.getElementById("count").innerHTML = "Du har blivit smetad " + count + " gånger";
}

function saveCount() {
  localStorage.setItem("count", count);
}

function loadCount() {
  let saved = localStorage.getItem("count");
  if (saved !== null) {
    count = Number(saved);
  }
  updateCount();
}

function increaseCount() {
  count++;
  updateCount();
}

// Function to decrease the counter
function decreaseCount() {
  count--;
  updateCount();
}

function smeta() {
  const lager = document.getElementById("splash-lager");

  const img = document.createElement("img");
  const ljud = new Audio('ljud/Smet.mp3'); 

  img.src = "bilder/smetklick.png";
  img.alt = "";
  img.className = "splash";
  img.style.setProperty("--v", (Math.random() * 60 - 30) + "deg");

  increaseCount();

  ljud.currentTime = 0; // Återställ ljudet till början (så det kan spelas direkt igen)
  ljud.play();

  lager.appendChild(img);
  void img.offsetWidth;
  img.classList.add("kor");



  img.addEventListener("animationend", () => img.remove());
}

function konfetti() {
    for (let i = 0; i < Math.random() * 70 + 35; i++) {
        const para = document.createElement("img");
        para.src = "bilder/smetklick.png";
        para.alt = "konfettiSmet";
        para.className = "konfettiSmet";

        para.style.left = Math.random() * 100 + "vw";
        para.style.width = Math.random() * 30 + 10 + "px";

        const fallTid = Math.random() * 2 + 2;
        const fördröjning = Math.random() * 1.5;
    
        para.style.animationDuration = fallTid + "s";
        para.style.animationDelay = fördröjning + "s";

        document.body.appendChild(para);

        const totalTidMs = (fallTid + fördröjning) * 1000;
        setTimeout(() => {
            para.remove();
        }, totalTidMs);
    }
}
konfetti();

let secretCode = "";

document.addEventListener("keydown", function(event) {
    secretCode += event.key.toLowerCase();

    if (secretCode.includes("smet")) {

        document.body.classList.add("easter-egg");

        alert("🥚 SMET EGG FOUND!");

        secretCode = "";
    }
});




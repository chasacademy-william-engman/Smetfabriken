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

  increaseCount();

  ljud.currentTime = 0;
  ljud.play();

  konfetti();

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

var i = 0;
var txt = "Du skickar ingredienserna – vi gör resten";
var speed = 25;

var element = document.getElementById("ValkommenTxt");
element.innerHTML = "";

function typeWriter() {
  if (i < txt.length) {
    element.innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
  else
  {
    element.innerHTML += '<span class="cursor">|</span>';
  }
}
typeWriter();

let secretCode = "";

document.addEventListener("keydown", function(event) {
    secretCode += event.key.toLowerCase();

    if (secretCode.includes("smet")) {

        document.body.classList.add("easter-egg");

        alert("🥚 SMET EGG FOUND!");

        secretCode = "";
    }
});

var countDownDate = new Date("Sep 11, 2026, 15:00:00").getTime();

var x = setInterval(function() {

 
  var now = new Date().getTime();
    
  
  var distance = countDownDate - now;
    
 
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
  
  document.getElementById("demo").innerHTML = days + "d " + hours + "h "
  + minutes + "m " + seconds + "s ";
    
  
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "EXPIRED";
  }
}, 1000);


var smetCitat = [
  "Den som smet från ansvar möter det ändå förr eller senare.",
  "Varför smet pannkakan från festen? Den kände sig lite platt.",
  "Bättre en ärlig smet i skålen än ett halvt löfte.",
  "Ingen bygger något bestående genom att smita undan svårigheter.",
  "Livet är som en smet — det formas av vad du rör ner i det.",
  "Han smet ut ur mötet just när det blev intressant.",
  "Varför gick smeten till psykologen? Den kunde inte hålla ihop sig.",
  "Smit inte från dina drömmar bara för att de kräver tålamod.",
  "En god vänskap smiter aldrig undan när det blåser som mest.",
  "Vad sa våffelsmeten till pannan? Häll dig, nu blir det fart.",
  "Den som ständigt smiter undan ansvar lär sig aldrig bära det.",
  "Bäst av allt med kladdkaka är smeten — resten är bara bonus.",
  "Varför vann inte smeten tävlingen? Den smet iväg innan mållinjen.",
  "Att smita från sanningen kostar alltid mer i längden.",
  "Rör om i smeten länge nog, så blir till och med kaos en kaka."
];

var senasteIndex = -1;

function nyttCitat() {
  var i;
  do {
    i = Math.floor(Math.random() * smetCitat.length);
  } while (i === senasteIndex && smetCitat.length > 1);
  senasteIndex = i;
  document.getElementById("quote").innerHTML = smetCitat[i];
}

const teamMembers = [
  { name: "Smethan", role: "Lagkapten" },
  { name: "Smetgeniy", role: "Smetblandare" },
  { name: "Smerran", role: "Kvalitetskontroll" },
  { name: "Smilliam", role: "Ingrediensansvarig" },
  { name: "Smetvig", role: "Design" },
  { name: "Smetrob", role: "Logistik" }
];

const teamContainer = document.querySelector("#team-container");

teamMembers.forEach(member => {
  const card = document.createElement("div");
  card.classList.add("team-card");

  const nameEl = document.createElement("h3");
  nameEl.textContent = member.name;

  const roleEl = document.createElement("p");
  roleEl.textContent = member.role;

  card.appendChild(nameEl);
  card.appendChild(roleEl);

  teamContainer.appendChild(card);
});

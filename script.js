function smeta() {
  const lager = document.getElementById("splash-lager");

  const img = document.createElement("img");
  img.src = "bilder/smetklick.png";
  img.alt = "";
  img.className = "splash";
  img.style.setProperty("--v", (Math.random() * 60 - 30) + "deg");

  lager.appendChild(img);
  void img.offsetWidth;
  img.classList.add("kor");

  img.addEventListener("animationend", () => img.remove());
}
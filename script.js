// Show the secret page button after clicking on any image in the official art section
document.querySelectorAll(".art-image").forEach((img) => {
  img.addEventListener("click", function (e) {
    e.preventDefault();
    document.getElementById("secretPage").style.display = "inline-block"; // Show secret button
  });
});

// Navigation buttons
document.getElementById("goToTrailer").addEventListener("click", () => {
  document.getElementById("homeSection").style.display = "none";
  document.getElementById("trailerSection").style.display = "block";
});

document.getElementById("goToCreators").addEventListener("click", () => {
  document.getElementById("homeSection").style.display = "none";
  document.getElementById("creatorsSection").style.display = "block";
});

document.getElementById("goToOfficalart").addEventListener("click", () => {
  document.getElementById("homeSection").style.display = "none";
  document.getElementById("officalartsection").style.display = "block";
});

document.getElementById("goHome").addEventListener("click", () => {
  document.getElementById("trailerSection").style.display = "none";
  document.getElementById("homeSection").style.display = "block";
});

document.getElementById("goHomeFromCreators").addEventListener("click", () => {
  document.getElementById("creatorsSection").style.display = "none";
  document.getElementById("homeSection").style.display = "block";
});

document.getElementById("goHomeFromArt").addEventListener("click", () => {
  document.getElementById("officalartsection").style.display = "none";
  document.getElementById("homeSection").style.display = "block";
});

// Secret page button navigation
document.getElementById("secretPage").addEventListener("click", () => {
  document.getElementById("officalartsection").style.display = "none";
  document.getElementById("secretPageSection").style.display = "block";
});

// Back to home from secret page
document.getElementById("goHomeFromSecret").addEventListener("click", () => {
  document.getElementById("secretPageSection").style.display = "none";
  document.getElementById("homeSection").style.display = "block";
});

// Discord button link on creators page
document.getElementById("discordBtn").addEventListener("click", () => {
  window.open("https://discord.gg/SzMUH6BHnF", "_blank");
});

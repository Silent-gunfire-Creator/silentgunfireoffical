const homeSection = document.getElementById("homeSection");
const trailerSection = document.getElementById("trailerSection");
const creatorsSection = document.getElementById("creatorsSection");
const officalartsection = document.getElementById("officalartsection");
const secretPageSection = document.getElementById("secretPageSection");

document.getElementById("goToTrailer").onclick = () => {
  showOnly(trailerSection);
};

document.getElementById("goToCreators").onclick = () => {
  showOnly(creatorsSection);
};

document.getElementById("goToOfficalart").onclick = () => {
  showOnly(officalartsection);
};

document.querySelectorAll(".backHome").forEach((btn) => {
  btn.onclick = () => showOnly(homeSection);
});

document.querySelectorAll('.gallery a').forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    showOnly(secretPageSection);
  });
});

function showOnly(section) {
  [homeSection, trailerSection, creatorsSection, officalartsection, secretPageSection].forEach(sec => {
    sec.style.display = "none";
  });
  section.style.display = "block";
}

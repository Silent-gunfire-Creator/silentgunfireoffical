document.addEventListener('DOMContentLoaded', function () {
  const homeSection = document.getElementById("homeSection");
  const trailerSection = document.getElementById("trailerSection");
  const creatorsSection = document.getElementById("creatorsSection");
  const officalartsection = document.getElementById("officalartsection");
  const secretPageSection = document.getElementById("secretPageSection");

  // Map section names to their elements
  const sectionMap = {
    "home": homeSection,
    "trailer": trailerSection,
    "creators": creatorsSection,
    "art": officalartsection,
    "secret": secretPageSection
  };

  function showOnlySectionByHash(hash) {
    // Remove the # if present
    const sectionName = hash.replace("#", "") || "home";
    // Hide all sections
    Object.values(sectionMap).forEach(sec => sec.style.display = "none");
    // Show the requested section, or fallback to home
    (sectionMap[sectionName] || homeSection).style.display = "block";
  }

  // Navigation button handlers update the URL hash
  document.getElementById("goToTrailer").onclick = () => {
    window.location.hash = "#trailer";
  };

  document.getElementById("goToCreators").onclick = () => {
    window.location.hash = "#creators";
  };

  document.getElementById("goToOfficalart").onclick = () => {
    window.location.hash = "#art";
  };

  document.querySelectorAll(".backHome").forEach((btn) => {
    btn.onclick = () => {
      window.location.hash = "#home";
    };
  });

  document.querySelectorAll('.gallery a').forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      window.location.hash = "#secret";
    });
  });

  // Listen for hash changes (browser navigation)
  window.addEventListener('hashchange', () => {
    showOnlySectionByHash(window.location.hash);
  });

  // Show correct section on first load
  showOnlySectionByHash(window.location.hash);
});

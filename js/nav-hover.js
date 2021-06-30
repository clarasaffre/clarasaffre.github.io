document.addEventListener("DOMContentLoaded", showMenu);
function showMenu() {
  // fonction pour faire apparaitre le menu
  const points = document.getElementsByClassName("points"); // je récupère les points
  const texts = document.getElementsByClassName("nav-text"); // Je récupère les textes
  for (let i = 0; i < points.length; i++) {
    points[i].addEventListener("mouseover", function() {
      texts[i].style.visibility = "visible";
    });
    points[i].addEventListener("mouseout", function() {
      texts[i].style.visibility = "hidden";
    });
  }
}

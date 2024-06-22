var perso = document.querySelector(".perso");
var obstacle = document.querySelector(".obstacle");

// Fonctions pour faire sauter le perso
function sauter() {
  if (perso.classList != "animations-perso") {
    perso.classList.add("animations-perso");
  }
  setTimeout(function () {
    perso.classList.remove("animations-perso");
  }, 500);
}

function start() {
  setTimeout(function () {
    if (obstacle.classList != "animations-obstacle") {
      obstacle.classList.add("animations-obstacle");
    }
  }, 3000);
}

//Vérifier si l'obstacle touche le perso
var vérif = setInterval(function () {
  var persoTop = parseInt(
    window.getComputedStyle(perso).getPropertyValue("top")
  );
  var obstaclesLeft = parseInt(
    window.getComputedStyle(obstacle).getPropertyValue("left")
  );

  if (obstaclesLeft < 40 && obstaclesLeft > 0 && persoTop >= 130) {
    obstacle.style.animation = "none";
    alert("Vous avez perdu !");
  }
});

var solutionLinks = document.querySelectorAll(".solutionLink");

for (var i = 0; i < solutionLinks.length; i++) {
  solutionLinks[i].addEventListener("click", function() {
    this.nextElementSibling.classList.toggle("hidden");
  });
}
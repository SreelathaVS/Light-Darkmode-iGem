document.querySelector('.navbar-toggler').addEventListener('click', function () {
    var navbar = document.querySelector('.navbar');
    navbar.classList.toggle('menu-open');
  });
  

function darkModeFunc() {
    var body = document.body;
    var main = document.querySelector('.main').querySelectorAll('div')[0];
    var overlapName = document.getElementById("overlap-name");
    var darkModeToggler = document.getElementById("dark-mode-toggler");

    if (body.classList.contains("dark-mode")) {
        // Currently in dark mode, switch to light mode
        body.classList.remove("dark-mode");
        main.classList.remove("section-1");
        main.classList.add("light");
        overlapName.innerHTML = ""; // Clear content
        darkModeToggler.innerHTML = "Dark Mode";
        document.querySelector('.main img').src = "lightmode-bg.png";
    } else {
        // Currently in light mode, switch to dark mode
        body.classList.add("dark-mode");
        main.classList.remove("light");
        main.classList.add("section-1");
        overlapName.innerHTML = "PROJECT NAME";
        darkModeToggler.innerHTML = "Light Mode";
        document.querySelector('.main img').src = "darkmode-bg.png";
    }
}



  
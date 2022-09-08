function show_hide_menu () {
    let menu = document.getElementById("mainMenu");
    let menuButton = document.getElementById("menuButton");
    if (menu.style.display === "flex") {
        // menuButton.style.setProperty('border-color', 'white', 'important');
        // menuButton.style.setProperty('color', 'white', 'important');
        if (document.body.clientWidth > 850) {
            menuButton.classList.remove("selectedMenuButton");
        }

        menu.style.display = "none";
    }
    else {
        // menuButton.style.setProperty('background-color', '#7cd7ff', 'important');
        // menuButton.style.setProperty('color', '#7cd7ff', 'important');
        if (document.body.clientWidth > 850) {
            menuButton.classList.add("selectedMenuButton");
        }

        menu.style.display = "flex";
    }

}
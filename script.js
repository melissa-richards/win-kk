document.onreadystatechange = function () {
    if (document.readyState == "interactive") {

        let displayMenu = false;

        const menu = document.getElementById("navHamburger");

        const hamburgerMenu = document.getElementById
            ("hamburger");

        hamburgerMenu.addEventListener("click", function () {
            displayMenu = !displayMenu;
            menu.style.display = displayMenu ? 'block' : 'none';
        });

        const navMenu = document.querySelectorAll('#navHamburger a')

        navMenu.forEach((li) => {
            li.addEventListener('click', function () {
                displayMenu = !displayMenu;
                menu.style.display = 'none';
            })
        })
    }
}
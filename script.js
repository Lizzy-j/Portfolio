toggleMenu{
    document.querySelector(".navigation_menu--icon").classList.toggle("display")
};


window.onclick = function(event) {
    if (!event.target.matches('.navigation_menu--icon')) {
        let dropdowns = document.getElementsByClassName("nav_link-container");
        let i;
        for (i = 0; i < dropdowns.length; i++) {
          let openDropdown = dropdowns[i];
          if (openDropdown.classList.contains('let')) {
            openDropdown.classList.remove('let');
          }
        }
      }
}
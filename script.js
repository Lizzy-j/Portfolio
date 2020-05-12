function toggleMenu(){
    document.querySelector(".navigation_menu--icon").classList.toggle("display")
};


window.onclick = function(event) {
    if (!event.target.matches('.navigation_menu--icon')) {
        let dropdowns = document.querySelector(".nav_link-container");
        for (let i = 0; i < dropdowns.length; i++) {
          let openDropdown = dropdowns[i];
          if (openDropdown.classList.contains('display')) {
            openDropdown.classList.remove('display');
          }
        }
      }
}
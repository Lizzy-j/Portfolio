function myFunction(){
    document.getElementById("navLinksContainer").classList.toggle("show")
};

let menuBtn = document.querySelector("i");

window.onclick = function(event) {
    console.log("hi")
    if (!event.target.matches('.dropbtn')) {
        let dropdowns = document.getElementsByClassName("dropdown-content");
        for (let i = 0; i < dropdowns.length; i++) {
          let openDropdown = dropdowns[i];
          if (openDropdown.classList.contains('show')) {
            openDropdown.classList.remove('show');
          }
        }
      }
}
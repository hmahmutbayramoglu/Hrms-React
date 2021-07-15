
// Nav Sticky


 
    window.addEventListener("scroll", function() {
        var nav = document.querySelector("nav");
        nav.classList.toggle("sticky", window.scrollY > 0);
    
        var navlink = document.getElementsByClassName("nav-link");
        for (let i = 0; i < navlink.length; i++) {
            navlink[i].classList.toggle("sticky", window.scrollY > 0);
        }

 
    
    });    
 
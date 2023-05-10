addEventListener("DOMContentLoaded", () => {
  // var header = document.querySelector('header');
  // var i = document.getElementById("i");
  // var p = document.getElementById("p");
  // var h = document.getElementById("h");
  // var c = document.getElementById("c");
  // window.addEventListener('scroll', ()=>{
  //     var scroll = window.scrollY;
  //     if(scroll>50){
  //         header.style.backgroundColor = 'white';
  //         header.style.boxShadow = '0px 4px 8px rgba(0, 0, 0, 0.2)';
  //         // i.style.color = 'black';
  //         // p.style.color = 'black';
  //         // h.style.color = 'black';
  //         // c.style.color = 'black';
  //     }
  //     else{
  //         header.style.backgroundColor = 'transparent';
  //         header.style.boxShadow = 'none';
  //         // i.style.color = 'white';
  //         // p.style.color = 'white';
  //         // h.style.color = 'white';
  //         // c.style.color = 'white';
  //     }
  // })
  // let section = document.querySelectorAll('section');
  // let navLinks = document.querySelectorAll('header nav ul li a');
  // window.onscroll = () =>{
  //     section.forEach(sec =>{
  //         let top = window.scrollY;
  //         let offset = sec.offsetTop;
  //         let height = sec.offsetHeight;
  //         let id = sec.getAttribute('id');
  //         if(top >= offset && top < offset + height){
  //             navLinks.forEach(links =>{
  //                 links.classList.remove('active');
  //                 document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
  //             })
  //         }
  //     })
  // }

  // Evento de clic en los enlaces de navegación
  document.querySelectorAll("header nav a").forEach(function (link) {
    link.addEventListener("click", function (event) {
      event.preventDefault();

      var targetSectionId = this.getAttribute("href");
      var targetSection = document.querySelector(targetSectionId);

      document.querySelectorAll("header nav a").forEach(function (navLink) {
        if (navLink === event.target) {
          navLink.classList.add("active");
        } else {
          navLink.classList.remove("active");
        }
      });

      window.scrollTo({
        top:
          targetSection.offsetTop -
          document.querySelector("header").offsetHeight,
        behavior: "smooth",
      });
    });
  });

  // Evento de desplazamiento (scroll)
  window.addEventListener("scroll", function () {
    var headerHeight = document.querySelector("header").offsetHeight;
    var sections = document.querySelectorAll("section");
    var navLinks = document.querySelectorAll("header nav a");

    for (var i = 0; i < sections.length; i++) {
      var section = sections[i];
      var sectionTop = section.offsetTop;

      if (window.pageYOffset >= sectionTop - headerHeight) {
        for (var j = 0; j < navLinks.length; j++) {
          var link = navLinks[j];
          if (link.getAttribute("href") === "#" + section.getAttribute("id")) {
            link.classList.add("active");
          } else {
            link.classList.remove("active");
          }
        }
        section.style.paddingTop = "0";
      } else {
        section.style.paddingTop = "0";
      }
    }
  });

  var hamburgerIcon = document.querySelector(".hamburger-icon");
  var nav = document.querySelector("header div nav");

  hamburgerIcon.addEventListener("click", function () {
    nav.classList.toggle("deployed");

    if (nav.classList.contains("deployed")) {
      setTimeout(function () {
        nav.querySelector("nav").style.opacity = "1";
      }, 10);
    } else {
      nav.querySelector("nav").style.opacity = "0";
    }
  });

  var navEnlaces = document.querySelectorAll("header div nav ul li a");
  navEnlaces.forEach(function (link) {
    link.addEventListener("click", function () {
      nav.classList.remove("deployed");
    });
  });
});

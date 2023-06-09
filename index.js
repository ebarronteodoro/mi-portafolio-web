addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll("header nav a").forEach(function (e) {
    e.addEventListener("click", function (e) {
      e.preventDefault();
      var t = this.getAttribute("href"),
        r = document.querySelector(t);
      document.querySelectorAll("header nav a").forEach(function (t) {
        t === e.target
          ? t.classList.add("active")
          : t.classList.remove("active");
      }),
        window.scrollTo({
          top: r.offsetTop - document.querySelector("header").offsetHeight,
          behavior: "smooth",
        });
    });
  }),
    window.addEventListener("scroll", function () {
      for (
        var e = document.querySelector("header").offsetHeight,
          t = document.querySelectorAll("section"),
          r = document.querySelectorAll("header nav a"),
          o = 0;
        o < t.length;
        o++
      ) {
        var a = t[o],
          l = a.offsetTop;
        if (window.pageYOffset >= l - e) {
          for (var c = 0; c < r.length; c++) {
            var i = r[c];
            i.getAttribute("href") === "#" + a.getAttribute("id")
              ? i.classList.add("active")
              : i.classList.remove("active");
          }
          a.style.paddingTop = "0";
        } else a.style.paddingTop = "0";
      }
    });

  var hamburger = document.querySelector(".hamburger-icon");
  var mobileMenu = document.querySelector("header div nav");
  var links = mobileMenu.querySelectorAll(".icono");
  var iconBars = hamburger.querySelector(".fa-bars");
  var iconTimes = hamburger.querySelector(".fa-times");
  var body = document.querySelector('body');

  // Escuchar el evento de clic en el icono de hamburguesa
  hamburger.addEventListener("click", function () {
    mobileMenu.classList.toggle("deployed");
    iconBars.classList.toggle("hide");
    iconTimes.classList.toggle("show");
    body.classList.toggle("no-scroll");
  });

  // Escuchar el evento de clic en cada enlace dentro del menú
  links.forEach(function (link) {
    link.addEventListener("click", function () {
      mobileMenu.classList.remove("deployed");
      iconBars.classList.remove("hide");
      iconTimes.classList.remove("show");
    });
  });
});

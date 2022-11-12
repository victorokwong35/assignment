document.addEventListener("DOMContentLoaded", function (event) {
  // <-- add this wrapper
  var button = document.querySelectorAll(".button");

  if (button) {
    button.forEach(function (el, key) {
      el.addEventListener("click", function () {
        console.log(key);

        el.classList.toggle("active");

        button.forEach(function (ell, els) {
          if (key !== els) {
            ell.classList.remove("active");
          }
          console.log(els);
        });
      });
    });
  }
});

const $body = document.querySelector("body");
const $loading = document.querySelector(".loading");


function init() {
  $body.classList.add("animation--in")
}

function loading() {
  $body.classList.add("animation--out")
  $loading.classList.add("active");
  setTimeout(() => {
    $loading.classList.add("hidden");
    init();
  }, 2200);
}

window.onload = function () {
  setTimeout(() => {
    loading();
  }, 3000);
};

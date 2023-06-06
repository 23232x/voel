window.onscroll = function () {
  scroll();
};
function scroll() {
  let btn = document.getElementById("btnTop");
  if (document.documentElement.scrollTop > 50) {
    btn.style.display = "block";
  } else {
    btn.style.display = "none";
  }
}

function toTop() {
  document.documentElement.scrollTop = 0;
}

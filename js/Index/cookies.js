const cookie = document.querySelector("#cookies"); 
const rotated = document.querySelector(".rotate");

function toggleCookies() {
  let computedStyle = window.getComputedStyle(cookie);
  if (computedStyle.display === "none") {
    rotated.style.transform = "rotate(-90deg)";
    cookie.style.display = "block";
  } else {
    rotated.style.transform = "rotate(90deg)";
    cookie.style.display = "none"; 
  }
}

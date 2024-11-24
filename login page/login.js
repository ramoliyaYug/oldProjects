const wrapper = document.querySelector(".wrapper");
const loginLink = document.querySelector(".login-link");
const registerLink = document.querySelector(".register-link");
const btnPopup = document.querySelector(".btnLogin-popup");
const iconClose = document.querySelector(".icon-close");

registerLink.addEventListener("click", () => {
  wrapper.classList.add("active");
});

loginLink.addEventListener("click", () => {
  wrapper.classList.remove("active");
});

btnPopup.addEventListener("click", () => {
  wrapper.classList.add("active-popup");
});

iconClose.addEventListener("click", () => {
  wrapper.classList.remove("active-popup");
});

// form vadidation

var a = document.getElementById("runame").value;
var b = document.getElementById("remail").value;
var c = document.getElementById("rpassword").value;
var d = document.getElementById("rcpassword").value;

var f = document.getElementById("lemail").value;
var g = document.getElementById("lpassword").value;

function registercheck() {
  if (c === d) {
    return true;
  } else {
    alert("check comform password");
    return false;
  }
}

function logincheck() {}

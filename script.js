const btn = document.querySelector(".form-button");
const inputField = document.querySelectorAll(".input");
const form = document.querySelector(".form-container");
const email = document.getElementById("email");
const pattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

const errorRem = function (er) {
  er.classList.remove("error");
  er.nextElementSibling.classList.remove("visible");
};
const errorAdd = function (er) {
  er.classList.add("error");
  er.nextElementSibling.classList.add("visible");
};

btn.addEventListener("click", function (e) {
  let i = 0;
  e.preventDefault();
  inputField.forEach((element) => {
    errorRem(element);
    if (element.value.trim() === "") {
      errorAdd(element);
      element.placeholder = "";
    } else if (!email.value.match(pattern)) {
      errorAdd(email);
      email.value = " Wrong E-mail Format";
      email.style.color = "red";
    } else i++;
    console.log(i);
    if (i === 4) {
      form.submit();
    }
  });
});

inputField.forEach((el) => {
  el.addEventListener("focus", function () {
    el.value = "";
    errorRem(el);
    el.style.color = "black";
  });
});

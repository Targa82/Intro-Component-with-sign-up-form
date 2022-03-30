const btn = document.querySelector(".form-button");
const inputField = document.querySelectorAll(".input");
const form = document.querySelector(".form-container");

btn.addEventListener("click", function (e) {
  let i = 0;
  e.preventDefault();
  inputField.forEach((element) => {
    element.classList.remove("error");
    element.nextElementSibling.classList.remove("visible");

    if (element.value === "") {
      element.classList.add("error");
      element.nextElementSibling.classList.add("visible");
    } else i++;
    console.log(i);
    if (i === 4) {
      form.submit();
    }
  });
});

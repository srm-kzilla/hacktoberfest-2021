const registerButton = document.getElementById("register");
const formSection = document.getElementById("form-section");

registerButton.addEventListener("click", () => {
  formSection.scrollIntoView({ behavior: "smooth", block: "start" });
});

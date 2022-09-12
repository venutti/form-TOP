const passwordInput = document.querySelector("#password");
const confirmPasswordInput = document.querySelector("#confirm-password");

passwordInput.addEventListener("input", function(e) {
    confirmPasswordInput.setAttribute("pattern", this.value);
});
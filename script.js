
const button = document.querySelector("button");
const joke = document.querySelector("#joke");

button.addEventListener("click", () => {
    joke.style.display = joke.style.display === "none" ? "block" : "none";
    joke.style.textAlign = "center";
});
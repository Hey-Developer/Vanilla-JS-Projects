const loader = document.querySelector(".beforeLoads");

function vanish() {
    loader.classList.add("disappear");
}
window.addEventListener("load", vanish);
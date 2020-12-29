let cityImg = [
    "Dubai.jpg",
    "Sydney.jpg",
    "vegas.jpg",
    "chicago.jpg",
    "London.jpg",
    "NewYork.jpg",
    "San-francisco.jpg",
];
let city = [];
city.push("&#8220 Dubai &#8221;");
city.push("&#8220 Sydney &#8221;");
city.push("&#8220 Las-Vegas &#8221;");
city.push("&#8220 Chicago &#8221;");
city.push("&#8220 London &#8221;");
city.push("&#8220 New York &#8221;");
city.push("&#8220 SanFrancisco &#8221;");

let index = 0;
let image = document.getElementsByTagName("img")[0];
let text = document.getElementsByTagName("p")[0];
let wrap = document.querySelector("#wrapper");
let count = 1;
let id;
let nxtImage = () => {
    count = 1;
    fade();

    function fade() {
        if (count == 1) {
            wrap.style.opacity = "0.4";
            count++;
        } else {
            wrap.style.opacity = "1";
            // count = 1;
            clearTimeout(id);
        }
        setTimeout(fade, 100);
    }

    image.attributes.src.value = cityImg[index + 1];
    text.innerHTML = city[index + 1];
    ++index;
    console.log(image);
    console.log(cityImg[index]);
    console.log(index);
    if (index == 6) {
        index = -1;
    }
};

document
    .querySelector(".fa-arrow-circle-right")
    .addEventListener("click", nxtImage);

let prevImage = () => {
    count = 1;
    fade();

    function fade() {
        if (count == 1) {
            wrap.style.opacity = "0.4";
            count++;
        } else {
            wrap.style.opacity = "1";
            // count = 1;
            clearTimeout(id);
        }
        setTimeout(fade, 100);
    }
    index = index < 0 ? 6 : index;
    index = index == 0 ? 7 : index;
    image.attributes.src.value = cityImg[index - 1];
    text.innerHTML = city[index - 1];
    --index;
    console.log(image);
    console.log(cityImg[index]);
    console.log(index);

    if (index == 0) {
        index = 7;
    }
};

document
    .querySelector(".fa-arrow-circle-left")
    .addEventListener("click", prevImage);

let allDots = document.querySelectorAll(".dots");

function currentImage(n) {
    index = n;
    image.attributes.src.value = cityImg[n];
    text.innerHTML = city[n];
    for (let i = 0; i < allDots.length; i++) {
        if (i == n) {
            allDots[i].id = "active";
        } else {
            allDots[i].id = " ";
        }
    }
}
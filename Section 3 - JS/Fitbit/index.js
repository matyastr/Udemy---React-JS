/*jshint esversion: 6 */

const redUrl = "https://i.imgur.com/PTgQlim.png";
const blackUrl = "https://i.imgur.com/iOeUBV7.png";
const blueUrl = "https://i.imgur.com/Mplj1YR.png";
const pinkUrl = "https://i.imgur.com/Zygu7I3.png";
const purpleUrl = "https://i.imgur.com/xSIK4M8.png";

const pdpImage = document.getElementById("pdp-image");


function addColorButtonEvent(elementName, url) {
    const button = document.getElementById(elementName);
    button.addEventListener("click", function() {
        pdpImage.setAttribute("src", url);
});
}

addColorButtonEvent("red-button", redUrl);
addColorButtonEvent("black-button", blackUrl);
addColorButtonEvent("blue-button", blueUrl);
addColorButtonEvent("pink-button", pinkUrl);
addColorButtonEvent("purple-button", purpleUrl);


const timeContainer = document.getElementById("time-container");
const heartContainer = document.getElementById("heart-container");

const timeButton = document.getElementById("time-button");
const heartButton = document.getElementById("heart-button");

timeContainer.style.display = "block";
heartContainer.style.display = "none";

timeButton.addEventListener("click", function() {
    timeContainer.style.display = "block";
    heartContainer.style.display = "none";
});

heartButton.addEventListener("click", function() {
    timeContainer.style.display = "none";
    heartContainer.style.display = "block";
});


function getLatestTimeString() {
    const dt = new Date();
    return dt.toLocaleTimeString();
}

const time = document.getElementById("time");

time.innerHTML = getLatestTimeString();

setInterval(function () {
    time.innerHTML = getLatestTimeString();
}, 1000);
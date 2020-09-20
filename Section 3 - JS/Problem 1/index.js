/*jshint esversion: 6 */


function boxSelected(elementId) {
    let element = document.getElementById(elementId);
    
    element.style.borderWidth = 5 + "px";
    element.style.borderColor = "gold";
}

function boxDeSelected(elementId) {
    let element = document.getElementById(elementId);
    
    element.style.borderWidth = 3 + "px";
    element.style.borderColor = "black";
}

function playSound(elementId) {
    let element = document.getElementById(elementId);
    element.play();
}


document.body.addEventListener('keydown', function(e) {
    switch (e.keyCode) {
        case 65:
            boxSelected("a-block");
            playSound("a-sound");
            break;
        case 83:
            boxSelected("s-block");
            playSound("s-sound");
            break;
        case 68:
            boxSelected("d-block");
            playSound("d-sound");
            break;
        case 70:
            boxSelected("f-block");
            playSound("f-sound");
            break;
        case 71:
            boxSelected("g-block");
            playSound("g-sound");
            break;
        case 72:
            boxSelected("h-block");
            playSound("h-sound");
            break;
        case 74:
            boxSelected("j-block");
            playSound("j-sound");
            break;
        case 75:
            boxSelected("k-block");
            playSound("k-sound");
            break;
        case 76:
            boxSelected("l-block");
            playSound("l-sound");
            break;
    }
});

document.body.addEventListener('keyup', function(e) {
    switch (e.keyCode) {
        case 65:
            boxDeSelected("a-block");
            break;
        case 83:
            boxDeSelected("s-block");
            break;
        case 68:
            boxDeSelected("d-block");
            break;
        case 70:
            boxDeSelected("f-block");
            break;
        case 71:
            boxDeSelected("g-block");
            break;
        case 72:
            boxDeSelected("h-block");
            break;
        case 74:
            boxDeSelected("j-block");
            break;
        case 75:
            boxDeSelected("k-block");
            break;
        case 76:
            boxDeSelected("l-block");
            break;
    }
});

 
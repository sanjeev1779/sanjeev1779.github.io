function toggleNightMode() {
    changeBackgroundColor();
    changeTextColor();
    changeToggleDarkModeIcon();
    setColor();
}

function changeBackgroundColor() { 
    currentBgColor = currentBgColor == "white" ? "black" : "white";
}

function changeTextColor() { 
    currentTextColor = currentTextColor == "white" ? "black" : "white";
}

function changeToggleDarkModeIcon() {
    currentToggleDarkModeIcon = currentToggleDarkModeIcon == "fas fa-sun" ? "far fa-moon" : "fas fa-sun";
}

function initPage() {
    currentBgColor = "black";
    currentTextColor = "white";
    currentToggleDarkModeIcon = "fas fa-sun";
    setColor();
}

function setColor() {
    document.body.style.background = currentBgColor;
    document.body.style.color = currentTextColor;

    var links = document.getElementsByTagName("a");
    for(var i=0;i<links.length;i++) {
        if(links[i].href) {
            links[i].style.color = currentTextColor;  
        }
    }

    document.getElementById("toggleButton").className = currentToggleDarkModeIcon;
}

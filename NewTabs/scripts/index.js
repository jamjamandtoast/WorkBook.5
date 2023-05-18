"use strict";

window.onload = () => {
    const btnGoogle = document.getElementById(btnGoogle);
    const btnW3 = document.getElementById(btnW3);
    const btnWorldWide = document.getElementById(btnWorldWide);

    btnGoogle.onclick = onbtnGoogle;
    btnW3.onClick = onbtnW3; 
    btnWorldWide.onClick = onbtnWorldWide;

};

function onbtnGoogle() {
    windows.open("https://www.google.com/");
    console.log("Googlge");
}

function onbtnW3() {
    window.open("https://www.w3schools.com/js/");
    console.log("W3 Schools");

}

function onbtnWorldWide () {
    window.open("NewTabs\images.html");
    console.log("mr world wide, dale!");
}
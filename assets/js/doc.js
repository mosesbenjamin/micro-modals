/*jshint esversion: 6 */

const currentTab = n => {
    showTab(slideIndex = n);
};

const showTab = n => {
    var i;
    var x = document.querySelectorAll(".tab__content");
    var tabs = document.querySelectorAll(".tab");

    if (n > x.length) {
        slideIndex = 1;
    }
    if (n < 1) {
        slideIndex = x.length;
    }
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    for (i = 0; i < tabs.length; i++) {
        tabs[i].className = tabs[i].className.replace("active", "");
    }
    x[slideIndex - 1].style.display = "block";
    tabs[slideIndex - 1].className += " active ";
};



// Copy Text

const copyText = caller => {
    parent = caller.parentElement;

    textarea = parent.previousElementSibling;

    textarea.select();

    textarea.setSelectionRange(0, 99999);

    document.execCommand("copy");

};


// Display platform API request based on Language

platform = document.querySelector("#req-platform");
output = document.querySelector(".req__code code");


platform.onchange = () => {


    if (platform.value == "node") {
        output.innerHTML = "node request goes here";

    }

    if (platform.value == "php") {
        output.innerHTML = "php request goes here";
    }

    if (platform.value == "python") {
        output.innerHTML = "python request goes here";
    }
};


// Togle between api responses


// function showOk() {
//     bad = document.querySelector("code#bad");
//     ok = document.querySelector("code#ok");
//     console.log();

//     if (ok.style.display == "block") {
//         console.log("block");

//         ok.style.display == "block";
//     }
// };

// const showBad = () => {
//     bad = document.querySelector("code#bad");
//     ok = document.querySelector("code#ok");
//     console.log("bad");

//     if (ok.style.display == "none") {
//         ok.style.display == "block";
//     }
//     bad.style.display == "none" ? bad.style.display == "block" : bad.style.display == "none";
// }
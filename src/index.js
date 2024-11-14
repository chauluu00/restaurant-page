import "./style.css";
import createHomePage from "./home";
import createMenuPage from "./menu";
import createAboutPage from "./about";

import img from "./img/logo.webp";

// tab switching logic
const tabSwitching = (() => {
    const content = document.querySelector("#content");

    const buttons = [
        { selector: "#home-button", action: createHomePage},
        { selector: "#menu-button", action: createMenuPage},
        { selector: "#about-button", action: createAboutPage}
    ];
    
    buttons.forEach (({selector, action}) => {
        const button = document.querySelector(selector);
        button.addEventListener("click", () => {
            content.textContent = '';
            action();
        });
    });

    // display home page content on page load
    createHomePage();
})();

const addLogo = (() => {
    const header = document.querySelector("header");
    const logo = document.createElement("img");
    logo.src = img;
    header.prepend(logo);
})();

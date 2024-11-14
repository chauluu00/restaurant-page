const createHomePage = () => {
    const content = document.querySelector("#content");
    const container = document.createElement("div");
    const p = document.createElement("p");
    const h1 = document.createElement("h1");
    container.setAttribute("id", "home");
    container.classList.add("container");
    h1.innerText = "Home";
    p.innerText= "Welcome to Eclipse Bistro, where culinary creativity meets a warm, welcoming atmosphere. Our restaurant is inspired by the harmony of day and night, offering dishes that balance rich flavors with refreshing ingredients to create an unforgettable experience. At Eclipse, our chefs craft each plate using fresh, locally-sourced ingredients that celebrate the season. Join us to indulge in a menu that delights and surprises, whether you're here for a casual lunch or a special evening out. Step into Eclipse Bistro, and let us take you on a culinary journey you’ll remember long after the last bite.";
    content.appendChild(container);
    container.append(h1, p);
};

export default createHomePage;

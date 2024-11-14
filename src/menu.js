const createMenuPage = () => {
    const menu = Array(9).fill("");
    const content = document.querySelector("#content");
    const container = document.createElement("div");
    const grid = document.createElement("div");
    const h1 = document.createElement("h1");
    container.setAttribute("id", "menu");
    grid.setAttribute("id", "grid");
    container.classList.add("container");
    h1.innerText = "Menu";
    menu.forEach( () => {
        const item = document.createElement("div");
        item.classList.add("menu-item");
        grid.appendChild(item);
    });
    content.appendChild(container);
    container.append(h1,grid);
};

export default createMenuPage;

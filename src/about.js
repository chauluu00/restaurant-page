const createAboutPage = () => {
    const content = document.querySelector("#content");
    const container = document.createElement("div");
    const p = document.createElement("p");
    const h1 = document.createElement("h1");
    const ul = document.createElement("ul");
    const contact = [
        {item: "Location", info: "123 Eclipse Lane, Culinary City"},
        {item: "Phone", info: "(123) 456-7890"},
        {item: "Email", info: "contact@eclipsebistro.com"}
    ];
    contact.forEach(({item, info}) =>{
        const li = document.createElement("li");
        li.innerText = `${item}: ${info}`;
        ul.appendChild(li);
    });
    container.setAttribute("id", "about");
    container.classList.add("container");
    h1.innerText = "About";
    p.innerText= "We’d love to hear from you! Whether you have questions about our menu, want to make a reservation, or just want to say hello, feel free to reach out. Follow us on social media to stay updated on our latest seasonal dishes, special events, and more!";
    content.appendChild(container);
    container.append(h1, p, ul);
};

export default createAboutPage;

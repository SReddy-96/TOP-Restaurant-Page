
export default function landingPage(content) {
    const homeDiv = document.createElement('div');
    const h1 = document.createElement('h1');
    const p = document.createElement('p');
    const button = document.createElement('button');

    h1.textContent = "Nonna's Pizza";
    p.innerHTML = "Authentic Italian Flavors, <br/> Wood-Fired to Perfection.";
    button.id = "order-now";
    button.textContent = "Order Now";

    homeDiv.append(h1, p, button);
    homeDiv.className = "home";

    content.append(homeDiv);
}
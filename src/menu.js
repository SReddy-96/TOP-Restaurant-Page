const menu = [
    [
        {
            menuHeader: 'Pizza'
        },
        {
            title: "Margherita",
            description: "Mozzarella cheese, tomato, oregano",
            price: "£8.00"
        },
        {
            title: "American",
            description: "Mozzarella cheese, tomato, pepperoni sausage",
            price: "£9.50"
        },
        {
            title: "Toscana",
            description: "Mozzarella cheese, tomato, goat's cheese, spinach, rocket",
            price: "£10.50"
        }
    ],
    [
        {
            menuHeader: 'Starters'
        },
        {
            title: "Garlic Bread",
            description: "Freshly baked garlic bread with butter",
            price: "£3.50"
        },
        {
            title: "Bruschetta",
            description: "Grilled bread topped with diced tomatoes, garlic, basil, and olive oil",
            price: "£4.00"
        },
        {
            title: "Mixed Olives",
            description: "A selection of marinated olives",
            price: "£3.00"
        }
    ],
    [
        {
            menuHeader: 'Pasta'
        },
        {
            title: "Spaghetti Carbonara",
            description: "Spaghetti with pancetta, egg, Parmesan cheese, and black pepper",
            price: "£9.00"
        },
        {
            title: "Penne Arrabbiata",
            description: "Penne pasta in a spicy tomato sauce with garlic and chili",
            price: "£8.50"
        },
        {
            title: "Lasagna",
            description: "Layers of pasta with beef ragu, béchamel sauce, and Parmesan cheese",
            price: "£10.00"
        }
    ],
    [
        {
            menuHeader: 'Desserts'
        },
        {
            title: "Tiramisu",
            description: "Classic Italian dessert with layers of coffee-soaked ladyfingers and mascarpone cream",
            price: "£5.50"
        },
        {
            title: "Panna Cotta",
            description: "Creamy vanilla dessert served with a berry coulis",
            price: "£5.00"
        },
        {
            title: "Gelato",
            description: "Assorted flavors of Italian ice cream",
            price: "£4.00"
        }
    ],
    [
        {
            menuHeader: 'Drinks'
        },
        {
            title: "Coca-Cola",
            description: "330ml can",
            price: "£1.50"
        },
        {
            title: "San Pellegrino",
            description: "Sparkling mineral water, 500ml",
            price: "£2.00"
        },
        {
            title: "Espresso",
            description: "Strong Italian coffee",
            price: "£2.50"
        }
    ],
]


export default function menuPage(content) {

    content.classList.add('menuContent');

    const h1 = document.createElement('h1');
    h1.textContent = 'Menu'
    h1.classList.add('menuHeadings');

    content.append(h1)


    // iterate over the menu array
    for (let i = 0; i < menu.length; i++) {
        for (let j = 0; j < menu[i].length; j++) {

            if (j !== 0) {
                const card = document.createElement('div');

                const title = document.createElement('h3');
                const description = document.createElement('p');
                const price = document.createElement('p');

                title.textContent = menu[i][j].title;
                description.textContent = menu[i][j].description;
                price.textContent = menu[i][j].price;

                card.append(title, description, price);
                card.classList.add('card');

                content.append(card);

            } else if (j === 0) {

                // for the menu header
                const header = document.createElement('h2');
                header.textContent = menu[i][j].menuHeader;
                header.classList.add('menuHeadings');

                content.append(header);
            }
        }

    }

}
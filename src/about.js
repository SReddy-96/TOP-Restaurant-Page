
export default function aboutPage(content) {

    const title = document.createElement('h2');
    title.textContent = "About";
    title.classList.add('aboutTitle');

// about
    const aboutDescription = document.createElement('div');
    aboutDescription.classList.add('aboutDescription');
    aboutDescription.innerHTML = "Welcome to Nonna's Pizza, where every slice is a taste of authentic Italian tradition.<br/> Our family-owned restaurant was born from Nonna's kitchen, carrying on her time-honored recipes that have been passed down for generations. Using only the freshest ingredients and imported Italian tomatoes, we craft each pizza with the same love and care that Nonna put into her cooking. <br/> From our signature Margherita with fresh basil and buffalo mozzarella, to classic favorites like the Pepperoni and Nonna's Special with Italian sausage and roasted peppers, our wood-fired oven creates that perfect crispy-yet-chewy crust. <br/> Stop in and experience a slice of Italy right here in our neighborhood pizzeria. <br/> At Nonna's, we don't just make pizza - we create edible memories with every bite."

    const contactTitle = document.createElement('h2');
    contactTitle.textContent = "Contact Us"
    contactTitle.classList.add('aboutTitle');

    const contactWrapper = document.createElement('div');
    contactWrapper.classList.add('contactWrapper')

    // where
    const whereWrapper = document.createElement('div');
    whereWrapper.classList.add('whereWrapper');

    const whereTitle = document.createElement('h3')
    whereTitle.textContent = "Where "
    whereTitle.classList.add('contactTitle');
    
    const map = document.createElement('iframe');
    map.src = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d36921437.33508413!2d-78.50514259999999!3d55.61061599999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4889ce68dfd821cf%3A0x5be84e5691b595a7!2zTm9ubmHigJlzIEhvdXNl!5e0!3m2!1sen!2skr!4v1718948171352!5m2!1sen!2skr"
    map.loading = "lazy";
    map.referrerPolicy = "no-referrer-when-downgrade"
    map.width = "300";
    map.height = "300"
    map.style.border = 0;

    whereWrapper.append(whereTitle, map);
    
    // How
    const howWrapper = document.createElement('div');
    howWrapper.classList.add('howWrapper');

    const howTitle = document.createElement('h3')
    howTitle.classList.add('contactTitle');
    howTitle.textContent = "How";
    
    const howInfo = document.createElement('p');
    howInfo.innerHTML = "Phone: 0123-456-789 <br/> Email: nonnaspizza@gmail.com"

    howWrapper.append(howTitle, howInfo)

    // when
    const whenWrapper = document.createElement('div');
    whenWrapper.classList.add('whenWrapper');

    const whenTitle = document.createElement('h3')
    whenTitle.classList.add('contactTitle');
    whenTitle.textContent = "When";
    
    const whenInfo = document.createElement('p');
    whenInfo.innerHTML = "Monday - Thursday: 12:00 - 21:00 <br/> Friday - Sunday: 10:00 - 22:00"
    
    whenWrapper.append(whenTitle, whenInfo)

    contactWrapper.append(whereWrapper, howWrapper, whenWrapper);
    
    content.append(title, aboutDescription, contactTitle, contactWrapper)
}
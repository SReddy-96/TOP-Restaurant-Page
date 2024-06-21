export default function footer(){
    // footer
    const footerWrapper = document.querySelector('.footer');
    const footerText = document.createElement('p');
    footerText.innerHTML = "Nonna's Pizza &#169; 2024 by Steven Reddy ";
    
    footerWrapper.append(footerText);
}
console.log("Hello world.");
const Myname = "JohnMarkBanquil";
console.log('NAME:' + Myname);
let age = 20;
console.log('AGE:' + age);
let number = 923432423;
console.log('NUMBER:' + number);
let address = "BRGY XXI";
console.log('ADDRESS:' + address);

//Functions

function greet(name) {
    return `Good morning, ${name}`;

}
console.log(greet("Rene"));



function mdas(num1, num2) {
    let m = num1 * num2;
    let d = num1 / num2;
    let a = num1 + num2;
    let s = num1 - num2;

    return (`Values: ${num1} and ${num2}. \n Product ${m}, \nQuotient: ${d}, \nSum: ${a}, \nDiff: ${s}`);
}
console.log(mdas(5, 3))

//Query selector
const heading = document.querySelector("h1")
console.log(heading);

const contactHeading = document.querySelector("#contact h2");
console.log(contactHeading);

const serviceHeading = document.querySelector("#services h2");
console.log(serviceHeading);

const projectHeading = document.querySelector("#projects h2");
console.log(projectHeading);

//Text Context

heading.textContent = "My portfolio";
contactHeading.textContent = "Let's Connect!";
serviceHeading.textContent = "My Services";
projectHeading.textContent = "My Projects";

//Event listeners
heading.addEventListener("click", function () {
    heading.classList.toggle("text-orange-500");
    heading.classList.toggle("text-orange-300");
});

const toggleButton = document.querySelector('#switch');
const body = document.querySelector('body');
let isOff = false;

toggleButton.addEventListener("click", function () {
    isOff = !isOff;

    if (isOff) {
        body.classList.replace("bg-neutral-950", "bg-orange-500");
        body.classList.replace("text-orange-100", "text-neutral-950");
    } else {
        body.classList.replace("bg-orange-500", "bg-neutral-950");
        body.classList.replace("text-neutral-950", "text-orange-100");
    }
});

const themeToggle = document.getElementById("themeToggle");
themeToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
    const icon = themeToggle.querySelector("i");
    icon.classList.toggle("fa-moon");
    icon.classList.toggle("fa-sun");
});

const funFactBtn = document.getElementById("funFactBtn");
const funFact = document.getElementById("funFact");
const facts = [
    "I love coffee, matcha, & ice cream!💗",
    "I have 5 siblings and I'm the eldest daughter.",
    "4 is my fave number!",
    "Fave colors: Pink, Sage, Beige, White",
    "I'm an ARIES♈",
    "Addicted to Wattpad, K-dramas, and ice cream.",
    "Hogwarts House: GRYFFINDOR!🪄",
    "Fave bible verse: Jeremiah 29:11",
    "Pet peeves: smoking, vapes, loud chewing"
];

let factIndex = 0;  // Keep track of the current fact

funFactBtn.addEventListener("click", () => {
    funFact.textContent = facts[factIndex];
    factIndex = (factIndex + 1) % facts.length;
});

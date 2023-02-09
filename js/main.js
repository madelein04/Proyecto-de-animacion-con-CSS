const button = document.querySelector(".button");
const button1 = document.querySelector(".button1");
const button2 = document.querySelector(".button2");
const button3 = document.querySelector(".button3");
const modal = document.querySelector(".modal");
const closeButton = document.querySelector(".modalContentClose");
const cards = document.querySelector('.cards');



button.addEventListener("click", () => {
    modal.classList.remove("hidden")
    modal.classList.add("visible")
    tanjirou();
})

button1.addEventListener("click", () => {
    modal.classList.remove("hidden")
    modal.classList.add("visible")
    inosuke();
})

button2.addEventListener("click", () => {
    modal.classList.remove("hidden")
    modal.classList.add("visible")
    zenitsu();
})
button3.addEventListener("click", () => {
    modal.classList.remove("hidden")
    modal.classList.add("visible")
    nezuko();
})
closeButton.addEventListener("click", () => {
    modal.classList.add("hidden")
    modal.classList.remove("visible")
    console.log("click");
})

function tanjirou() {
    cards.innerHTML = `
        <label for="radio-1" id="card-1" class="card">
            <img src="./img/ta1.jpg" alt=""/>
        </label>
        <label for="radio-2" id="card-2" class="card">
            <img src="./img/taj2.webp" alt=""/>
        </label>
        <label for="radio-3" id="card-3" class="card">
            <img src="./img/taj3.webp" alt=" "/>
        </label>
        `;
}

function inosuke() {
    cards.innerHTML = `
        <label for="radio-1" id="card-1" class="card">
            <img src="./img/ino1.webp" alt=""/>
        </label>
        <label for="radio-2" id="card-2" class="card">
            <img src="./img/ino2.jpg" alt=""/>
        </label>
        <label for="radio-3" id="card-3" class="card">
            <img src="./img/ino3.webp" alt=""/>
        </label>
        `;
}

function zenitsu() {
    cards.innerHTML = `
        <label for="radio-1" id="card-1" class="card">
            <img src="./img/zen1.jpg" alt=""/>
        </label>
        <label for="radio-2" id="card-2" class="card">
            <img src="./img/zen2.webp" alt=""/>
        </label>
        <label for="radio-3" id="card-3" class="card">
            <img src="./img/zen3.jpg" alt=""/>
        </label>
        `;
}

function nezuko() {
    cards.innerHTML = `
        <label for="radio-1" id="card-1" class="card">
            <img src="./img/nez1.webp" alt=""/>
        </label>
        <label for="radio-2" id="card-2" class="card">
            <img src="./img/nez2.webp" alt=""/>
        </label>
        <label for="radio-3" id="card-3" class="card">
            <img src="./img/nez3.jpg" alt=""/>
        </label>
        `;
}

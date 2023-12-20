const inputEl1 = document.querySelector("#input1");
const inputEl2 = document.querySelector("#input2");
const formEl = document.querySelector("#form");
const btn = document.querySelector(".btn1")
const block = document.querySelector(".wrapper");
const block2 = document.querySelector(".logolar");


let topla = [];
let topla2 = [];

formEl.addEventListener("submit", e=> {
    e.preventDefault();
    const jami1 = inputEl1.value;
    const jami2 = inputEl2.value;
    topla.push(jami1);
    topla2.push(jami2);
    chiqaradi();
    chiqaradi2();
});

function chiqaradi() {
    let html = "";
    topla.forEach(sana => {
        html += `<div class="item1">
        <div class="ora1">
            <h1 class="name1">1</h1>
            <h1 class="name1">${sana}</h1>
        </div>
        <div class="logolar">
            <div class="ora">
                <img class="img1" src="./rasimlar/logo2.svg" alt="">
                <img class="img1" src="./rasimlar/logo1.svg" alt="">
            </div>
        </div>
    </div>`;
    block.innerHTML = html;
});
}

// let = function chiqaradi2() {
//     topla2.forEach(sana2 => {
//         let html = "";
//         html += `<h1 class="name1"></h1>`
//     })
//     block2.innerHTML = html;
// }

function chiqaradi2() {
    let html = "";
    topla2.forEach(sana2 => {
        html += `<div class="item1">
        <div class="ora1">
            <h1 class="name1">1</h1>
            <h1 class="name1"></h1>
        </div>
        <div class="logolar">
            <h1 class="name1">${sana2}</h1>
            <div class="ora">
                <img class="img1" src="./static/logo2.svg" alt="">
                <img class="img1" src="./static/logo1.svg" alt="">
            </div>
        </div>
    </div>`;
    });
    block.innerHTML = html;
}
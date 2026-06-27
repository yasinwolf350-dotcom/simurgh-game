let coins = 0;
let plays = 0;

const validCodes = {

"SIM100":20,
"SIM101":20,
"SIM102":20,
"SIM103":20,
"SIM104":20,
"SIM105":20,
"SIM106":20,
"SIM107":20,
"SIM108":20,
"SIM109":20

};

function startGame(){

let name =
document.getElementById("name").value;

let phone =
document.getElementById("phone").value;

if(name == "" || phone == ""){

alert("اطلاعات ناقص است");
return;

}

localStorage.setItem("birdName",name);
localStorage.setItem("phone",phone);

document.getElementById("birdName")
.innerText = "🐦 " + name;

document.getElementById("loginBox")
.classList.add("hidden");

document.getElementById("gameBox")
.classList.remove("hidden");

loadData();

}

function loadData(){

coins =
parseInt(localStorage.getItem("coins")) || 0;

plays =
parseInt(localStorage.getItem("plays")) || 0;

let today =
new Date().toDateString();

let savedDate =
localStorage.getItem("date");

if(savedDate != today){

plays = 0;

localStorage.setItem("plays",0);

localStorage.setItem("date",today);

}

updateUI();

}

function updateUI(){

document.getElementById("coins")
.innerText = coins;

document.getElementById("playsLeft")
.innerText = 3 - plays;

localStorage.setItem("coins",coins);
localStorage.setItem("plays",plays);

}

function chooseDoor(choice){

if(plays >= 3){

alert("🎮 بازی‌های امروز تموم شده");
return;

}

plays++;

let correct =
Math.floor(Math.random()*3)+1;

if(choice == correct){

coins += 2;

alert("🎉 درست بود +2 سکه");

}else{

alert("❌ اشتباه بود");

}

updateUI();

}

function redeemCode(){

let code =
document.getElementById("giftCode").value;

if(validCodes[code]){

coins += validCodes[code];

alert("🎁 +" + validCodes[code] + " سکه گرفتی");

delete validCodes[code];

updateUI();

}else{

alert("کد اشتباه یا استفاده شده");

}

}

window.onload = function(){

let savedName =
localStorage.getItem("birdName");

if(savedName){

document.getElementById("loginBox")
.classList.add("hidden");

document.getElementById("gameBox")
.classList.remove("hidden");

document.getElementById("birdName")
.innerText = "🐦 " + savedName;

loadData();

}

}
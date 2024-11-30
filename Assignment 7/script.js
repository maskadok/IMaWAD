let savedHeroes = [];
let url = "https://akabab.github.io/superhero-api/api/all.json";
let heroImage = document.getElementById("hero-avatar");
let heroTitle = document.getElementById("hero-title");
let heroFirstAppearance = document.getElementById("hero-firstAppearance");
let heroGender = document.getElementById("hero-gender");
let heroRace = document.getElementById("hero-race");
let heroHeight = document.getElementById("hero-height");
let heroWeight = document.getElementById("hero-weight");
let heroEyeColor = document.getElementById("hero-eyeColor");
let heroInt = document.getElementById("hero-intelligence");
let heroStr = document.getElementById("hero-strength");
let heroSpeed = document.getElementById("hero-speed");
let heroDura = document.getElementById("hero-durability");
let heroPower = document.getElementById("hero-power");
let heroCombat = document.getElementById("hero-combat");

async function fetchAllHeroes(){
    try{
        let response = await fetch(url);
        let heroes = await response.json();
        savedHeroes = heroes;
        let randomIndex = Math.floor(Math.random() * heroes.length);
        let firstHero = heroes[randomIndex];
        console.log(firstHero);

        heroTitle.innerText = firstHero.name;
        heroFirstAppearance.innerText ="First appearance: " + firstHero.biography.firstAppearance;
        heroGender.innerText = "Gender: " + firstHero.appearance.gender;
        heroRace.innerText = "Race: " + firstHero.appearance.race;
        heroHeight.innerText = "Height: " + firstHero.appearance.height;
        heroWeight.innerText = "Weight: " + firstHero.appearance.weight;
        heroEyeColor.innerText = "Eye color: " + firstHero.appearance.eyeColor;
        heroInt.style.width = firstHero.powerstats.intelligence + "%";
        document.getElementById("intelligence-value").innerText = firstHero.powerstats.intelligence;
        heroStr.style.width = firstHero.powerstats.strength + "%";
        document.getElementById("strength-value").innerText = firstHero.powerstats.strength;
        heroSpeed.style.width = firstHero.powerstats.speed + "%";
        document.getElementById("speed-value").innerText = firstHero.powerstats.speed;
        heroDura.style.width = firstHero.powerstats.durability + "%";
        document.getElementById("durability-value").innerText = firstHero.powerstats.durability;
        heroPower.style.width = firstHero.powerstats.power + "%";
        document.getElementById("power-value").innerText = firstHero.powerstats.power;
        heroCombat.style.width = firstHero.powerstats.combat + "%";
        document.getElementById("combat-value").innerText = firstHero.powerstats.combat;
        heroImage.setAttribute("src", firstHero.images.md);
    }
    catch(error){
        console.log(`Getting some error: ${error}`);
    }
}
document.addEventListener("DOMContentLoaded", fetchAllHeroes);

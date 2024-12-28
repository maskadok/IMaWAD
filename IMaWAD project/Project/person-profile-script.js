document.addEventListener("DOMContentLoaded", () => {
    const savedLanguage = localStorage.getItem("language") || "en";
    changePersonProfileLanguage(savedLanguage);
});

function changePersonProfileLanguage(lang){
    document.getElementById("person-profile-title").textContent = translations[lang].personProfile.title;
    document.getElementById("person-profile-header").textContent = translations[lang].personProfile.title;
    document.getElementById("back-to-home").textContent = translations[lang].profile.backToHome;
    document.getElementById("person-location").textContent = `${translations[lang].personProfile.location}: ${person.location}`;
    document.getElementById("person-age").textContent = `${translations[lang].personProfile.age}: ${person.age}`;
    document.getElementById("person-description").textContent = `${translations[lang].personProfile.description}: ${person.description}`;
    document.getElementById("text-message-cost").textContent = `${translations[lang].personProfile.messageCost}: ${person.textMessageCost}`;
    document.getElementById("video-message-cost").textContent = `${translations[lang].personProfile.videoMessageCost}: ${person.videoMessageCost}`;
    document.getElementById("donate-button").textContent = translations[lang].personProfile.donate;
    document.getElementById("donation-message").textContent = translations[lang].personProfile.donationMessage;
    const instagramLinkElement = document.getElementById("instagram-link");
    instagramLinkElement.innerHTML = `<a href="${person.instagram}" target="_blank" class="btn btn-outline-primary">${translations[lang].personProfile.follow} <i class="fa-brands fa-instagram ms-2"></i></a>`;
}

const person = JSON.parse(localStorage.getItem('personProfile'));

if (person){
    document.getElementById("person-name").textContent = person.name;
    document.getElementById("person-location").textContent = `Location: ${person.location}`;
    document.getElementById("person-age").textContent = `Age: ${person.age}`;
    document.getElementById("person-description").textContent = person.description;
    document.getElementById("text-message-cost").textContent = `Message Cost: ${person.textMessageCost}`;
    document.getElementById("video-message-cost").textContent = `Video Message Cost: ${person.videoMessageCost}`;
    document.getElementById("person-photo").src = person.photo;
    const instagramLinkElement = document.getElementById("instagram-link");
    instagramLinkElement.innerHTML = `<a href="${person.instagram}" target="_blank" class="btn btn-outline-primary w-40 align-items-center justify-content-center">Follow <i class="fa-brands fa-instagram ms-2"></i></a>`;
}

const donateButton = document.getElementById("donate-button");
const donationForm = document.getElementById("donation-form");
const donationMessage = document.getElementById("donation-message");
const personNameForm = document.getElementById("person-name-form");
personNameForm.textContent = person.name;

donateButton.addEventListener("click", () => {
    donationForm.style.display = "block";
    donationMessage.style.display = "none";
});

const cancelDonationButton = document.getElementById("cancel-donation");
cancelDonationButton.addEventListener("click", () => {
    donationForm.style.display = "none";
    donationMessage.style.display = "none";
});

donationForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const cardNumberInput = document.getElementById("card-number");
    const expiryDateInput = document.getElementById("expiry-date");
    const cvvInput = document.getElementById("cvv");
    const donationAmountInput = document.getElementById("donation-amount");
    const cardNumber = cardNumberInput.value.replace(/\s+/g, "");
    const expiryDate = expiryDateInput.value;
    const cvv = cvvInput.value;
    const donationAmount = parseFloat(donationAmountInput.value);

    //алгоритм Луна
    const luhnCheck = (num) => {
        let arr = num.replace(/\s+/g, "").split("").reverse().map(x => parseInt(x));
        return arr.reduce((sum, val, idx) => sum + (idx % 2 ? (val * 2 > 9 ? val * 2 - 9 : val * 2) : val), 0) % 10 === 0;
    };
    if (!luhnCheck(cardNumber)) {
        alert("Invalid card number.");
        cardNumberInput.focus();
        return;
    }

    donationMessage.textContent = `Thank you for donating $${donationAmount.toFixed(2)} to ${person.name}!`;
    donationMessage.style.display = "block";
    donationForm.style.display = "none";
});

//формат номера карты
document.getElementById("card-number").addEventListener("input", (event) => {
    let value = event.target.value.replace(/\s+/g, "").replace(/[^0-9]/gi, "");
    event.target.value = value.match(/.{1,4}/g)?.join(" ") || value;
});

//формат expiry date
document.getElementById("expiry-date").addEventListener("input", (event) => {
    let value = event.target.value.replace(/[^0-9]/g, "").slice(0, 4);
    if(value.length >= 3){
        value = value.slice(0, 2) + "/" + value.slice(2);
    }
    event.target.value = value;
});
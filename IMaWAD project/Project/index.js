const translations = {
    en: {
        welcome: "Welcome to SpecialPayMail!",
        chooseLanguage: "Choose Language",
        mainTitle: "Want to personally connect with your favorite celebrities?",
        mainDescription: "Now it's possible with our new app!",
        features: {
            option1: "Choose your celebrity",
            option1Desc: "The app features thousands of stars and organizations worldwide. Find your idol or dream company!",
            option2: "Send a message",
            option2Desc: "Write your question or just express your feelings.",
            option3: "Get a personal reply",
            option3Desc: "The celebrity will personally reply to your message, with a money-back guarantee!",
            option4: "Payment",
            option4Desc: "The cost of a message starts at $1. You can send a message to the selected celebrity.",
            option5: "Cancel and refund",
            option5Desc: "Users are entitled to a refund within 30 days if the message has not been delivered.",
            option6: "More convenient in the app",
            option6Desc: "Join us in creating services used by millions worldwide."
        },
        profile: {
            title: "Your Profile",
            changePhoto: "Change Photo",
            saveChanges: "Save Changes",
            backToHome: "← Back to Home"
        },
        personProfile: {
            title: "Person Profile",
            location: "Location",
            age: "Age",
            description: "Description",
            messageCost: "Message Cost",
            videoMessageCost: "Video Message Cost",
            follow: "Follow",
            donate: "Donate",
            donationMessage: "Thank you for your donation!"
        },
        contactUsText: "Contact Us",
        downloadAppStore: "Us on AppStore",
        downloadPlayStore: "Us on PlayMarket",
        celebritiesTitle: "Our Celebrities",
        searchPlaceholder: "Search for a celebrity...",
        footerText: "&copy; 2024 SpecialPayMail. All rights reserved."
    },
    ru: {
        welcome: "Добро пожаловать в SpecialPayMail!",
        chooseLanguage: "Выберите язык",
        mainTitle: "Хотите лично общаться с вашими любимыми знаменитостями?",
        mainDescription: "Теперь это возможно благодаря нашему новому приложению!",
        features: {
            option1: "Выберите свою знаменитость",
            option1Desc: "В приложении представлены тысячи звезд и организаций со всего мира. Найдите своего кумира или компанию мечты!",
            option2: "Отправьте сообщение",
            option2Desc: "Напишите свой вопрос или просто выразите свои чувства.",
            option3: "Получите личный ответ",
            option3Desc: "Знаменитость ответит вам лично, с гарантией возврата средств!",
            option4: "Оплата",
            option4Desc: "Стоимость сообщения начинается от $1. Вы сможете отправить сообщение выбранной знаменитости.",
            option5: "Отмена и возврат платежей",
            option5Desc: "Пользователи имеют право на возврат средств в течение 30 дней, если сообщение не было доставлено.",
            option6: "В приложении удобнее",
            option6Desc: "Создавайте с нами сервисы, которыми пользуются миллионы."
        },
        profile: {
            title: "Ваш профиль",
            changePhoto: "Изменить фото",
            saveChanges: "Сохранить изменения",
            backToHome: "← Назад на главную"
        },
        personProfile: {
            title: "Профиль знаменитости",
            location: "Местоположение",
            age: "Возраст",
            description: "Описание",
            messageCost: "Стоимость сообщения",
            videoMessageCost: "Стоимость видеосообщения",
            follow: "Подписаться",
            donate: "Пожертвовать",
            donationMessage: "Спасибо за ваше пожертвование!"
        },
        contactUsText: "Напишите Нам",
        downloadAppStore: "Мы в AppStore",
        downloadPlayStore: "Мы в PlayMarket",
        celebritiesTitle: "Наши знаменитости",
        searchPlaceholder: "Ищите знаменитость...",
        footerText: "&copy; 2024 SpecialPayMail. Все права защищены."
    }
};

function changeLanguage(lang){
    if(document.body.contains(document.getElementById("welcome-text"))){
        document.getElementById("welcome-text").textContent = translations[lang].welcome;
        document.getElementById("language-toggle").textContent = translations[lang].chooseLanguage;
        document.getElementById("main-title").textContent = translations[lang].mainTitle;
        document.getElementById("main-description").textContent = translations[lang].mainDescription;
        document.getElementById("feature-title-1").textContent = translations[lang].features.option1;
        document.getElementById("feature-desc-1").textContent = translations[lang].features.option1Desc;
        document.getElementById("feature-title-2").textContent = translations[lang].features.option2;
        document.getElementById("feature-desc-2").textContent = translations[lang].features.option2Desc;
        document.getElementById("feature-title-3").textContent = translations[lang].features.option3;
        document.getElementById("feature-desc-3").textContent = translations[lang].features.option3Desc;
        document.getElementById("feature-title-4").textContent = translations[lang].features.option4;
        document.getElementById("feature-desc-4").textContent = translations[lang].features.option4Desc;
        document.getElementById("feature-title-5").textContent = translations[lang].features.option5;
        document.getElementById("feature-desc-5").textContent = translations[lang].features.option5Desc;
        document.getElementById("feature-title-6").textContent = translations[lang].features.option6;
        document.getElementById("feature-desc-6").textContent = translations[lang].features.option6Desc;
        document.getElementById("contact-us-text").textContent = translations[lang].contactUsText;
        document.getElementById("download-appstore-text").textContent = translations[lang].downloadAppStore;
        document.getElementById("download-playstore-text").textContent = translations[lang].downloadPlayStore;
        document.getElementById("search-input").placeholder = translations[lang].searchPlaceholder;
        document.getElementById("celebrities-title").textContent = translations[lang].celebritiesTitle;
        document.getElementById("footer-text").innerHTML = translations[lang].footerText;
        localStorage.setItem("language", lang);
    }
}

if(document.body.contains(document.querySelector("header h1")) && document.querySelector("header h1").textContent.includes("Profile")) {
    if(window.location.pathname.includes("person-profile.html")){
        changePersonProfileLanguage(lang);
    }
    else if(window.location.pathname.includes("profile.html")){
        changeProfileLanguage(lang);
    }
}
document.addEventListener("DOMContentLoaded", () => {
    const savedLanguage = localStorage.getItem("language") || "en";
    changeLanguage(savedLanguage);
});

const persons = {
    aaron:{
        name: "Aaron Paul",
        location: "Los Angeles, California",
        photo: "celebs/aaron.jpg",
        age: 45,
        description: "Famous Actor, best known for playing Jesse Pinkman in Breaking Bad.",
        instagram: "https://www.instagram.com/aaronpaul",
        textMessageCost: "$10",
        videoMessageCost: "$50" 
    },
    buster:{
        name: "Buster",
        location: "Moscow, Russia",
        photo: "celebs/buster.jpg",
        age: 28,
        description: "A popular CIS twitch streamer.",
        instagram: "https://www.instagram.com/busterzy",
        textMessageCost: "$10",
        videoMessageCost: "$50"
    },
    anne:{
        name: "Anne Hathaway",
        location: "Brooklyn, New York",
        photo: "celebs/anne.jpg",
        age: 42,
        description: "American actress. Her accolades include an Academy Award, a Golden Globe Award, and a Primetime Emmy Award",
        instagram: "https://www.instagram.com/annehathaway",
        textMessageCost: "$10",
        videoMessageCost: "$50"
    },
    neil:{
        name: "Neil deGrasse Tyson",
        location: "New York, United States",
        photo: "celebs/neil.jpg",
        age: 66,
        description: "An astrophysicist and science communicator known for making complex topics accessible.",
        instagram: "https://www.instagram.com/neildegrassetyson",
        textMessageCost: "$5",
        videoMessageCost: "$25"
    },
    jake:{
        name: "Jake Gyllenhaal",
        location: "Los Angeles, California",
        photo: "celebs/jake.jpg",
        age: 43,
        description: "Famous actor famed for roles in Prisoners and Nightcrawler.",
        instagram: "https://www.instagram.com/jakegyllenhaal",
        textMessageCost: "$10",
        videoMessageCost: "$50"
    },
    elon:{
        name: "Elon Musk",
        location: "Pretoria, South Africa",
        photo: "celebs/elon.jpg",
        age: 53,
        description: "Businessman known for his key roles in the space company SpaceX and the automotive company Tesla, Inc.",
        instagram: "https://www.instagram.com/elonmusk__official__",
        textMessageCost: "$50",
        videoMessageCost: "$250"
    },
    assel:{
        name: "Assel Sagatova",
        location: "Almaty, Kazakhstan",
        photo: "celebs/assel.jpg",
        age: 39,
        description: "Very popular actress in Kazakhstan, standard of beauty for many kazakhs",
        instagram: "https://www.instagram.com/asselsagatova",
        textMessageCost: "$10",
        videoMessageCost: "$50"
    },
    nurlan:{
        name: "Nurlan Saburov",
        location: "Moscow, Russia",
        photo: "celebs/nurlan.jpg",
        age: 32,
        description: "Very popular stand up comic, that obtained popularity by stand up",
        instagram: "https://www.instagram.com/nurlan_saburov",
        textMessageCost: "$10",
        videoMessageCost: "$50"
    },
    dimash:{
        name: "Dimash Kudaibergenov",
        location: "Los-Angeles, USA",
        photo: "celebs/dimash.jpg",
        age: 32,
        description: "Known for his wide vocal range, spanning 7 octaves, 7 semitones",
        instagram: "https://www.instagram.com/kudaibergenov.dimash",
        textMessageCost: "$10",
        videoMessageCost: "$50"
    },
    ronaldo:{
        name: "Cristiano Ronaldo",
        location: "Riyadh, KSA",
        photo: "celebs/ronaldo.jpg",
        age: 39,
        description: "The best European footballer in the history, the most popular person in the world",
        instagram: "https://www.instagram.com/cristiano",
        textMessageCost: "$10",
        videoMessageCost: "$50"
    },
    keira:{
        name: "Keira Knightley",
        location: "Teddington, United Kingdom",
        photo: "celebs/keira.jpg",
        age: 39,
        description: "English actress, known for her work in Pirates of the Caribbean",
        instagram: "https://www.instagram.com/keiraknightleyily",
        textMessageCost: "$10",
        videoMessageCost: "$50"
    },
    messi:{
        name: "Lionel Messi",
        location: "Miami, USA",
        photo: "celebs/messi.jpg",
        age: 39,
        description: "The best South American footballer in the history.",
        instagram: "https://www.instagram.com/leomessi",
        textMessageCost: "$10",
        videoMessageCost: "$50"
    }
};

function navigateToProfile(personId) {
    const person = persons[personId];
    localStorage.setItem('personProfile', JSON.stringify(person));
    window.location.href = 'person-profile.html';
}

// Сохранение авы на главной стр
document.addEventListener("DOMContentLoaded", () => {
    const userData = JSON.parse(localStorage.getItem("userProfile")) || {
        photo: "images/profile-icon.png"
    };
    const userPhotoElement = document.querySelector("header a img");
    userPhotoElement.src = userData.photo;
});


// Поиск по буквам
document.addEventListener("DOMContentLoaded", ()=>{
    const searchInput = document.getElementById("search-input");
    const celebrityList = document.getElementById("celebrity-list");
    const cards = celebrityList.getElementsByClassName("col");
    searchInput.addEventListener("input", (e)=>{
        const searchValue = e.target.value.toLowerCase();
        for (let i = 0; i < cards.length; i++){
            const card = cards[i];
            const name = card.querySelector(".card").getAttribute("data-name").toLowerCase();
            if (name.includes(searchValue))
                card.style.display = "";
            else card.style.display = "none";
        }
    });
});
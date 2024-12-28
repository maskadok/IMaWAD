document.addEventListener("DOMContentLoaded", () => {
    const savedLanguage = localStorage.getItem("language") || "en";
    changeProfileLanguage(savedLanguage);

    //загрузка данных из localStorage
    const userPhoto = document.getElementById("user-photo");
    const photoUpload = document.getElementById("user-photo-upload");
    const saveProfile = document.getElementById("saveprofile");
    const editNameBtn = document.getElementById("edit-name-btn");
    const editlocBtn = document.getElementById("edit-location-btn");
    const userName = document.getElementById("user-name");
    const userLocation = document.getElementById("user-location");
    const userData = JSON.parse(localStorage.getItem("userProfile"))

    userPhoto.src = userData.photo;
    document.getElementById("user-name").textContent = userData.name;
    document.getElementById("user-location").textContent = userData.location;
    //загрузка фото
    photoUpload.addEventListener("change", (event) => {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = () => {
                userPhoto.src = reader.result;
                userData.photo = reader.result;
            };
            reader.readAsDataURL(file);
        }
    });
    //изменение имени и локации
    editNameBtn.addEventListener("click", () => {
        const newName = prompt("Enter your new name:", userData.name);
        if (newName && newName.trim().length > 0) {
            userData.name = newName.trim();
            userName.textContent = userData.name;
        }
    });
    editlocBtn.addEventListener("click", () => {
        const newLocation = prompt("Enter your new location:", userData.location);
        if (newLocation && newLocation.trim().length > 0) {
            userData.location = newLocation.trim();
            userLocation.textContent = userData.location;
        }
    });
    //сохранение профиля
    saveProfile.addEventListener("click", () => {
        localStorage.setItem("userProfile", JSON.stringify(userData));
        alert("Profile saved!");
    });
});

function changeProfileLanguage(lang){
    document.getElementById("profile-title").textContent = translations[lang].profile.title;
    document.querySelector("label[for='user-photo-upload']").textContent = translations[lang].profile.changePhoto;
    document.getElementById("saveprofile").textContent = translations[lang].profile.saveChanges;
    document.getElementById("back-to-home-btn").textContent = translations[lang].profile.backToHome;
}
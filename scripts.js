const translations = {
    ru: {
        home: "Главная",
        tours: "Туры",
        contacts: "Контакты",
        heroTitle: "Путешествуйте с нами",
        heroDescription: "Откройте для себя новые горизонты с лучшими предложениями на рынке!",
        aboutUs: "О нас",
        aboutDescription: "Добро пожаловать в Na Nebe Trip – ваш надежный проводник в мир путешествий! Мы – команда профессионалов, объединенных одной целью: дарить незабываемые впечатления и комфортные поездки по всему миру.",
        toptours: "Популярные Туры",
        dubai: "Дубай",
        sharm: "Шарм-эль-Шейх",
        antalya: "Анталия",
        thailand: "Таиланд",
        bali: "Бали",
        istanbul: "Стамбул",
        georgia: "Грузия",
        vietnam: "Вьетнам",
        azerbajan: "Азербайджан",
        maldive: "Мальдивы",
    },
    en: {
        home: "Home",
        tours: "Tours",
        contacts: "Contacts",
        heroTitle: "Travel with us",
        heroDescription: "Discover new horizons with the best deals on the market!",
        aboutUs: "About Us",
        aboutDescription: "Welcome to Na Nebe Trip – your trusted guide to the world of travel! We are a team of professionals united by one goal: to create unforgettable experiences and provide comfortable journeys around the world",
        toptours: "Top Tours",
        dubai: "Dubai",
        sharm: "Sharm El-Sheikh",
        antalya: "Antalya",
        thailand: "Thailand",
        bali: "Bali",
        istanbul: "Istanbul",
        georgia: "Georgia",
        vietnam: "Vietnam",
        maldive: "Maldives",
        azerbajan: "Azerbaiijan",
    },
    uz: {
        home: "Bosh sahifa",
        tours: "Sayohatlar",
        contacts: "Kontaktlar",
        heroTitle: "Biz bilan sayohat qiling",
        heroDescription: "Bozordagi eng yaxshi takliflar bilan yangi ufqlarni kashf qiling!",
        aboutUs: "Biz haqimizda",
        aboutDescription: "Na Nebe Trip ga xush kelibsiz – sayohat olamiga ishonchli yo‘lboshchingiz! Biz butun dunyo bo‘ylab unutilmas taassurotlar va qulay sayohatlarni taqdim etishni maqsad qilgan professionallar jamoasimiz",
        toptours: "Tavsiya etilgan sayohatlar",
        dubai: "Dubay",
        sharm: "Sharm El-Sheykh",
        antalya: "Antaliya",
        thailand: "Tailand",
        bali: "Bali",
        istanbul: "Istanbul",
        georgia: "Gruziya",
        vietnam: "Vyetnam",
        azerbajan: "Azarbajon",
        maldive: "Maldiv",
    }
};


function changeLanguage(lang) {
    document.querySelectorAll("[data-lang]").forEach(element => {
        const key = element.getAttribute("data-lang");
        if (translations[lang] && translations[lang][key]) {
            element.textContent = translations[lang][key];
        }
    });

    localStorage.setItem("language", lang);
}

document.addEventListener("DOMContentLoaded", () => {
    const savedLang = localStorage.getItem("language") || "ru";
    changeLanguage(savedLang);
});

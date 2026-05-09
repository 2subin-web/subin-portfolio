function setLanguage(language) {
    const title = document.getElementById("main-title");
    const intro = document.getElementById("intro-text");
    if (!title || !intro) return;

    if (language === "ko") {
        title.innerText = "이수빈 포트폴리오";
        intro.innerText = "개발과 언어를 공부하며 일본 IT 취업을 준비하고 있습니다.";
    } else if (language === "en") {
        title.innerText = "LEE SUBIN PORTFOLIO";
        intro.innerText = "Studying programming and languages while preparing for an IT career in Japan.";
    } else if (language === "jp") {
        title.innerText = "イ・スビン ポートフォリオ";
        intro.innerText = "開発と言語を勉強しながら、日本IT就職を目指しています。";
    }
}

function enterSite() {
    const opening = document.querySelector(".hero-opening");

    if (opening) {
        opening.classList.add("fade-out");

        setTimeout(function () {
            opening.style.display = "none";
        }, 800);
    }
}

window.onload = function () {
    const today = new Date();

    const dateStr =
        today.getFullYear() + "." +
        String(today.getMonth() + 1).padStart(2, "0") + "." +
        String(today.getDate()).padStart(2, "0");

    const dateElement = document.getElementById("today-date");

    if (dateElement) {
        dateElement.innerText = dateStr;
    }
};
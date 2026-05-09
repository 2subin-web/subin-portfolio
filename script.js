function setLanguage(language){

    const title = document.getElementById("main-title");

    const intro = document.getElementById("intro-text");

    if(language === "ko"){
        title.innerText = "이수빈 포트폴리오";

        intro.innerText =
        "개발과 언어를 공부하며 일본 IT 취업을 준비하고 있습니다.";
    }

    else if(language === "en"){
        title.innerText = "LEE SUBIN PORTFOLIO";

        intro.innerText =
        "Studying programming and languages while preparing for an IT career in Japan.";
    }

    else if(language === "jp"){
        title.innerText = "イ・スビン ポートフォリオ";

        intro.innerText =
        "開発と言語を勉強しながら、日本IT就職を目指しています。";
    }

}
function openModal(image){

    document.getElementById("modal").style.display = "block";

    document.getElementById("modal-img").src = image.src;
}

function closeModal(){

    document.getElementById("modal").style.display = "none";
}
function enterSite() {
    const hero = document.querySelector(".hero-opening");
    const mainSite = document.getElementById("main-site");

    hero.classList.add("fade-out");

    setTimeout(function() {
        hero.style.display = "none";
        mainSite.classList.remove("hidden");
    }, 800);
}
window.onload = function () {

    const opened = sessionStorage.getItem("opened");

    if (opened === "yes") {

        document.querySelector(".hero-opening").style.display = "none";

        document.getElementById("main-site")
        .classList.remove("hidden");
    }
};

function enterSite() {

    sessionStorage.setItem("opened", "yes");

    const hero =
    document.querySelector(".hero-opening");

    const mainSite =
    document.getElementById("main-site");

    hero.classList.add("fade-out");

    setTimeout(function () {

        hero.style.display = "none";

        mainSite.classList.remove("hidden");

    }, 800);
}
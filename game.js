let score = 0;
let currentQuestion = 0;
let currentLanguage = "ko";

const text = {
    ko: {
        title: "Java 퀴즈 게임",
        intro: "Java 기초 문제를 풀어보세요 ☕",
        correct: "정답입니다! 🎉",
        wrong: "아쉬워요! 다시 공부해봐요 ☕",
        next: "다음 문제"
    },
    en: {
        title: "Java Quiz Game",
        intro: "Try some basic Java questions ☕",
        correct: "Correct! 🎉",
        wrong: "Not quite! Let's study again ☕",
        next: "Next Question"
    },
    jp: {
        title: "Javaクイズゲーム",
        intro: "Javaの基本問題に挑戦してみましょう ☕",
        correct: "正解です！🎉",
        wrong: "惜しいです！もう一度勉強しましょう ☕",
        next: "次の問題"
    }
};

const questions = {
    ko: [
        {
            question: "Java에서 문장을 출력할 때 사용하는 코드는?",
            answers: ["System.out.println()", "console.log()", "print()"],
            correct: 0
        },
        {
            question: "Java 파일 확장자는 무엇일까요?",
            answers: [".html", ".java", ".css"],
            correct: 1
        },
        {
            question: "Java에서 정수를 저장하는 타입은?",
            answers: ["String", "int", "boolean"],
            correct: 1
        }
    ],

    en: [
        {
            question: "Which code is used to print text in Java?",
            answers: ["System.out.println()", "console.log()", "print()"],
            correct: 0
        },
        {
            question: "What is the file extension for Java?",
            answers: [".html", ".java", ".css"],
            correct: 1
        },
        {
            question: "Which type stores integers in Java?",
            answers: ["String", "int", "boolean"],
            correct: 1
        }
    ],

    jp: [
        {
            question: "Javaで文字を出力するときに使うコードは？",
            answers: ["System.out.println()", "console.log()", "print()"],
            correct: 0
        },
        {
            question: "Javaファイルの拡張子はどれですか？",
            answers: [".html", ".java", ".css"],
            correct: 1
        },
        {
            question: "Javaで整数を保存する型はどれですか？",
            answers: ["String", "int", "boolean"],
            correct: 1
        }
    ]
};

function setGameLanguage(language) {
    currentLanguage = language;
    currentQuestion = 0;
    score = 0;

    document.getElementById("game-title").innerText = text[language].title;
    document.getElementById("game-intro").innerText = text[language].intro;
    document.getElementById("next-btn").innerText = text[language].next;
    document.getElementById("score").innerText = "Score: " + score;
    document.getElementById("result").innerText = "";

    showQuestion();
}

function showQuestion() {
    const quiz = questions[currentLanguage][currentQuestion];

    document.getElementById("question").innerText = quiz.question;
    document.getElementById("btn0").innerText = quiz.answers[0];
    document.getElementById("btn1").innerText = quiz.answers[1];
    document.getElementById("btn2").innerText = quiz.answers[2];
    document.getElementById("result").innerText = "";
}

function checkAnswer(answerNumber) {
    const quiz = questions[currentLanguage][currentQuestion];

    if (answerNumber === quiz.correct) {
        document.getElementById("result").innerText = text[currentLanguage].correct;
        score++;
    } else {
        document.getElementById("result").innerText = text[currentLanguage].wrong;
    }

    document.getElementById("score").innerText = "Score: " + score;
}

function nextQuestion() {
    currentQuestion++;

    if (currentQuestion >= questions[currentLanguage].length) {
        currentQuestion = 0;
    }

    showQuestion();
}

showQuestion();
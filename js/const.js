   const startScreen = document.getElementById('start-screen');
    const levelScreen = document.getElementById('level-screen');
    const quizScreen = document.getElementById('quiz-screen');
    const resultScreen = document.getElementById('result-screen');

    const startBtn = document.getElementById('start-btn');
    const restartBtn = document.getElementById('restart-btn');

    const questionText = document.getElementById('question-text');
    const answerContainer = document.getElementById('answer-container');
    const currentQuestionSpan = document.getElementById('current-question');
    const questionLengthSpan = document.getElementById('question-length');
    const scoreSpan = document.getElementById('score');
    const progressBar = document.getElementById('progress');
    const finalScoreSpan = document.getElementById('final-score');
    const maxScoreSpan = document.getElementById('max-score');
    const resultMessage = document.getElementById('result-message');

    let currentIndex = 0;
    let score = 0;
    let answered = false;
    let totalQuestions = 0;
    let currentLevelData = [];
(function () {
    const quizData = {
        1: [
            {
                question: 'What is Linux?',
                answers: ['An operating system', 'A web browser', 'A programming language', 'A database'],
                correct: 0
            },
            {
                question: 'Which command is used to list files and directories?',
                answers: ['ls', 'cd', 'pwd', 'mkdir'],
                correct: 0
            },
        ],
        2: [
            {
                question: 'Testing?',
                answers: ['1', '2', '3', '4'],
                correct: 1
            }
        ]
    };

    const startScreen   = document.getElementById('start-screen');
    const levelScreen   = document.getElementById('level-screen');
    const quizScreen    = document.getElementById('quiz-screen');
    const resultScreen  = document.getElementById('result-screen');

    const startBtn      = document.getElementById('start-btn');
    const restartBtn    = document.getElementById('restart-btn');

    const questionText        = document.getElementById('question-text');
    const answerContainer     = document.getElementById('answer-container');
    const currentQuestionSpan = document.getElementById('current-question');
    const questionLengthSpan  = document.getElementById('question-length');
    const scoreSpan           = document.getElementById('score');
    const progressBar         = document.getElementById('progress');
    const finalScoreSpan      = document.getElementById('final-score');
    const maxScoreSpan        = document.getElementById('max-score');
    const resultMessage       = document.getElementById('result-message');

    let currentIndex    = 0;
    let score           = 0;
    let answered        = false;
    let totalQuestions  = 0;        
    let currentLevelData = [];

    // RENDER LEVEL GRID
    function renderLevelGrid() {
        const levelGrid  = document.querySelector('.level-grid');
        const totalLevels = Object.keys(quizData).length;

        levelGrid.innerHTML = '';

        for (let i = 1; i <= totalLevels; i++) {
            const btn = document.createElement('button');
            btn.className = 'level-card';
            btn.id = `level-${i}`;
            btn.textContent = i;
            btn.addEventListener('click', () => startQuiz(i));
            levelGrid.appendChild(btn);
        }
    }

    function showScreen(screen) {
        [startScreen, levelScreen, quizScreen, resultScreen].forEach(s => s.classList.remove('screen-active'));
        screen.classList.add('screen-active');
    }

    function updateProgress() {
        const percent = (currentIndex / totalQuestions) * 100;
        progressBar.style.width = percent + '%';
    }

    function loadQuestion() {
        answered = false;
        answerContainer.classList.remove('locked');

        const data = currentLevelData[currentIndex];
        questionText.textContent = data.question;
        currentQuestionSpan.textContent = currentIndex + 1;
        questionLengthSpan.textContent = currentLevelData.length;
        scoreSpan.textContent = score;
        updateProgress();

        answerContainer.innerHTML = '';
        const labels = ['A', 'B', 'C', 'D'];
        data.answers.forEach((ans, i) => {
            const btn = document.createElement('button');
            btn.className = 'answer-btn';
            btn.setAttribute('data-index', i);

            const badge = document.createElement('span');
            badge.className = 'answer-badge';
            badge.textContent = labels[i];
            btn.appendChild(badge);

            btn.appendChild(document.createTextNode(ans));
            btn.addEventListener('click', () => handleAnswer(i, btn));
            answerContainer.appendChild(btn);
        });
    }

    function handleAnswer(chosenIndex, clickedBtn) {
        if (answered) return;
        answered = true;
        answerContainer.classList.add('locked');

        const data = currentLevelData[currentIndex];
        const allBtns = answerContainer.querySelectorAll('.answer-btn');

        allBtns.forEach((btn, i) => {
            if (i === data.correct) {
                btn.classList.add('correct');
                const badge = btn.querySelector('.answer-badge');
                if (badge) badge.textContent = '✓';
            }
        });

        if (chosenIndex !== data.correct) {
            clickedBtn.classList.add('wrong');
            const badge = clickedBtn.querySelector('.answer-badge');
            if (badge) badge.textContent = '✗';
        } else {
            score++;
            scoreSpan.textContent = score;
        }

        setTimeout(() => {
            currentIndex++;
            if (currentIndex < totalQuestions) {
                loadQuestion();
            } else {
                showResults();
            }
        }, 900);
    }

    function showResults() {
        updateProgress();
        progressBar.style.width = '100%';
        finalScoreSpan.textContent = score;
        maxScoreSpan.textContent = totalQuestions;

        const ratio = score / totalQuestions;
        let msg = '';
        if (ratio === 1)        msg = 'Outstanding! Every answer was correct.';
        else if (ratio >= 0.9)  msg = 'Excellent work! Only a few minor mistakes.';
        else if (ratio >= 0.8)  msg = 'Great job! Solid knowledge across most areas.';
        else if (ratio >= 0.7)  msg = 'Well done! A few areas could use more practice.';
        else if (ratio >= 0.6)  msg = 'Good effort. Room to strengthen your knowledge.';
        else if (ratio >= 0.5)  msg = 'A decent attempt. Reviewing the topic would help.';
        else if (ratio >= 0.4)  msg = 'You\'re making progress. A bit more study will help.';
        else if (ratio >= 0.2)  msg = 'Keep learning. Every attempt builds experience.';
        else                    msg = 'Everyone starts somewhere. Come back stronger!';

        resultMessage.textContent = msg;
        showScreen(resultScreen);
    }

    function startQuiz(levelId) {
        currentLevelData = quizData[levelId];
        totalQuestions   = currentLevelData.length;
        currentIndex     = 0;
        score            = 0;
        scoreSpan.textContent = '0';
        progressBar.style.width = '0%';
        showScreen(quizScreen);
        loadQuestion();
    }

    function restartQuiz() {
        showScreen(levelScreen);
    }

    startBtn.addEventListener('click', () => showScreen(levelScreen));
    restartBtn.addEventListener('click', restartQuiz);

    document.addEventListener('DOMContentLoaded', renderLevelGrid);

    showScreen(startScreen);
    progressBar.style.width = '0%';
})();
(function () {
    const quizData = [{
        question: 'What is Linux?',
        answers: [
            'An operating system',
            'A web browser',
            'A programming language',
            'A database'
        ],
        correct: 0
    }, {
        question: 'Which command is used to list files and directories?',
        answers: ['ls', 'cd', 'pwd', 'mkdir'],
        correct: 0
    }, {
        question: 'What does the pwd command do?',
        answers: [
            'Prints the current directory path',
            'Lists files',
            'Deletes files',
            'Creates a directory'
        ],
        correct: 0
    }, {
        question: 'Which command is used to change directories?',
        answers: ['mv', 'cp', 'cd', 'ls'],
        correct: 2
    }, {
        question: 'Which command creates a new directory?',
        answers: ['touch', 'mkdir', 'rmdir', 'cat'],
        correct: 1
    }, {
        question: 'Which command creates an empty file?',
        answers: ['touch', 'nano', 'mkdir', 'echo'],
        correct: 0
    }, {
        question: 'Which command removes an empty directory?',
        answers: ['rm', 'rmdir', 'del', 'erase'],
        correct: 1
    }, {
        question: 'Which command is commonly used to display file contents?',
        answers: ['cat', 'pwd', 'grep', 'chmod'],
        correct: 0
    }, {
        question: 'What does the cp command do?',
        answers: [
            'Copies files or directories',
            'Moves files',
            'Deletes files',
            'Changes permissions'
        ],
        correct: 0
    }, {
        question: 'What does the mv command do?',
        answers: [
            'Views files',
            'Moves or renames files',
            'Creates files',
            'Copies files'
        ],
        correct: 1
    }, {
        question: 'Which command removes files?',
        answers: ['rm', 'cp', 'mv', 'touch'],
        correct: 0
    }, {
        question: 'What does chmod do?',
        answers: [
            'Changes file permissions',
            'Creates directories',
            'Lists files',
            'Displays memory usage'
        ],
        correct: 0
    }, {
        question: 'Which symbol represents the home directory?',
        answers: ['#', '~', '@', '$'],
        correct: 1
    }, {
        question: 'Which command displays the current logged-in user?',
        answers: ['whoami', 'user', 'login', 'me'],
        correct: 0
    }, {
        question: 'Which command shows the current date and time?',
        answers: ['clock', 'date', 'time', 'now'],
        correct: 1
    }, {
        question: 'What is the root directory represented by?',
        answers: ['~', '/root', '/', 'C:\\'],
        correct: 2
    }, {
        question: 'Which command is used to search for text inside files?',
        answers: ['grep', 'find', 'locate', 'search'],
        correct: 0
    }, {
        question: 'Which command clears the terminal screen?',
        answers: ['clean', 'reset', 'cls', 'clear'],
        correct: 3
    }, {
        question: 'What is a Linux distribution?',
        answers: [
            'A version of Linux bundled with software',
            'A programming language',
            'A file system',
            'A terminal command'
        ],
        correct: 0
    }, {
        question: 'Which of these is a popular Linux distribution?',
        answers: ['Ubuntu', 'Windows', 'macOS', 'Chrome'],
        correct: 0
    }];
    const startScreen = document.getElementById('start-screen');
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
    const totalQuestions = quizData.length;

    function showScreen(screen) {
        [startScreen, quizScreen, resultScreen].forEach(s => s.classList.remove('screen-active'));
        screen.classList.add('screen-active');
    }

    function updateProgress() {
        const percent = ((currentIndex) / totalQuestions) * 100;
        progressBar.style.width = percent + '%';
    }

    function loadQuestion() {
        answered = false;
        answerContainer.classList.remove('locked');
        const data = quizData[currentIndex];
        questionText.textContent = data.question;
        currentQuestionSpan.textContent = currentIndex + 1;
        questionLengthSpan.textContent = totalQuestions;
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

            const textNode = document.createTextNode(ans);
            btn.appendChild(textNode);

            btn.addEventListener('click', () => handleAnswer(i, btn));
            answerContainer.appendChild(btn);
        });
    }

    function handleAnswer(chosenIndex, clickedBtn) {
        if (answered) return;
        answered = true;
        answerContainer.classList.add('locked');

        const data = quizData[currentIndex];
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
        if (ratio === 1) {
            msg = 'Outstanding! Every answer was correct. Your understanding of the topic is exceptionally strong.';
        } else if (ratio >= 0.9) {
            msg = 'Excellent work! You demonstrated a deep grasp of the material with only a few minor mistakes.';
        } else if (ratio >= 0.8) {
            msg = 'Great job! You scored highly and showed solid knowledge across most areas.';
        } else if (ratio >= 0.7) {
            msg = 'Well done! You have a good understanding of the subject, with a few areas that could use more practice.';
        } else if (ratio >= 0.6) {
            msg = 'Good effort. You understand many of the core concepts, but there is still room to strengthen your knowledge.';
        } else if (ratio >= 0.5) {
            msg = 'A decent attempt. You have some of the fundamentals down, but reviewing the topic would help improve your score.';
        } else if (ratio >= 0.4) {
            msg = 'You\'re making progress. Some concepts are sticking, but a bit more study will go a long way.';
        } else if (ratio >= 0.2) {
            msg = 'Keep learning and keep practicing. Every attempt builds experience and helps identify what to focus on next.';
        } else {
            msg = 'Everyone starts somewhere. Take this as a learning opportunity and come back stronger on the next try.';
        }
        resultMessage.textContent = msg;

        showScreen(resultScreen);
    }

    function startQuiz() {
        currentIndex = 0;
        score = 0;
        scoreSpan.textContent = '0';
        progressBar.style.width = '0%';
        loadQuestion();
        showScreen(quizScreen);
    }

    function restartQuiz() {
        startQuiz();
    }

    startBtn.addEventListener('click', startQuiz);
    restartBtn.addEventListener('click', restartQuiz);


    showScreen(startScreen);
    progressBar.style.width = '0%';
})();
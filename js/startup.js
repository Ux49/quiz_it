    function startQuiz(levelId) {
        currentLevelData = quizData[levelId];
        totalQuestions = currentLevelData.length;
        currentIndex = 0;
        score = 0;
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

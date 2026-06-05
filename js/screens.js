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

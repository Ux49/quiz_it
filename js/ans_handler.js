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

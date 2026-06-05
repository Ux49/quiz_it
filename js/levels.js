   // RENDER LEVEL GRID
    function renderLevelGrid() {
        const levelGrid = document.querySelector('.level-grid');
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
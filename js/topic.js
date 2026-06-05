// RENDER TOPIC GRID
function renderTopicGrid() {
    const topicGrid = document.querySelector('.topic-grid');

    topicGrid.innerHTML = '';

    topicData.forEach((topic, index) => {
        const btn = document.createElement('button');
        btn.className = 'topic-card';
        btn.id = `topic-${index}`;
        btn.textContent = topic;

        btn.addEventListener('click', () => startQuiz(topic));

        topicGrid.appendChild(btn);
    });
}
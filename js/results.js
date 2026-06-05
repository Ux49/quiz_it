
function showResults() {
    updateProgress();
    progressBar.style.width = '100%';
    finalScoreSpan.textContent = score;
    maxScoreSpan.textContent = totalQuestions;

    const ratio = score / totalQuestions;
    let msg = '';
    if (ratio === 1) msg = 'Outstanding! Every answer was correct.';
    else if (ratio >= 0.9) msg = 'Excellent work! Only a few minor mistakes.';
    else if (ratio >= 0.8) msg = 'Great job! Solid knowledge across most areas.';
    else if (ratio >= 0.7) msg = 'Well done! A few areas could use more practice.';
    else if (ratio >= 0.6) msg = 'Good effort. Room to strengthen your knowledge.';
    else if (ratio >= 0.5) msg = 'A decent attempt. Reviewing the topic would help.';
    else if (ratio >= 0.4) msg = 'You\'re making progress. A bit more study will help.';
    else if (ratio >= 0.2) msg = 'Keep learning. Every attempt builds experience.';
    else msg = 'Everyone starts somewhere. Come back stronger!';

    resultMessage.textContent = msg;
    showScreen(resultScreen);
}

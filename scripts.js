document.querySelector('.spinning-text').addEventListener('click', () => {
    const textElement = document.querySelector('.spinning-text');
    textElement.style.animationPlayState = textElement.style.animationPlayState === 'paused' ? 'running' : 'paused';
});

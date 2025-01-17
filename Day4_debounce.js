function debounce(func, delay) {
    let timer;
    return function (...args) {
        clearTimeout(timer);
        timer = setTimeout(() => {
            func.apply(this, args);
        }, delay);
    };
}

const logMessage = debounce(() => console.log('Debounced!'), 300);
window.addEventListener('resize', logMessage);
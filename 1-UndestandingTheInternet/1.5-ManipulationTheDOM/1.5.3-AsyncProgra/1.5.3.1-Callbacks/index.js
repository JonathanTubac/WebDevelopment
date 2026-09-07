function calculateTime(time, type) {
    let totalSeconds = 0;

    // Convertimos la entrada directamente a segundos totales
    if (type === 'sec') totalSeconds = time;
    else if (type === 'min') totalSeconds = time * 60;
    else if (type === 'hour') totalSeconds = time * 3600;
    else if (type === 'day') totalSeconds = time * 86400; // Por si decides agregar días luego

    return Math.floor(totalSeconds);
}

// Función auxiliar para formatear los números (agrega el 0 a la izquierda si es menor a 10)
function formatNumber(num) {
    return String(Math.floor(num)).padStart(2, '0');
}

// Función para transformar segundos totales en formato DD:HH:MM:SS
function getFormattedTime(totalSeconds) {
    if (totalSeconds <= 0) return "00:00:00:00";

    const days = Math.floor(totalSeconds / 86400);
    const hours = Math.floor((totalSeconds % 86400) / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;

    return `${formatNumber(days)}:${formatNumber(hours)}:${formatNumber(minutes)}:${formatNumber(seconds)}`;
}

document.addEventListener("DOMContentLoaded", () => {
    const button = document.querySelector('button')
    const popup = document.querySelector('.popup-container')
    const amount_time = document.querySelector('.time-input')
    const type_time_input = document.querySelector('.type-time')
    const start_button = document.querySelector('button.start')
    const time_text = document.querySelector('h1')
    const pause_time_button = document.querySelector('button.pause')
    const continue_button = document.querySelector('button.continue')
    const progress_bar = document.querySelector('progress')
    let type_time = "sec"
    let time = 1
    let interval
    let totalSecondsLeft = 0; // Guardará el tiempo restante en segundos

    button.addEventListener('click', () => {
        popup.classList.add('none')
    })

    // Actualiza el texto en pantalla basándose en los inputs
    function updateDisplayFromInputs() {
        totalSecondsLeft = calculateTime(Number(amount_time.value || 0), type_time);
        time_text.textContent = getFormattedTime(totalSecondsLeft);
    }

    amount_time.addEventListener('input', (event) => {
        time = event.target.value
        updateDisplayFromInputs();
    })

    type_time_input.addEventListener('change', (event) => {
        type_time = event.target.value
        updateDisplayFromInputs();
    })

    // Función para arrancar el intervalo
    function startTimer() {
        if (totalSecondsLeft <= 0) return;

        start_button.disabled = true
        type_time_input.disabled = true
        amount_time.disabled = true

        interval = setInterval(() => {
            totalSecondsLeft--; // Solo restamos un segundo al total
            time_text.textContent = getFormattedTime(totalSecondsLeft);

            progress_bar.value = ((60 - (totalSecondsLeft % 60)) / 60)

            if (totalSecondsLeft <= 0) {
                clearInterval(interval)
                start_button.disabled = false
                type_time_input.disabled = false
                amount_time.disabled = false
            }


        }, 1000)
    }

    start_button.addEventListener('click', () => {
        startTimer();
    })

    pause_time_button.addEventListener('click', () => {
        clearInterval(interval)
    })

    continue_button.addEventListener('click', () => {
        // Al usar segundos totales, continuar es tan fácil como llamar a la función de inicio otra vez
        startTimer();
    })
})
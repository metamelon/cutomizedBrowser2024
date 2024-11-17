const timerSection = document.getElementById('timer-section');
const timerMinutesInput = document.getElementById('timer-minutes');
const startTimerButton = document.getElementById('start-timer');
const stopTimerButton = document.getElementById('stop-timer');
const resetTimerButton = document.getElementById('reset-timer');
const timerDisplay = document.getElementById('timer-display');
let timerInterval;
let totalSeconds = 0;

        startTimerButton.addEventListener('click', function() {
            let minutes = parseInt(timerMinutesInput.value);
            if (isNaN(minutes) || minutes < 0) {
                alert('Please enter a valid number of minutes.');
                return;
            }
            totalSeconds = minutes * 60;
            clearInterval(timerInterval); 
            startTimer();
        });

        function startTimer() {
            timerDisplay.style.display = 'block'; 
            timerInterval = setInterval(() => {
                let displayMinutes = Math.floor(totalSeconds / 60);
                let displaySeconds = totalSeconds % 60;

                
                timerDisplay.textContent = `${String(displayMinutes).padStart(2, '0')}:${String(displaySeconds).padStart(2, '0')}`;

                if (totalSeconds <= 0) {
                    clearInterval(timerInterval);
                    alert('Time is up!');
                    timerDisplay.textContent = '00:00:00'; 
                } else {
                    totalSeconds--;
                }
            }, 1000);
        }

        stopTimerButton.addEventListener('click', function() {
            clearInterval(timerInterval); 
        });

        resetTimerButton.addEventListener('click', function() {
            clearInterval(timerInterval); 
            totalSeconds = 0; 
            timerDisplay.textContent = '00:00:00'; 
            timerMinutesInput.value = ''; 
        });



        timerSection.style.textAlign = 'center';       
        timerSection.style.position = 'absolute';
        timerSection.style.top = '400px';
        timerSection.style.right = '200px';
        timerDisplay.style.fontSize = '6.0rem';
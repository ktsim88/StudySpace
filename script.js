let name = 'Kristen';
let greeting = document.getElementById('greeting');
greeting.textContent = `Hello ${name}!`;

const letterDayMessage = document.getElementById('letterDayMessage');
const letterDaySelector = document.getElementById('letterDay');

const scheduleByLetterDay = {
    A: ['class1', 'class2', 'class3', 'class5', 'class6'],
    B: ['class4', 'class1', 'class2', 'class7', 'class5'],
    C: ['class3', 'class4', 'class1', 'class6', 'class7'],
    D: ['class2', 'class3', 'class4', 'class5', 'class6'],
    E: ['class1', 'class2', 'class3', 'class7', 'class5'],
    F: ['class4', 'class1', 'class2', 'class6', 'class7'],
    G: ['class3', 'class4', 'class7', 'class5', 'class6'],
};

// Function to update the schedule and message
function updateSchedule(day) {
    letterDayMessage.textContent = day + ' Day!';

    const todaysClasses = scheduleByLetterDay[day];
    todaysClasses.forEach((className, index) => {
        const classDiv = document.getElementById(`class${index + 1}`);
        if (classDiv) {
            classDiv.textContent = className;
        }
    });
}

// Event listener for dropdown change
letterDaySelector.addEventListener('change', () => {
    const selectedDay = letterDaySelector.value;
    localStorage.setItem('selectedLetterDay', selectedDay)
    updateSchedule(selectedDay);
});

// On page load, get saved letter day or fallback to dropdown's default
const savedDay = localStorage.getItem('selectedLetterDay');

if (savedDay && scheduleByLetterDay[savedDay]) {
    letterDaySelector.value = savedDay;  // Update dropdown visually
    updateSchedule(savedDay);
} else {
    updateSchedule(letterDaySelector.value);
}

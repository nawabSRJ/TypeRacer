

let startTime;
let elapsedTime = 0;
let timerInterval;
var total = document.getElementById('timeLimit').value;

// document.getElementById('timeLimit').addEventListener('change' , function(event){
//     total = this.value;
//     console.log(total)
// })

let limit = '00:00:' + pad(total) + ':00';


var timeOver = false;
var textArea = document.getElementById('field')

// * ----------------------------------------    Stopwatch 
function startStopwatch() {
    
    // Store the current time when starting the stopwatch
    startTime = new Date().getTime() - elapsedTime;

    // Update the stopwatch display every 10 milliseconds
    timerInterval = setInterval(updateStopwatchDisplay, 10);
}
function updateStopwatchDisplay() {
    // Calculate the elapsed time since starting the stopwatch
    const currentTime = new Date().getTime();
    elapsedTime = currentTime - startTime;

    // Format the elapsed time
    const formattedTime = formatTime(elapsedTime);

    // Display the formatted time
    document.getElementById('stopwatch').innerText = formattedTime;

    // console.log("check : " , formattedTime)
    if(formattedTime === limit){
        console.log("matched")
        stopStopwatch();
        timeOver = true;
        textArea.setAttribute('disabled' , true)
        checkSpeed();

    }
}

// Function to format the time in HH:MM:SS format
function formatTime(time) {
    const hours = Math.floor(time / (1000 * 60 * 60));
    const minutes = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((time % (1000 * 60)) / 1000);
    const milliseconds = Math.floor((time % 1000) / 10);

    return (
        pad(hours) + ':' +
        pad(minutes) + ':' +
        pad(seconds) + ':' +
        pad(milliseconds)
    );
}

// Function to add leading zeros to single-digit numbers
function pad(number) {
    return (number < 10 ? '0' : '') + number;
}

// Function to stop the stopwatch
function stopStopwatch() {
    clearInterval(timerInterval);
}
// --------------------------------------------------------------------------
// todo - add typing event listenter on textarea -> trigger stopwatch and then disable textarea when the time limit is reached  

// Event listener to update the time limit when the selection changes
document.getElementById('timeLimit').addEventListener('change', function () {
    total = this.value;
    limit = '00:00:' + pad(total) + ':00';
    console.log("Time limit set to:", total, "seconds");
});


textArea.addEventListener('keyup' , function(event){
    
    if (!timerInterval) {
        console.log(limit)
        startStopwatch();
    }
    // ? The if statement is imp. as it checks whether the stop is set to 0 or not , if not placed then the stopwatch will not stop!! , thus mandatory for stopwatch to stop at the chosen time
    

})
function checkSpeed(){
    var content = document.getElementById('field').value;
    var spaces = 0;
    // total words = total spaces + 1
    for(let j = 0 ; j < content.length  ; j++){
        if(content[j] === ' '){
            spaces += 1;
        }
    }
    console.log("Total spaces : " , spaces)
    // * To convert sec to mins - divide the secs by 60
    var speed = (spaces + 1) / (total / 60);
    displaySpeed(speed)
}

function displaySpeed(speed){
    var res = document.getElementById('speed');
    res.innerHTML = speed.toString();
}

// Calendar

let today = new Date();

let options = {
weekday:'long',
year:'numeric',
month:'long',
day:'numeric'
};

document.getElementById("calendar").innerHTML =
today.toLocaleDateString('en-US', options);


// Productivity Counter

let hour = 0;

function study(){

hour++;

document.getElementById("hours").innerHTML = hour;

if(hour==5){

alert("Excellent! You completed 5 study hours today.");

}

}
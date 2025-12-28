let homeScore = 0;
let guestScore = 0;

let homeScoreEl = document.getElementById("homeScore");
let guestScoreEl = document.getElementById("guestScore");
let resultEl = document.getElementById("result");

homeScoreEl.textContent = homeScore;
guestScoreEl.textContent = guestScore;

function onePlusHome() {
    homeScore++;
    homeScoreEl.textContent = homeScore;
    result();
}
function twoPlusHome() {
    homeScore+=2;
    homeScoreEl.textContent = homeScore;
    result();
}
function threePlusHome() {
    homeScore+=3;
    homeScoreEl.textContent = homeScore;
    result();
}

function onePlusGuest() {
    guestScore++;
    guestScoreEl.textContent = guestScore;
    result();
}
function twoPlusGuest() {
    guestScore+=2;
    guestScoreEl.textContent = guestScore;
    result();
}
function threePlusGuest() {
    guestScore+=3;
    guestScoreEl.textContent = guestScore;
    result();
}

function reset() {
    homeScore = 0;
    guestScore = 0;
    homeScoreEl.textContent = homeScore;
    guestScoreEl.textContent = guestScore;
    resultEl.style.display = "none";
}

function result() {
    resultEl.style.display = "block";
    if(homeScore > guestScore) {
        resultEl.textContent = ("HOME is leading by " + (homeScore - guestScore));
    } else if (homeScore < guestScore) {
        resultEl.textContent = ("GUEST is leading by " + (guestScore - homeScore));
    } else {
        resultEl.textContent = "NECK AND NECK!!"
    }
}


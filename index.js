let hScore = 0
let gScore = 0
let homeScore = document.getElementById("home-score")
let guestScore = document.getElementById("guest-score")

function home1() {
    hScore += 1
    homeScore.textContent = hScore
}

function home2() {
    hScore += 2
    homeScore.textContent = hScore
}

function home3() {
    hScore += 3
    homeScore.textContent = hScore
}

function guest1() {
    gScore+=1
    guestScore.textContent = gScore
}

function guest2() {
    gScore+=2
    guestScore.textContent = gScore
}
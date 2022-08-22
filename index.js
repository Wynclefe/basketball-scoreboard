let score = 0
let homeScore = document.getElementById("home-score")
let guestScore = document.getElementById("guest-score")

function home1() {
    score += 1
    homeScore.textContent = score
}

function home2() {
    score += 2
    homeScore.textContent = score
}

function home3() {
    score += 3
    homeScore.textContent = score
}
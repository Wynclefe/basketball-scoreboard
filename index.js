let score = 0
let homeScore = document.getElementById("home-score")

function home1() {
    score += 1
    homeScore.textContent = score
}

home1()

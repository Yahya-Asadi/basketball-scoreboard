const homeScoreEl = document.getElementById("home-score")
const guestScoreEl = document.getElementById("guest-score")

const addOneHomeBtn = document.getElementById("add-home-one-btn")
const addTwoHomeBtn = document.getElementById("add-home-two-btn")
const addThreeHomeBtn = document.getElementById("add-home-three-btn")

const addOneGuestBtn = document.getElementById("add-quest-one-btn")
const addTwoGuestBtn = document.getElementById("add-quest-two-btn")
const addThreeGuestBtn = document.getElementById("add-quest-three-btn")

const gameReset = document.getElementById("reset-game")

let homeScore= 0;
let guestScore= 0;

function addScore(points, team) {
	if (team === "home"){
		homeScore += points
		homeScoreEl.innerText = homeScore
	}
	else if (team === "guest"){
		guestScore += points
		guestScoreEl.innerText = guestScore
	}
	else{
		console.log("bad arguements")
	}
}

addOneHomeBtn.addEventListener("click", function(){addScore(1, "home")})
addTwoHomeBtn.addEventListener("click", function(){addScore(2, "home")})
addThreeHomeBtn.addEventListener("click", function(){addScore(3, "home")})

addOneGuestBtn.addEventListener("click", function(){addScore(1, "guest")})
addTwoGuestBtn.addEventListener("click", function(){addScore(2, "guest")})
addThreeGuestBtn.addEventListener("click", function(){addScore(3, "guest")})

gameReset.addEventListener("click", function(){
	homeScore = 0
	guestScore = 0
	homeScoreEl.textContent = homeScore
	guestScoreEl.textContent = guestScore
})

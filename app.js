/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game
- for more clarification on the code check the notes.txt

*/


//dice = Math.floor(Math.random() *6 ) + 1; //generates a random number between 1 and 6
//document.querySelector("#current-" + activeplayer).textContent = dice; //score-0 is the id in the index.html
//with the .textContent we can only set text but not html.for html we use innerHTML element.eg document.querySelector("#score-0").innerHTML ="<em>" + dice +"<em>

//document.querySelector(".dice").style.display ="none";
var  scores,roundscore,activeplayer,gameplaying;

init();
document.querySelector(".btn-roll").addEventListener("click", function(){
	//random number
	if (gameplaying) {

	
	var dice = Math.floor(Math.random() * 6) + 1;
	var dicedom = document.querySelector(".dice");
	dicedom.style.display = "block";
	dicedom.src = "dice-" + dice + ".png";

	if (dice !== 1) {
		roundscore += dice;
		document.querySelector("#current-" + activeplayer) . textContent = roundscore;
	} else {
		//activeplayer === 0 ? activeplayer = 1; activeplayer = 0;
		if (activeplayer === 0) {
			activeplayer = 1;
			roundscore = 0;
		}else {

			
			nextplayer();

		}
	}}
})

document.querySelector(".btn-hold").addEventListener("click", function() {
	scores[activeplayer] += roundscore;
	document.querySelector("#score-" +  activeplayer).textContent=scores[activeplayer];
	if (scores[activeplayer] > 30 ) {
		document.querySelector("#name-" + activeplayer).textContent = "Winner!!";
		document.querySelector(".player-" + activeplayer + "-panel").classList.add = "winner";
		document.querySelector(".player-" + activeplayer + "-panel").classList.remove = "active";
		document.querySelector(".dice").style.display = "none";
		gameplaying = false;
	}else {
		nextplayer();
		
	}

	
})

document.querySelector(".btn-new").addEventListener("click", init);
if(gameplaying) {

function nextplayer() {
			activeplayer = 0;
			roundscore = 0;

			document.getElementById("current-0").textContent ='0';
			document.getElementById("current-1").textContent ='0';
			//document.getElementById("#current-1").textContent = "0";

			document.querySelector(".player-0-panel").classList.toggle("active");//toggle adds or removes the classes if not there
			document.querySelector(".player-1-panel").classList.toggle("active");
			document.querySelector(".dice").style.display = "none";

}
}

function init() {
	
	scores = [0,0];
	roundscore = 0;
	activeplayer = 0;
	gameplaying = true;

	document.querySelector(".dice").style.display = "none";
	document.getElementById("score-1").textContent = "0";
	document.getElementById("score-0").textContent = "0";
	document.getElementById("current-0").textContent = "0";
	document.getElementById("current-1").textContent = "0";
	document.getElementById("name-0").textContent = "player 1";
	document.getElementById("name-1").textContent ="player 2";
	document.querySelector(".player-1-panel").classList.remove("active");//removing winner class styles of person1 after game reinitialization
	document.querySelector(".player-0-panel").classList.remove("active");//removing winner class styles of person2 after game reinitialization


}




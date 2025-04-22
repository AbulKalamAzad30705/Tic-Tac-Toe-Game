let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");
let newGameBtn = document.querySelector("#new-btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");
let call = document.querySelector("#call")

let turnO = true; //** playerO, playerX

const winPatterns = [[0, 1, 2], [0, 3, 6], [0, 4, 8], [1, 4, 7], [2, 5, 8], [2, 4, 6], [3, 4, 5], [6, 7, 8]];

const resetGame = () => {
	turnO = true;
	enableBoxes();
	msg.innerText=``;
	msgContainer.classList.add("hide");
	call.innerText = " Again Welcomed !";

}


boxes.forEach((box) => {
	box.addEventListener("click", () => {
		// console.log("box was clicked");
		if (turnO) {
			box.innerText = "O";
			turnO = false;
			call.innerText = "Now this X 'th Turn.";
		} else {
			box.innerText = "X";
			turnO = true;
			call.innerText = "Now this O 'th Turn.";
		}
		box.disabled = true;

		checkWinner();
	});
});

const disableBoxes = () => {
	for (let box of boxes) {
		box.disabled = true;
		call.innerText = "BUDDY🙏. to Play Again 'click' New Game."
	}
}
const enableBoxes = () => {
	for (let box of boxes) {
		box.disabled = false;
		box.innerText = "";
	}
}


const showWinner = (winner) => {
	msg.innerText = `Congratulatins, Winner is ${winner}`;
	msgContainer.classList.remove("hide");
	disableBoxes();
}

const checkWinner = () => {
	for (let pattern of winPatterns) {
		/*    console.log(pattern[0],pattern[1],pattern[2]);
		    console.log(boxes[pattern[0]],boxes[pattern[1]],boxes[pattern[2]]);
		    console.log(boxes[pattern[0]].innerText,boxes[pattern[1]].innerText,boxes[pattern[2]].innerText);
		  */
		let pos1Val = boxes[pattern[0]].innerText;
		let pos2Val = boxes[pattern[1]].innerText;
		let pos3Val = boxes[pattern[2]].innerText;

		if (pos1Val != "" && pos2Val != "" && pos3Val != "") {
			if (pos1Val === pos2Val && pos2Val === pos3Val) {
				console.log("winner");
				showWinner(pos1Val);
			}
		}
	}
	if (boxes[0].innerText != "" && boxes[1].innerText != "" && boxes[2].innerText != "" && boxes[3].innerText != "" && boxes[4].innerText != "" && boxes[5].innerText != "" && boxes[6].innerText != "" && boxes[7].innerText != "" && boxes[8].innerText != "") {
		call.innerText = "Game Draw!!!!";
	}
};

newGameBtn.addEventListener("click", resetGame);
resetBtn.addEventListener("click", resetGame);
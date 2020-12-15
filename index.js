const battleship = () => {
  let player1Name = prompt("What is your name?");
  let player2Name = prompt("What is your name?");
  let players = [
    {
      name: player1Name,
      shipCount: 0,
      gameBoard: [
        [0, 0],
        [0, 0],
        [0, 0],
        [0, 0],
      ],
    },
    {
      name: player2Name,
      shipCount: 0,
      gameBoard: [
        [0, 0],
        [0, 0],
        [0, 0],
        [0, 0],
      ],
    },
  ];

  for (i = 0; i < 4; i++) {
    let randX = Math.floor(Math.random() * 3) + 1;
    let randY = Math.floor(Math.random() * 3) + 1;
    players[0].gameBoard[i] = [randX, randY];
    players[1].gameBoard[i] = [randX, randY];
    for (j = 0; j < 2; j++) {
      if ([randX, randY] !== players[j].gameBoard[i]) {
        players[j].shipCount += 1;
        console.log(players[j]);
      }
    }
  }
  
  // let strike = parseInt(
  //   prompt("Choose an x and y coordinate to strike your opponent's battleship.")
  // );

  // return "The winner is...?";
};

const gameResult = battleship();

const htmlTarget = document.getElementById("result");
htmlTarget.innerHTML = gameResult;

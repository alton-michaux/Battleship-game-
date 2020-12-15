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
      ]
    }
  ];

  //write a function to display grid
  function createGrid(size) {
    let grid = []; //initialize grid array
    for (i = 0; i < size; i++) { //loop to populate each column of the grid
      grid[i] = []; //sets an array within an array 
      for (j = 0; j < size; j++) {
        grid[i][j] = " 0 "; //assigns 0 to all un-shipped grid spaces
      }
    } //write a loop to populate ships on grid
    for (i = 0; i < grid.length; i++) {
      let randX = Math.floor(Math.random() * 3) + 1;
      let randY = Math.floor(Math.random() * 3) + 1; //generate random coordinates
      for (j = 0; j < 2; j++) {
        if ([randX, randY] !== players[j].gameBoard[i]) { //conditional statement making sure there are no ships on the board
          grid[randX][randY] = " 1 "; //marks ship on player grid
          players[j].gameBoard[i] = [randX, randY]; //assigns player a random ship position
          players[j].shipCount += 1; //adds ship to shipCount variable
          console.log(players[j]);
        }
      }
    }
    return grid;
  }

  console.log(createGrid(4));

  // let strike = parseInt(
  //   prompt("Choose an x and y coordinate to strike your opponent's battleship.")
  // );

  // return "The winner is...?";
};

const gameResult = battleship();

const htmlTarget = document.getElementById("result");
htmlTarget.innerHTML = gameResult;

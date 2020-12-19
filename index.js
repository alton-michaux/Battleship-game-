const battleship = () => {
  let p1Name = prompt("What is your name Player 1?");
  let p2Name = prompt("What is your name Player 2?");

  let p1Grid = createGrid(4);
  let p2Grid = createGrid(4);

  const players = [
    {
      name: p1Name,
      shipCount: 0,
      gameBoard: p1Grid,
    },
    {
      name: p2Name,
      shipCount: 0,
      gameBoard: p2Grid,
    },
  ];

  //write a function to create grid
  function createGrid(size) {
    let grid = []; //initialize grid array
    for (i = 0; i < size; i++) {
      grid[i] = []; //sets an array within an array
      for (j = 0; j < size; j++) {
        grid[i][j] = " 0 "; //assigns 0 to all grid spaces
      }
    }
    return grid;
  } 

  let grid = createGrid(4);

  //write a loop to populate ships on grid
    for (i = 0; i < grid.length; i++) {
      let randX = Math.floor(Math.random() * 3) + 1;
      let randY = Math.floor(Math.random() * 3) + 1; //generate random coordinates
      for (j = 0; j < players.length; j++) {
        if ([randY, randX] !== players[j].gameBoard[i]) { //conditional statement making sure there are no ships on the board
          players[j].gameBoard[i] = "1 "; //marks ship on player grid
          players[j].shipCount ++ //adds ship to shipCount variable
          console.log(players[j]);
        } else {
        }
      }
    }

  console.log(p1Grid);
  console.log(p2Grid);

  // console.log(printGrid(p1Grid));

  console.log(printGrid(p1Grid));
  console.log(printGrid(p2Grid, true));

  function printGrid(grid, isEnemy = false) {
    const headers = createHeaders(grid.length);
    // console.log(headers);
    let rowStr;
    for (let i = 0; i < grid.length; i++) {
      rowStr = i + "  ";
      for (let cell of grid[i]) {
        if (isEnemy && cell == " 1 ") {
          rowStr += " 0 ";
        } else {
          rowStr += cell + " 0 ";
        }
      }
    }
    // console.log(rowStr);
    return rowStr
  }

  function createHeaders(size) {
    let result = " ";
    for (i = 0; i < size; i++) {
      result += i + " ";
    }
    return result;
  }

  // return "The winner is...?";
};

const gameResult = battleship();

const htmlTarget = document.getElementById("result");
htmlTarget.innerHTML = gameResult;

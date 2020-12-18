const battleship = () => {
  //assign name variables
  let p1 = prompt("What is your name P1?");
  let p2 = prompt("What is your name P2?");

  //declare grid variable for p1
  let p1Grid = createGrid(4);
  //call function for random ship placement on p1 grid
  placeCharacters(1, p1Grid, 4);

  //declare grid variable for p2
  let p2Grid = createGrid(4);
  //call function for random ship placement on p2 grid
  placeCharacters(1, p2Grid, 4);

  //initialize players objects
  const players = [
    {
      name: p1,
      shipCount: 4,
      gameBoard: p1Grid, //set up 2D array to make 4x4 grid
    },
    {
      name: p2,
      shipCount: 4,
      gameBoard: p2Grid,
    },
  ];

  console.log(players);
  console.log(p1Grid);
  console.log(p2Grid);

  //call function to start actual gameplay
  for (i = 0; i < p1Grid.length; i++) {
    gamePlay(players, p1Grid);
  }

  //create function that takes a size parameter to create a grid
  function createGrid(size) {
    let grid = [];
    for (i = 0; i < size; i++) {
      grid[i] = [];
      for (j = 0; j < size; j++) {
        grid[i][j] = " 0 ";
      }
    }
    //return grid value
    return grid;
  }

  //create a function to generate random coordinates for ships and place them as 1's on the grid
  function placeCharacters(c, board, max) {
    for (i = 0; i < max; i++) {
      let randX = Math.floor(Math.random() * 4);
      let randY = Math.floor(Math.random() * 4);
      if ([randY, randX] !== board) {
        board[i][(randY, randX)] = ` ${c} `;
      }
    }
  }

  // create a strike function to pass coordinates through opponent grid
  function strike(obj, player, opPlayer) {
    let x = parseInt(
      prompt(
        `${obj[player].name} choose an X coordinate to strike ${obj[opPlayer].name}'s battleship.`
      )
    );
    let y = parseInt(
      prompt(
        `${obj[player].name} choose a Y coordinate to strike ${obj[opPlayer].name}'s battleship.`
      )
    );
    if (obj[opPlayer].gameBoard[0][(y, x)] == " 1 ") {
      alert(
        `Direct hit ${obj[player].name}! You sank ${obj[opPlayer].name}'s battleship. They have ${obj[opPlayer].shipCount - 1} battleships left`
      );
      players[opPlayer].gameBoard[0][(y, x)] = " ! ";
      do {
        obj[opPlayer].shipCount -- ;
      } while (strike(obj, player, opPlayer) == true)
      return true;
    } else if ((obj[opPlayer].gameBoard[0][(y, x)] == " - ")) {
      alert(`You're wasting time! That spot has already been hit!`);
      return false;
    } else {
      alert(`Ah, you missed! ${obj[opPlayer].name}'s ships are evading you!`);
      obj[opPlayer].gameBoard[0][(y, x)] = " - ";
      return false;
    }
  }

  // function to tie everything together
  function gamePlay(obj, grid) {
    if (strike(obj, 0, 1) == false) {
      strike(obj, 1, 0);
    }
  }

  console.log(p1Grid);
  console.log(p2Grid);
  console.log(players);
};

const gameResult = battleship();

htmlTarget = document.getElementById("result");
htmlTarget.innerHTML = gameResult;

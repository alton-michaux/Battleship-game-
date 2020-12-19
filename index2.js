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
  function placeCharacters(c, grid, max) {
    for (i = 0; i < max; i++) {
      let randY = Math.floor(Math.random() * 4);
      let randX = Math.floor(Math.random() * 4);
      if (grid[randY][randX] !== " 1 ") {
        grid[randY][randX] = ` ${c} `;
      }
    }
  }

  // create a strike function to pass coordinates through opponent grid
  function strike(objV, player, opPlayer) {
    let x = parseInt(
      prompt(
        `${objV[player].name} choose an X coordinate to strike ${objV[opPlayer].name}'s battleship.`
      )
    );
    let y = parseInt(
      prompt(
        `${objV[player].name} choose a Y coordinate to strike ${objV[opPlayer].name}'s battleship.`
      )
    );
    for (i = 0; i < 4; i ++) {
      if (objV[opPlayer].gameBoard[y][x] == " 1 ") {
        alert(
          `Direct hit ${objV[player].name}! You sank ${
            objV[opPlayer].name
          }'s battleship. They have ${
            objV[opPlayer].shipCount - 1
          } battleships left`
        );
        objV[opPlayer].gameBoard[y][x] = " ! ";
        objV[opPlayer].shipCount--;
        return true
      } else if (
        objV[opPlayer].gameBoard[y][x] == " - " ||
        objV[opPlayer].gameBoard[y][x] == " ! "
      ) {
        alert(`You're wasting time! That spot has already been hit!`);
        return false
      } else {
        alert(`Ah, you missed! ${objV[opPlayer].name}'s ships are evading you!`);
        objV[opPlayer].gameBoard[y][x] = " - ";
        return false
      }
    }
  }

  //call function to start actual gameplay
  function start(objV, player, opPlayer) {
    while (objV[player].shipCount > 0 && objV[opPlayer].shipCount > 0) {
      strike(objV, player, opPlayer);
    } if (strike === false) {
      strike(objV, opPlayer, player);
    } else {
      alert(`Game Over.`);
    }
  }

  //call function to start the game
  start(players, 0, 1);

  console.log(p1Grid);
  console.log(p2Grid);
  console.log(players);
};

const gameResult = battleship();

htmlTarget = document.getElementById("result");
htmlTarget.innerHTML = gameResult;

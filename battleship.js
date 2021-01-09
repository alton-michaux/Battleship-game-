/*===============================================*/

const battleship = () => {
  const p1 = prompt("What is your name P1?");
  const p2 = prompt("What is your name P2?");
  let winner;
  
  const p1Grid = createGrid(4);
  placeCharacters(1, p1Grid, 4);

  const p2Grid = createGrid(4);
  placeCharacters(1, p2Grid, 4);

  //initialize players object
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
  //setup functions

  //1. create function that takes a size parameter to create a grid
  function createGrid(size) {
    const grid = [];
    for (i = 0; i < size; i++) {
      grid[i] = [];
      for (j = 0; j < size; j++) {
        grid[i][j] = " 0 ";
      }
    }
    //return grid value
    return grid;
  }

  //2. create a function to generate random coordinates for ships and place them as 1's on the grid
  function placeCharacters(c, grid, max) {
    for (i = 0; i < max; i++) {
      const randX = Math.floor(Math.random() * max);
      const randY = Math.floor(Math.random() * max);
      if (grid[randX][randY] !== " 1 ") {
        grid[randX][randY] = ` ${c} `;
      }
    }
  }

  //3. create a strike function to pass coordinates through opponent grid
  function strike(objV, player, opPlayer) {
    const x = parseInt(
      prompt(
        `${objV[player].name} choose an X coordinate to strike ${objV[opPlayer].name}'s battleship (0-3).`
      )
    );
    const y = parseInt(
      prompt(
        `${objV[player].name} choose a Y coordinate to strike ${objV[opPlayer].name}'s battleship (0-3).`
      )
    );
    if (objV[opPlayer].gameBoard[x][y] == " 1 ") {
      alert(
        `Direct hit ${objV[player].name}! You sank ${
          objV[opPlayer].name
        }'s battleship. They have ${
          objV[opPlayer].shipCount - 1
        } battleships left`
      );
      objV[opPlayer].gameBoard[x][y] = " ! ";
      objV[opPlayer].shipCount--;
      return true
    } else if (
      objV[opPlayer].gameBoard[x][y] == " - " ||
      objV[opPlayer].gameBoard[x][y] == " ! "
    ) {
      alert(`That spot has already been hit!`);
      return false
    } else {
      alert(`You missed! ${objV[opPlayer].name}'s ships are evading you!`);
      objV[opPlayer].gameBoard[x][y] = " - ";
      return false
    } 
}

  //4. create function to start gameplay
  function start(objV, player, opPlayer) {
    while (objV[player].shipCount > 0 && objV[opPlayer].shipCount > 0) {
      const attack = strike(objV, player, opPlayer);
      if (attack === false) {
        attack = strike(objV, opPlayer, player);
      } 
    }
    if (objV[player].shipCount === 0) {
      winner = objV[opPlayer].name;
    } else {
      if (objV[opPlayer].shipCount === 0) {
        winner = objV[player].name;
      }
      return winner;
  }
}

  //call function to start the game
  start(players, 0, 1);

  return `The winner is ${winner}!`
};

const gameResult = battleship();

htmlTarget = document.getElementById("result");
htmlTarget.innerHTML = gameResult;
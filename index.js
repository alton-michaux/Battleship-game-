const battleship = () => {
  //assign name variables
  let p1 = prompt("What is your name P1?");
  let p2 = prompt("What is your name P2?");
  //assign winner variable
  let winner;

  //declare grid variable for p1
  let p1Grid = createGrid(4);
  //call function for random ship placement on p1 grid
  placeCharacters(1, p1Grid, 4);
  console.log(p1Grid)
  //declare grid variable for p2
  let p2Grid = createGrid(4);
  //call function for random ship placement on p2 grid
  placeCharacters(1, p2Grid, 4);
  console.log(p2Grid)

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

  //setup functions

  //1. create function that takes a size parameter to create a grid
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

  //2. create a function to generate random coordinates for ships and place them as 1's on the grid
  function placeCharacters(c, grid, max) {
    for (i = 0; i < max; i++) {
      let randX = Math.floor(Math.random() * 4);
      let randY = Math.floor(Math.random() * 4);
      if (grid[randX][randY] !== " 1 ") {
        grid[randX][randY] = ` ${c} `;
      }
    }
  }

  //3. create a strike function to pass coordinates through opponent grid
  function strike(objV, player, opPlayer) {
    let x = parseInt(
      prompt(
        `${objV[player].name} choose an X coordinate to strike ${objV[opPlayer].name}'s battleship (0-3).`
      )
    );
    let y = parseInt(
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
      let attack = strike(objV, player, opPlayer);
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

  console.log(players);

  return `The winner is ${winner}!`
};

const gameResult = battleship();

htmlTarget = document.getElementById("result");
htmlTarget.innerHTML = gameResult;

// function printGrid(grid, isEnemy = false) {
//   const headers = createHeaders(grid.length);
//   // console.log(headers);
//   let rowStr;
//   for (let i = 0; i < grid.length; i++) {
//     rowStr = i + "  ";
//     for (let cell of grid[i]) {
//       if (isEnemy && cell == " 1 ") {
//         rowStr += " 0 ";
//       } else {
//         rowStr += cell + " 0 ";
//       }
//     }
//   }
//   // console.log(rowStr);
//   return rowStr
// }

// function createHeaders(size) {
//   let result = " ";
//   for (i = 0; i < size; i++) {
//     result += i + " ";
//   }
//   return result;
// }
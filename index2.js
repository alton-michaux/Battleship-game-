const battleship = () => {
  //assign name variables
  let p1 = prompt("What is your name P1?");
  let p2 = prompt("What is your name P2?");

  //declare grid variables
  let p1Grid = createGrid(4);
  let p2Grid = createGrid(4);
  //call function for random ship placement on grids
  placeCharacters(1, p1Grid, 4);
  placeCharacters(1, p2Grid, 4);

  //initialize players objects
  const players = [
    {
      name: p1,
      shipCount: 0,
      gameBoard: p1Grid, //set up 2D array to make 4x4 grid
    },
    {
      name: p2,
      shipCount: 0,
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
  function placeCharacters(c, board, max) {
    for (i = 0; i < max; i++) {
      let randX = Math.floor(Math.random() * 4);
      let randY = Math.floor(Math.random() * 4);
      if ([randY, randX] !== board[i][i]) {
        board[i][randY, randX] = ` ${c} `;
        // this.players.shipCount ++ ;
      } 
    }
    }

  console.log(players);
};

// function printGrid(grid, isEnemy = false) {
//     const headers = createHeaders(grid.length);
//     let rowStr;
//     for (i = 0; i < grid.length; i++) {
//         rowStr = i + " ";
//         for (let cell of grid[i]) {
//             if (isEnemy && cell == " 1 ") {
//                 rowStr += " 0 ";
//             } else {
//                 rowStr += cell + " 0 "
//             }
//         }
//     }
//     return rowStr;
//     function createHeaders(size) {
//         let result = " ";
//         for (i = 0; i < size; i++) {
//             result += i + " ";
//         }
//         return result;
//     }
// }
//   console.log(players);
//   return "The winner is...?";
// };

const gameResult = battleship();

htmlTarget = document.getElementById("result");
htmlTarget.innerHTML = gameResult;

function rotate(shape){
  let rows = shape.length
  let cols = shape[0].length
  let rotated = []

  for(let c=0; c<cols; c++) {
    rotated[c] = []
    for(let r=0; r<rows; r++) {
      rotated[c][r] = shape[rows-1-r][c]
    }
  }
  return rotated
} 

function rotations(shape) {
  return [1,2,3].reduce((acc,it) => {
    acc[it] = rotate(acc[it-1])
    return acc
  }, [shape])
}

function toString(shape) {
  return shape
    .reduce((str, it) => str + it.map(it => it === 1 ? "1" : " ")
    .join("") + "\n", "")
}

let shapes = {
  I: [[1, 1, 1, 1]],
  J: [[1, 1, 1], [0, 0, 1]],
  L: [[1, 1, 1], [1, 0, 0]],
  O: [[1,1],[1,1]],
  S: [[0, 1, 1], [1, 1, 0]],
  T: [[1, 1, 1], [0, 1, 0]],
  Z: [[1, 1, 0], [0, 1, 1]],
}

function fits(shape, board, row, col) {
  return shape.every((it, r) => it.every((el, c) => 
    el === 0 || (board[c + col] < (row - r + shape.length))
  ))
}


function filledRows(shape, board, rowNo, colNo) {
  return shape.filter((row, r) => {
    //console.log(`Row no: ${rowNo - r - 1 + shape.length}`)
    return board.every((col,c) => {
      //console.log(`Col: ${col}`) 
      //console.log(`Shape: ${row[c-colNo]}`) 
      return (col > (rowNo - r - 1 + shape.length)) || (row[c-colNo] === 1)
    })
  }).length
}

function TetrisMove(strArr) { 

  let [shape, ...board] = strArr
  shape = shapes[shape]
  board = board.map(it => parseInt(it))

  let filled = 0
  board.forEach((_,col) => 
    rotations(shape).forEach((s,r) => {
        let row = board[col] + 1
        while(row >= 0 && fits(s,board,row,col)) {
          //console.log(`FIT col:${col} row:${row} rotation: ${r}`)
          filled = Math.max(filled, filledRows(s, board, row, col))
          row--
        }
    })
  )

  return filled
}

// keep this function call here 
console.log(TetrisMove(readline()));

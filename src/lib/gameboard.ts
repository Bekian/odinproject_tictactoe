import { error } from "./consoleTTTgame"

// this file will output a gameboard to the console
// it is represented by an array of arrays, aka a 3x3 grid
export let board = [
        [0, 0, 0],
        [0, 0, 0],
        [0, 0, 0]
    ]
    
export function logBoard(board: number[][]) {
    for (const i in board) {
        console.log(board[i])
    }
}

export function resetBoard() {
    board = [
        [0, 0, 0],
        [0, 0, 0],
        [0, 0, 0]
    ]
}

// parses carteisian coordinates "x,y" or "x, y" into a number[][] index
// accepts 0 as first index, rejects values greater than 2 and ignores negative symbol (-)
function parsePosition(position: string) {
    const x = Number(position[0])
    const y = Number(position[position.length-1])
    if (x > 2 || y > 2 || x < 0 || y < 0) {
        error(`X or Y value out of bounds, X & Y: ${x} & ${y}`)
        return null
    }
    return {X: x, Y: y}
}

// take position as x,y
// attempt to make a move onto board at the given position
// player must be 1 or 2
export function makeMove(position: string, player: number) {   
    const attemptPostion = parsePosition(position)
    if (attemptPostion == null) {
        error("Attempted position is null, check previous errors")
        return 0
    }
    if (board[attemptPostion.X][attemptPostion.Y] != 0) {
        error(`Player in position: ${attemptPostion.X}, ${attemptPostion.Y}`)
        return 0
    }
    if (player == 1 || player == 2) {
        board[attemptPostion.X][attemptPostion.Y] = player
        return 1
    }
}

import {board, logBoard, resetBoard, makeMove } from "./gameboard"

export function error(msg: string) {
    if(msg == "1") {
        return
    }
    console.log("Error:", msg)
}

function promptGameChoice() {
    console.log("Input choices: \n1 : Start a new game\n2 : Exit")
    return
}

export function gameloop() {
    let runCondition = true
    let p1Score = 0
    let p2Score = 0
    let choice = 0
    while (runCondition == true) {
        choice = getChoice()
        if(choice == 0) {
            runCondition = false
        } else if (choice == 1){
            const result = playGame()
            if (result == 1) {
                p1Score += 1
            } else if (result == 2) {
                p2Score += 1
            } else {
                error(result)
            }
        }    
    }

    endGame(p1Score, p2Score)
}
import { useState } from 'react'
import "./App.scss"

function App() {
  // keep correct word
  // keep board state
  // keep current line counter
  // keep current guess letters

  // function when guess is entered
  // check 5 letters
  // check each letter against all letters in correct word
  // respond with letter statuses green, orange, grey 
  // *deal with duplicate letters

  // Each keyboard key need status active or not if known incorrect

  // Each keyboard key runs function
  // Check guess word is not at 5 letters already
  // add letter to end of guess word
  // when guess word state updates reference current line 
  // and position of new letter in guess word to find the id of 
  // display block and make the letter visible there

  // Enter key runs check function

  // delete key removes last letter on guess word

  const keyboard = [
    ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p'],
    ['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l'],
    ['backspace', 'z','x','c','v','b','n','m','enter']
  ]
  const gameboard = [
    ['_','_','_','_','_'],
    ['_','_','_','_','_'],
    ['_','_','_','_','_'],
    ['_','_','_','_','_'],
    ['_','_','_','_','_'],
    ['_','_','_','_','_'],
  ]

  const initialiseGameboard = () => {
    const board = []
    for (let i = 0; i < 6; i++){
      const row = []
      for (let j = 0; j < 5; j++){
        row.push({letter: "_", status: "unused"})
      }
      board.push(row)
    }
    return board
  }

  const initialiseKeyboard = () => {
    return keyboard.map( row =>
      row.map( letter => ({
          letter: letter,
          status: "unused"
      }))
    )
  }

  const [keyboardStatus, setKeyboardStatus] = useState(initialiseKeyboard())
  const [gameboardStatus, setGameboardStatus] = useState(initialiseGameboard())
  const word = "delay";

  const onClickHandler = (letter) => {
    const newBoard = gameboardStatus.map(row =>
      row.map(cell => ({ ...cell }))
    )

    for (let i = 0; i < newBoard.length; i++) {
      const row = newBoard[i]

      // ----- ENTER -----
      if (letter === "enter") {
        if (row[4].status != "unused") {

          // Make a copy of the correct word for tracking letters
          let wordTest = word.split('')

          for (let j = 0; j < 5; j++) {
            if (row[j].letter === wordTest[j]) {
              row[j].status = "correct"
              wordTest[j] = null
            } else {
              let found = false
              for (let k = 0; k < 5; k++) {
                if (row[j].letter === wordTest[k]) {
                  row[j].status = "present"
                  wordTest[k] = null
                  found = true
                  break
                }
              }
              if (!found) {
                row[j].status = "absent"
              }
            }
            console.log(row[j])
          }
          // Add keyboard check against rowj letters - always upgrade to not absent first
        } else {
          console.log("Not enough characters in this row")
        }

        break
      }



      // ----- BACKSPACE -----
      if (letter === "backspace") {
        // if row has pending letters
        if (row.some(cell => cell.status === "pending")) {
          // remove last pending letter
          for (let j = row.length - 1; j >= 0; j--) {
            if (row[j].status === "pending") {
              row[j] = { letter: "_", status: "unused" }
              break
            }
          }
        }
        break
      }

      // ----- LETTER INPUT -----
      // find first unused cell in row
      if (row[4].status === "unused") {
        for (let j = 0; j < row.length; j++) {
          if (row[j].status === "unused") {
            row[j] = { letter, status: "pending" }
            break
          }
        }
        break
      }
    }

    setGameboardStatus(newBoard)
    
  }



  console.log(keyboardStatus)

  return (
    <>
      <div style={{ padding: 20, fontSize: 24, color: "#000000", }}>
        Wordle clone
        <div id="gameboard">
          <div className="boardRow" >

          </div>
        </div>
        <div id="keyboard">
          {keyboardStatus.map( (row,rowIndex) => (
            <div className="row" key={rowIndex}>
              {row.map((letterObj, letterIndex) => (
                <div key={letterIndex} className={`button ${letterObj.status} ${letterObj.letter === "enter" || letterObj.letter === "backspace" ? "special" : ""}`} onClick={() => onClickHandler(letterObj.letter)}>
                  {letterObj.letter === "enter" ? "⏎" :
                    letterObj.letter === "backspace" ? "⌫" :
                    letterObj.letter.toUpperCase()}
                </div>
                ))
              }
            </div>)
            )
          }
        </div>
      </div>
    </>
  )
}

export default App

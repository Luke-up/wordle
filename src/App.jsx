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

  const initialiseKeyboard = () => {
    return keyboard.map( row =>
      row.map( letter => ({
          letter: letter,
          status: "unused"
      }))
    )
  }

  const [keyboardStatus, setKeyboardStatus] = useState(initialiseKeyboard())

  const onClickHandler = () => {
    return "nothing"
  }

  console.log(keyboardStatus)

  return (
    <>
      <div style={{ padding: 20, fontSize: 24, color: "#000000", }}>
        Wordle clone
        <div id="keyboard">
          {keyboardStatus.map( (row,rowIndex) => (
            <div className="row" key={rowIndex}>
              {row.map((letterObj, letterIndex) => (
                <div key={letterIndex} className={`button ${letterObj.status}`} onClick={() => onClickHandler(letterObj.letter)}>
                  {letterObj.letter.toUpperCase()}
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

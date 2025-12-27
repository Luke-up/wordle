
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


  return (
    <>
      <div style={{ padding: 20, fontSize: 24, color: "#000000", }}>
        Wordle clone
      </div>
    </>
  )
}

export default App

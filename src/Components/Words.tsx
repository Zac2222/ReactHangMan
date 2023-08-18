import { useEffect, useState } from "react"
import words from '../wordList.json'
import HangmanImage from "./HangmanImage"
import DisplayWord from "./DisplayWord"
import Letters from "./Letters"

const Words = () => {
    //sets a random word from the wordlist in the usestate
    const [wordGuess, setWordGuess] = useState(() => { 
        return words[Math.floor(Math.random() * words.length)]
    })
    const [gussedLetters, setGussedLetters] = useState<string[]>([]) //array of gussed letters

    const incorrectLetters = gussedLetters.filter(letter => !wordGuess.includes(letter)) //array of incorrect letters that are not in the current word

 
    function addGuessedLetter(letter: string) {
      if(gussedLetters.includes(letter))
      {
        return
      }
      else
      {
        setGussedLetters(currentLetters => [...currentLetters, letter])
      }
    }
  
    //use affect for the keyboard input
    useEffect(() => {
      const handler = (e: KeyboardEvent) => {
        const key = e.key
  
        if(!key.match(/^[a-z]$/)) //this is a new one i found, it checks if the key pressed is a letter in the array checking through a to z (i could be misunderstanding but i believe it just works as input validation or something?)
        {
          return
        }
        e.preventDefault()
        addGuessedLetter(key)
      }

      const clickHandler = (e: MouseEvent) => {
        const key = e.target
        if(key instanceof HTMLButtonElement)
        {
          addGuessedLetter(key.innerText)
        }
      }

      document.addEventListener('keydown', handler)
      document.addEventListener('click', clickHandler)
  
      return () => {
        document.removeEventListener('keydown', handler)
        document.removeEventListener('click', clickHandler)
      }
    }, [gussedLetters])

  return (
    <div className="textStyle">
        Lose
        Win
        <HangmanImage guessNumber={incorrectLetters.length}/> {/* tracks the incorrect letters, called here instead of app.tsx because of the guessNumber and incorrectletters variables */}
        <DisplayWord guessedLetters={gussedLetters} wordToGuess={wordGuess}/>  
    </div>
  )
}

export default Words

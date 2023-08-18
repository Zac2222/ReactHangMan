
const keys = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j' ,'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's' ,'t', 'u', 'v', 'w', 'x', 'y', 'z'];

interface LettersProps {
  activeLetters: string[];
  inactiveLetters: string[];
  addGuessedLetter: (letter: string) => void;
}

const Letters = ({activeLetters, inactiveLetters, addGuessedLetter}:LettersProps) => {
  return (
    <div className="keyboard">
        {keys.map(key => <button onClick={() => addGuessedLetter(key)} key={key} className="keyButtons" disabled={inactiveLetters.includes(key)}>{key}</button>)}
    </div>
  )
}

export default Letters

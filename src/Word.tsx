type WordProps = {
    guessedLetters: string[]
    wordToGuess: string
    reveal?: boolean
}


export default function Word({ guessedLetters, wordToGuess, reveal = false}:WordProps) {
    
  return (
    <div style={{ display: "flex", gap: ".6rem", fontSize: "6rem", fontWeight: "bold", textTransform: "uppercase", fontFamily:"monospace"}}>{wordToGuess.split("").map((letter, index) => (
        <span style={{borderBottom:".1em solid white"}}> 
            <span 
            style={{
                visibility: guessedLetters.includes(letter) || reveal
                ? "visible"
                : "hidden",
                color: !guessedLetters.includes(letter) && reveal ? "red" : "white"
            }}
        >
            {letter}
        </span>
        </span>
    ))}</div>
  )
}

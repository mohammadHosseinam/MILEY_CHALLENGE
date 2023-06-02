import { useState } from "react"
import { useContext, useEffect } from "react"
import { Words } from "./../../context"

function KeyButton({ childern }) {
  const { words, setWords } = useContext(Words)
  const clickButtonFunction = () => {
    if (words.currentWord.length === 4) {
      words.isRobotTurn = true
      const userWord = words.currentWord + childern
      if(words.secretWord === userWord) {
        words.gameStatuse = "finished"
        words.winner = "user"
      }
      setWords({ ...words, suggestedWords: [...words.suggestedWords, userWord], currentWord: "" })  
    } else setWords({ ...words, currentWord: words.currentWord + childern })
    console.log(childern)
  }
  const [bgColor, setBgColor] = useState("")

  useEffect(() => {
    if (words?.grayLetters?.includes(childern)) { setBgColor("bg-slate-600") }
    if (words?.yellowLetters?.includes(childern)) { setBgColor("bg-yellow-400") }
    if (words?.greenLetters?.includes(childern)) { setBgColor("bg-lime-400") }
  }, [words])

  return (
    <button disabled={words.isRobotTurn ? true : false} className={`text-yellow-50 py-2 px-1.5 ${bgColor || "bg-cyan-400"} m-1 rounded-md `} onClick={clickButtonFunction}>{childern}</button>
  )
}

export default KeyButton
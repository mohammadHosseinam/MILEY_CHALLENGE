import { useEffect, useState } from "react"
import { useContext } from "react"
import { Words } from "./../../context"

function Inputs({ word , isAccepted }) {
  const { words, setWords } = useContext(Words)
  let listOfLetters = []
  if (word) {
    listOfLetters = word.split("")
  }
  const [colorOfInputs, setColorOfInputs] = useState({
    "0": "",
    "1": "",
    "2": "",
    "3": "",
    "4": "",
  })

  const [singleInput, setSingleInput] = useState({
    "0": { color: "", text: "" },
    "1": { color: "", text: "" },
    "2": { color: "", text: "" },
    "3": { color: "", text: "" },
    "4": { color: "", text: "" },
  })
  useEffect(() => {
    if (isAccepted) {
      if (words.secretWord === word) {
        Object.keys(colorOfInputs).forEach((element) => {
          setColorOfInputs({ ...colorOfInputs, element: "bg-lime-400" })
          colorOfInputs[element] = "bg-lime-400"
        })
        words.greenLetters = words.secretWord.split("")
      } else {
        const lettersOfSecret = words.secretWord.split("")
        const lettersOfWord = word.split("")
        for (let i = 0; i < 5; i++) {
          const yellowState = lettersOfSecret.indexOf(lettersOfWord[i])
          if (lettersOfSecret[i] === lettersOfWord[i]) {
            colorOfInputs[+i] = "bg-lime-400"
            const dic ={}
            dic[`${i}`]= lettersOfSecret[i]
            words.locatedOfLetters = {}
            words.greenLetters.push(lettersOfWord[i])
            const array = {}
            array[`${i}`] = { color: "bg-lime-400", text: lettersOfWord[i] }
            setSingleInput({ ...singleInput, ...array })
          } else if (yellowState !== -1) {
            colorOfInputs[+i] = "bg-yellow-400"
            setColorOfInputs({ ...colorOfInputs, i: "bg-yellow-400" })
            words.yellowLetters.push(lettersOfWord[i])
            const array = {}
            array[`${i}`] = { color: "bg-lime-400", text: lettersOfWord[i] }
            setSingleInput({ ...singleInput, ...array })
          } else {
            words.grayLetters.push(lettersOfWord[i])
          }
        }
      }
    }
  }, [])
  // if (isAccepted) {
  //   if (words.secretWord === word) {
  //     Object.keys(colorOfInputs).forEach((element) => {
  //       setColorOfInputs({ ...colorOfInputs, element: "bg-lime-400" })
  //       colorOfInputs[element] = "bg-lime-400"
  //     })
  //     words.greenLetters = words.secretWord.split("")
  //   } else {
  //     const lettersOfSecret = words.secretWord.split("")
  //     const lettersOfWord = word.split("")
  //     for (let i = 0; i < 5; i++) {
  //       const yellowState = lettersOfSecret.indexOf(lettersOfWord[i])
  //       if (lettersOfSecret[i] === lettersOfWord[i]) {
  //         colorOfInputs[+i] = "bg-lime-400"
  //         const dic ={}
  //         dic[`${i}`]= lettersOfSecret[i]
  //         words.locatedOfLetters = {}
  //         words.greenLetters.push(lettersOfWord[i])
  //         const array = {}
  //         array[`${i}`] = { color: "bg-lime-400", text: lettersOfWord[i] }
  //         setSingleInput({ ...singleInput, ...array })
  //       } else if (yellowState !== -1) {
  //         colorOfInputs[+i] = "bg-yellow-400"
  //         setColorOfInputs({ ...colorOfInputs, i: "bg-yellow-400" })
  //         words.yellowLetters.push(lettersOfWord[i])
  //         const array = {}
  //         array[`${i}`] = { color: "bg-lime-400", text: lettersOfWord[i] }
  //         setSingleInput({ ...singleInput, ...array })
  //       } else {
  //         words.grayLetters.push(lettersOfWord[i])
  //       }
      
  return (
    <div className="bg-slate-200 p-3 flex gap-3 w-fit justify-center my-4">
      <button className={`${colorOfInputs['0'] || singleInput["0"].color || "bg-white"} w-10 h-12 text-black text-2xl font-semibold`}>{listOfLetters[0] || " "}</button>
      <button className={`${colorOfInputs['1'] || singleInput["1"].color || "bg-white"} w-10 h-12 text-black text-2xl font-semibold`}>{listOfLetters[1] || " "}</button>
      <button className={`${colorOfInputs['2'] || singleInput["2"].color || "bg-white"} w-10 h-12 text-black text-2xl font-semibold`}>{listOfLetters[2] || " "}</button>
      <button className={`${colorOfInputs['3'] || singleInput["3"].color || "bg-white"} w-10 h-12 text-black text-2xl font-semibold`}>{listOfLetters[3] || " "}</button>
      <button className={`${colorOfInputs['4'] || singleInput["4"].color || "bg-white"} w-10 h-12 text-black text-2xl font-semibold`}>{listOfLetters[4] || " "}</button>
    </div>
  )
}

export default Inputs
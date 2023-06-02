import Inputs from "./../../components/Inputs"
import Keyboard from "../../components/Keyboard"
import { useContext, useEffect, useState } from "react"
import { Words } from "../../context"
import robotFuction from "../../utilities/robotFuction"
import { Link } from "react-router-dom"

function Game() {
    const { setWords, words } = useContext(Words)
    const  [finish , setFinish]  = useState(false)
    
    useEffect(() => {
        robotFuction(words , setWords)
    }, [words])
    const suggestedWords = words.suggestedWords
    return (
        <div className="mx-10 flex flex-col items-center h-screen mt-2">
            <div style={{display : !words.gameStatuse ? "none" : "block" }}>
                <h3>game finishid</h3>
                winner is {words.winner} ,
                the secret was {words.secretWord}
                <div>
                    <button className="mr-4" onClick={()=>{setWords(
                        {
                            suggestedWords: [],
                            currentWord: "",
                            secretWord: secreteWord,
                            grayLetters: [],
                            yellowLetters: [],
                            greenLetters: [],
                            locatedOfLetters: {},
                            robotVocabulary: listOfWords,
                            isRobotTurn: false,
                            level: 3,
                            gameStatuse : "",
                            winner: "",
                          }
                    )}}>replay</button>
                    <Link className="underline" to="/">backHome</Link>
                </div>
            </div>
            <div className='bg-gray-100 w-96 grow flex flex-col items-center'>
                {suggestedWords && suggestedWords.map((element) => <Inputs className="mb-0" word={element} isAccepted={true} />)}
            </div>
            {suggestedWords && <Inputs className="" word={words.currentWord} isAccepted={false} />}
            <Keyboard />
        </div>
    )
}

export default Game

import { Link } from "react-router-dom"
import { useContext, useState } from "react"
import { Words } from "../../context"

function Home() {
    const { setWords, words } = useContext(Words)
    return (
        <div className="bg-white flex flex-col items-center justify-center w-screen h-screen">
            <h1 className="text-orange-500 text-2xl font-bold mb-7">MILEY CHALLENGE</h1>
            <div className="flex flex-col items-center gap-3">
                <h2>select level of robot :</h2>
                <div className="gap-5 flex">
                    <div>
                        <input type="radio" id="easy" name="easy" value={1} onClick={()=>{setWords({...words , level : 1})}}/>
                        <label for="easy">easy</label>
                    </div>
                    <div>
                        <input type="radio" id="medium" name="medium" value={2} onClick={()=>{setWords({...words , level : 2})}} />
                        <label for="medium">medium</label>
                    </div>
                    <div>
                        <input type="radio" id="hard" name="hard" value={2} onClick={()=>{setWords({...words , level : 3})}} />
                        <label for="hard">hard</label>
                    </div>
                </div>
                <div>
                    <Link className="bg-orange-400 text-white p-2 mt-8 rounded-lg" to="/game">paly</Link>
                </div>
            </div>
        </div>
    )
}

export default Home
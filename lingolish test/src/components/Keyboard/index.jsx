import KeyButton from "../KeyButton/index.jsx"

function Keyboard() {

    return (
        <div className="flex flex-col items-center mb-4">
            <div>
            <KeyButton childern="Q" />
            <KeyButton childern="W" />
            <KeyButton childern="E" />
            <KeyButton childern="R" />
            <KeyButton childern="T" />
            <KeyButton childern="Y" />
            <KeyButton childern="U" />
            <KeyButton childern="I" />
            <KeyButton childern="O" />
            <KeyButton childern="P" />
            </div>
            <div>
            <KeyButton childern="A" />
            <KeyButton childern="S" />
            <KeyButton childern="D" />
            <KeyButton childern="F" />
            <KeyButton childern="G" />
            <KeyButton childern="H" />
            <KeyButton childern="J" />
            <KeyButton childern="K" />
            <KeyButton childern="L" />
            </div>
            <div>
            <KeyButton childern="Z" />
            <KeyButton childern="X" />
            <KeyButton childern="C" />
            <KeyButton childern="V" />
            <KeyButton childern="B" />
            <KeyButton childern="N" />
            <KeyButton childern="M" />
            <KeyButton childern="<-" />

            </div>
        </div>
    )
}

export default Keyboard
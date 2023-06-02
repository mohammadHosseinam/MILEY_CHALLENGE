import { createContext, useState } from "react";

export const Words = createContext({
    words: {},
    setWords: () => { },
});

export default function ContextProvider({ children }) {
    const [words, setWords] = useState({})
    return <Words.Provider value={{ words, setWords }}>{children}</Words.Provider>
}
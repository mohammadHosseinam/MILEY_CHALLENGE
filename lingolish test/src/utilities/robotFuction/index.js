const robotFuction = (words ,setWords) => {
    if (!words.gameStatuse) {
        if (words.isRobotTurn) {
            let grayLetters = []
            let wordsToChoose = []
            let newList = []
            switch (words.level) {
                case 1:
                    //level easy
                    let robotDesiton = words.robotVocabulary[Math.floor(Math.random() * (words.robotVocabulary.length - 0 + 1) + 0)]
                    words.suggestedWords.push(robotDesiton)
                    if (robotDesiton === words.secretWord){
                        words.gameStatuse = "finished"
                        words.winner = "robot"
                    }
                    words.isRobotTurn = false
                    setWords({ ...words })
                    break;
                case 2:
                    //level regualr
                    grayLetters = new Set(words.grayLetters)
                    grayLetters.delete(undefined)
                    wordsToChoose = words.robotVocabulary
                    newList = wordsToChoose.filter(element => {
                        let isThere = false
                        Array.from(grayLetters).forEach((item) => {
                            if (element.includes(item)) {
                                isThere = true
                            }
                        })
                        return isThere === false
                    }
                    )
                    robotDesiton = newList[Math.floor(Math.random() * (newList.length - 0 + 1) + 0)]
                    words.suggestedWords.push(robotDesiton)
                    if (robotDesiton === words.secretWord){
                        words.gameStatuse = "finished"
                        words.winner = "robot"
                    }
                    words.isRobotTurn = false
                    words.robotVocabulary = newList
                    setWords({ ...words })
    
                    break;
                case 3:
                    //level hard
                    grayLetters = new Set(words.grayLetters)
                    grayLetters.delete(undefined)
                    wordsToChoose = words.robotVocabulary
                    newList = wordsToChoose.filter(element => {
                    let isThere = false
                    Array.from(grayLetters).forEach((item) => {
                        if (element.includes(item)) {
                            isThere = true
                        }
                    })
                    return isThere === false
                    }
                    )
                    console.log({ newList: newList.length, array: newList })
                    const yellowLeters = new Set(words.yellowLetters)
                    yellowLeters.delete(undefined)
                    const newList1 = newList.filter(element => {
                        let isThere = false
                        Array.from(yellowLeters).forEach((item) => {
                            if (element.includes(item)) {
                                isThere = true
                            }
                        })
                        return isThere === true
                    }
                    )
                    console.log({ newList1: newList1.length, array: newList1 })
                    if (words.greenLetters == []) {
                        const newList2 = newList1.filter((element) => {
                            let isOkey = false
                            const lettersOfElement = element.split("")
                            Object.keys(words.locatedOfLetters).forEach((item) => {
                                if (lettersOfElement[item] === words.locatedOfLetters[item]) {
                                    isOkey = true
                                }
                            })
                            return isOkey === true
                        })
                        console.log({ newList2: newList2.length, array: newList2 })
                        const randNum = Math.floor(Math.random() * (newList2.length + 1))
                        let robotDesiton = ""
                        if (newList1.length == 1) {
                            robotDesiton = newList2[0]
                        } else if (newList1.length == 0){
                            robotDesiton = newList[0]
                        } else {
                            robotDesiton = newList2[randNum]
                        }
                        words.suggestedWords.push(robotDesiton)
                        if (robotDesiton === words.secretWord){
                            words.gameStatuse = "finished"
                            words.winner = "robot"
                        }
                        words.isRobotTurn = false
                        words.robotVocabulary = newList2
                        setWords({ ...words })
                    } else {
                        const randNum = Math.floor(Math.random() * (newList1.length + 1))
                        let robotDesiton = ""
                        if (newList1.length == 1) {
                            robotDesiton = newList1[0]
                        } else if (newList1.length == 0) {
                            robotDesiton = newList[0]
                        }else {
                            robotDesiton = newList1[randNum]
                        }
                        words.suggestedWords.push(robotDesiton)
                        if (robotDesiton === words.secretWord){
                            words.gameStatuse = "finished"
                            words.winner = "robot"
                        }
                        words.isRobotTurn = false
                        words.robotVocabulary = newList1
                        setWords({ ...words })
                    }
                    break;
            }
        }
    }
    
}
export default robotFuction
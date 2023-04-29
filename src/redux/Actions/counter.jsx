let countCharacters = (count)=>{
    return{
        type: "COUNT_CHARACTERS",
        payload: count
    }
}

let countWords = (count)=>{
    return{
        type: "COUNT_WORDS",
        payload: count
    }
}
let countSentences = (count)=>{
    return{
        type: "COUNT_SENTENCES",
        payload: count
    }
}

let countParagraph = (count)=>{
    return{
        type: "COUNT_PARAGRAPHS",
        payload: count
    }
}

let countPronouns = (count)=>{
    return{
        type: "COUNT_PRONOUNS",
        payload: count
    }
}

let avgReadingTime = (count)=>{
    return{
        type: "COUNT_ART",
        payload: count
    }
}

let longestWord = (count)=>{
    return{
        type: "LONGEST_WORD",
        payload: count
    }
}


export {countCharacters, countWords, countSentences, countParagraph, countPronouns,avgReadingTime, longestWord}
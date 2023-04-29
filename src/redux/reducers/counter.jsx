

let initial_state = {
    countCharacters: 0,
    countWords: 0,
    countSentences: 0,
    countParagraphs: 0,
    countPronouns: 0,
    ART: "",
    longestWord: ''
}

let counterReducer = (state= initial_state, actions)=>{
    switch(actions.type){
        case 'COUNT_CHARACTERS':
            return {
                ...state,
                countCharacters: actions.payload
            }

        case 'COUNT_WORDS':
            return {
                ...state,
                countWords: actions.payload
            }

            case 'COUNT_SENTENCES':
                return {
                    ...state,
                    countSentences: actions.payload
                }
                case 'COUNT_PARAGRAPHS':
                    return {
                        ...state,
                        countParagraphs: actions.payload
                    }
                    case 'COUNT_PRONOUNS':
                        return {
                            ...state,
                            countPronouns: actions.payload
                        }
                    case 'COUNT_ART':
                            return {
                                ...state,
                                ART: actions.payload
                            }

                      case 'LONGEST_WORD':
                                return {
                                    ...state,
                                    longestWord: actions.payload
                                }
            default:
                return state
    }
}

export {counterReducer}
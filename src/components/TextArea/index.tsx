import './index.scss'
import { useDispatch } from 'react-redux/es/exports';
import { avgReadingTime, countCharacters, countParagraph, countPronouns, countSentences, countWords, longestWord } from '../../redux/Actions/counter';
import { pronouns } from '../../data/pronouns';

const TextArea = () => {
  const dispatch = useDispatch();
  let handleInput= (e: any) =>{
    let inputValue = e.target.value
    let Wordscount = inputValue.trim() === '' ? 0 : inputValue.split(" ").length
    const stop = /[.!?]/;
    const sentenceCount = inputValue.split(stop).length -1;
    const Characterscount = e.target.value.length
    const paragraphCount = inputValue.trim() === '' ? 0 : inputValue.replace(/\n$/gm, '').split(/\n/).length;
    console.log("parag:", paragraphCount)
    const pronounsCount = pronounsCounter(inputValue)
    const largestWord= FindlargestWord(inputValue)
    const averagReadingTime= averageReadingTime(Wordscount)
    
    dispatch(countCharacters(Characterscount))
    dispatch(countWords(Wordscount))
    dispatch(countSentences(sentenceCount))
    dispatch(countParagraph(paragraphCount))
    dispatch(countPronouns(pronounsCount))
    dispatch(avgReadingTime(averagReadingTime))
    dispatch(longestWord(largestWord))
  }

  const averageReadingTime = (wordscount: any)=>{
    let wpm = 225
    let calculation= Math.ceil(wordscount/wpm)
    if(calculation === 0){
      return ''
    }else{
      return `~${calculation} minute`
    }
  }

  const pronounsCounter=(inputValue: any)=>{
    const stop = /[.!?" "\n]/;
    const text= inputValue.toLowerCase().split(stop)
    
    let pronounsCount=text.filter((currentElem: any)=>{ 
        return pronouns.includes(currentElem)
      })
    return pronounsCount.length
  }
  const FindlargestWord = (inputValue: any)=>{
    const stop = /[.!?" "\n]/;
    let textLengths = inputValue.split(stop)
    let largestWord= ''
   let maxLength= textLengths[0].length;
    for(let i=0;i<textLengths.length;i++){
     
     if(textLengths[i].length>maxLength){
      largestWord = textLengths[i]
      maxLength= textLengths[i].length
     }
    }
    return largestWord
  }
  return <textarea className="text-area" onChange={(e)=>handleInput(e)} placeholder="Paste your text here..." autoFocus/>
}

export default TextArea

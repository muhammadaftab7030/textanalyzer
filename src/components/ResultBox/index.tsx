import './index.scss'
import { useSelector } from 'react-redux/es/hooks/useSelector'

const ResultBox = () => {
  const storeCounter  = useSelector((state: any)=> state.counter)
  const countCharacters = storeCounter.countCharacters
  const countWords= storeCounter.countWords
  const countSentences= storeCounter.countSentences
  const countParagraphs = storeCounter.countParagraphs
  const countPronouns = storeCounter.countPronouns
  const resultBar = [
    {
      title: 'Words',
      value: 0,
    },
    {
      title: 'Characters',
      value: 0,
    },
    {
      title: 'Sentences',
      value: 0,
    },
    {
      title: 'Paragraphs',
      value: 0,
    },
    {
      title: 'Pronouns',
      value: 0,
    },
  ]
  resultBar.filter((currentElem)=>{
    if(currentElem.title === "Characters"){
      return currentElem.value = countCharacters
    }
    if(currentElem.title === "Words"){
      return currentElem.value = countWords
    }
    if(currentElem.title === "Sentences"){
      return currentElem.value = countSentences
    }
    if(currentElem.title === "Paragraphs"){
      return currentElem.value = countParagraphs
    }
    if(currentElem.title === "Pronouns"){
      return currentElem.value = countPronouns
    }
    
  })
  return (
    <div className="result-bar">
      {resultBar.map(({ title, value }) => (
        <div className="result-box" key={title}>
          <span className="box-title">{title}</span>
          <span className="box-value">{value}</span>
        </div>
      ))}
    </div>
  )
}

export default ResultBox

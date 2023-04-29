import './index.scss'
import { useSelector } from 'react-redux/es/hooks/useSelector'
const BottomResultBox = () => {
  const storeCounter  = useSelector((state: any)=> state.counter)
  const ART = storeCounter.ART
  console.log("art is", ART)
  const longestWord = storeCounter.longestWord
  const bottomResultBar = [
    {
      title: 'Average Reading Time:',
      value: '-',
    },
    {
      title: 'Longest word:',
      value: '-',
    },
  ]
  bottomResultBar.filter((currentElem)=>{
    if(currentElem.title === "Average Reading Time:"){
      return currentElem.value = ART
    }
    if(currentElem.title === "Longest word:"){
      return currentElem.value = longestWord
    }
  })
  return (
    <div className="bottom-result-bar">
      {bottomResultBar.map(({ title, value }) => (
        <div className="result-box" key={title}>
          <span className="box-title">{title}</span>
          <span className="box-value">{value}</span>
        </div>
      ))}
    </div>
  )
}

export default BottomResultBox

import React, { useState, useEffect, useCallback } from 'react'
import { getFakeData1, getFakeData2 } from '../fakeRequest'

function  Input({inputValue,onChangeInputValue}) {
const [inputValueInComponent, setInputValueInComponent] = useState("")
const [firstNameWithId, setFirstNameWithId] = useState([])
const [lastNameWithId, setlastNameWithId] = useState([])
const [dataV,setDataV]=useState([])
const [view, setView] = useState([])

useEffect(async() => {
    setFirstNameWithId(await getFakeData1())
    setlastNameWithId(await getFakeData2())
}, [])

let data=[]
  for(let i in firstNameWithId){
  for(let j in lastNameWithId){
    if(firstNameWithId[i].id===lastNameWithId[j].id){
      data.push(`${firstNameWithId[i].firstName} ${lastNameWithId[j].lastName}`)
    }
  }
}
useEffect(() => {
  if(inputValue!==inputValueInComponent){
    setInputValueInComponent(inputValue)
  }
}, [inputValue])

const filterData=useCallback(()=>data.filter(e=>e.includes(inputValue)))
useEffect(() => {
  setView(filterData())
}, [inputValue])

  return (
    <div>
      <input
        onChange={e => onChangeInputValue(e.target.value)}
        value={inputValueInComponent}
      />
      <div>
        {inputValue.length>0&&view.map(e=><p key={e}>{e}</p>)}
      </div>
      
    </div>
  )
}

export default Input

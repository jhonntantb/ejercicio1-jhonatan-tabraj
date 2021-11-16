import React, { useState } from 'react'
import Input from '../Input/index'
import logo from '../resources/logo512.png'
import "./index.css"
function App() {
const [inputValue, setInputValue] = useState("")
const onChangeInputValue=(value)=>{
  setInputValue(value)
}
  return (
    <div className="image">
    <div>
      <Input
            inputValue={inputValue}
            onChangeInputValue={onChangeInputValue}
          />
    </div>

    </div>
  )
}

export default App

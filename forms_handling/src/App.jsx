import React, { useState } from 'react'
import './index.css'
const App = () => {
    const[title, setTitle]=useState('');

    const formsHandling=(e)=>{
      e.preventDefault();
      console.log("form submitted successfully by", title)
      // alert("done")
      setTitle('')

    }

  return (
    <>
      <div className="formaa">
        <form onSubmit={(e)=>{
          formsHandling(e)
        }}>
        <input 
        type="text" 
        placeholder='Enter your name..'
        value={title}
        onChange={(e)=>{
          setTitle(e.target.value);
        }}
        />
        <button>Submit</button>
        </form>
      </div>
    </>
  )
}

export default App
import React from 'react'
import { useState } from 'react'
import axios from 'axios'

const App = () => {

  const [joke, setJoke] = useState('')
    const apiTest= async ()=>{
          // const resp= await fetch("https://official-joke-api.appspot.com/jokes/programming/random");
          // console.log(resp);
          // const data= await resp.json();
          // console.log(data);
          // setJoke(data[0]);

          const resp= await axios.get("https://official-joke-api.appspot.com/jokes/programming/random");
          console.log(resp.data[0])
          setJoke(resp.data[0]);
          
    }

  return (
    <>
      <div>
        <button onClick={apiTest}>Get Joke</button>
        <h3>{joke.punchline}</h3>
        <p>{joke.setup}</p>
      </div>
    </>
  )
}

export default App
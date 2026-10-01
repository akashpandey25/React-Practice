import React from 'react'
import { useState } from 'react'

const App = () => {
    const[count, setCount]=useState([10,20,30,40]);
    const[user, setUser]=useState({name:'Akash', age:24});


    const getCountInc=()=>{
        const newVal=([...count]);
        console.log(newVal);
        newVal.push(50);
        setCount(newVal)
        console.log(newVal);
    }

    // const getCountInc=()=>{
    //     setCount(count+1)
    // }
    const getCountDnc=()=>{
        // setCount(count-1)
        const newVal=({...user});
        console.log(newVal)
        // newVal.name='sanajit'
        // newVal.age=67
        // setUser(newVal);
        setUser(prev=>({...prev, age:40}))
        console.log(user)

    }

  return (
    <>
        <input type="text" placeholder={count} className='p-3 m-1 bg-amber-300 rounded-2xl justify-center align-middle items-center'/>
        <div className="btn flex" >
            <button  onClick={getCountInc} className='bg-amber-950 rounded-4xl p-2 hover:bg-amber-100 m-1 gap-1 text-blue-800 '
            >Click me for growth</button>
            <button onClick={getCountDnc} className='bg-cyan-400 rounded-4xl p-2 hover:bg-cyan-100 text-amber-400 m-1 gap-1'
            >Click me for downfall</button>
        </div>
        

    </>
  )
}

export default App
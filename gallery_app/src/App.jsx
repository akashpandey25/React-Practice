import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Navbar from './components/Navbar';


const App = () => {

  const [userData, setUserData] = useState([]);
  const [index, setIndex] = useState(1);

  const apiPrac= async ()=>{
    const resp= await axios.get(`https://picsum.photos/v2/list?page=${index}&limit=15`);
    setUserData(resp.data);
  }

  useEffect(()=>{
    apiPrac()
  },[index])


  let printUser= <h4 className='text-4xl absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>LOADING....</h4>
  if(userData.length>0){
    printUser=userData.map((elem, idx)=>{
      return (
        <div key={idx}>
          <img src={elem.download_url} className='w-70 h-65 rounded-2xl' alt="" />
          <h4 className='text-amber-50 text-lg font-semibold'>{elem.author}</h4>
        </div>
      )
    })
  }



  return (
   <>
    <div className='bg-black h-screen p-4 overflow-auto'>
      <Navbar page={index}/>
      {/* <button  onClick={apiPrac} className="rounded-full bg-amber-700 p-3 m-5 text-amber-50">Get data</button> */}
       <div className='flex flex-wrap gap-4 justify-center align-middle text-amber-50'>
        {printUser}
      </div>
      <div className=' fixed bottom-2 left-0 right-0  flex  flex-wrap  text-black gap-7 m-1 justify-center'>
        <button onClick={()=>{
          if(index>1){
            setIndex(index-1);
          }
        }}
         className='rounded-lg bg-amber-400 p-2 align-middle justify-center active:scale-95'>
          Prev</button>
        <button onClick={()=>{
          setIndex(index+1)
        }}
         className='rounded-lg bg-amber-400 p-2 align-middle justify-center active:scale-95'>Next</button>
      </div>
    </div>
   
   </>
  )
}

export default App
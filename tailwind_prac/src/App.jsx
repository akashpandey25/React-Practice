import React from 'react'

const App = () => {
  const handleClick = () => {
    alert('Button clicked!');
    console.log('Button clicked!');
  };

  const findInput=(props) => {
    // const inputElement = document.querySelector('input');
    // if (inputElement) {
    //   console.log('Input value:', inputElement.value);
    // } else {
    //   console.log('Input element not found.');
    // }
    console.log(props)
  };
  return (
    <>
    <div className="bg-red-800 text-gray-800">
      
      <button onClick={handleClick} onMouseEnter={(e) => (e.target.className = "bg-blue-700")} onMouseLeave={(e) => (e.target.className = "bg-blue-500")}>
        Click Me
      </button>

      <input onChange={(val)=>{
        console.log(val)
        findInput(val.target.attributes.length)
      }} type="text" placeholder="Enter text here..." className="bg-white p-1 m-1 text-gray-800 placeholder:text-gray-500 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500" />
      
    </div>
    <div className="box" style={{ width: '300px', height: '300px', backgroundColor: 'lightgray', margin: '50px' }} 
      onMouseMove={(elem)=>{
        console.log(elem.clientX)
      }}
      >Heloow</div>

      </>
    
  )
}

export default App
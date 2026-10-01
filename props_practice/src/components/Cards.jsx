import React from 'react'
import '../index.css'
import { FcBookmark } from "react-icons/fc";
const Cards = (props) => {
  return (
    <div className="card">
      <div className="top">
        <img src={props.image} alt="image" />
        <span>Save  <FcBookmark className='bookmark'/></span>  
      </div>
      <div className="content">
        <h1>{props.name}</h1>
        <span>{props.designation}</span>
        <p>{props.description}</p>
      </div>
      <div className="bottom">
        <button>View Profile</button>
      </div>
       
    </div>
  )
}

export default Cards
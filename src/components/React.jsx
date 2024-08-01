import React, { useState,useRef } from 'react';
import '../index.css'

export default function Recap() {
  const playerName = useRef();
  const [Name,setName]= useState(null);
  
    function handleSubmit(){
      setName(playerName.current.value);

  
    }
    return (
      <section className="top">
        <h3>{Name??"See Change"}</h3>
        <p>
          <input type="text" ref = {playerName}/>
            <br/>
          <button onClick={handleSubmit}>
            Set Name
          </button>
        </p>
      </section>
    );
}

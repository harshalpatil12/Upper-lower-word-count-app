
import React, { useState } from 'react';
export default function Textbar(props){
    const handleUpClick = ()=>{
      console.log("uppercase was clicked" + text);
      let newText = text.toUpperCase();
      setText(newText)
    }
    const handlelowerClick = ()=>{
      console.log("lowercase was clicked" + text);
      let newText = text.toLowerCase();
      setText(newText)
    }
   
    const handleOnChange = (event)=>{
      console.log("On change");
      setText(event.target.value)
    }
    
    const [text, setText] = useState("Enter Text here2");
    return (  
      <> 
        <div className="form-control my-9">
        <textarea className="form-control" value={text} onChange={handleOnChange} placeholder="Leave a comment here" id="floatingTextarea"></textarea>
        <label htmlFor="floatingTextarea">{props.Comments}</label>
        
        <button type="button" onClick={handleUpClick} className="btn btn-primary my-3 mx-3">uppercase</button>
        <button type="button" onClick={handlelowerClick} className="btn btn-primary">lowercase</button>
     
      </div>
      <div className="container my-3">
        <h3>Your Text Summery</h3>
        <p>{text.split(" ").length} words and {text.length} characters</p>
        <p>{0.008 * text.split(" ").length} Minuts read </p>
        <h3> Preview </h3>
        <p>{text}</p>
        </div>
      </>
    
    );
  }

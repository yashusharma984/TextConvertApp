import React, {useState} from 'react'

export default function Textform(props) {

    const handleUpclick =()=>{
        // console.log("Uppercase was Clicked" +text);
        let newText = text.toUpperCase();
        setText(newText);
    }
    const handlelowclick =()=>{
        // console.log("lowercase was Clicked" +text);
        let newText = text.toLowerCase();
        setText(newText);
    }
    const handleOnChange=(event)=>{
        console.log("On change");
        setText(event.target.value);
    }
    const [text , setText] = useState('Enter text here');
    // text = "new text"; wrong way to change the state write way is use setText = "new text";
     return (
          <>
      <div className="container">
      <h1>{props.heading}</h1>
<div className="mb-3">
  <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
</div>
<button className="btn btn-primary mx-2" onClick={handleUpclick}>Convert To upperCase</button>
<button className="btn btn-primary mx-2" onClick={handlelowclick}>Convert To LowerCase</button>
    </div>
  <div className="container my-3">
    <h1> Your Summary</h1>
    <p> {text.split(" ").length} words {text.length} characters</p>
   <p>{0.008 * text.split(" ").length} Minutes Read</p>
   <h2>Preview</h2>
   <p>{text}</p>

  </div>
    </>
  )
}

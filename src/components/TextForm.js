import React, {useState} from 'react'


export default function TextForm(props) {

    const handleOnChange = (event)=>{
        console.log("Changed");
        setText(event.target.value)
    }
    const handleUpClick = ()=>{
        console.log("Clicked Upper");
        let newText = text.toUpperCase();
        setText(newText);
    }
    const handleLowClick = ()=>{
        console.log("Clicked Lower");
        let newText = text.toLowerCase();
        setText(newText);
    }
    const handleCopyClick = ()=>{
        console.log('Clicked copy');
        navigator.clipboard.writeText(text);
    }
    const handleClearClick = ()=>{
        console.log("Clicked Clear");
        setText("");
    }
    const [text, setText] = useState('');

    return (
        <>
        <div>
            <div className="mb-3">
                <label htmlFor="exampleFormControlTextarea1" className="form-label">{props.heading}</label>
                <textarea className="form-control" value = {text} onChange = {handleOnChange} id="myBox" rows="7" placeholder="Enter text here"></textarea>
            </div>
            <button type="submit" className="btn btn-primary mx-1" onClick={handleUpClick}>Uppercase</button>
            <button type="submit" className="btn btn-primary mx-1" onClick={handleLowClick}>Lowercase</button>
            <button type="submit" className="btn btn-primary mx-1" onClick={handleCopyClick}>Copy</button>
            <button type="submit" className="btn btn-primary mx-1" onClick={handleClearClick}>Clear</button>
        </div>
        <div className='container my-3'>
            <h1>Your text summary</h1>
            <p>{text.split(" ").length} words, {text.length} characters</p>
        </div>
        </>
    )
}

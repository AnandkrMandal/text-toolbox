import React, { useState } from 'react'


export default function Textarea(props) {
    const convert = () => {
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlart("Converted to upperCase", "success");
    }
    const convertlow = () => {
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlart("Converted to lowerCase", "success");

    }
    const ToSpeach = () => {
        const msg = new SpeechSynthesisUtterance();
        msg.text = text;
        window.speechSynthesis.speak(msg);
        props.showAlart("Text to Speach Enabled", "success");
       
    }

    const Extraspace = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlart("Extra Space Removed", "success")

    }
    const readText = (event)=>{
        let file = event.target.files[0];
        let reader = new FileReader();
        reader.onload = function(event){
            setText(event.target.result);
        };
        reader.readAsText(file);
    }

    const cleartext = () => {
        let newText = ("");
        setText(newText);
        props.showAlart("Cleared all Text", "success");
    }


    const change = (event) => {
        setText(event.target.value)
    }
    

    //set default text
    const [text, setText] = useState("")
    return (
        <><div >
            <div className="mb-3" style={{color: props.mode === 'dark'?'white':'#042743'}}>
                <h2 style={{fontFamily:'Domine'}}>Write Your Paragraph</h2>
                <textarea className="form-control" id="mybox" style={{backgroundColor: props.mode === 'dark' ? ' #848482':'#dee4e5cf',
                 color: props.mode === 'dark'?'white':'#042743'}} onChange={change} value={text} rows="3"></textarea>
            </div>
        </div>
            <button disabled ={text.length ===0} className="btn btn-primary mx-1" onClick={convert}>Convert To Upper</button>
            <button disabled ={text.length ===0} className="btn btn-primary mx-1" onClick={convertlow}>Convert To Lower</button>
            <button disabled ={text.length ===0} className="btn btn-primary mx-1" onClick={ToSpeach}>Speak Text</button>
            <button disabled ={text.length ===0} className="btn btn-primary mx-1" onClick={Extraspace}>Remove Extra Space</button>
            <input type="file" className='btn btn-info mx-1 ' accept="text/plain"  onChange={readText}/>
            <button disabled ={text.length ===0} className="btn btn-success mx-1 my-2 "   onClick={ () => {navigator.clipboard.writeText(text)} }>copy Text</button>
            <button disabled ={text.length ===0} className="btn btn-danger mx-1"  onClick={cleartext}>Clear</button>
            <div className="summary md-5" style={{color: props.mode === 'dark' ?'white':'#042743'}}>
                <h3 className='summary'>Your Text Summary</h3>
                <p>{text.split(/\s+/).filter((element) => {return element.length!== 0}).length} Words and {text.length} characters</p>
                <p>{0.008 * text.split(/\s+/).filter((element) => {return element.length!== 0}).length} Minutes Read</p>
                <h3>Privew</h3>
                <div className= 'about' ><p>{text.length>0?text:"Nothing to preview it!"}</p></div>
            </div>
        </>
    )
}

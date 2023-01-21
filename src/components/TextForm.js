import React,{useState} from 'react'

export default function TextForm(props) {
    const [text, setText]=useState("")

    const handleUpClick =()=>{
        // console.log("uppercase Clicked"+text);
        let newText=text.toUpperCase();
        setText(newText);
        props.showAlert("Text convert into uppercase","success");
    }

    const handleLowClick =()=>{
        // console.log("uppercase Clicked"+text);
        let newText=text.toLowerCase();
        setText(newText);
        props.showAlert("Text convert into lowercase","success")

    }

    const handleOnChange =(event)=>{
        // console.log("Changed")
        setText(event.target.value);

    }

    const handleClearClick =()=>{
        let newText="";
        setText(newText);
        props.showAlert("Text box is clear","success")

    }

    // const handleSentenceClick =()=>{
    //     let newText= text.toLowerCase().split(' ')
    //     .map((sentences) => sentences.charAt(0).toUpperCase() + sentences.slice(1)).join(' ');
    //     setText(newText);
    // }

    const handleDownloadClick =()=>{
        // file object
            const file = new Blob([text], {type: 'text/plain'});
        // anchor link
            const element = document.createElement("a");
            element.href = URL.createObjectURL(file);
            element.download = "text" + Date.now() + ".txt";
        // simulate link click
            document.body.appendChild(element); // Required for this to work in FireFox
            element.click();
            props.showAlert("Text file is download","success")

        }
    
  return (
<>
    <div className='container' style={{color:props.mode ==='dark'?'white':'#042743'}}>
    <h1>{props.heading}</h1>
    <div className="mb-3">
    <textarea className="form-control" value={text} style={{backgroundColor:props.mode ==='dark'?'grey':'white',color:props.mode ==='dark'?'white':'#042743'}} onChange={handleOnChange} id="myBox" rows="8"></textarea>
    </div>
    <button className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>Convert to Uppercase</button>
    <button className="btn btn-primary mx-1 my-1" onClick={handleLowClick}>Convert to Lowercase</button>
    {/* <button className="btn btn-primary mx-1" onClick={handleSentenceClick}>Convert Sentence</button> */}
    <button className="btn btn-primary mx-1 my-1" onClick={handleClearClick}>Clear Text</button>
    <button className="btn btn-primary mx-1 my-1" onClick={handleDownloadClick}>Download Text</button>


    </div>
    <div className="container my-3" style={{color:props.mode ==='dark'?'white':'#042743'}}>
        <h2>Your text sammary</h2>
        <p>{text.split(" ").filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
        <p>{(text.split('.').length)-1} sentences</p>
        <p><b>{0.008 * text.split(" ").length } </b>Minutes to read</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Enter some text in above box to preview"}</p>

    </div>
    </>
  )
}

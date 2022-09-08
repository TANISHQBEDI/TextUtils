import React,{useState} from 'react'

export default function Textform(props) 
{
  document.title='TextUtils Home'
    const [text,setText]=useState('Enter text here');
    // const [myStyle,setMyStyle]=useState({
    //   color:'black',
    //   backgroundColor:'white'
    // })
    // const [btnText,setBtnText]=useState("Enable Dark Mode")
    
    const handleUpClick=()=>{
        console.log("upper case tranformation initiated")
        setText(text.toUpperCase())
        props.alert("Converted to upper case","success")
    }
    const handleLoClick=()=>{
      console.log("lower case transformation initiated")
      setText(text.toLowerCase())
      props.alert("Converted to lower case","success")
    }
    const handleTrClick=()=>{
      // \s: matches any whitespace symbol: spaces, tabs, and line breaks
      // +: match one or more of the preceding tokens (referencing \s)
      // g: the g at the end indicates iterative searching throughout the full string
      let str=text.replace(/\s+/g,' ').trim();
      console.log("trim initiated")
      setText(str)
      props.alert("Trimmed text","success")
    }
    const handleClearClick=()=>{
      setText("")
      props.alert("Cleared text","success")
    }

    // const handleStyle=()=>{
    //   if(myStyle.color==="black")
    //   {
    //     setMyStyle({
    //       color:'white',
    //       backgroundColor:'black',
    //       // borderRadius:'10px'
    //     })
    //     setBtnText("Enable Light Mode")
    //   }
    //   else{
    //     setMyStyle({
    //       color:'black',
    //       backgroundColor:'white'
    //     })
    //     setBtnText("Enable Dark Mode")
    //   }
    //   }
    

    const handleOnChange=(event)=>{
        console.log("on change")
        setText(event.target.value)
    }
    
    let len
    if(text==="")
    {
      len=0
    }
    else
    {
      len=text.split(" ").length
    }
  
    return (

    <>
      <div className={`container bg-${props.mode}`} /*style={myStyle}*/> 
        <h1 className={`text-${props.mode==='light'?'dark':'light'}`}>{props.heading}</h1>
        <div className="mb-3">
            <textarea className={`form-control bg-${props.mode==='light'?'dark':'light'} text-${props.mode} border-0`} style={{resize:'none'}} id="myBox" onChange={handleOnChange} rows="8" value={text}></textarea>
        </div>    
        <button className={`btn btn-${props.mode==='light'?'dark':'light'} mx-1 text-${props.txtcol}`} onClick={handleUpClick}>Convert to UpperCase</button>
        <button className={`btn btn-${props.mode==='light'?'dark':'light'} mx-1 text-${props.txtcol}`} onClick={handleLoClick}>Convert to LowerCase</button>
        <button className={`btn btn-${props.mode==='light'?'dark':'light'} mx-1 text-${props.txtcol}`} onClick={handleTrClick}>Remove extra spaces in the text</button>
        <button className={`btn btn-${props.mode==='light'?'dark':'light'} mx-1 text-${props.txtcol}`} onClick={handleClearClick}>Remove text</button>
      </div>
      <div className={`container my-3 bg-${props.mode} text-${props.mode==='light'?'dark':'light'}`} /*style={myStyle}*/>
        <h1>Your text summary</h1>
        <p>{len} words and {text.length} characters</p>
        <p>{0.008*text.split(" ").length} minutes required to read.</p>
        <h2>Preview Text</h2>
        <p>{text.length>0?text:"Enter something to preview it here"}</p>
      </div>
      {/* <div className="container">
        <button className="btn btn-primary mx-1" style={myStyle} onClick={handleStyle}>{btnText}</button>
      </div> */}
    </>
  )
}



export default function About(props) {

    //  const [myStyle,setMyStyle] =useState(
    //     {
    //     color: "black",
    //     backgroundColor :'white'
    // }
    //  )

    //  const [btnText,setBtnText] =useState("Enable dark mode");


    //  const toggleStyle = () =>{
    //     if (myStyle.color === 'white') {
    //         setMyStyle({
    //         color: 'black',
    //         backgroundColor :'white'
    //     }) 
    //        setBtnText("Enable dark mode")
    //     }
        
    //  else{
    //     setMyStyle({
    //     color: 'white',
    //     backgroundColor :'black',
    //     border :'1px solid white'
    // } ) 
    //    setBtnText("Enable light mode")

    //      } 
    // } 
    let myStyle={
        color:props.mode==="dark"?"white":"black",
        backgroundColor:props.mode==="dark"?"rgb(17 31 60)":"white"
    }
  return (
        <div className='container'>
        <h1 className='my-3'  style={{color:props.mode==="dark"?"white":"black"}}>About us</h1>
        <div className="accordion" id="accordionExample" >
        <div className="accordion-item">
        <h2 className="accordion-header" id="headingOne">
        <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne" style={myStyle}>
            <strong>TextUtils  #1type</strong> 
        </button>
        </h2>
        <div id="collapseOne"  className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
        <div className="accordion-body" style={myStyle}>
        TextUtils covert your text from lowecase to uppercase ,uppercase to lowecase and you also download the .txt file of your text.        </div>
        </div>
    </div>
    <div className="accordion-item">
        <h2 className="accordion-header" id="headingTwo">
        <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
        <strong>Free use #2</strong>
        </button>
        </h2>
        <div id="collapseTwo"   className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
        <div className="accordion-body" style={myStyle} >
                  You can use this website without any subscription.
        </div>
        </div>
    </div>
    <div className="accordion-item" >
        <h2 className="accordion-header" id="headingThree" >
        <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
           <strong>Develop by #3</strong>  
        </button>
        </h2>
        <div id="collapseThree"  className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
        <div className="accordion-body" style={myStyle}>
        <strong>Muhammad Shaoib & Muhammad Ibraheem </strong> 
        </div>
        </div>
    </div>
    </div>
    {/* <div className="container my-3">
    <button onClick={toggleStyle} type="button" className="btn btn-primary">{btnText}</button>
    </div> */}
        </div>
  )
}

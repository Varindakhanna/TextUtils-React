import React , {useState} from 'react'

export default function TextForm(props)
 {
  let counting=0;
  let counting2= 0;
  let i;

    // let name = "I love  you";
    // let arrName = name.split(" ");
    // console.log(arrName); // ["I", "Love", " ", "youu"]
     const handleUpClick =()=>
     {
        //  console.log("uppercase is clicked" );
         let newText = text.toUpperCase();
         setText(newText);
         props.showAlert("Converted to uppercase","success");
         
     }

     const handleLoClick =()=>
     {
        //  console.log("uppercase is clicked" );
         let newText = text.toLowerCase();
         setText(newText);
         props.showAlert("Converted to lowercase","success");
     }

     
     const handleClearAllClick =()=>
     {
        //  console.log("uppercase is clicked" );
         let newText = ' ';
         setText(newText);
         props.showAlert("Cleared!!","success");
     }

     const handleCopy =()=>
     {
       var text=document.getElementById("myBox");
       text.select();
       navigator.clipboard.writeText(text.value);
       props.showAlert("Copied to clipboard","success");

     }

     const handleRemove_extra =()=>
     {
       let newText = text.split(/[ ]+/);
       setText(newText.join(" "));
       props.showAlert("Extra spaces removed","success");
     }
     
     
     const handleOnChange =(event)=>
     {
     
      //let count=0;

       // console.log("on change");
         let arr= event.target.value.split(" ");
        
         for(i=0;i<arr.length-1;i++)
         {
         //  console.log("for loop");
          
           if(arr[i]!=='')
           {
            counting++;
           
             counting2+=arr[i].length;

            // console.log("count called " + counting);
             
           }
           
         }
       
         setText(event.target.value);
      setCount(counting);
      setCount2(counting2);

     }

    
    //  using state 
     const [text , setText] =useState(' ');
     const [count , setCount] =useState(0);
     const [count2 , setCount2] =useState(0);
     

     

  return (
    <>
    <div className="container" style={{color: props.mode==='dark'?'white':'black'}}>
        <h1>{props.heading}</h1>
    <div className="mb-3">
  {/* <label for="myBox" class="form-label">Example textarea</label> */}
  <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'grey':'white' , color :props.mode==='dark'?'white':'black' }} id="myBox" rows="8" ></textarea>
</div>

  <button className="btn btn-primary mx-3" onClick={handleUpClick}>Convert to uppercase</button>
  <button className="btn btn-primary mx-3" onClick={handleLoClick}>Convert to lowercase</button>
  <button className="btn btn-primary mx-3" onClick={handleClearAllClick}>Clear all</button>
  <button className="btn btn-primary mx-3" onClick={handleCopy}>Copy Text</button>
  <button className="btn btn-primary mx-3" onClick={handleRemove_extra}>Remove extra spaces</button>
  
      
    </div>

    <div className="container my-3" style={{color: props.mode==='dark'?'white':'black'}} >
      <h1>Your Text Summary</h1>

      <p>{count} words {count2} letters</p>
      <p>{0.008*text.split(" ").length} Minutes to read the above text</p>
      <h2>Preview</h2>
      <p>{text.length>0?text:"Enter something in the above textbox"}</p>






    </div>
    </>

    

    
  )
}

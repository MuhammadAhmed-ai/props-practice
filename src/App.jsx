import React, { useEffect, useState } from "react";

// const App = () => {

//   // Text ko store karne ke liye state
//   const [text, setText] = useState("");

//   // Jab text change hoga, ye effect chalega
//   useEffect(() => {
//     console.log("Characters:", text.length);
//   }, [text]);

//   return (
//     <div>
//       <h1>Character Counter</h1>

//       <input
//         type="text"
//         placeholder="Type something..."
//         value={text}
//         onChange={(e) => setText(e.target.value)}
//       />

//       <h2>Characters: {text.length}</h2>
//     </div>
//   );
// };


const App = ()=>{
  const [text , settext]=useState("")

  useEffect(()=>{
    console.log("Text length is", text.length)
  })


  return (
    <div>
      <h1>My application</h1>

      <input type="text" placeholder="Enter some text" onChange={(e) =>settext(e.target.value)}/>

      <h1>character is {text.length}</h1>

    </div>
  )
}

export default App;
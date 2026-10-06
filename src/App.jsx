import React from 'react'
// import User from './components/user'
import User from "./assets/components/user";

const App = () => {

  // const Usename = (name)=>{
  //   console.log("name is " , name)
  // }

  // return (
  //   <div>
  //     <h1>parent componet</h1>

  //     <User sendname={Usename}/>

  //   </div>
  // )

  // const getage= (age)=>{
  //   console.log("your age is" , age)
  // }

  // return (
  //   <div>
  //     <h1> app page</h1>

  //     <User age = {getage}/>
  //   </div>
  // )

  const getuserdata = (data)=>{
    console.log("data is " ,data)
  }

  return (
    <div>
      <h1> app</h1>

      <User  userdata= {getuserdata}/>
    </div>
  )

}

export default App
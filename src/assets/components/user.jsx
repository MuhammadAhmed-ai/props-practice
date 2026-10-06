import React from 'react'

const User = (props) => {
// const handler = ()=>{
//     props.sendname("Owais raza")
// }

// return (
//     <div>
//         <h2>child component</h2>

//         <button onClick={handler}>
//             sendname
//         </button>
//     </div>
// )
// }


// const handle = ()=>{
//     props.age(19)
// }


// return (
//     <div>
//         <h1>
//             user profiel
//         </h1>

//         <button 
//         onClick={handle}>show age</button>

//     </div>
// )


const handler = ()=>{
props.userdata({
    name : "ahmed",
    age : 19
})
}


return (
    <div>
        <button onClick={handler}>
            show user data
        </button>
    </div>
)
}

export default User
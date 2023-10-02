// import { useState } from "react"

import { useState } from "react"

// export default function Counter () {

//     const [count, setCount]  = useState(0)
//     const handleClick = () =>{
//         const newCount = count + 1;
//         setCount(newCount)
//     }

//     const handleClick2 = () => {
//         const newConut = count - 1;
//         setCount(newConut)
//     }
//     return (
//         <div>
//             <h3>Counter : {count} </h3>
//             <button onClick={handleClick}>Add Number</button>
//             <button onClick={handleClick2}>Reduce Number</button>
//         </div>
//     )
// }


export default function Counting () {

    const [count, setCount] = useState(0)

    // for add number
    const buttonHandle = () => {
        const newCount = count + 1;
        setCount(newCount)
    }

    // for reduce number 
    const buttonHandle2 = () => {
        const newConut = count - 1;
        setCount(newConut)
    }
    return (
        <div>
            <h3>
                Counting : {count}
            </h3>
            <button onClick={buttonHandle}>Add Number</button>
            <button onClick={buttonHandle2}>Reduce Number</button>
        </div>
    )
}
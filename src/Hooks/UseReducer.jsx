import React, {useReducer} from 'react'


const countReducer = (num, action) =>
{
    
    console.log("action", action);
    
    if(action.type === "Add")
    {
        // console.log("state",  state+1);
        num +=5;
    }

    return num;
} 

const UseReducer = () => {
    // const [count ,setCount] = useState(0);

    const [state, dispatch] = useReducer(countReducer, 0);
    return (
        <div>
            <h1>Hello UseReducer { state}</h1>
            <button onClick={()=>{dispatch({type:"Add"})}}>Change State</button>
            
        </div>
    )
}

export default UseReducer

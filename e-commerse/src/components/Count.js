import { useState } from "react";

function Count() {
    const [count, setCount] = useState(0);
    return (
        <div>
            <div>Count: {count}</div>
            <button onClick={()=>{
                    setCount(count+1)
                    console.log(count)
                    }
                }> 
                Increament 
            </button>
        </div>
    )
}

export default Count;
import React,{useState,useEffect} from 'react';

const Counter: React.FC = () => {
    const [count,setCount] = useState<number>(0);
    useEffect(()=>{
        console.log("Counter Mounted")
        return function(){
            console.log("Counter Unmounted")
        };
    },[]);

    useEffect(()=>{
        console.log("User Updated")        
    },[count]);

    const incValue:number = () => {
        setCount(count+1);
    };

    const decValue:number = () => {
        setCount(count-1);
    };
    
    return(
        <div className="counter-container">
            <h1>{count}</h1>
            <button 
                onClick={incValue}>
                Increment</button>
            <br/>
            <br/>
            <button 
                // onClick={()=>setCount((count)=>count-1)}>
                onClick={decValue}>
                Decrement</button>    
        </div>
    );
};

export default Counter;
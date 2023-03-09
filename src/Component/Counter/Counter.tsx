import React, {useState} from 'react';

const Counter = () => {
    const [currentN,setcurrentN]=useState('1')
    const[_n,set_n]=useState(0)
    const OnClick=(value: number)=>
    {
        set_n(_n+value)
    }
    return (
        <div>
            <div>
                <input type={"text"} value={currentN} onChange={(e)=>setcurrentN(e.target.value)}/>
            </div>
            <div>
                 {_n}
             </div>
         <div>
            <button onClick={()=>OnClick(1)}>
                Plus 1
            </button>

             <button onClick={()=>OnClick(100)}>
                 Plus 100
             </button>
             <button onClick={()=>OnClick(-100)}>
                 Minus 100
             </button>
            <button onClick={()=>OnClick(-1)}>
                Minus 1
            </button>
             <button onClick={()=>OnClick(parseInt(currentN))}>
                 Plus N
             </button>
            </div>
        </div>
    );
};

export default Counter;
import React, { useEffect, useState } from "react";


function counter(){
    const [val,incVal]=useState(0);
    const [cnt,setCnt]=useState(0);
    

    function change(){
        incVal(val+1);
        setCnt(cnt+5);
    }
    function change2(){
        incVal(val-1);
        setCnt(cnt-5);
    }
   
   
return (
 
<div>
<h1>Counter</h1>
<h1>count1:{val}</h1>
<h1>count2:{cnt}</h1>
<button onClick={change}>+</button>
<button onClick={change2}>-</button>
</div>
);

}
export default counter;
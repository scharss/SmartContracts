import React, {useState} from 'react';



export function Counter(){
	
	const [counter, setCounter] = useState(10)
	
	return (
	
	<div>
	
	<h1>Counter: {counter}</h1>
	<button onClick={()=>setCounter(counter+1)}>Sumar</button>
	<button onClick={()=>setCounter(counter-1)}>Restar</button>
	<button onClick={()=>{setCounter(1000)}}>Reiniciar</button>
	</div>
	       )
}



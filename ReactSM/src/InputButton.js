import React, {useState} from 'react';



export function InputButton(){
	
	const [mensaje, setMensaje] = useState('')
	
	return (
	
	<div>
	
	<input onChange={e=>setMensaje(e.target.value)}/>
	<button onClick={()=>{alert('el mensaje es '+mensaje)}}>Save</button>
	
	<hr/>
	
	</div>
	       )
}
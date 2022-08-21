import './task.css'

export function TaskCard({ready}){
	
return <div className="card">
	<h1>Mi primera tarea</h1>
	
	
	<span style= {ready ? {background:"green"} : {background:"red"}}>
	
	
	{ready ? "Tarea realizada" : "Tarea pendiente"}
	
	</span>
	{/*
	<p>Tarea Realizada</p>
	*/}
	
	</div>
}


/**********************************************/
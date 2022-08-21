import './task.css'


export function Formulario(){
	
	return(
	<div className="formy">
	
	<img className="img1" src={'https://ipfs.io/ipfs/bafybeia2wotkem2zea2cqsfi65v7z6rjlnij5fdaqig4khd5t6ueivne6q/8737.png'}/>
	
{/*  onChange*/}

<p>Nombre: <input id="demo" onChange={function(e){console.log(e.target.value)}}/></p>

<br />

<p>Correo: <input id="demo1" onChange={function(e){console.log(e.target.value)}}/></p>

		
		
		
	{/*  onSubmit */}	
		<form onSubmit={(e)=>{
		e.preventDefault()
		var x = document.getElementById("demo").value
		var y = document.getElementById("demo1").value
		alert(x +" " +y)
		document.getElementById("demo").value = " "
		document.getElementById("demo1").value = " "
		}}>
		<h2>Registro de usuarios</h2>
		<button >Enviar</button>
		
		</form>
		
	
	</div>
	
	
	
	
	)
}
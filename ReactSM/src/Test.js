var caja

export function Direccion(){
	return (<div>
	<p>Address: <input id="add2" onChange={function(e){
		 caja = e.target.value
		console.log(caja)}}/></p>
	</div>)
	
}

{/*   const address = "0xBEFcA8Cd9EAe06C0b6Da44CF0b877fc7813e0915"     */}



export function ButtonDir(){return(<button
onClick={()=>{console.log(caja)}}

>To Test</button>



)}



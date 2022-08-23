
export function Button({text}){
	
	
	console.log('Hola Mundo!')
	
	
	return <button onClick={
		
		function(){
			console.log('Hola Mundo!')
		}
	}>
	{text}
			</button>
}


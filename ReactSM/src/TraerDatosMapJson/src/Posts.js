export const Posts = () => {
	
	return  <button onClick={()=>{
		
		fetch('http://jsonplaceholder.typicode.com/posts')
		.then(response => response.json())
		.then(data => console.log(data))
		.catch(error => console.error(error))
		
		{/*alert('trayendo datos')*/}
		
		}}>
				Traer datos
			</button>
	
}
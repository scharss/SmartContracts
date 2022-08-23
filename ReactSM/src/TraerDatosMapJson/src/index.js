import React from 'react';
import ReactDom from 'react-dom/client';
import {Greeting, UserCard} from './Greeting';
import {Button} from './Button.js'
import {TaskCard} from './Task.js'
import {Posts} from './Posts.js'
const root = ReactDom.createRoot(document.getElementById('root'));

{/*   */}

const users =[{
			id: 1,
			name: 'John',
			image: 'https://robohash.org/user1'
		},
		{
			id: 2,
			name: 'Mark',
			image: 'https://robohash.org/user2'
		},
		{
			id: 3,
			name: 'Peter',
			image: 'https://robohash.org/user3'
		}]
		
		
root.render(<>
<TaskCard ready={true}/>

{/*  onClick */}
<Button text='Click me'/>




{/*  onChange*/}
<input id="demo" onChange={function(e){
			
			console.log(e.target.value)
		}}/>
		
		
		
	{/*  onSubmit */}	
		<form onSubmit={(e)=>{
		e.preventDefault()
		alert('Enviado')
		}}>
		<h2>Registro de usuarios</h2>
		<button>Enviar</button>
		
		</form>
		
		<Posts />
		
		{/*  readJsonFile */}
		{
			users.map(
			(user,i)=>{
				
				return <div key={i}>
				
                <h1>{user.name}</h1>
				<img src={user.image}/>

				</div>
			}
			)
		}
		
		
		
		
		
		
{/*<Button text='Pay'/>
<Button text='Go to'/>
<Greeting title="Hola React" />
<Greeting title="Hola JavaScript" />
<Greeting title="Hola C" />
*/}

</>)
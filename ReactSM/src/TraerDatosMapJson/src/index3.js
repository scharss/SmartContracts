import React from 'react';
import ReactDom from 'react-dom/client';
import {Greeting, UserCard} from './Greeting';
import {Button} from './Button.js'
import {TaskCard} from './Task.js'
import {Posts} from './Posts.js'
import {Counter} from './Counter'
import {InputButton} from './InputButton'
import {Formulario} from './Formulario'
import {Connect, ReadContract, WriteContract, Direccion} from './Connect'

const root = ReactDom.createRoot(document.getElementById('root'));

{/*   */}



		
root.render(
<>

<h2>Smart Contract</h2>

<Connect />
<Direccion />


<p><WriteContract /></p>
<ReadContract />

<br />

<br />


	
	
	
</>
)
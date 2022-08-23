import React from 'react';
import ReactDom from 'react-dom/client';

import {Connect, ReadContract, WriteContract, Direccion} from './Connect'

const root = ReactDom.createRoot(document.getElementById('root'));

{/*   */}



		
root.render(
<>

<h2>Smart Contract</h2>

<Connect />
<Direccion />


<WriteContract />
<ReadContract />

<br />

<br />


	
	
	
</>
)
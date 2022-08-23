import {Navlink} from 'react-router-dom'
import '../styles.css'
import * as React from "react";
import { Link } from "react-router-dom";


export function Navbar(){
	return (
	<div>
	
	<ul>
	<li>
	<Link to='/'>Inicio</Link>
	</li>
	
	<li>
	<Link to='/manager'>Manager</Link>
	</li>
	
	<li>
	<Link to='/test'>Test</Link>
	</li>
	
	
	</ul>
	</div>
)}
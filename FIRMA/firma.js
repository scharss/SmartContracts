let provider = new ethers.providers.Web3Provider(window.ethereum)
let signer

// 1. Connect Metamask with Dapp
async function connectMetamask() {
    // MetaMask requires requesting permission to connect users accounts
    await provider.send("eth_requestAccounts", []);

    signer = await provider.getSigner();
    const myAddress = await signer.getAddress()
    console.log("Account address s:", myAddress);
	document.getElementById('demo5').innerHTML=myAddress;
}

// 2. read data from the contract  
const address = "0x28E7B23d7DFcB2155050f850e0e5FD4196b4E620";

const abi = [
	{
		"inputs": [],
		"name": "array_push",
		"outputs": [
			{
				"internalType": "string[]",
				"name": "",
				"type": "string[]"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "url",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "descrip",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "dir",
				"type": "string"
			}
		],
		"name": "storex",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "arr",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "descripcion",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "direccion",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "dynamic_array",
		"outputs": [
			{
				"internalType": "string[]",
				"name": "",
				"type": "string[]"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "urlNFT",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}
];

// To write const storingx = new ethers.Contract(address, abi, signer);
// To read const contracto = new ethers.Contract(address, abi, provider);


async function Firmar(){
	var texto= document.getElementById('demo6').value;
	const signature = await signer.signMessage(texto);
	console.log(signature);
	document.getElementById('demo').innerHTML= signature 
	// split signature
	
    const r = signature.slice(0, 66);
    const s = "0x" + signature.slice(66, 130);
    const v = parseInt(signature.slice(130, 132), 16);
	
    console.log({ r, s, v });
}

async function Verificar(){
	const signature = document.getElementById('demo3').value
	const message = document.getElementById('demo4').value
	const signerAddr = await ethers.utils.verifyMessage(message, signature);
	console.log(signerAddr)
	document.getElementById('demo1').innerHTML= signerAddr
	
}



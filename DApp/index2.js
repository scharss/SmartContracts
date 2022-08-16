let provider = new ethers.providers.Web3Provider(window.ethereum)
let signer

// 1. Connect Metamask with Dapp
async function connectMetamask() {
    // MetaMask requires requesting permission to connect users accounts
    await provider.send("eth_requestAccounts", []);

    signer = await provider.getSigner();
	var cuenta = await signer.getAddress();
	document.getElementById("demo1").innerHTML= "Cuenta: " + cuenta;
    console.log("Account address s:", await signer.getAddress());
}



// 2. read data from the contract  
const address = "0xBEFcA8Cd9EAe06C0b6Da44CF0b877fc7813e0915";
						
const abi = [
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "url",
				"type": "string"
			}
		],
		"name": "storex",
		"outputs": [],
		"stateMutability": "nonpayable",
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

async function writeContract() {

    //const contracto = new ethers.Contract(usdtAddress, usdtAbi, provider);
	const storingx = new ethers.Contract(address, abi, signer);
	
	var x = document.getElementById('furl').value;
	
	
	await storingx.storex(x);
    
    
   
};


async function readContract() {
	const contracto = new ethers.Contract(address, abi, provider);
	
	const asunto = await contracto.urlNFT();
	document.getElementById("demo2").innerHTML= "Mensaje: " + asunto;
	console.log(`Asunto = ${asunto}`);
    
}








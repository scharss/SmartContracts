let provider = new ethers.providers.Web3Provider(window.ethereum)
let signer

// 1. Connect Metamask with Dapp
async function connectMetamask() {
    // MetaMask requires requesting permission to connect users accounts
    await provider.send("eth_requestAccounts", []);

    signer = await provider.getSigner();

    console.log("Account address s:", await signer.getAddress());
}

// 2. Get balance
async function getBalance() {
    const balance = await signer.getBalance()
    const convertToEth = 1e18;
    console.log("account's balance in ether:", balance.toString() / convertToEth);
}

// 3. read data from the contract  
const usdtAddress = "0xBEFcA8Cd9EAe06C0b6Da44CF0b877fc7813e0915";
						//Win!
const usdtAbi = [
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

async function escribirenelContrato() {

    //const contracto = new ethers.Contract(usdtAddress, usdtAbi, provider);
	const storingx = new ethers.Contract(usdtAddress, usdtAbi, signer);
	
	var x = document.getElementById('furl').value;
	
	
	await storingx.storex(x);
    
    //const descripcion = await contracto.descripcion();
	//const url = await contracto.urlNFT();
    
	//console.log(`Url = ${url}`)
    //console.log(`Descripción = ${descripcion}`)
   
};

/*
async function guardando() {
	const guardar = new ethers.Contract(usdtAddress, usdtAbi, signer);
	await guardar.array_push();
	/*
	signature = await signer.signMessage("Firmar documento");
	console.log(signature);
	// split signature
    const r = signature.slice(0, 66);
    const s = "0x" + signature.slice(66, 130);
    const v = parseInt(signature.slice(130, 132), 16);
    console.log({ r, s, v });
*/
//};

async function readDataFromSmartContract() {
	const contracto = new ethers.Contract(usdtAddress, usdtAbi, provider);
	
	const url = await contracto.urlNFT();
	
	console.log(`Asunto = ${url}`);
    
}








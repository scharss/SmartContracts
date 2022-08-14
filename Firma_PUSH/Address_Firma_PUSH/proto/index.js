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
const usdtAddress = "0x7D384E8b74f63A6b7639A643A9A0B3ac978E4d91";

const usdtAbi = [{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"arr","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"array_push","outputs":[{"internalType":"string[]","name":"","type":"string[]"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"descripcion","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"direccion","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"string","name":"url","type":"string"},{"internalType":"string","name":"descrip","type":"string"},{"internalType":"string","name":"dir","type":"string"}],"name":"storex","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"urlNFT","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"}];


async function escribirenelContrato() {

    //const contracto = new ethers.Contract(usdtAddress, usdtAbi, provider);
	const storingx = new ethers.Contract(usdtAddress, usdtAbi, signer);
	
	var x = document.getElementById('furl').value;
	var y = document.getElementById('fdescrip').value;
	var direccion = await signer.getAddress();
	await storingx.storex(x,y,direccion);
    
    //const descripcion = await contracto.descripcion();
	//const url = await contracto.urlNFT();
    
	//console.log(`Url = ${url}`)
    //console.log(`Descripción = ${descripcion}`)
   
};


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
};

async function readDataFromSmartContract() {
	const contracto = new ethers.Contract(usdtAddress, usdtAbi, provider);
	const descripcion = await contracto.descripcion();
	const url = await contracto.urlNFT();
	console.log(`Url = ${url}`)
    console.log(`Descripción = ${descripcion}`)
}


async function arreglo() {
	const contractox = new ethers.Contract(usdtAddress, usdtAbi, provider);
	


}






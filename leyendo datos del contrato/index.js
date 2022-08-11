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

// 3. read data from the USDT contract on kovan 
const usdtAddress = "0xf7E9B009A300c5eA8d1Eb14EB8772e3eCaB5426f";

const usdtAbi = [{"inputs":[],"name":"descripcion","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"string","name":"url","type":"string"},{"internalType":"string","name":"descrip","type":"string"}],"name":"storex","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"urlNFT","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"}];


async function readDataFromSmartContract() {

    const usdtContract = new ethers.Contract(usdtAddress, usdtAbi, provider);
	//const storingx = new ethers.Contract(usdtAddress, usdtAbi, signer);
	
	//await storingx.storex("https://docs.ethers.io/","url");
    
    const descripcion = await usdtContract.descripcion();
	const url = await usdtContract.urlNFT();
    
	console.log(`Url = ${url}`)
    console.log(`Descripción = ${descripcion}`)
   
}


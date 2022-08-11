const keepersContractAddress = "0x4f1933246abf5856c2136d424e3253da23ffd4d6";
const keeperContractABI = [
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_number",
				"type": "uint256"
			}
		],
		"name": "updateNumber",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "number",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}
]
// .getSigner()

async function callContract() {
    const provider = new ethers.providers.Web3Provider(window.ethereum)
    const keepersContract = new ethers.Contract(keepersContractAddress, keeperContractABI, provider);

    const counter = await keepersContract.number();
    console.log(counter.toString())
}
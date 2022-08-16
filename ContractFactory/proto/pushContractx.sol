// SPDX-License-Identifier: MIT
//https://rinkeby.etherscan.io/address/0x7d384e8b74f63a6b7639a643a9a0b3ac978e4d91#code
// contract: 0x7D384E8b74f63A6b7639A643A9A0B3ac978E4d91

pragma solidity ^0.8.16;

contract MySmartContract{
    string[] public arr;
    string public urlNFT;
    string public descripcion;
	string public direccion

    function storex(string memory url, string memory descrip, string memory dir) public {
        urlNFT = url;
        descripcion = descrip;
        direccion = dir;
    }
    function array_push(
    ) public returns(string[] memory){  
    
        arr.push(urlNFT);  
        arr.push(descripcion);
		arr.push(direccion);	
        
    
        return arr;  
    }  


    }
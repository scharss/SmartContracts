// SPDX-License-Identifier: MIT
// https://rinkeby.etherscan.io/tx/0x78833349f0b3f838e6ab055cf1c2bbac1e7c8016a362383181b394cc1930de48
// Contract: 0x0d5af8c31Bf6Ce9021B19E4361cd4368252BDFdA

pragma solidity ^0.8.16;

contract MySmartContract{
    string[] public arr;
    string public urlNFT;
    string public descripcion;

    function storex(string memory url, string memory descrip) public {
        urlNFT = url;
        descripcion = descrip;
        
    }
    function array_push(
    ) public returns(string[] memory){  
    
        arr.push(urlNFT);  
        arr.push(descripcion);  
        
    
        return arr;  
    }  


    }
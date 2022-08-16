// SPDX-License-Identifier: MIT
pragma solidity ^0.8.15;

contract MySmartContract{
       
    string public urlNFT;
    

    function storex(string memory url) public {
        urlNFT = url;
        
    }


    }

contract factory{
address[] public tokenAddress;


function createD() public {
        MySmartContract d  = new MySmartContract();
        
        tokenAddress.push(address(d));
        
    }






}    
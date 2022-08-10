// SPDX-License-Identifier: MIT
pragma solidity ^0.8.15;

contract MySmartContract{
       
    string public urlNFT;
    string public descripcion;

    function storex(string memory url, string memory descrip) public {
        urlNFT = url;
        descripcion = descrip;
    }


    }

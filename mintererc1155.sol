// SPDX-License-Identifier: MIT
pragma solidity ^0.8.15;

import "@openzeppelin/contracts@4.7.2/token/ERC1155/ERC1155.sol";
import "@openzeppelin/contracts@4.7.2/token/ERC1155/extensions/ERC1155Burnable.sol";
import "@openzeppelin/contracts@4.7.2/access/Ownable.sol";

contract Minter is ERC1155, ERC1155Burnable, Ownable {
    constructor() ERC1155("https://ipfs.io/ipfs/bafybeigutzu3ccjxhnrkv3cqpwbeltryjr4m43plgra5cols34swqtkvje/{id}.json") {}

     uint256 number;
    uint256 numbery;

    function storex(uint256 num, uint256 numy) public {
        number = num;
        numbery = numy;
    }

    function mint()
        public
        onlyOwner
    {
        for(uint i=number; i<=numbery; i++){
          _mint(msg.sender, i /* Id  */, 1 /* Cantidad */, "");
        }
    }

    
}

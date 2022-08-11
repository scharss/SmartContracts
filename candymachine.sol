// SPDX-License-Identifier: MIT
pragma solidity ^0.8.15;

import "@openzeppelin/contracts@4.7.2/token/ERC1155/ERC1155.sol";
import "@openzeppelin/contracts@4.7.2/token/ERC1155/extensions/ERC1155Burnable.sol";
import "@openzeppelin/contracts@4.7.2/access/Ownable.sol";

contract NuevoMinter is ERC1155, ERC1155Burnable, Ownable {
    constructor() ERC1155("https://ipfs.io/ipfs/bafybeigutzu3ccjxhnrkv3cqpwbeltryjr4m43plgra5cols34swqtkvje/{id}.json") {}

     uint256 public number =1;
     uint256 public num;

   

    function mint()
        public
        onlyOwner
    {
        num = number;
        
          _mint(msg.sender, num /* Id  */, 1 /* Cantidad */, "");
        number= number +1;
    }

    
}

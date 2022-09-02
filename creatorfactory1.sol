// SPDX-License-Identifier: MIT
pragma solidity ^0.8.16;


import "@openzeppelin/contracts@4.7.2/token/ERC1155/ERC1155.sol";
import "@openzeppelin/contracts@4.7.2/token/ERC1155/extensions/ERC1155Burnable.sol";
import "@openzeppelin/contracts@4.7.2/access/Ownable.sol";

contract NftDrive is ERC1155, ERC1155Burnable, Ownable {
    
    constructor(address _owner) ERC1155("https://ipfs.io/ipfs/bafybeibo6fspneau2qcd6i23pe7zo6fpfwax3fju46lm35o33jvt34yl6e/0000000000000000000000000000000000000000000000000000000000000001.json") {
	
					 _mint(_owner, 1 /* Id  */, 1 /* Cantidad */, "");
	}
}



contract NftDriveFactory {
    

 

     function create(address _owner) public {
       
        new NftDrive(_owner);
        
    }
    

   
}

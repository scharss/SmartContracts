// SPDX-License-Identifier: MIT
pragma solidity ^0.8.16;


import "@openzeppelin/contracts@4.7.2/token/ERC1155/ERC1155.sol";
import "@openzeppelin/contracts@4.7.2/token/ERC1155/extensions/ERC1155Burnable.sol";
import "@openzeppelin/contracts@4.7.2/access/Ownable.sol";

contract NftDrive is ERC1155, ERC1155Burnable, Ownable {
    
    constructor(address owner, string memory metaData ) ERC1155(metaData) {
	
					 _mint(owner, 1 /* Id  */, 1 /* Cantidad */, "");
                     transferOwnership(owner);
	
    }
    string[] private arr;
    string private dataStorage;
    

    function upData(string memory data) public onlyOwner {
        dataStorage = data;
        
    }
    function saveData(
    ) public onlyOwner returns(string[] memory){  
    
        arr.push(dataStorage);  
        	
        
    
        return arr;  
    }  

function getdata() public view onlyOwner returns(
      string[] memory){  
     
        return (arr);  
    }  


   

    function removeData(uint id) public onlyOwner{
    arr[id] = arr[arr.length - 1];
    arr.pop();
  }
}



contract NftDriveFactory is Ownable {
    
 uint256 public priceNFTDrive;
    

    function setPrice(uint256 price) public onlyOwner {
        priceNFTDrive = price;
        
    }
 

     function create(address owner, string memory metaData) public payable {
       require(msg.value >= priceNFTDrive, "You need to spend more ETH!");
        new NftDrive(owner, metaData);
        
    }
    
       

    function withdrawMoney() public onlyOwner{
        address payable to = payable(msg.sender);
        to.transfer(getBalance());
    }



      function getBalance() public view  returns (uint256) {
        return address(this).balance;
    }
 
    

   
}

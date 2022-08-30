// SPDX-License-Identifier: MIT
pragma solidity ^0.8.16;


contract MySmartContract{
    string[] public arr;
    string public dataStorage;
    

    function upData(string memory data) public {
        dataStorage = data;
        
    }
    function saveData(
    ) public returns(string[] memory){  
    
        arr.push(dataStorage);  
        	
        
    
        return arr;  
    }  

function getdata() public view returns(
      string[] memory){  
     
        return (arr);  
    }  


   

    function remove(uint id) public{
    arr[id] = arr[arr.length - 1];
    arr.pop();
  }
    

    }

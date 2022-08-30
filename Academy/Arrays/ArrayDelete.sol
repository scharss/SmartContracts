// SPDX-License-Identifier: MIT
pragma solidity ^0.8.16;


contract MySmartContract{
    string[] public arr;
    string public urlNFT;
    

    function storex(string memory url) public {
        urlNFT = url;
        
    }
    function array_push(
    ) public returns(string[] memory){  
    
        arr.push(urlNFT);  
        	
        
    
        return arr;  
    }  

function getdata() public view returns(
      string[] memory){  
     
        return (arr);  
    }  


   function getDelete(uint i) public {
        delete arr[i];
        
    }
    






    }

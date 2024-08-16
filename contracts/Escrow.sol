// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

contract Escrow{
    address public nftAdress;
    uint256 public nftID;

   constructor( address _nftAdress, uint256 _nftID){
        nftAdress = _nftAdress;
        nftID = _nftID;
   }

    function finalizeSale() public{

    }
}
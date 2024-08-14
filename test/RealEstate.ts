const {expect} = require("chai");
const {ethers} = require("hardhat");

describe('RealEstate', () => {
    let _realEstate, _escrow;
    beforeEach(async function () {
        //laodcontract
        const RealEstate = await ethers.getContractFactory();
        const Escrow = await ethers.getContractFactory();
        //deploycontract

        _realEstate = await RealEstate.deploy();
        _escrow = await Escrow.deploy();
    })
    describe("Deployment", async () =>{
        
    })
   
})

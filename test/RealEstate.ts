import { expect } from "chai";
import { ethers } from "hardhat";
import { Contract } from "ethers";
import { SignerWithAddress } from "@nomicfoundation/hardhat-ethers";


describe('RealEstate', () => {
    let _realEstate: Contract, _escrow: Contract;
    let _deployer:SignerWithAddress, seller:SignerWithAddress;

    beforeEach(async function () {
        //laodcontract
        const RealEstate = await ethers.getContractFactory();
        const Escrow = await ethers.getContractFactory();
        //deploycontract

        _realEstate = await RealEstate.deploy();
        _escrow = await Escrow.deploy();
    })
    describe("Deployment", async () =>{
        it('sends NTF to sellers / deployer', async()=>{
            expect(await _realEstate.ownerOf(nftID).to.equal(seller))
        })
    })
   
})

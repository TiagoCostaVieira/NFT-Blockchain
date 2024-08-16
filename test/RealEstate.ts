import { expect } from "chai";
import { ethers } from "hardhat";
import { Signer } from "ethers";
import { RealEstate } from "../typechain-types/RealEstate.sol";
import { Escrow } from "../typechain-types/Escrow";

describe('RealEstate', () => {
    let _realEstate: RealEstate, _escrow: Escrow;
    let _deployer: Signer, seller: Signer;
    let nftID = 1;

    beforeEach(async function () {
        const accounts = await ethers.getSigners();
        _deployer = accounts[0];
        seller = _deployer;

        const RealEstateFactory = await ethers.getContractFactory("RealEstate");
        const EscrowFactory = await ethers.getContractFactory("Escrow");

        _realEstate = await RealEstateFactory.deploy() as RealEstate;
        _escrow = await EscrowFactory.deploy(_realEstate, nftID) as Escrow;
    });

    describe("Deployment", async () => {
        it('sends NTF to sellers / deployer', async () => {
            const owner = await _realEstate.ownerOf(nftID);

            expect(owner).to.equal(await seller.getAddress());
        });
    });
});

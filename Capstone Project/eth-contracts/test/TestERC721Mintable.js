const CustomERC721Token = artifacts.require("MahiERC721Token");

contract('TestERC721Mintable', accounts => {

    const account_one = accounts[0];
    const account_two = accounts[1];
    const account_three = accounts[2];

    var contractInstance;

    describe('match erc721 spec', function () {
        beforeEach(async function () { 
            contractInstance = await CustomERC721Token.new({from: account_one});

        })

        it('should return total supply', async function () { 
            await contractInstance.mint(account_two, 1, {from:account_one});
            await contractInstance.mint(account_two, 2, {from:account_one});
            await contractInstance.mint(account_three, 3, {from:account_one});
            let totalSupply = await contractInstance.totalSupply.call();
            assert.equal(totalSupply, 3, "Total no. of tokens minted incorrect");
        })

        it('should get token balance', async function () { 
            await contractInstance.mint(account_two, 1, {from:account_one});
            await contractInstance.mint(account_two, 2, {from:account_one});
            let balanceOfUsr2 = await contractInstance.balanceOf.call(account_two);
            assert.equal(balanceOfUsr2, 2, "The number of tokens owned by usr2 incorrect");
        })

        // token uri should be complete i.e: https://s3-us-west-2.amazonaws.com/udacity-blockchain/capstone/1
        it('should return token uri', async function () { 
            let correctURI = "https://s3-us-west-2.amazonaws.com/udacity-blockchain/capstone/1";
            await contractInstance.mint(account_two, 1, {from:account_one});
            let storedURI = await contractInstance.tokenURI.call(1);
            assert.equal(storedURI, correctURI, "The stored uri is incorrect");
        })

        it('should transfer token from one owner to another', async function () { 
            await contractInstance.mint(account_two, 1, {from:account_one});
            let ownerBeforeTx = await contractInstance.ownerOf.call(1);
            assert.equal(ownerBeforeTx, account_two);
            await contractInstance.transferFrom(account_two, account_three, 1, {from:account_two});
            let ownerAfterTx = await contractInstance.ownerOf.call(1);
            assert.equal(ownerAfterTx, account_three, "The owner after tx is incorrect");
        })
    });

    describe('have ownership properties', function () {
        beforeEach(async function () { 
            this.contract = await CustomERC721Token.new({from: account_one});
        })

        it('should fail when minting when address is not contract owner', async function () { 
            let error = false;
            try {
                await await contractInstance.mint(account_two, 1, {from:account_three});
            } catch(err) {
                error = true;
            }
            assert.equal(error, true, "Only the owner is able to mint a token");
        })

        it('should return contract owner', async function () { 
            // let currentOwner = await contractInstance.owner.call();
            let currentOwner = await contractInstance.getOwner();
            assert.equal(currentOwner, account_one, "The contract owner is wrong");
        })

    });
})
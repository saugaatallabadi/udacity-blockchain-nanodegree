// Test if a new solution can be added for contract - SolnSquareVerifier

// Test if an ERC721 token can be minted for contract - SolnSquareVerifier

const Verifier = artifacts.require("Verifier");
const SolnSquareVerifier = artifacts.require("SolnSquareVerifier");

const proof = require("../../zokrates/code/square/proof.json");

contract("TestSolnSquareVerifier", async(accounts) => {

	let owner = accounts[0];
	let user2 = accounts[1];
	var solnSquareInstance;

	describe("TestVerificationMinting", (accounts) => {

		beforeEach(async() => {
			try {
				solnSquareInstance = await SolnSquareVerifier.deployed();
			} catch(err) {
				console.log(err);
			}
		});

        // Test if an ERC721 token can be minted for contract - SolnSquareVerifier
		it("mints a token after verifying the solution", async() =>{

			var error = false;
			try {
                // only owner can mint new tokens
				await solnSquareInstance.mintAfterVerification(
					// mint the token and send it to user2
					user2,
					1,
					proof.proof.a,
                    proof.proof.b,
                    proof.proof.c,
					proof.inputs,
					{from:owner}
				);
			} catch(err) {
                error = true;
			}

			assert.equal(error, false, "Error while minting a token");

		});

        // Test if a new solution can be added for contract - SolnSquareVerifier
		it("tries to mint a token with already used Id", async() => {
			var error;
			try {
                // only owner can mint new tokens
                solnSquareInstance = await SolnSquareVerifier.deployed();
				await solnSquareInstance.mintAfterVerification(
					// mint the token and send it to user2
					user2,
					1,
					proof.proof.a,
                    proof.proof.b,
                    proof.proof.c,
					proof.inputs,
					{from:owner}
				);
			} catch(err) {
				error = true;
			}

			assert.equal(error, true, "Cannot mint with the already used ID");
		});

		it("tries to mint a token with already used solution input", async() => {
			var error;
			try {
                // only owner can mint new tokens
                solnSquareInstance = await SolnSquareVerifier.deployed();
				await solnSquareInstance.mintAfterVerification(
					// mint the token and send it to user2
					user2,
					2,
					proof.proof.a,
                    proof.proof.b,
                    proof.proof.c,
					proof.inputs,
					{from:owner}
				);
			} catch(err) {
				error = true;
			}

			assert.equal(error, true, "Cannot mint a new token with already used solution input");
		});

	});
})
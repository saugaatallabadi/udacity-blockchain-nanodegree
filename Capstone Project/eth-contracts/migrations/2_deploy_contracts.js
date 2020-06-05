// migrating the appropriate contracts
// var SquareVerifier = artifacts.require("./SquareVerifier.sol");
var Verifier = artifacts.require("./Verifier.sol");
var SolnSquareVerifier = artifacts.require("./SolnSquareVerifier.sol");
const MahiERC721Token = artifacts.require("MahiERC721Token");

module.exports = function(deployer) {
  // deployer.deploy(Verifier);
  // deployer.deploy(SolnSquareVerifier);
  deployer.deploy(MahiERC721Token, {gas:6500000});
  deployer.deploy(Verifier) .then(() => {
    return deployer.deploy(SolnSquareVerifier,Verifier.address);
  })
  
};

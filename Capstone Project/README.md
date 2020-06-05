# Udacity Blockchain Capstone

The capstone will build upon the knowledge you have gained in the course in order to build a decentralized housing product. 
The tokens are minted via using ZkSNARKs and the minted tokens are put on sale on OpenSea. 

# Requirements

Truffle
```
truffle -v
Truffle v5.1.26 - a development framework for Ethereum
```
Ganache
```
Ganache CLI v6.9.1 (ganache-core: 2.10.2)
```
Solc compiler version
```
solc-compiler v^0.5.6
```

# Getting Started

1. Clone or unzip this repository.

2. Install dependencies

```
npm install
```

3. In a another terminal start ganache cli inside eth-contracts/
```
ganache-cli --gasLimit 500000000 --gasPrice 30000000000 -a 50 -m ""
```

3. Inside eth-contracts/ compile the contracts
```
 truffle compile  
```

4. Run truffle tests
```
truffle test ./test/TestERC721Mintable.js 
truffle test ./test/TestSquareVerifier.js 
truffle test ./test/TestSolnSquareVerifier.js
```

![TruffleTesting](img/Truffle-Tests.png)


# Deployed Contracts 

```
Starting migrations...
======================
> Network name:    'rinkeby'
> Network id:      4
> Block gas limit: 10000000 (0x989680)


1_initial_migration.js
======================

   Deploying 'Migrations'
   ----------------------
   > transaction hash:    0x5179856d0334e6906f5288a234841b063f90b23f4a01b0b98771cce0faf1441a
   > Blocks: 0            Seconds: 8
   > contract address:    0xC401A7c4CaD9ab2745d3846c4BF4d5D7121846d0
   > block number:        6505760
   > block timestamp:     1589741840
   > account:             0xc677420923196099E2e3feF15761dde98F3c90FF
   > balance:             17.545311439900000002
   > gas used:            225237 (0x36fd5)
   > gas price:           10 gwei
   > value sent:          0 ETH
   > total cost:          0.00225237 ETH


   > Saving migration to chain.
   > Saving artifacts
   -------------------------------------
   > Total cost:          0.00225237 ETH


2_deploy_contracts.js
=====================

   Deploying 'MahiERC721Token'
   ---------------------------
   > transaction hash:    0xe07a4dcf94767f707a8b5d92df9ed9ad4b22ea28c565ca183468233bd3e79cee
   > Blocks: 0            Seconds: 12
   > contract address:    0x77d79c9C5c24055E4469B47fb8941B8A2B67BEAD
   > block number:        6505762
   > block timestamp:     1589741870
   > account:             0xc677420923196099E2e3feF15761dde98F3c90FF
   > balance:             17.514790369900000002
   > gas used:            3009744 (0x2decd0)
   > gas price:           10 gwei
   > value sent:          0 ETH
   > total cost:          0.03009744 ETH


   Deploying 'Verifier'
   --------------------
   > transaction hash:    0xf0d66b63dfe9b555c452788158c2c446dea2885822f9bac2397346cfece5c310
   > Blocks: 1            Seconds: 12
   > contract address:    0xAd55690EaA34E13f92fB7C39c21D53aD9110EAD2
   > block number:        6505763
   > block timestamp:     1589741885
   > account:             0xc677420923196099E2e3feF15761dde98F3c90FF
   > balance:             17.504865819900000002
   > gas used:            992455 (0xf24c7)
   > gas price:           10 gwei
   > value sent:          0 ETH
   > total cost:          0.00992455 ETH


   Deploying 'SolnSquareVerifier'
   ------------------------------
   > transaction hash:    0x164ed6d4f7f3d38a2fe8a0db78a443eac0c6de7bf83973d8fd112cf7a985c2a1
   > Blocks: 0            Seconds: 12
   > contract address:    0x5fE5163FF8C2136f3054E7b8217966F8D7aB7605
   > block number:        6505764
   > block timestamp:     1589741900
   > account:             0xc677420923196099E2e3feF15761dde98F3c90FF
   > balance:             17.470732759900000002
   > gas used:            3413306 (0x34153a)
   > gas price:           10 gwei
   > value sent:          0 ETH
   > total cost:          0.03413306 ETH


   > Saving migration to chain.
   > Saving artifacts
   -------------------------------------
   > Total cost:          0.07415505 ETH


Summary
=======
> Total deployments:   4
> Final cost:          0.07640742 ETH

```

# Minting tokens on MyEtherWallet

# Minted tokens
https://rinkeby.opensea.io/assets/0x5fe5163ff8c2136f3054e7b8217966f8d7ab7605/123.  
https://rinkeby.opensea.io/assets/0x5fe5163ff8c2136f3054e7b8217966f8d7ab7605/124.  
https://rinkeby.opensea.io/assets/0x5fe5163ff8c2136f3054e7b8217966f8d7ab7605/125.  
https://rinkeby.opensea.io/assets/0x5fe5163ff8c2136f3054e7b8217966f8d7ab7605/126.  
https://rinkeby.opensea.io/assets/0x5fe5163ff8c2136f3054e7b8217966f8d7ab7605/127.  
https://rinkeby.opensea.io/assets/0x5fe5163ff8c2136f3054e7b8217966f8d7ab7605/128.  
https://rinkeby.opensea.io/assets/0x5fe5163ff8c2136f3054e7b8217966f8d7ab7605/129.  
https://rinkeby.opensea.io/assets/0x5fe5163ff8c2136f3054e7b8217966f8d7ab7605/130.  
https://rinkeby.opensea.io/assets/0x5fe5163ff8c2136f3054e7b8217966f8d7ab7605/131.  
https://rinkeby.opensea.io/assets/0x5fe5163ff8c2136f3054e7b8217966f8d7ab7605/132.  
https://rinkeby.opensea.io/assets/0x5fe5163ff8c2136f3054e7b8217966f8d7ab7605/133.  


# Sold Tokens
https://rinkeby.opensea.io/assets/0x5fe5163ff8c2136f3054e7b8217966f8d7ab7605/123.  
https://rinkeby.opensea.io/assets/0x5fe5163ff8c2136f3054e7b8217966f8d7ab7605/126.  
https://rinkeby.opensea.io/assets/0x5fe5163ff8c2136f3054e7b8217966f8d7ab7605/127.  
https://rinkeby.opensea.io/assets/0x5fe5163ff8c2136f3054e7b8217966f8d7ab7605/128.  
https://rinkeby.opensea.io/assets/0x5fe5163ff8c2136f3054e7b8217966f8d7ab7605/129.  


# Listed Tokens

# Opensea Storefront
https://rinkeby.opensea.io/assets/real-estate-marketplace-v19
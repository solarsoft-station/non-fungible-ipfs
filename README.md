Requirements

-There should only exist 10 SS Punk NFT's and each one of them should be unique.
-User's should be able to mint only 1 NFT with one transaction.
-The metadata for the NFT's should be stored on IPFS
-There should be a website for the NFT Collection.
-The NFT contract should be deployed on Mumbai testnet

Lets start building 🚀

For our contract, we will use a simple NFT contract, 
using the Ownable.sol from OpenZeppelin
using ERC721Enumerable- It helps us keep track of tokenIDs

HardHat!
Create contract SSPunks.sol 

Create ENV file with RPC url, and privateKey
We will deploy to Polygon Mumbai...
QuickNode or Alchemy

create script to deploy contract to polygon mumbai blockchain

add polygon mumbai details to hardhat.config.js

hardhat compile
hardhat run scripts/deploySSPunks.js --network mumbai

Check Contract deployed at 0x4646caC76A26E10748e2aD46772084E10f4835b6 (no verify)
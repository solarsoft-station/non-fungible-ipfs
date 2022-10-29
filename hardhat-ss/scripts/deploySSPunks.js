const { ethers } = require("hardhat");
require("dotenv").config({ path: ".env" });

async function main() {
    //URL from where we can extract the metadata for a SSPunk (ploaded via pinata)
  const metadataURL = "ipfs://Qmc9VkZAr4YycGtDh3YwePzEYxN5ZrZxzmZHy6XfQ4jafc/";

  /**
   * A ContractFactory in ethers.js is an abstraction used to deploy new smart contracts,
    so ssPunksContract here is a factory for instances of our SSPunks contract.
   */
  const ssPunksContract = await ethers.getContractFactory("SSPunks");

  //deploy the contract
  const deployedSSPunksContract = await ssPunksContract.deploy(metadataURL);

  //wait for deployment confirmation
  await deployedSSPunksContract.deployed();

  //print the address of the deployed contract to the console
  console.log("SSPunks Contract Address:", deployedSSPunksContract.address);
  //SSPunks Contract Address: 0xbf1D43fD093E76c097C869bA21fB2c7B59440521
}

// call the main function, then exit and catch any errors
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });

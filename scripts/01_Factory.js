const { ethers } = require("hardhat");

async function main() {
  const [deployer] = await ethers.getSigners();
  console.log("Deploying contracts with the account:", deployer.address);

  const Factory = await ethers.getContractFactory("Factory");
  const fee = ethers.utils.parseEther("0.001"); 
  const factory = await Factory.deploy(fee);
  await factory.deployed();

  console.log("Factory deployed to:", factory.address);

  return factory.address;
}

main()
  .then(address => {
    console.log(`Factory address: ${address}`);
    process.exit(0);
  })
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });


  // 0x4bECf77e939158fa04b1257aEDE233aA31e7d4b2
  // npx hardhat run scripts/01_AssetManager.js --network sepolia 


  // 0x2512E463CE79Cefe4E885298Cd6BB0b016B3DC2C


  // 0x9a1bddB2C565d83C73668a00e5494e35010f8BA8

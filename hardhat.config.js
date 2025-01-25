require("dotenv").config();
require("@nomiclabs/hardhat-ethers");

/** @type import('hardhat/config').HardhatUserConfig */
const { ALCHEMY_API_KEY, PRIVATE_KEY } = process.env;

module.exports = {
  solidity: "0.8.24",
  defaultNetwork: "edu",
  networks: {
    hardhat: {},
    edu: {
      // url: `https://eth-sepolia.g.alchemy.com/v2/${ALCHEMY_API_KEY}`,
      url: `https://rpc.open-campus-codex.gelato.digital`,
      accounts: [`0x${PRIVATE_KEY}`], // Ensure the private key is prefixed with '0x'
      chainId: 656476,
    }
  }
};
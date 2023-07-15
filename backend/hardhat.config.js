require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();

const URL = process.env.QUICKNODE_HTTP_URL;
const KEY = process.env.PRIVATE_KEY;
/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.18",
  defaultNetwork: "sepolia",
  networks: {
    sepolia: {
      url: URL,
      accounts: [KEY],
    },
  },
};

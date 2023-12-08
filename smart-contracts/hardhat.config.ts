import "@nomicfoundation/hardhat-toolbox";
import { config as DotenvConfig } from "dotenv";
import { HardhatUserConfig } from "hardhat/config";
DotenvConfig();

const config: HardhatUserConfig = {
  solidity: "0.8.20",
  networks: {
    scrollSepolia: {
      url: "https://quiet-purple-valley.scroll-testnet.quiknode.pro/2d7c11a9af5db53fb235f1040c84506e0dcf1dd2/",
      accounts:
        process.env.PRIVATE_KEY !== undefined ? [process.env.PRIVATE_KEY] : [],
    },
  },
};

export default config;

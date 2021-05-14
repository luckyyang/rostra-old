require("@nomiclabs/hardhat-waffle");
require('hardhat-abi-exporter');
require('hardhat-log-remover');
require('dotenv').config();

task("accounts", "Prints the list of accounts", async () => {
  const accounts = await ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

const privateKey = process.env.privateKey;

module.exports = {
  solidity: "0.6.12",
  settings: {
    optimizer: {
      enabled: true,
      runs: 200
    },
  },
  networks: {
    hardhat: {
      mining: {
        auto: false,
        interval: 3000
      }
    },
    heco: {
      url: "https://http-mainnet-node.huobichain.com",
      network_id: 128,
      accounts: [`${privateKey}`],
      blockGasLimit: 19500000,
      gas: 8000000,
      gasPrice: 1000000000,
    },
    heco_test: {
      url: "https://http-testnet.hecochain.com",
      network_id: 256,
      accounts: [`${privateKey}`],
      blockGasLimit: 19500000,
      gas: 8000000,
      gasPrice: 1000000000,
    },
    heco_self_node: {
      url:"http://54.238.152.156:8545",
      network_id: 128,
      accounts: [`${privateKey}`],
      blockGasLimit: 19500000,
      gas: 8000000,
      gasPrice: 1000000000,
    },
    bsc: {
      url: "https://bsc-dataseed2.binance.org/",
      network_id: 56,
      accounts: [`${privateKey}`],
      blockGasLimit: 19500000,
      gas: 8000000,
      gasPrice: 3000000000,
    },
  },
  abiExporter: {
    path: './abi',
    clear: true,
    flat: true
  }
};


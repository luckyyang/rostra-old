const { ethers } = require("hardhat");

async function main() {

  // 部署PoolConfig
  f = await ethers.getContractFactory('PoolConfig')
  poolConfig = await f.deploy();
  await poolConfig.deployed();

  console.log("poolConfig deployed to:", poolConfig.address);

  // 部署TokenCenter
  factory = await ethers.getContractFactory("TokenCenter");
  tokenCenter = await factory.deploy();
  await tokenCenter.deployed();

  console.log("tokenCenter deployed to:", tokenCenter.address);

  r = await poolConfig.add(
    '0xae3a768f9ab104c69a7cd6041fe16ffa235d1810',
    '0x0d8ce2a99bb6e3b7db580ed848240e4a0f9ae153',
    90,
    ethers.utils.parseEther('100000000000'),
    ethers.utils.parseEther('0.000001'),
    30
  );
  
  console.log(r);
  console.log("添加池子完毕---------")
  // 设置miner地址
  console.log("开始设置Miner地址---------")
  r = await lendmi.setPoolMiner(0, tokenCenter.address); 
  console.log(await r.wait());
}

main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });

const { ethers } = require("hardhat");

describe("TokenCenter Contract", function() {

  beforeEach(async function() {
    [owner, alice, bob, miner1, miner2] = await ethers.getSigners();

    // FIL
    let btcFat = await ethers.getContractFactory("MockERC20");
    btc = await btcFat.deploy(owner, 'FIL', ethers.utils.parseEther("1000000000000"));
    await btc.deployed();
  })

  // xit('更换TokenCenter Lendmi', async function() {
  //   f = await ethers.getContractFactory("TokenCenter");
  //   center = await f.attach('0x449C978b8592E853Aa7D8B68e264613ea78835aa');
  //   r = await center.setLendMiAddress('0xe18CC18C080e540860E84B19d6eDB719590876AD');
  //   console.log(r);
  // });

  xit('矿池借钱', async function() {
    f = await ethers.getContractFactory("TokenCenter");
    center = await f.attach('0x7D5526b8440C02B6819556f1F45c078B047cD7e0');

    r = await center.withdrawToken(
      0, 
      '0xae3a768f9ab104c69a7cd6041fe16ffa235d1810', 
      ethers.utils.parseEther('13000'),  //4806
    );
    console.log(r);

    // r = await center.withdrawToken(
    //   1, 
    //   '0xae3a768f9ab104c69a7cd6041fe16ffa235d1810', 
    //   ethers.utils.parseEther('78'), //78
    // );
    // console.log(r);

    // r = await center.withdrawToken(
    //   2, 
    //   '0xae3a768f9ab104c69a7cd6041fe16ffa235d1810', 
    //   ethers.utils.parseEther('9'), // 9
    // );

    // r = await center.withdrawToken(
    //   3, 
    //   '0xae3a768f9ab104c69a7cd6041fe16ffa235d1810', 
    //   ethers.utils.parseEther('107'), //107
    // );
    // console.log(r);
  });

  // xit('矿池还钱', async function() {
  //   f = await ethers.getContractFactory("TokenCenter");
  //   center = await f.attach('0x449C978b8592E853Aa7D8B68e264613ea78835aa');

  //   // FIL
  //   f = await ethers.getContractFactory("MockERC20");
  //   fil = await f.attach('0x3e1403bcd52a757Ea18885808266B331324cF94a');

  //   await fil.approve(center.address, ethers.utils.parseEther('45720'));

  //   r = await center.depositToken(
  //     0,
  //     '0x3e1403bcd52a757Ea18885808266B331324cF94a', 
  //     ethers.utils.parseEther('10000'),
  //   );
  //   console.log(r);
  // });
});
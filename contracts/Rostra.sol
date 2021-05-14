// SPDX-License-Identifier: MIT
pragma solidity 0.6.12;
pragma experimental ABIEncoderV2;

import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "@openzeppelin/contracts/token/ERC20/SafeERC20.sol";
import "@openzeppelin/contracts/math/SafeMath.sol";


abstract contract BaseRostra is Ownable {
    using SafeMath for uint256;
    using SafeERC20 for IERC20;

    // 每个池子对应的收款合约
    mapping(uint256 => address) public poolToMiner;

    // 池子信息配置合约
    address public poolConfig;
}

contract Rostra is BaseRostra {

    struct Lesson {
        uint pid;
        uint tvl;
    }

    // 构造函数
    constructor(address _poolConfig) public {
        poolConfig = _poolConfig;
    }
}

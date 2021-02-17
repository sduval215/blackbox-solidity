// SPDX-License-Identifier: MIT
pragma solidity >=0.4.21 <0.7.0;

contract BlackBox {
  address public owner;
  string public name = "BlackBox DApp";

  constructor() public {
    owner = msg.sender;
  }
}

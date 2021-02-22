// SPDX-License-Identifier: MIT
pragma solidity >=0.4.21 <0.7.0;
pragma experimental ABIEncoderV2;

/**
  @title A IPFS hashtag data mapper
  @author Steven Duval Ruilova
  @notice Still very much Proof of Concept
  @dev Roughtly version 0.0.1
 */
contract BlackBox {
  address public owner;
  string public name = "BlackBox DApp Smart Contract";

  event Publish(string hashPath, address user);

  struct Submission {
    string pathHash;
    uint256 published;
  }

  struct User {
    Submission[] submissions;
  }

  mapping(address => User) users;

  constructor() public {
    owner = msg.sender;
  }

  /**
    @dev handles submission array data returns based
    on msg.sender value
  */
  function getUserSubmissions () public view returns (Submission[] memory submissions) {
    return(users[msg.sender].submissions);
  }

  /**
    @dev handles hashPath data saving onto specific mapping
    based on msg.sender value
  */
  function publishFile (string memory hashPath) public returns (bool success) {
    users[msg.sender].submissions.push(
      Submission({
        pathHash: hashPath,
        published: now
      })
    );

    emit Publish(hashPath, msg.sender);

    return true;
  }
}

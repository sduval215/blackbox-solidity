const { assert } = require('chai');

const BlackBox = artifacts.require('./BlackBox.sol');

require('chai')
  .use(require('chai-as-promised'))
  .should();

contract('BlackBox', (accounts) => {

  let contract;

  before(async () => {
    contract = await BlackBox.deployed(); 
  })

  describe('deployment', async () => {
    it('deploys correctly', async () => {
      const address = contract.address;
      assert.notEqual(address, 0x0);
      assert.notEqual(address , '');
      assert.notEqual(address, null);
      assert.notEqual(address, undefined);
    })

    it('has a name', async () => {
      const name = await contract.name();
      assert.equal(name, 'BlackBox DApp Smart Contract');
    })

    it('has an owner', async () => {
      const owner = await contract.owner();
      assert.notEqual(owner, 0x0);
      assert.notEqual(owner , '');
      assert.notEqual(owner, null);
      assert.notEqual(owner, undefined);
    })
  })

  describe('functionality', async () => {

    it('can publish files and fetch past submissions', async () => {

      // test hashes
      const firstHashPath = "QmcWmbPe7N54oVAAwguGVhmKXEgxDCBmKzDpBrXEfAPcDe";
      const secondHashPath = "XmcWmbPe7N54oVA3wDuGVhmKXEgxDCBmKz4pBrXEfAZcDe";

      let submissions;

      // publish first file path
      await contract.publishFile(firstHashPath, { from: accounts[0] });
      
      // check user submissions after publishing first file path
      submissions = await contract.getUserSubmissions({ from: accounts[0] });

      assert.equal(submissions[0].pathHash, firstHashPath);
      assert.equal(submissions.length, 1);

      // publish second file path
      await contract.publishFile(secondHashPath, { from: accounts[0] });

      // check user submissions after publishing second file path
      submissions = await contract.getUserSubmissions({ from: accounts[0] });

      assert.equal(submissions[0].pathHash, firstHashPath);
      assert.equal(submissions[1].pathHash, secondHashPath);
      assert.equal(submissions.length, 2);
    })
  })
});
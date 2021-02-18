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
});
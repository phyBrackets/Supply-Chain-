var ItemManger = artifacts.require("./ItemManager.sol");

module.exports = function(deployer){
    deployer.deploy(ItemManager);
}
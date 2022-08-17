const EthPriceOracle = artifacts.require('EthPriceOracle')

module.exports = function (deployer) {
  deployer.deploy(EthPriceOracle, '0xDF8A894F11004AE41627e7f87fFCA342c15de821')
}
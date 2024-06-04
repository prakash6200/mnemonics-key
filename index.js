const bip39 = require('bip39');
const hdkey = require('hdkey');
const { default: Wallet } = require('ethereumjs-wallet');

const mnemonic = bip39.generateMnemonic();
console.log('Mnemonic:', mnemonic);

const seed = bip39.mnemonicToSeedSync(mnemonic);

const root = hdkey.fromMasterSeed(seed);

const addrNode = root.derive("m/44'/60'/0'/0/0");

const privateKey = addrNode.privateKey.toString('hex');
console.log('Private Key:', privateKey);

const wallet = Wallet.fromPrivateKey(addrNode.privateKey);
const address = wallet.getAddressString();
console.log('Address:', address);

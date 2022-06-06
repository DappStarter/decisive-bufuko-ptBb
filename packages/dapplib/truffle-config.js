require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'good climb surge traffic number crater remain exchange grid prize swift gate'; 
let testAccounts = [
"0x06fb85bf4bbf653d6a74a28f3375fa0b415b32926b4bc5804a638528d99f0eae",
"0x5a7be4785455be335d644a32ee16947336d4e7ac3166c9d967f3b426195a8b5e",
"0xd3b8516390bf345d69df3bf16dadafb196e9470cfc7d645ff483959dfff62e15",
"0xf5d40f00c461ffc425a6fdf2650d050904db0cf0296badf0ec90f044b4228ab7",
"0xc171d1954d958e17e3d79fcc9b6b05b7ce4de0831e14a084ef2c04b5d0836390",
"0x26a347b847b436c9c41d2c2d009ead96ae475ad4e94788f5ed88cef76c7d9f27",
"0xc27cba1ee518bd25990ebca977c7a3b65828d3952b1620b3b306d38aec7e53c4",
"0x5ebca21be11581a53e7203ceaff09888a89ca8cef4a0f982c838ca0f9b73c60c",
"0xe3e40d122e321ef0c3ad62537caf991b507772240130b55f3caa72133ce5119e",
"0xa1cf0edceadf07588565c32bf2f87f8d5b29f9d348c6d55d6471f28b077c2e22"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};


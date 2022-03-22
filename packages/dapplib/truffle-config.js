require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'inflict clock orphan spray educate robot net purity gesture fat sure tuition'; 
let testAccounts = [
"0x130497789cd20c96a3f81a8fbea07428c78cd1bb221bb0803c6682739b38730f",
"0x57936c6afb76c13567d460422ba26d7f095ffec57010ecf7845a9012aaccf675",
"0xe8c95f0ec88863eeff77e33260d6181780f051523708bdb4a7a834270c76ce97",
"0xc2474907bfbce2ba72846dee09e0a06a457ec09fd136a74805edbd2121b27292",
"0x5f39dff2a06db26aa376ce09be865dbe8d7eeb630f959f2183b13fe330387a56",
"0xd9e0432e15cbac89e70b620e427e6a194396349f2e06f7ef7172f777b2f88ec7",
"0xff223b997a17a81727585382de0965e4c98fd1fbccf07a2d136969772fee406f",
"0xac3e845825d18803e0d3fd237a91b1a0639754643928a1d32cb5d7bf4fb72c01",
"0x83e541e79bbfad64c44491323cd4c3c8d956e0d8ef50a8e9b85d5c6d6afc32f2",
"0xd40bf3ba15ab64cbc976e56f362ff0fd8c6d3e17c29338ebcc69c56e4c84ad2b"
]; 
let devUri = 'http://127.0.0.1:7545/';

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
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


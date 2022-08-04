const HDWalletProvider = require('truffle-hdwallet-provider');
const Web3 = require('web3');
const compiledFactory = require('./build/factory_campaign.json');
const provider = new HDWalletProvider(
'demand rhythm twist supreme fabric rather soft flush blur open vapor bitter',
'https://rinkeby.infura.io/v3/ec5febfc28ac4437a7a71d9b2abd2a611'
);

const web3 = new Web3(provider);

const deploy = async ()=>{
   const accounts = await web3.eth.getAccounts();
//    console.log(accounts);

   console.log('attempting to deploy a new contract from',accounts[0]);
   const result = await new web3.eth.Contract(JSON.parse(compiledFactory.interface))
    .deploy({ data: compiledFactory.bytecode })
    .send({ gas: '1000000', from: accounts[0] });
    // console.log(interface);
   //  console.log(accounts);
    console.log('Contract deployed to',result.options.address);

};
deploy();
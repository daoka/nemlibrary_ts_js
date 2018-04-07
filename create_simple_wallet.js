const nemlibrary = require('nem-library');
const NetworkTypes = nemlibrary.NetworkTypes, Password = nemlibrary.Password, SimpleWallet = nemlibrary.SimpleWallet;

nemlibrary.NEMLibrary.bootstrap(NetworkTypes.TEST_NET);
const password = new Password("password");
const simpleWallet = SimpleWallet.create("simple wallet", password);

console.log(simpleWallet.address.pretty());

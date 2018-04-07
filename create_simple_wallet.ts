import { NEMLibrary, NetworkTypes, Password, SimpleWallet } from 'nem-library';

NEMLibrary.bootstrap(NetworkTypes.TEST_NET);

const password = new Password("password");
const simpleWallet = SimpleWallet.create("simple wallet", password);

console.log(simpleWallet.address.pretty());
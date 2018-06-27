const nkn = require('nkn-client');

const client = nkn();

console.log(client.key.privateKey, client.key.publicKey);

console.log(client.identifier);
console.log(client.addr);


import * as RetellClient from 'retell-client-js-sdk';
window.RetellWebClient = RetellClient.RetellWebClient || RetellClient;
console.log("Inside bundle, RetellWebClient =", window.RetellWebClient);
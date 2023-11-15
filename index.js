Object.defineProperty(global, '_dashcore', { get(){ return undefined }, set(){} })

var dashcore = require('@dashevo/dashcore-lib');
dashcore.P2P = require('./lib');

module.exports = dashcore.P2P;

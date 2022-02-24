"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const cache_1 = require("./structures/cache");
let cache = new cache_1.Cache();
cache.set('k1', 'a');
cache.set('k2', 'b');
cache.set('k3', 'c');
cache.set('k3', 'd');
cache.set('k4', 'e');
console.log(cache.find('k3'));
console.log(cache.get());
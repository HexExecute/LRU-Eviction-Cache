"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cache = void 0;
class Cache {
    constructor() {
        this.maxLength = 3;
        this.cache = {};
        this.order = [];
    }
    find(key) {
        if (!this.cache[key])
            return { staus: 404, message: 'Key Not Found' };
        this.moveFront(key);
        return this.cache[key];
    }
    set(key, value) {
        if (!this.cache[key])
            this.order.unshift(key);
        this.cache[key] = value;
        this.moveFront(key);
        this.cacheLogic();
    }
    get() {
        return this.cache;
    }
    cacheLogic() {
        if (this.order.length > this.maxLength) {
            delete this.cache[this.order[this.order.length - 1]];
            this.order.pop();
        }
    }
    moveFront(key) {
        this.order.sort((x, y) => x == key ? -1 : y == key ? 1 : 0);
    }
}
exports.Cache = Cache;

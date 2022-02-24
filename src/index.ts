/* All code below is an example of how the cache works. */

import { Cache } from './structures/cache'

let cache = new Cache(3) // Make a new cache with max length of 3

cache.set('k1', 'a')
cache.set('k2', 'b')
cache.set('k3', 'c')
cache.set('k3', 'd')
cache.set('k4', 'e')

console.log(cache.find('k3')) // Log cache entry with key 'k3'

console.log(cache.get()) // Log the cache object (not in order)

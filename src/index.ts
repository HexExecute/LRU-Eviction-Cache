import { Cache } from './structures/cache'

let cache = new Cache()

cache.set('k1', 'a')
cache.set('k2', 'b')
cache.set('k3', 'c')
cache.set('k3', 'd')
cache.set('k4', 'e')

console.log(cache.find('k3'))

console.log(cache.get())

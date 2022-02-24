export class Cache {
	protected maxLength: number = 3
	protected cache: any = {}
	protected order: Array<string> = []

	public find(key: string): any {
		if (!this.cache[key]) return { staus: 404, message: 'Key Not Found' }
		this.moveFront(key)
		return this.cache[key]
	}

	public set(key: string, value: any): any {
		if (!this.cache[key]) this.order.unshift(key)
		this.cache[key] = value
		this.moveFront(key)
		this.cacheLogic()
	}

	public get(): any {
		return this.cache
	}

	private cacheLogic() {
		if (this.order.length > this.maxLength) {
			delete this.cache[this.order[this.order.length - 1]]
			this.order.pop()
		}
	}

	protected moveFront(key: string): void {
		this.order.sort((x: string, y: string) =>
			x == key ? -1 : y == key ? 1 : 0
		)
	}
}

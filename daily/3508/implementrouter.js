"use strict";
class Router {
    constructor(memoryLimit) {
        this.size = memoryLimit;
        this.packets = new Map();
        this.cnt = new Map();
        this.queue = [];
        this.head = 0;
    }
    _encode(source, destination, timestamp) {
        return (BigInt(source) << 40n) | (BigInt(destination) << 20n) | BigInt(timestamp);
    }
    _lb(a, x) {
        let l = 0, r = a.length;
        while (l < r) {
            const m = (l + r) >> 1;
            if (a[m] >= x)
                r = m;
            else
                l = m + 1;
        }
        return l;
    }
    _ub(a, x) {
        let l = 0, r = a.length;
        while (l < r) {
            const m = (l + r) >> 1;
            if (a[m] > x)
                r = m;
            else
                l = m + 1;
        }
        return l;
    }
    addPacket(source, destination, timestamp) {
        const key = this._encode(source, destination, timestamp);
        if (this.packets.has(key))
            return false;
        if (this.packets.size >= this.size) {
            this.forwardPacket();
        }
        this.packets.set(key, [source, destination, timestamp]);
        this.queue.push(key);
        const v = this.cnt.get(destination) || [];
        const pos = this._lb(v, timestamp);
        v.splice(pos, 0, timestamp);
        this.cnt.set(destination, v);
        return true;
    }
    forwardPacket() {
        if (this.packets.size === 0)
            return [];
        if (this.head >= this.queue.length)
            return [];
        const key = this.queue[this.head++];
        const packet = this.packets.get(key);
        if (!packet)
            return [];
        this.packets.delete(key);
        const dest = packet[1], ts = packet[2];
        const v = this.cnt.get(dest);
        if (v && v.length) {
            const pos = this._lb(v, ts);
            if (pos < v.length && v[pos] === ts)
                v.splice(pos, 1);
        }
        if (this.head > 1024 && this.head * 2 > this.queue.length) {
            this.queue = this.queue.slice(this.head);
            this.head = 0;
        }
        return packet;
    }
    getCount(destination, startTime, endTime) {
        const v = this.cnt.get(destination) || [];
        if (v.length === 0)
            return 0;
        const L = this._lb(v, startTime);
        const R = this._ub(v, endTime);
        return R - L;
    }
}
/**
 * Your Router object will be instantiated and called as such:
 * var obj = new Router(memoryLimit)
 * var param_1 = obj.addPacket(source,destination,timestamp)
 * var param_2 = obj.forwardPacket()
 * var param_3 = obj.getCount(destination,startTime,endTime)
 */
function runTests() {
    const router = new Router(3);
    console.log(router.addPacket(1, 4, 90)); // true
    console.log(router.addPacket(2, 5, 90)); // true
    console.log(router.addPacket(1, 4, 90)); // false (duplicate)
    console.log(router.addPacket(3, 5, 95)); // true
    console.log(router.addPacket(4, 5, 105)); // true (removes oldest to stay under memory limit)
    console.log(router.forwardPacket()); // [2,5,90]
    console.log(router.addPacket(5, 2, 110)); // true
    console.log(router.getCount(5, 100, 110)); // 1 ([4,5,105])
}
runTests();

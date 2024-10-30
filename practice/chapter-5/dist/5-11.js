"use strict";
/*
 */
class Target {
    print() {
        console.log("target print");
    }
}
class ProxyTarget {
    constructor(target) {
        this.target = target;
    }
    print() {
        console.log("전처리");
        this.target.print();
    }
}
const proxy = new ProxyTarget(new Target());
proxy.print();
console.log(proxy instanceof Proxy);
console.log(proxy instanceof Target);
console.log(proxy instanceof ProxyTarget);
//# sourceMappingURL=5-11.js.map
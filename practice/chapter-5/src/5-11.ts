/*
 */

interface Proxy {
  print(): void;
}

class Target implements Proxy {
  print() {
    console.log("target print");
  }
}

class ProxyTarget implements Proxy {
  constructor(private target: Target) {}

  print() {
    console.log("전처리");
    this.target.print();
  }
}

const proxy = new ProxyTarget(new Target());

proxy.print();
// console.log(proxy instanceof Proxy);
// console.log(proxy instanceof Target);
// console.log(proxy instanceof ProxyTarget);

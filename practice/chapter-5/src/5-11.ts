/*
  프록시
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

/*
  팩토리
*/

type Shoe = {
  purpose: string;
};

class BalletFlat implements Shoe {
  purpose = "dancing";
}

class Boot implements Shoe {
  purpose = "woodcutting";
}

class Sneaker implements Shoe {
  purpose = "walking";
}

// 타입스크립트는 값과 타입의 네임스페이스를 따로 관리하기 때문에 같은 이름으로 선언 가능하다
let Shoe = {
  create(type: "balletFlat" | "boot" | "sneaker"): Shoe {
    switch (type) {
      case "balletFlat":
        return new BalletFlat();
      case "boot":
        return new Boot();
      case "sneaker":
        return new Sneaker();
    }
  },
};

const boot = Shoe.create("boot");

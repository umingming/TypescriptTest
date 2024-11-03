"use strict";
/*
  프록시
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
class BalletFlat {
    constructor() {
        this.purpose = "dancing";
    }
}
class Boot {
    constructor() {
        this.purpose = "woodcutting";
    }
}
class Sneaker {
    constructor() {
        this.purpose = "walking";
    }
}
// 타입스크립트는 값과 타입의 네임스페이스를 따로 관리하기 때문에 같은 이름으로 선언 가능하다
let Shoe = {
    create(type) {
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
/*
  빌더
*/
class RequestBuilder {
    constructor() {
        this.url = null;
        this.data = null;
        this.method = null;
    }
    setURL(url) {
        this.url = url;
        return this;
    }
    setData(data) {
        this.data = data;
        return this;
    }
    setMethod(method) {
        this.method = method;
        return this;
    }
}
const colorObj = { red: "빨강", blue: "파랑", yello: "노랑" };
const colors = Object.keys(colorObj).reduce((acc, cur) => {
    acc[cur] = `color-${cur}`;
    return acc;
}, {});
console.log(colors);
//# sourceMappingURL=5-11.js.map
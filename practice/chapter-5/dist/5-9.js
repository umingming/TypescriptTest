"use strict";
class MessageQueue {
    // 생성자를 private으로 선언하면 new로 인스턴스를 생성할 수 없어진다.
    constructor(messages) {
        this.messages = messages;
    }
    //   static 함수로 인스턴스 생성할 수 있도록 한다.
    static create(messages) {
        return new MessageQueue(messages);
    }
}
// class BadQueue extends MessageQueue {
// }
// new MessageQueue([])
const queue = MessageQueue.create([]);
//# sourceMappingURL=5-9.js.map
var util = require("util");

class Foo {
    get [Symbol.toStringTag]() {
        return 'bar';
    }
}

class Bar {}

const baz = Object.create(null, { [Symbol.toStringTag]: { value: 'foo' } });

console.log(util.inspect(new Foo())); // 'Foo [bar] {}'
console.log(util.inspect(new Bar())); // 'Bar {}'
console.log(util.inspect(baz));       // '[foo] {}'
var Person = /** @class */ (function () {
    function Person(name) {
        this.name = name;
    }
    Person.prototype.greet = function () {
        console.log("\u3053\u3093\u306B\u3061\u306F\uFF0C\u79C1\u306E\u540D\u524D\u306F" + this.name + "\u3067\u3059");
    };
    return Person;
}());
var kamimura = new Person("かみむら");
kamimura.greet();

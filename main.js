var arg = process.argv;
var TodoManager = /** @class */ (function () {
    function TodoManager(str) {
        this.str = str;
        if (str == "") {
            this.getTodo();
        }
        else if (str == "add") {
            this.addTodo();
        }
        else if (str == "complete") {
            this.completeTodo();
        }
    }
    TodoManager.prototype.getTodo = function () {
    };
    TodoManager.prototype.addTodo = function () {
    };
    TodoManager.prototype.completeTodo = function () {
    };
    return TodoManager;
}());
if (process.argv.length >= 0) {
    console.log(arg[2]);
}

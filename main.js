"use strict";
exports.__esModule = true;
var arg = process.argv;
var fs = require("fs");
var MyTodo = /** @class */ (function () {
    function MyTodo(content, id) {
        this.content = content;
        this.id = id;
    }
    return MyTodo;
}());
var TodoManager = /** @class */ (function () {
    function TodoManager(args) {
        this.args = args;
        //this.myTodo = this.getTodo();
        this.myTodo = this.getTodo();
        if (args.length == 2) {
            this.displayTodo(this.myTodo);
        }
        else if (args[2] == "add") {
            this.addTodo(args[3], this.myTodo); //args[3]のTODOを登録する
        }
        else if (args[2] == "complete") {
            this.completeTodo(args[3], this.myTodo); //args[3]のTODOを完了する
        }
    }
    TodoManager.prototype.getTodo = function () {
        //const str = fs.readFileSync('todo.txt','utf8');
        //JSONから文字列リスト型に変換する
        var myTodo = new Array();
        myTodo.push(new MyTodo("hoge", 1));
        myTodo.push(new MyTodo("fuga", 2));
        return myTodo;
    };
    TodoManager.prototype.displayTodo = function (myTodo) {
        console.log(myTodo);
    };
    TodoManager.prototype.addTodo = function (arg, myTodo) {
        //myTodoにnewTodoを付け加える
        var newTodo = new MyTodo(arg, this.produceID());
        myTodo.push(newTodo);
        //myTodoをJSONに直して保存
        var todo = "{\n            \"TODO\":[\n                {\n                    \"id\":\"1\",\n                    \"todo\":\"\u722A\u3092\u5207\u308B\"\n                },\n                {\n                    \"id\":\"2\",\n                    \"todo\":\"\u98A8\u5442\u306B\u5165\u308B\"\n                }\n            ]\n        }";
        var jsonFile = JSON.parse(todo);
        fs.writeFileSync('todo.txt', jsonFile, 'utf8');
    };
    TodoManager.prototype.completeTodo = function (id_str, myTodo) {
        var id = parseInt(id_str);
    };
    TodoManager.prototype.produceID = function () {
        return 5;
    };
    return TodoManager;
}());
var todoManager = new TodoManager(arg);

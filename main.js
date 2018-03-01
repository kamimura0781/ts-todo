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
        this.myTodo = this.getTodo(); //Array<MyTodo>型で取得する
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
        var myTodo = JSON.parse(fs.readFileSync('todo.json', 'utf8'));
        return myTodo;
    };
    TodoManager.prototype.displayTodo = function (myTodo) {
        console.log(myTodo);
    };
    TodoManager.prototype.addTodo = function (arg, myTodo) {
        //myTodoにnewTodoを付け加える
        var newTodo = new MyTodo(arg, this.produceID());
        myTodo.push(newTodo);
        var jsonFile = JSON.stringify(myTodo);
        fs.writeFileSync('todo.json', jsonFile, 'utf8');
    };
    TodoManager.prototype.completeTodo = function (id_str, myTodo) {
        var id = parseInt(id_str);
        for (var i = 0; i < myTodo.length; i++) {
            if (myTodo[i].id == id) {
                var newTodo = myTodo.splice(i, 1);
                var jsonFile = JSON.stringify(myTodo);
                fs.writeFileSync('todo.json', jsonFile, 'utf8');
            }
        }
    };
    TodoManager.prototype.produceID = function () {
        var counter = parseInt(fs.readFileSync('counter.txt', 'utf8'));
        counter += 1;
        fs.writeFileSync('counter.txt', counter);
        return counter;
    };
    return TodoManager;
}());
var todoManager = new TodoManager(arg);

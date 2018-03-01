const arg = process.argv
import fs = require('fs');

interface Todo{
    content:string;
    id:number;
}

class MyTodo implements Todo{
    content:string;
    id:number;
    constructor(content:string,id:number){
        this.content = content;
        this.id = id;
    }
}

class TodoManager{
    private myTodo:Array<MyTodo>;
    constructor(public args: string[]){
        //this.myTodo = this.getTodo();
        this.myTodo = this.getTodo();
        if(args.length == 2){
            this.displayTodo(this.myTodo);
        }else if(args[2] == "add"){
            this.addTodo(args[3],this.myTodo);  //args[3]のTODOを登録する
        }else if(args[2] == "complete"){
            this.completeTodo(args[3],this.myTodo); //args[3]のTODOを完了する
        }
    }

    private getTodo(){  //TODOリストを取得
        //const str = fs.readFileSync('todo.txt','utf8');
        //JSONから文字列リスト型に変換する
        const myTodo = new Array<MyTodo>();
        myTodo.push(new MyTodo("hoge",1));
        myTodo.push(new MyTodo("fuga",2));
        return myTodo;
    }

    private displayTodo(myTodo:Array<MyTodo>){
        
        console.log(myTodo);
    }

    private addTodo(arg:string,myTodo:Array<MyTodo>){  //TODOを加える
        //myTodoにnewTodoを付け加える
        const newTodo = new MyTodo(arg,this.produceID());
        myTodo.push(newTodo);
        //myTodoをJSONに直して保存
        const todo = `{
            "TODO":[
                {
                    "id":"1",
                    "todo":"爪を切る"
                },
                {
                    "id":"2",
                    "todo":"風呂に入る"
                }
            ]
        }`;
        const jsonFile = JSON.parse(todo);
        fs.writeFileSync('todo.txt',jsonFile,'utf8');
    }

    private completeTodo(id_str:string,myTodo:Array<MyTodo>){
        const id = parseInt(id_str);

    }

    private produceID(){
        return 5;
    }
}


const todoManager = new TodoManager(arg);


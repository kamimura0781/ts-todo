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
    private myTodo:Todo[];
    constructor(public args: string[]){
        this.myTodo = this.getTodo();   //Array<MyTodo>型で取得する
        if(args.length == 2){
            this.displayTodo(this.myTodo);
        }else if(args[2] == "add"){
            this.addTodo(args[3],this.myTodo);  //args[3]のTODOを登録する
        }else if(args[2] == "complete"){
            this.completeTodo(args[3],this.myTodo); //args[3]のTODOを完了する
        }
    }

    private getTodo(){  //TODOリストを取得
        const myTodo:Todo[] = JSON.parse(fs.readFileSync('todo.json','utf8'));
        return myTodo;
    }

    private displayTodo(myTodo:Todo[]){
        console.log(myTodo);
    }

    private addTodo(arg:string,myTodo:Todo[]){  //TODOを加える
        //myTodoにnewTodoを付け加える
        const newTodo = new MyTodo(arg,this.produceID());
        myTodo.push(newTodo);
        const jsonFile = JSON.stringify(myTodo);
        fs.writeFileSync('todo.json',jsonFile,'utf8');
    }

    private completeTodo(id_str:string,myTodo:Todo[]){
        const id = parseInt(id_str);
        for(let i=0;i<myTodo.length;i++){
            if(myTodo[i].id == id){
                const newTodo = myTodo.splice(i,1);
                const jsonFile = JSON.stringify(myTodo);
                fs.writeFileSync('todo.json',jsonFile,'utf8');
            }
        }
    }


    private produceID(){
        let counter:number = parseInt(fs.readFileSync('counter.txt','utf8'))
        counter+=1;
        fs.writeFileSync('counter.txt',counter);
        return counter;
    }
}


const todoManager = new TodoManager(arg);


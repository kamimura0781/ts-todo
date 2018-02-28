const arg = process.argv

interface Todo{
    content:string;
    id:number;
}

class MyTodo implements Todo{
    content:string;
    id:number;
    str:string;
}

class TodoManager{
    private myTodo:MyTodo[];
    let myTodo = this.getTodo();
    constructor(public args: string[]){
        if(args.length == 2){
            this.displayTodo();
        }else if(args[2] == "add"){
            this.addTodo(args[3]);  //args[3]のTODOを登録する
        }else if(args[2] == "complete"){
            this.completeTodo(args[3]); //args[3]のTODOを完了する
        }
    }

    private getTodo(){  //TODOリストを取得
        import fs = require('fs');
        const str = fs.readFileSync('todo.txt','utf8');

        return str;
    }

    private displayTodo(){

    }

    private addTodo(todo:string){  //TODOを加える
        const id = 
    }

    private completeTodo(id_str:string){
        const id = parseInt(id_str);

    }
}



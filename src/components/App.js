/**
 * Created by jibin on 17/2/21.
 */
import React, {Component} from 'react';
import LocalDb from 'localDb';
import TodoAdd from './TodoAdd.js';
import TodoList from './TodoList.js';
import TodoFilter from './TodoFilter.js';

class App extends Component{
    constructor(){
        super();
        this.db = new LocalDb("react-Todos");
        this.state = {
            filter: "SHOW_ALL", //"SHOW_ALL", "SHOW_COMPLETED", "SHOW_ACTIVE"
            todos: this.db.get("todos") || []
        };
    }

    changeTodoState(id, isCompleted){
        this.state.todos.find(todo=>todo.id === id).isCompleted = isCompleted;
        this.setState({
            todos: this.state.todos
        });
        this.db.set("todos", this.state.todos);
    }

    addTodo(todoItem){
        this.state.todos.push(todoItem);
        this.setState({todos: this.state.todos});
        this.db.set("todos", this.state.todos);
    }

    changeFilter(filter){
        this.state.filter = filter;
        this.setState({filter: this.state.filter});
    }

    render(){

        return (
            <div className="todo-app">
                <h1 className="todo-title">Todos</h1>
                <TodoList todos={this.state.todos} filter={this.state.filter} changeTodoState={this.changeTodoState.bind(this)} />
                <TodoAdd addTodo={this.addTodo.bind(this)} />
                <TodoFilter changeFilter={this.changeFilter.bind(this)} />
            </div>
        );
    }
}

export default App;
/**
 * Created by jibin on 17/2/21.
 */
import React, {Component} from 'react';

class TodoAdd extends Component{

    static getId(){
        return new Date().getTime();
    }

    handleAddBtn(){
        let value = this.refs.addedText.value;
        console.log(value);
        if(!value) return false;
        let todoItem = {
            id: TodoAdd.getId(),
            text: value,
            isCompleted: false
        };
        this.refs.addedText.value = "";
        this.props.addTodo(todoItem);
    }

    render(){
        return(
            <div className="todo-add">
                <input type="text" className="todo-add-input" ref="addedText"/>
                <button className="todo-add-btn" onClick={this.handleAddBtn.bind(this)} ><i className="fa fa-plus"></i></button>
            </div>
        );
    }
}

export default TodoAdd;
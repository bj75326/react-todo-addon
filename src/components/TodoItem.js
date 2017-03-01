/**
 * Created by jibin on 17/2/21.
 */
import React, {Component} from 'react';

class TodoItem extends Component{

    handleItemClick(){
        let isCompleted = !this.props.isCompleted;
        console.log(this.props.id);
        this.props.changeTodoState(this.props.id, isCompleted);
    }

    render(){
        let className = this.props.isCompleted ? "todo todo-completed" : "todo";

        return(
            <li className={className} onClick={this.handleItemClick.bind(this)} >
                <span>{this.props.text}</span>
            </li>
        );
    }
}

export default TodoItem;
/**
 * Created by jibin on 17/2/21.
 */
import React, {Component} from 'react';
import TodoItem from './TodoItem.js';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

class TodoList extends Component{
    render(){
        let todos;
        switch(this.props.filter){
            case "SHOW_ALL":
                todos = this.props.todos;
                break;
            case "SHOW_COMPLETED":
                todos = this.props.todos.filter(todo => todo.isCompleted);
                break;
            case "SHOW_ACTIVE":
                todos = this.props.todos.filter(todo => !todo.isCompleted);
                break;
            default:
                todos = [];
        }

        return (
            <ul className="todo-list">
                <ReactCSSTransitionGroup transitionName="todo" transitionEnterTimeout={750} transitionLeaveTimeout={750}>
                    {
                        todos.map((todo)=>{
                            return <TodoItem text={todo.text} isCompleted={todo.isCompleted} id={todo.id} key={todo.id} {...this.props} />
                        })
                    }
                </ReactCSSTransitionGroup>
            </ul>
        );
    }
}

export default TodoList;
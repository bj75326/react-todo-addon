/**
 * Created by jibin on 17/2/21.
 */
import React, {Component} from 'react';

class TodoFilter extends Component{

    handleFilterClick(e){
        let filter = e.currentTarget.dataset.filter;
        this.props.changeFilter(filter);
    }

    render(){
        return (
            <div className="todo-filter">
                <a className="todo-filter-link" data-filter="SHOW_ALL" onClick={this.handleFilterClick.bind(this)}><i className="fa fa-list-ul"></i></a>
                <a className="todo-filter-link" data-filter="SHOW_ACTIVE" onClick={this.handleFilterClick.bind(this)}><i className="fa fa-times"></i></a>
                <a className="todo-filter-link" data-filter="SHOW_COMPLETED" onClick={this.handleFilterClick.bind(this)}><i className="fa fa-check"></i></a>
            </div>
        );
    }
}

export default TodoFilter;
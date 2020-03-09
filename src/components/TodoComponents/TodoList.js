// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from 'react';

import Todo from './Todo';

class TodoList extends React.Component {
    
    render() {
        return (
            <div>
                {this.props.todoList.map(item => {
                    return (
                        <Todo key={item.id} item={item} toggleComplete={this.props.toggleComplete} />
                    )
                })}
            </div>
        )
    }
}

export default TodoList
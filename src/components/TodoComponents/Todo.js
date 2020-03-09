import React from 'react';

class Todo extends React.Component {

    render() {
        return (
            <div 
                onClick={() => this.props.toggleComplete(this.props.item.id)}
                className={`task${this.props.item.completed ? ' completed' : ""}`}
            >
                <p>{this.props.item.task}</p>
            </div>
        )
    }
}

export default Todo
import React from 'react';

class Todo extends React.Component {

    render() {
        return (
            <p>{this.state.item.task}</p>
        )
    }
}

export default Todo
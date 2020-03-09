import React from 'react'

class TodoForm extends React.Component {


    render() {
        return (
            <form onSubmit={this.props.addTask}>
                <input
                    type='text'
                    value={this.state.task}
                    onChange={this.props.handleChange}
                />
            </form>
        )
    }
}

export default TodoForm
import React from 'react'

class TodoForm extends React.Component {


    render() {
        return (
            <div>
                <form onSubmit={this.props.handleSubmit}>
                    <input
                        type='text'
                        value={this.props.task}
                        onChange={this.props.handleChange}
                    />
                    <button type='submit'>Add Task</button>
                </form>
                <button onClick={this.props.clearCompleted}>Clear Completed Tasks</button>
            </div>
        )
    }
}

export default TodoForm
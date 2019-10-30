import React, { Component } from 'react'

export default class TodoForm extends Component {
    constructor(props){
        super(props);
        this.state = {
            task: ""
        }
    }

    handleChange = (e) => {
        this.setState({
            task: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.addTodoItem(this.state.task);
        this.setState({task: ""})
    }
    render() {
        return (
                <form>
                    <input type="text" onChange={this.handleChange} value={this.state.task} placeholder="Add A Todo" />
                    <button onClick={this.handleSubmit}>Add Todo</button>
                    <button onClick={this.props.clearList}>Clear List</button>
                </form>
        )
    }
}
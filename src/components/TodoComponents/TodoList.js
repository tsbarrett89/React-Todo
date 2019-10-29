// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js


import React, { Component } from 'react'
import Todo from "./Todo"

export default class TodoList extends Component {
    render() {
        return (
            <>
                {this.props.todos.map(todo=>(<Todo isCompleted={this.props.isCompleted} todo={todo} key={todo.id}></Todo>))}
            </>
        )
    }
}
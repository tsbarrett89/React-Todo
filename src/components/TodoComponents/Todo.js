import React, { Component } from 'react'
import "./Todo.css"


export default class Todo extends Component {
    render() {
        return (
            <div className={(this.props.todo.completed === true) ? "underline" : null} 
            onClick={() => this.props.isCompleted(this.props.todo.id)}>
               {this.props.todo.task} 
            </div>
        )
    }
}
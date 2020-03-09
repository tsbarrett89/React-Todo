import React from 'react';

import TodoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm';


const todoList = [
  {
    task: 'read',
    id: 1,
    completed: false
  }
]

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super();
    this.state = {
      todoList,
      task: ''
    }
  }

  handleChange = e => {
    this.setState({
      task: e.target.value
    })
  }

  addTask = (taskToAdd) => {
    const newTask = {
      task: taskToAdd,
      id: new Date(),
      completed: false
    }

    this.setState({
      todoList: [...this.state.todoList, newTask]
    })
  }

  handleSubmit = e => {
    e.preventDefault()
    this.addTask(this.state.task)
    this.setState({
      task: ''
    })
  }

  toggleComplete = taskId => {
    this.setState({
      todoList: this.state.todoList.map(task => {
        if (task.id === taskId){
          return {
            ...task,
            completed: !task.completed
          };
        } else {
          return task
        }
      })
    })
    console.log(this.state.todoList)
  }

  clearCompleted = () => {
      this.setState({
        todoList: this.state.todoList.filter(task => task.completed === false)
      })
  }

  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoForm 
          handleSubmit={this.handleSubmit}
          handleChange={this.handleChange}
          task={this.state.task}
          clearCompleted={this.clearCompleted}
        />
        <TodoList 
          todoList={this.state.todoList} 
          toggleComplete={this.toggleComplete}
        />
      </div>
    );
  }
}

export default App;

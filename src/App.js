import React from 'react';
import TodoForm from "./components/TodoComponents/TodoForm";
import TodoList from "./components/TodoComponents/TodoList";


class App extends React.Component {
  constructor(){
    super();
    this.state = {
      todos: [],
      filteredTodos: [],
      isFiltered: false
    }

  }

  componentDidMount(){
    this.setState({
      todos: (JSON.parse(localStorage.getItem("todos")) === null) ? [] : JSON.parse(localStorage.getItem("todos")),
      filteredTodos: (JSON.parse(localStorage.getItem("todos")) === null) ? [] : JSON.parse(localStorage.getItem("todos")),
    })
  }

  componentDidUpdate(){
    localStorage.setItem("todos",JSON.stringify(this.state.todos))
  }
  

  addTodoItem = (task) => {
    let newObj = {
      task: task,
      id: Math.random(),
      completed: false
    }
    this.setState({todos : [...this.state.todos, newObj], filteredTodos : [...this.state.filteredTodos, newObj]})
  }

  clearList = (e) => {
    e.preventDefault();
    this.setState({
      todos: this.state.todos.filter(todo=>{
        return todo.completed === false
      }),
      filteredTodos: this.state.todos.filter(todo=>{
        return todo.completed === false
      }) 
    })
  }


  isCompleted = (id) => {
    this.setState({
      todos: this.state.todos.map(todo=>{
        if (todo.id===id){
          return {
            ...todo,
            completed: !todo.completed,
          }
        } else{
          return todo;
        }
      }),
      filteredTodos: this.state.todos.map(todo=>{
        if (todo.id===id){
          return {
            task: todo.task,
            id: todo.id,
            completed: !todo.completed
          }
        } else{
          return todo;
        }
      }),
      
    })
  }

  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  render() {
    return (
      <div>
        <h1>Welcome to your Todo App!</h1>
        <div>
          <TodoForm addTodoItem={this.addTodoItem} clearList={this.clearList} />
          <TodoList todos={this.state.filteredTodos} isCompleted={this.isCompleted} />
        </div>
      </div>
    );
  }
}

export default App;
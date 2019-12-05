import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Navigation from './components/Navigation';
import TasksForm from './components/TasksForm';

import { tasks } from './tasks.json'

class App extends Component {
  constructor() {
    super();
    this.state = {
      tasks
    }
    this.handleAddTodo = this.handleAddTodo.bind(this);
  }

  handleAddTodo(task) {
    this.setState({
      tasks: [...this.state.tasks, task]
    })
  }

  removeTask(index_task) {
    if (window.confirm('¿Esta seguro de querer eliminar esta tarea?')){
      this.setState({
        tasks: this.state.tasks.filter((e, i) => {
          return i != index_task
        })
      })
    }
    
  }

  render() {
    const tareas = this.state.tasks.map((task, i) => {
      return (
        <div className="col-md-4">
          <div className="card mt-4">
            <div className="card-header">
              <h3>{task.title}</h3>
              <span className="badge badge-pill badge-danger ml-2">
                {task.priority}
              </span>
            </div>
            <div className="card-body">
              <p>{task.description}</p>
              <p><mark>{task.responsible}</mark></p>
            </div>
            <div className="card-footer">
              <button className="btn btn-danger" onClick={this.removeTask.bind(this, i)}>
                Eliminar
              </button>
            </div>
          </div>
        </div>
      )
    })

    return (
      <div className="App">
        <nav className="navbar navbar-dark bg-dark">
            <a href="" className="text-white">
                Tasks APP
            </a>
            <span className="badge badge-pill badge-light ml-2">
            { this.state.tasks.length } 
        </span>
        </nav>
            
        

        <div className="container">
          <div className="row mt-4">
            <div className="col-md-4">
              <TasksForm  onAddTodo={this.handleAddTodo} />
            </div>
          </div>

          <div className="col-md-9">
            <div className="row">
              { tareas }
            </div>
          </div>
        </div>
        
      
      </div>
    );
  }
}

export default App;

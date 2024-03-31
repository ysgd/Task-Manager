import React, { Component } from 'react'
import './App.css';

const tasks = [
  {id: 1,
  title: "task 1",
  description: "this is task 1",
  completed: false
  },
  {
    id:2,
    title: "task 2",
    description: "this is task 2",
    completed:true
  }
]

class App extends Component {
  constructor(props){
    super(props);
    this.state= {
      viewCompleted:false,
      taskList: tasks,
    };
  }
  displayCompleted = status => {
    if(status){
      return this.setstatus({viewCompleted:true});
    }
    return this.setstatus({viewCompleted:false});
  }

  renderTabList = () => {
    return(
      <div className ="my-5 tab-list">
        <span
          onClick={() => this.displayCompleted(true)}
          className={this.state.viewCompleted ? "active" : ""}
        >
          Completed
          </span>
        <span
          onClick={() => this.displayCompleted ? "" : "active"}
        >
          Incompleted
        </span>
      </div>
    )
  }

  // Rendering all items in list
  renderItems = () => {
    const { viewCompleted } = this.state;
    const newItems = this.state.taskList.filter(
      item => item.completed == viewCompleted
    );
  

  return newItems.map(item => (
    <li key={item.id}
    className='list-group-item d-flex justify-content-between align-items-center'>
      <span className={`todo-title mr-2 ${this.state.viewCompleted ? "completed-todo" : ""}`}>
        {item.title}
      </span>
      <span>
        <button className='btn btn-info mr-2'>Edit</button>
        <button className='btn btn-danger mr-2'>Delete</button>
      </span>
    </li>
  ))

};
  
  render(){
    return (
      <main className="context">
        <h1 className="text-black text-uppercase text-center my-4">Task Manager</h1>
        <h1 className="row">
          <div className="col-md-6 col-sma-10 mx-auto p-0">
            <div className="card p-3">
              <div>
                <button className='btn btn-dark'>Add Task</button>
              </div>
              {this.renderTabList()}
              <ul className='list-group list-group-flush'>
                {this.renderItems()}
              </ul>
            </div>
          </div>
        </h1>
      </main>
    )
  }


 
}




export default App;

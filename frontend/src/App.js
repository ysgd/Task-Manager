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
}




export default App;

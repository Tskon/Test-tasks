import React from 'react';

// components for blog layout
import Task from '../components/task';
import NewTaskForm from '../components/new-task-form'

//data
import data from '../data/data';

export default class Blog extends React.Component {
  addTask() {
    const title = document.querySelector('.new-task-title');
    const body = document.querySelector('.new-task-body');
    const btn = document.querySelector('.new-task-btn');

    btn.addEventListener('click', () => {
      data.tasks.push({
        title: title.value,
        body: body.value
      });
      this.forceUpdate();
    });
  }

  componentDidMount(){
    this.addTask();
  }

  render() {
    const tasks = data.tasks.map(function(task, i) {
      return (
        <Task data={task} key={i}/>
      )
    });
    return (
      <div className="container">
        <NewTaskForm/>
        {tasks}
      </div>
    )
  }
}
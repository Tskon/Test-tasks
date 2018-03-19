import React from 'react';

// components for blog layout
import Task from '../components/task';
import NewTaskForm from '../components/new-task-form';

//data
import data from '../data/data';

export default class Blog extends React.Component {
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
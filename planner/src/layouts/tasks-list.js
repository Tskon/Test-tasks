import React from 'react';

// components for blog layout
import Task from '../components/task';

//data
import data from '../data/data';

export default class Blog extends React.Component {
  render() {
    const tasks = data.tasks.map(function(task) {
      return (
        <Task data={task}/>
      )
    });
    return (
      <div className="container">
        {tasks}
      </div>
    )
  }
}
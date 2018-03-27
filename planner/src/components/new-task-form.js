import React from 'react';

import data from '../data/data';

export default class NewTaskForm extends React.Component {
  render() {
    return (
      <div className="new-task-form">
        <input type="text" placeholder="title" className="new-task-title"/>
        <input type="text" placeholder="body" className="new-task-body"/>
        <input type="button" value="Add" className="new-task-btn"/>
      </div>
    )

  }
}
import React from 'react';

export default class NewTaskForm extends React.Component {
  render() {
    return (
      <div className="new-task-form">
        <input type="text" placeholder="title"/>
        <input type="text" placeholder="body"/>
        <input type="button" value="Add"/>
      </div>
    )

  }
}
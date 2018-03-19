import React from 'react';

export default class Header extends React.Component {
  render() {
    return (
      <div className="task">
        <h3>{this.props.data.title}</h3>
        <p>{this.props.data.body}</p>
      </div>
    )
  }
}
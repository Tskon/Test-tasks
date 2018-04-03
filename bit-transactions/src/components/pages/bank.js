import React from 'react';

export default class Bank extends React.Component{
  render(){
    return(
      <option value={this.props.bankId}>
        {this.props.name}
      </option>
    )
  }
}
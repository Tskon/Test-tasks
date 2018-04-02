import React from 'react';

export default class Auth extends React.Component {
  render() {
    return (
      <div className="auth">
        <input type="login" placeholder="Login"/>
        <input type="password" placeholder="Password"/>
        <input type="button" value="Enter"/>
      </div>
    )
  }
}
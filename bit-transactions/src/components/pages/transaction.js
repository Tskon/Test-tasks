import React from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom'

import {delTransaction} from "../../actions/transaction-actions";

class Transition extends React.Component{
  render(){
    return(
      <tr>
        <td>{this.props.id}</td>
        <td>{this.props.amount}</td>
        <td>{this.props.bankName}</td>
        <td><a href="#" onClick={(e) => {
          e.preventDefault();
          this.props.dispatch(delTransaction(this.props.id))
        }}>
          Del
        </a>
        </td>
      </tr>
    )
  }
}

function mapStateToProps(state) {
  return {
    transactions: state.transactions
  }
}

export default withRouter(connect(mapStateToProps)(Transition));
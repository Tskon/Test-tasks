import React from 'react';
import {connect} from 'react-redux';
import {fetchTransactions} from "../../actions/transaction-actions";
import {fetchBanks} from "../../actions/bank-actions";
import {withRouter} from 'react-router-dom'

import Transition from './transaction';

class AllTransactions extends React.Component {
  constructor() {
    super(...arguments);
    this.props.dispatch(fetchTransactions());
    this.props.dispatch(fetchBanks());
  }

  render() {
    let transactions = [];
    if (this.props.transactions.transactions && this.props.banks.banks) {
      transactions = this.props.transactions.transactions.map((item, i) => {
        let bankName = 'Unknown Bank';
        this.props.banks.banks.forEach((bank) => {
          if (bank.id === item.bankId) bankName = bank.name;
        });
        
        return <Transition key={i} {...item} bankName={bankName}/>
      });
    }
    
    return (
      <div>
        <table>
          <tbody>
          <tr>
            <th>ID</th>
            <th>Amount</th>
            <th>Bank</th>
          </tr>
          {transactions}
          </tbody>
        </table>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    transactions: state.transactions,
    banks: state.banks
  }
}

export default withRouter(connect(mapStateToProps)(AllTransactions));
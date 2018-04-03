import React from 'react';
import {connect} from 'react-redux';
import {fetchBanks} from "../../actions/bank-actions";
import {addTransaction} from "../../actions/transaction-actions";
import {withRouter} from 'react-router-dom'

import Bank from './bank';

class NewTransaction extends React.Component {
  constructor() {
    super(...arguments);
    this.props.dispatch(fetchBanks());
  }

  render() {
    let banks = [];
    if (this.props.banks.banks) {
      banks = this.props.banks.banks.map((item, i) => {
        return <Bank key={i} name={item.name} bankId={item.id}/>
      });
    }

    return (
      <div className="new-transaction">
        <input type="text" placeholder="amount"/>
        <select name="bank">
          {banks}
        </select>
        <input type="button" value="Add" onClick={() => {
          const amountInput = document.querySelector("input[type='text']");
          const select = document.querySelector("select[name='bank']");
          const option = document.querySelectorAll("select[name='bank'] option");

          if (amountInput.value !== '' && !isNaN(parseFloat(+amountInput.value)) && isFinite(+amountInput.value)) {
            this.props.dispatch(addTransaction(
              {
                amount: +amountInput.value,
                bankId: +option[select.selectedIndex].value
              }
            ));
            alert('Success!')
          } else {
            alert('Input number!')
          }
        }}/>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    banks: state.banks,
    transactions: state.transactions
  }
}

export default withRouter(connect(mapStateToProps)(NewTransaction));
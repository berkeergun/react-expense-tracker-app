import React, { useContext } from "react";
import { Transaction } from "./Transaction";

import { GlobalContext } from "../context/GlobalState";

export const TransactionList = () => {
  const { transactions , deleteAllTransaction } = useContext(GlobalContext);

  // const context = useContext(GlobalContext);
  // console.log(context) // object/transactions... görünüyor
  // console.log(context.transactions); //transactions... görünüyor

  const onPress = e => {
    e.preventDefault();
    deleteAllTransaction()
  }
  
  return (
    <div>
      <h3>İşlemler</h3>
      <ul className="list">
        {transactions.map(transaction => (<Transaction key={transaction.id} transaction={transaction} />))}
      </ul>
      <button onClick={onPress} className="btn">Temizle</button>

    </div>
  );
};

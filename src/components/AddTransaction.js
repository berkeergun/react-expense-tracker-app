import React, { useState , useContext } from "react";
import { GlobalContext } from "../context/GlobalState";


export const AddTransaction = () => {
  const [text, setText] = useState("");
  const [amount, setAmount] = useState(0);

  const {addTransaction} = useContext(GlobalContext)

  // const { transactions } = useContext(GlobalContext); // deneme
  

  const onSubmit = e => {
    e.preventDefault();
    
    const newTransaction = {
      id: new Date().getTime(),
      text,
      amount:+amount 
    }

    addTransaction(newTransaction)
    console.log(newTransaction)
  }

  return (
    <div>
      <h3>Gelir Gider Ekle</h3>
      <form onSubmit={onSubmit}>
        <div className="form-control">
          <label htmlFor="text">İşlem Adı</label>
          <input
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="İşlemin Adını Giriniz"
          />
        </div>
        <div className="form-control">
          <label htmlFor="amount">
            Tutar <br />
            (+Gelir, -Gider)
          </label>
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="Tutar Giriniz..."
          />
        </div>
        <button className="btn">Gelir-Gider Ekle</button>
      </form>
    </div>
  );
};

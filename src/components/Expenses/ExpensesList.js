import React from "react"
import ExpenseItem from "./ExpenseItem";
import './ExpensesList.css'
const ExpensesList = props =>{
   

    if(props.item.length === 0){
        return  <h2 className="expenses-list__fallback">Found No expenses </h2>
    }

  return( 
   <ul className="expenses-list">
    {props.item.map((e)=>
        (
           <ExpenseItem 
           key={e.id} //unique identifier.
           title={e.title} 
           date={e.date} 
           amount={e.amount}
           />
        ))}
        </ul>
        );
}


export default ExpensesList;
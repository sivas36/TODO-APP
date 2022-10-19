
import './NewExpense.css'
import React,{useState} from "react";
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) =>{
   const[isEditing,setIsEditing] = useState(false)
     const onSaveExpenseDataHandler = (enteredExpensedate)=>{
      
      const expenseData={
            ...enteredExpensedate,
            id:Math.random().toString()
        }
      
        props.onAddExpense(expenseData);
        setIsEditing(false)
     }

     const startEditingHandler =()=>{
      setIsEditing(true);
     }

     const stopEditing=()=>{
      setIsEditing(false);
     }
     return(
        <div className="new-expense">
         {!isEditing &&
         <button onClick={startEditingHandler}>
            AddnewExpense
         </button>}
         {isEditing &&
          <ExpenseForm onSaveExpenseData={onSaveExpenseDataHandler} onCancel={stopEditing} />
        
         }
          </div>
     )
};

export default NewExpense
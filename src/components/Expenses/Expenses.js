import Card from "../UI/Card";

import './Expenses.css'
import '../UI/Card'
import ExpensesFilter from "./ExpensesFilter";
import React,{useState} from "react";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";
const Expenses = (props) =>{

    const [filteredYear,setFilteredYear] =useState('2020');
    const [arr,setFilteredarr] = useState(props.item);

    const FilterCHangeHandler = (selectedYear) =>{
       setFilteredYear(selectedYear);
       let arr2= props.item.filter((e)=>{
        return e.date.getFullYear().toString() === selectedYear;
       })   
       setFilteredarr(arr2);
    }
       
 
        
    return(
        <li>
        <Card className="expenses">

             <ExpensesFilter selected={filteredYear} onChangeFilter={FilterCHangeHandler}/> 
            <ExpensesChart expenses={arr}/>
            <ExpensesList item={arr}/>           
          </Card>
          </li>
    )
}

export default Expenses;
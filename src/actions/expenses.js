//uuid is an npm library that was loaded to generate a unique id (yarn add uuid@3.1.0)
import uuid from "uuid";

//START******************************************
//Add an expense (ACTION GENERATOR)
export const addExpense = ({
  //these are all the default values for addExpense
  description = "",
  note = "",
  amount = 0,
  createdAt = 0,
} = {}) => ({
  //properties are attached to the defaults for the addExpense object
  type: "ADD-EXPENSE",
  expense: {
    id: uuid(),
    description,
    note,
    amount,
    createdAt,
  },
});
//END****************************************

//START******************************************
//Remove an expense (ACTION GENERATOR)
export const removeExpense = ({ id } = {}) => ({
  type: "REMOVE-EXPENSE",
  id,
});
//END****************************************

//START******************************************
//Edit an expense (ACTION GENERATOR)
export const editExpense = (id, updates) => ({
  type: "EDIT-EXPENSE",
  id,
  updates,
});
//END****************************************

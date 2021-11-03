import expensesReducer from "../../reducers/expenses";
import expenses from "../fixtures/expenses";

test("should set default state", () => {
  const state = expensesReducer(undefined, { type: "@@INIT" });
  expect(state).toEqual([]);
});

test("should remove expense by id", () => {
  const action = {
    type: "REMOVE-EXPENSE",
    id: expenses[1].id,
  };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual([expenses[0], expenses[2]]);
});

test("should NOT remove expense by id not found", () => {
  const action = {
    type: "REMOVE-EXPENSE",
    id: "-1",
  };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual(expenses);
});

test("should add expense", () => {
  const newRecord = {
    id: "4",
    description: "Car",
    note: "",
    amount: 0,
    createdAt: 0,
  };
  const action = {
    type: "ADD-EXPENSE",
    newRecord,
  };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual([expenses[0], expenses[1], expenses[2], expenses[3]]);
});

test("should edit expense by id", () => {
  const amount = 123;
  const action = {
    type: "EDIT-EXPENSE",
    id: expenses[0].id,
    updates: {
      amount,
    },
  };
  const state = expensesReducer(expenses, action);
  expect(state[0].amount).toBe(amount);
});

test("should not edit expense if id not found", () => {
  const amount = 123;
  const action = {
    type: "EDIT-EXPENSE",
    id: "-1",
    updates: {
      amount,
    },
  };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual(expenses);
});

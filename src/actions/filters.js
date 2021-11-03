//START******************************************
//Set the text filter (ACTION GENERATOR)
export const setTextFilter = (text = "") => ({
  type: "TEXT-FILTER",
  text,
});
//END****************************************

//START******************************************
//Set the sortBy to amount (ACTION GENERATOR)
export const sortByAmount = () => ({
  type: "SORT-AMOUNT",
});
//END****************************************

//START******************************************
//Set the sortBy to Date (ACTION GENERATOR)
export const sortByDate = () => ({
  type: "SORT-DATE",
});
//END****************************************

//START******************************************
//Set the start date filter to a Date (ACTION GENERATOR)
export const setStartDate = (num) => ({
  type: "SET-START-DATE",
  startDate: num,
});
//END****************************************

//START******************************************
//Set the end date filter to a Date (ACTION GENERATOR)
export const setEndDate = (num) => ({
  type: "SET-END-DATE",
  endDate: num,
});
//END****************************************

import moment from "moment";
import {
  setEndDate,
  setStartDate,
  sortByDate,
  sortByAmount,
  setTextFilter,
} from "../../actions/filters";

test("should generate set start date action object", () => {
  const action = setStartDate(moment(0));
  expect(action).toEqual({
    type: "SET-START-DATE",
    startDate: moment(0),
  });
});

test("should generate set end date action object", () => {
  const action = setEndDate(moment(0));
  expect(action).toEqual({
    type: "SET-END-DATE",
    endDate: moment(0),
  });
});

test("should generate sort by date action object", () => {
  const action = sortByDate();
  expect(action).toEqual({
    type: "SORT-DATE",
  });
});

test("should generate sort by amount action object", () => {
  const action = sortByAmount();
  expect(action).toEqual({
    type: "SORT-AMOUNT",
  });
});

test("should generate set text filter action object with no value", () => {
  const action = setTextFilter("");
  expect(action).toEqual({
    type: "TEXT-FILTER",
    text: "",
  });
});

test("should generate set text filter action object with value", () => {
  const action = setTextFilter("123");
  expect(action).toEqual({
    type: "TEXT-FILTER",
    text: "123",
  });
});

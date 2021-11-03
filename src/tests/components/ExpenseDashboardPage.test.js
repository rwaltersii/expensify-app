import React from "react";
import { shallow } from "enzyme";
import ExpenseDashboardPage from "../../components/ExpenseDashboardPage";

test("should render dashboard page correctly", () => {
  const wrapper = shallow(<ExpenseDashboardPage></ExpenseDashboardPage>);
  expect(wrapper).toMatchSnapshot();
});

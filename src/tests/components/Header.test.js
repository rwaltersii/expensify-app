// react-test-render
import React from "react";
import { shallow } from "enzyme";
import Header from "../../components/Header";

test("should render Header correctly", () => {
  const wrapper = shallow(<Header></Header>);
  expect(wrapper).toMatchSnapshot();

  //expect(wrapper.find("h1").text()).toBe("Expensify");
  //   const renderer = new ReactShallowRenderer();
  //   renderer.render(<Header />);
  //   expect(renderer.getRenderOutput()).toMatchSnapshot();
});

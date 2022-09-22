import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import { screen } from "@testing-library/react";
import SignUpModel from "./SignUpModel";
import SignUpForm from "./../view/SignUpForm.jsx";


let container = null;
beforeEach(() => {
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

afterAll(() => {
  global.fetch.mockClear();
});

test("check if the app component is loaded", () => {
  act(() => {
    render(<SignUpForm />, container);
  });

  const appElement = screen.getByTestId('rabobank-signup');
  expect(appElement).toBeDefined();
});

test("renders data", async () => {
  const fakeResponse = {
    };

  jest.spyOn(global, "fetch").mockImplementation(() =>
    Promise.resolve({
      json: () => Promise.resolve(fakeResponse)
    })
  );

  const user = {firstName: "Lakshmi", lastName: "Bhaskar", email: "priya.sagu@gmail.com", password: "Qwertyui"};

  jest.mock('react', () => ({
    useState: (initial) => [initial, user]
  }));

   act(() => {
    render(<SignUpForm />, container);
  });

  expect(global.fetch).toHaveBeenCalledWith('https://demo-api.now.sh/users');
  expect(global.fetch).toHaveBeenCalledTimes(1);
});
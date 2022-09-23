import React from "react";
import { submitForm } from "./SignUpModel.js";

test("renders data", async () => {
  const user = {firstName: "Lakshmi", lastName: "Bhaskar", email: "priya.sagu@gmail.com", password: "Qwertyui"};
  fetch.mockImplementationOnce(() => Promise.resolve(user));
  const submit = submitForm(user);

  expect(fetch).toHaveBeenCalledWith('https://demo-api.now.sh/users');
});
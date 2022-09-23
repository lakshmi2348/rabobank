import React from 'react';
import { mount } from 'enzyme/build';
import SignUpForm from './view/SignUpForm';
import Adapter from 'enzyme-adapter-react-15';

describe('Signup Controller testing', () => {
const controller = mount(<SignUpForm />);

const controllerInstance = controller.instance();
console.log('controllerInstance', controllerInstance);
});
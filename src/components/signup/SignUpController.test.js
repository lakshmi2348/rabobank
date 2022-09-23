import { render, screen } from "@testing-library/react";
import SignUpForm from './view/SignUpForm';
import SignUpController from './SignUpController';

describe('Signup Controller testing', () => {

    test('testing controller functions', () => {
        const controller = new SignUpController();
        controller.state.user = {};
        const event = {
            preventDefault: jest.fn()
        }
        controller.handleSubmit(event);
        expect(controller.state.user).toEqual({});
    });
});
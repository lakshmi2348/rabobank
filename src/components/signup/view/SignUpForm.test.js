import { render, screen } from "@testing-library/react";
import SignUpForm from "./SignUpForm.jsx";
import SignUpController from "./../SignUpController";

describe('SignUpForm Component', () => {
    let component = {};
    beforeEach(() => {
        component.state = {
            user : {
                firstName: "Lakshmi",
                lastName: "Bhaskar",
                email: "priya.sagu@gmail.com",
                password: "123"
            },
            errors : {}
        };
    });

    test('renders firstname input field', () => {
        const signupcontroller = new SignUpController();
        signupcontroller.state.user = {
            firstName: "Lakshmi",
            lastName: "Bhaskar",
            email: "priya.sagu@gmail.com",
            password: "123"
        };

        signupcontroller.state.errors = {};
        const signupform = render(<SignUpForm />);
        console.log('signupform', signupform);
        const titleElement = screen.getByTestId('rabobank-signup-firstname');
        expect(titleElement).toBeInTheDocument();
    });

})
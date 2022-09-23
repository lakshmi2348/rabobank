import { render, screen } from "@testing-library/react";
import SignUpForm from "./SignUpForm.jsx";

describe('SignUpForm Component', () => {
    let that = this;
    beforeEach(() => {
        that.state({
            user: {
                firstName: "Lakshmi",
                lastName: "Bhaskar",
                email: "priya.sagu@gmail.com",
                password: "123"
            }
        })
    })
    test('renders firstname input field', () => {
        render(<SignUpForm />);
        const titleElement = screen.getByTestId('rabobank-signup-firstname');
        expect(titleElement).toBeInTheDocument();
    });

    test('renders lastname input field', () => {
        render(<SignUpForm />);
        const titleElement = screen.getByTestId('rabobank-signup-lastname');
        expect(titleElement).toBeInTheDocument();
    });

    test('renders email input field', () => {
        render(<SignUpForm />);
        const titleElement = screen.getByTestId('rabobank-signup-email');
        expect(titleElement).toBeInTheDocument();
    });

    test('renders password input field', () => {
        render(<SignUpForm />);
        const titleElement = screen.getByTestId('rabobank-signup-password');
        expect(titleElement).toBeInTheDocument();
    });

    test('renders submit button', () => {
        render(<SignUpForm />);
        const titleElement = screen.getByTestId('rabobank-signup-submit');
        expect(titleElement).toBeInTheDocument();
    });
})
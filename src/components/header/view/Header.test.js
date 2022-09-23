import { render, screen } from "@testing-library/react";
import Header from "./Header.jsx";

describe('Header Component', () => {
    test('renders header logo', () => {
        render(<Header></Header>);
        const imgElement = screen.getByAltText('rabologo');
        expect(imgElement).toBeInTheDocument();
    });

    test('renders header title', () => {
        render(<Header></Header>);
        const titleElement = screen.getByText('Rabobank');
        expect(titleElement).toBeInTheDocument();
    });
})
import { render, screen } from "@testing-library/react";
import ContactUs from "../ContactUs";
import '@testing-library/jest-dom';


describe('contact us page tese case', () => {

    test('Should load the contact us page', () => {
        render(<ContactUs/>);

        const heading = screen.getByRole('heading');
        expect(heading).toBeInTheDocument();
    });

    test('Should load the buttton inside contact page', () => {
        render(<ContactUs/>);

        const button = screen.getByRole('button');
        expect(button).toBeInTheDocument();
    });

    test('Should load the input inside contact page', () => {
        render(<ContactUs/>);

        const input = screen.getByPlaceholderText('name');
        expect(input).toBeInTheDocument();
    });
    // queriying
    test('Should load all input boxes inside contact page', () => {
        render(<ContactUs/>);
        const input = screen.getAllByRole('textbox');
        // assertion
        expect(input.length).toBe(3);
    });
})
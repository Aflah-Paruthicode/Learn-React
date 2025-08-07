import { fireEvent, render, screen } from "@testing-library/react";
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import appStore from '../../utils/appStore';
import Header from '../Header';
import '@testing-library/jest-dom'

it('Should render the header component with login button', () => {
    render(
        <BrowserRouter >
        <Provider store={appStore} >
            <Header />
        </Provider>
        </BrowserRouter>
    )

    const loginButton = screen.getByRole('button');
    expect(loginButton).toBeInTheDocument();

})

it('Should render the header component with login button', () => {
    render(
        <BrowserRouter >
        <Provider store={appStore} >
            <Header />
        </Provider>
        </BrowserRouter>
    )

    const loginButton = screen.getByRole('button',{name:'Login'});
    fireEvent.click(loginButton)
    const logoutButton = screen.getByRole('button',{name:'Logout'})
    expect(logoutButton).toBeInTheDocument();

})

it('Should render the header component with 0 elements in cart', () => {
    render(
        <BrowserRouter >
        <Provider store={appStore} >
            <Header />
        </Provider>
        </BrowserRouter>
    )

    const isCartEmpty = screen.getByText('Cart(0)');
    expect(isCartEmpty).toBeInTheDocument();

})
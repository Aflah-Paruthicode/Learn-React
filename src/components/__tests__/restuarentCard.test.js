import { render, screen } from '@testing-library/react'
import RestuarentCard from '../RestuarentCard'
import MOCK_DATA from '../mocks/resCardMock.json'
import '@testing-library/jest-dom'

it('Should load the restuarent cards component with props Data', () => {
    render(
        <RestuarentCard restuarent={MOCK_DATA} />
    )

    const name = screen.getByText('Pizza Hut');
    expect(name).toBeInTheDocument();
})
import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';

jest.mock('react-dom/client', () => ({
    createRoot: jest.fn(),
}));

describe('index.js', () => {
    it('renders the App component inside React.StrictMode', () => {
        const mockRender = jest.fn();
        const mockRoot = { render: mockRender };
        createRoot.mockReturnValue(mockRoot);

        const mockElement = document.createElement('div');
        mockElement.id = 'root';
        document.body.appendChild(mockElement);

        require('./index.js');

        expect(createRoot).toHaveBeenCalledWith(mockElement);
        expect(mockRender).toHaveBeenCalledWith(
            <React.StrictMode>
                <App />
            </React.StrictMode>
        );
    });
});
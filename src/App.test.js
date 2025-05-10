import App from './App';
import { render, screen } from '@testing-library/react';

// Mock window.matchMedia
beforeAll(() => {
  window.matchMedia = window.matchMedia || function () {
    return {
      matches: false,
      addListener: jest.fn(),
      removeListener: jest.fn(),
    };
  };
});

describe('App Component', () => {
  test('renders the title', () => {
    render(<App />);
    const titleElement = screen.getByText(/Thiaguera Music App/i);
    expect(titleElement).toBeInTheDocument();
  });

  test('renders the Select Note slider', () => {
    render(<App />);
    const sliderLabel = screen.getByText(/Select Note/i);
    expect(sliderLabel).toBeInTheDocument();
  });

  test('renders the Select Grades dropdown', () => {
    render(<App />);
    const gradesLabel = screen.getByText(/Select Grades/i);
    expect(gradesLabel).toBeInTheDocument();
  });
});


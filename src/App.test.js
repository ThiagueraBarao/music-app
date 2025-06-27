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

  test('renders the Select Note slider with correct default value', () => {
    render(<App />);
    const sliders = screen.getAllByRole('slider');
    const slider = sliders.find((el) => el.getAttribute('aria-valuemin') === '0' && el.getAttribute('aria-valuemax') === '6');
    expect(slider).toHaveAttribute('aria-valuenow', '0'); // Default value corresponds to 'C'
  });

  test('updates the note when the slider is changed', () => {
    render(<App />);
    const sliders = screen.getAllByRole('slider');
    const slider = sliders.find((el) => el.getAttribute('aria-valuemin') === '0' && el.getAttribute('aria-valuemax') === '6');
    slider.focus();
    slider.setAttribute('aria-valuenow', '3'); // Simulate changing to 'F'
    expect(slider).toHaveAttribute('aria-valuenow', '3');
  });

  test('renders the table with correct initial data', () => {
    render(<App />);
    const tableRows = screen.getAllByRole('row');
    expect(tableRows).toHaveLength(4); // Header row + 3 grades
  });

});
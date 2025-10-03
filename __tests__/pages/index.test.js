import React from 'react';
import { render, screen } from '@testing-library/react';
import Home from '../../pages/index';

// Mock the Nav component
jest.mock('../../components/nav', () => {
  return function Nav() {
    return <nav data-testid="mock-nav">Mock Nav</nav>;
  };
});

describe('Home Page', () => {
  it('renders the home page', () => {
    render(<Home />);
    expect(screen.getByRole('heading', { level: 1 })).toBeInTheDocument();
  });

  it('renders the welcome heading', () => {
    render(<Home />);
    const heading = screen.getByRole('heading', { level: 1 });
    expect(heading).toHaveTextContent('Welcome to Naked Vision TV');
  });

  it('renders the description paragraph', () => {
    render(<Home />);
    const paragraph = screen.getByText('Wait and see what we have in store');
    expect(paragraph).toBeInTheDocument();
  });

  it('renders the Nav component', () => {
    render(<Home />);
    const nav = screen.getByTestId('mock-nav');
    expect(nav).toBeInTheDocument();
  });
});

import React from 'react';
import { render, screen } from '@testing-library/react';
import Nav from '../../components/nav';

describe('Nav Component', () => {
  it('renders the nav component', () => {
    render(<Nav />);
    const nav = screen.getByRole('navigation');
    expect(nav).toBeInTheDocument();
  });

  it('renders Home link', () => {
    render(<Nav />);
    const homeLink = screen.getByText('Home');
    expect(homeLink).toBeInTheDocument();
  });

  it('renders ZEIT link', () => {
    render(<Nav />);
    const zeitLink = screen.getByText('ZEIT');
    expect(zeitLink).toBeInTheDocument();
    expect(zeitLink).toHaveAttribute('href', 'https://zeit.co/now');
  });

  it('renders GitHub link', () => {
    render(<Nav />);
    const githubLink = screen.getByText('GitHub');
    expect(githubLink).toBeInTheDocument();
    expect(githubLink).toHaveAttribute('href', 'https://github.com/zeit/next.js');
  });

  it('renders three list items', () => {
    render(<Nav />);
    const listItems = screen.getAllByRole('listitem');
    expect(listItems).toHaveLength(3);
  });
});

import { render, screen } from '@testing-library/react';

import Component from './Component';

describe('Component', () => {
  it('Should mount', () => {
    render(<Component />);
    expect(screen.getByText('Hello')).toBeInTheDocument();
  });
});

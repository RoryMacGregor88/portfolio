import { screen, render } from '@testing-library/react';

import ContactForm from './contact-form.component';

let onSubmit = null;

describe('Contact Form', () => {
  beforeEach(() => {
    onSubmit = jest.fn();
  });

  it('should render', () => {
    render(<ContactForm onSubmit={onSubmit} disableSubmit={false} />);

    expect(screen.getByRole('button', { name: /submit/i })).toBeInTheDocument();
  });

  it('should disable submit button if form is invalid', () => {});

  it('should enable submit button if form is valid', () => {});

  it('should disable submit button if disableSubmit prop is true', () => {});

  it('should display error well if error returned from server');

  it('should successfully submit form');

  it('should display success well if request is successful');
});

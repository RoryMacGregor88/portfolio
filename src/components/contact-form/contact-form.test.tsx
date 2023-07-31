import { screen, render } from '@testing-library/react';

import userEvent from '@testing-library/user-event';

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

  it('should disable submit button if form is invalid', () => {
    render(<ContactForm onSubmit={onSubmit} disableSubmit={false} />);

    expect(screen.getByRole('button', { name: /submit/i })).toBeDisabled();
  });

  it('should disable submit button if disableSubmit prop is true', () => {
    render(<ContactForm disableSubmit={true} />);

    expect(screen.getByRole('button', { name: /submit/i })).toBeDisabled();
  });

  it('should enable submit button if form is valid', async () => {
    render(<ContactForm onSubmit={onSubmit} disableSubmit={false} />);

    await userEvent.type(
      screen.getByPlaceholderText('Contact email address'),
      'example@test.com'
    );
    await userEvent.type(
      screen.getByPlaceholderText('Subject'),
      'Test subject'
    );
    await userEvent.type(
      screen.getByPlaceholderText('Message'),
      'Test message'
    );

    expect(screen.getByRole('button', { name: /submit/i })).toBeEnabled();
  });

  it('should successfully submit form', async () => {
    const email = 'example@test.com',
      subject = 'Test subject',
      message = 'Test message';

    render(<ContactForm onSubmit={onSubmit} disableSubmit={false} />);

    await userEvent.type(
      screen.getByPlaceholderText('Contact email address'),
      email
    );
    await userEvent.type(screen.getByPlaceholderText('Subject'), subject);
    await userEvent.type(screen.getByPlaceholderText('Message'), message);

    await userEvent.click(screen.getByRole('button', { name: /submit/i }));

    const expected = {
      email,
      subject,
      message,
    };

    expect(onSubmit).toHaveBeenCalledWith(expected);
  });
});

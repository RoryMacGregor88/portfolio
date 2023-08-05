import fetchMock, { enableFetchMocks } from 'jest-fetch-mock';

import { screen, render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import Contact from './page';

enableFetchMocks();

describe('Contact Page', () => {
  it('should render', () => {
    render(<Contact />);

    expect(
      screen.getByRole('button', { name: /go to linkedin/i })
    ).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /submit/i })).toBeInTheDocument();
  });

  it('should copy email to clipboard', async () => {
    const writeText = jest.fn();

    Object.assign(navigator, {
      clipboard: {
        writeText,
      },
    });

    render(<Contact />);

    await userEvent.click(
      screen.getByRole('button', { name: /copy email to clipboard/i })
    );

    expect(writeText).toHaveBeenCalledWith('rorymacgregordev@outlook.com');
  });

  it('should show error well if error response returned from server', async () => {
    const message = 'test-error-message';

    fetchMock.mockResponse(JSON.stringify({ message }));

    render(<Contact />);

    await userEvent.type(
      screen.getByPlaceholderText('Contact email address'),
      'example@email.com'
    );
    await userEvent.type(
      screen.getByPlaceholderText('Subject'),
      'Test subject'
    );
    await userEvent.type(
      screen.getByPlaceholderText('Message'),
      'Test message'
    );

    await userEvent.click(screen.getByRole('button', { name: /submit/i }));

    expect(screen.getByText(message)).toBeInTheDocument();
  });

  it('should show success well if error response returned from server', async () => {
    fetchMock.mockResponse(JSON.stringify({ ok: true }));

    render(<Contact />);

    await userEvent.type(
      screen.getByPlaceholderText('Contact email address'),
      'example@email.com'
    );
    await userEvent.type(
      screen.getByPlaceholderText('Subject'),
      'Test subject'
    );
    await userEvent.type(
      screen.getByPlaceholderText('Message'),
      'Test message'
    );

    await userEvent.click(screen.getByRole('button', { name: /submit/i }));

    expect(screen.getByText('Success!')).toBeInTheDocument();
  });
});

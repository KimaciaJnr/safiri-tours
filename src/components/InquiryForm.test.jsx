import { describe, it, expect, afterEach, vi } from 'vitest';
import { render, screen, cleanup } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import InquiryForm from './InquiryForm';

describe('InquiryForm', () => {
  afterEach(() => {
    cleanup();
    vi.restoreAllMocks();
  });

  it('opens WhatsApp with the prefilled inquiry on valid submit', async () => {
    const openSpy = vi.spyOn(window, 'open').mockImplementation(() => null);
    const user = userEvent.setup();

    render(<InquiryForm />);

    await user.type(screen.getByPlaceholderText('Your name'), 'Jane Doe');
    await user.type(screen.getByPlaceholderText('Email address'), 'jane@example.com');
    await user.type(screen.getByPlaceholderText('Dream destination, e.g. Serengeti'), 'Masai Mara');
    await user.type(screen.getByPlaceholderText('Any questions or trip ideas...'), 'Looking for a 3-day trip in July.');
    await user.click(screen.getByRole('checkbox'));
    await user.click(screen.getByRole('button', { name: /Send My Inquiry/i }));

    expect(openSpy).toHaveBeenCalledTimes(1);

    const url = openSpy.mock.calls[0][0];
    expect(url).toContain('https://wa.me/254712345678');
    expect(url).toContain(encodeURIComponent('Jane Doe'));
    expect(url).toContain(encodeURIComponent('jane@example.com'));
    expect(url).toContain('Masai%20Mara');
  });

  it('shows the opening state on the submit button when sending', async () => {
    vi.spyOn(window, 'open').mockImplementation(() => null);
    const user = userEvent.setup();

    render(<InquiryForm />);

    await user.type(screen.getByPlaceholderText('Your name'), 'Jane Doe');
    await user.type(screen.getByPlaceholderText('Email address'), 'jane@example.com');
    await user.type(screen.getByPlaceholderText('Dream destination, e.g. Serengeti'), 'Masai Mara');
    await user.click(screen.getByRole('checkbox'));
    await user.click(screen.getByRole('button', { name: /Send My Inquiry/i }));

    expect(screen.getByRole('button', { name: /Opening WhatsApp/i })).toBeInTheDocument();
  });

  it('does not open WhatsApp when required fields are empty', async () => {
    const openSpy = vi.spyOn(window, 'open').mockImplementation(() => null);
    const user = userEvent.setup();

    render(<InquiryForm />);

    await user.click(screen.getByRole('checkbox'));
    await user.click(screen.getByRole('button', { name: /Send My Inquiry/i }));

    expect(openSpy).not.toHaveBeenCalled();
  });

  it('pre-fills the destination and message from the URL package parameter', () => {
    window.history.replaceState(null, '', '#inquiry?package=3%20Day%20Masai%20Mara%20Safari');

    render(<InquiryForm />);

    expect(screen.getByPlaceholderText('Dream destination, e.g. Serengeti').value).toBe(
      '3 Day Masai Mara Safari'
    );
    expect(
      screen.getByPlaceholderText('Any questions or trip ideas...').value
    ).toContain('interested in the 3 Day Masai Mara Safari safari');
  });
});
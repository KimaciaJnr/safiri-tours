import { describe, it, expect } from 'vitest';
import { siteContact, whatsappLink } from './site';

describe('site data', () => {
  it('exposes valid contact details', () => {
    expect(siteContact.email).toMatch(/^[^@\s]+@[^@\s]+\.[^@\s]+$/);
    expect(siteContact.whatsappNumber).toMatch(/^\d+$/);
    expect(siteContact.phoneInternational).toContain(siteContact.whatsappNumber);
  });

  it('builds a wa.me link with the WhatsApp number', () => {
    expect(whatsappLink()).toBe(`https://wa.me/${siteContact.whatsappNumber}`);
  });

  it('encodes message text into the wa.me link', () => {
    expect(whatsappLink('hello world & more')).toBe(
      `https://wa.me/${siteContact.whatsappNumber}?text=hello%20world%20%26%20more`,
    );
  });
});
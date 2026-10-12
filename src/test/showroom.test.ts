import { describe, expect, it } from 'vitest';
import { showroom, whatsappUrl, selectProducts } from '../config/showroom';

describe('showroom accuracy and enquiries', () => {
  it('does not create a live WhatsApp link before a showroom number is supplied', () => {
    expect(whatsappUrl('Diwali jewellery collection', '')).toBeNull();
  });
  it('prefills the selected collection enquiry for a configured number', () => {
    const url = whatsappUrl('Diwali jewellery collection', '919876543210');
    expect(url).toBe('https://wa.me/919876543210?text=' + encodeURIComponent('Hello, I am interested in your Diwali jewellery collection. Please share the available designs and current offers.'));
  });
  it('keeps BIS hallmarked gold claims disabled until verified', () => {
    expect(showroom.bisVerified).toBe(false);
  });
  it('keeps certified diamond claims disabled until verified', () => {
    expect(showroom.diamondsVerified).toBe(false);
  });
  it('filters diamond collection to diamond products', () => {
    expect(selectProducts('diamonds').map(p => p.name)).toEqual(['Elegant Diamond Ring']);
  });
});
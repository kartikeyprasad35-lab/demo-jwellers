import necklace from '@/assets/products/necklace.jpg';
import ring from '@/assets/products/ring.jpg';
import bangles from '@/assets/products/bangles.jpg';
import bridal from '@/assets/products/bridal.jpg';
import earrings from '@/assets/products/earrings.jpg';
import mangalsutra from '@/assets/products/mangalsutra.jpg';
import diwali from '@/assets/offers/diwali.jpg';
import navratri from '@/assets/offers/navratri.jpg';
import wedding from '@/assets/offers/wedding.jpg';

/** Replace empty values with verified showroom information before launch.
 * WhatsApp: international digits only, e.g. country code 91 followed by the real number.
 * Never use a dummy number: empty means enquiries show an honest setup notice.
 */
export const showroom = {
  name: 'ROYAL AURUM', tagline: 'JEWELS OF DISTINCTION', logoUrl: '', whatsappNumber: '',
  address: '', phone: '', email: '', openingHours: '', mapsEmbedUrl: '',
  instagramUrl: '', facebookUrl: '', bisVerified: false, diamondsVerified: false,
  storyTitle: 'Crafted with Passion. Chosen for a Lifetime.',
  story: 'Discover jewellery that celebrates your traditions, milestones, and most meaningful moments.',
};
export const collections = [
  { slug: 'gold-necklaces', name: 'Gold Necklaces', image: necklace },
  { slug: 'diamond-rings', name: 'Diamond Rings', image: ring },
  { slug: 'traditional-bangles', name: 'Traditional Bangles', image: bangles },
  { slug: 'bridal-jewellery', name: 'Bridal Jewellery', image: bridal },
  { slug: 'gold-earrings', name: 'Gold Earrings', image: earrings },
  { slug: 'mangalsutras', name: 'Mangalsutras', image: mangalsutra },
];
export const products = [
  { id: 'royal-necklace', name: 'Royal Gold Necklace', category: 'Gold Jewellery', collection: 'gold-necklaces', image: necklace },
  { id: 'temple-necklace', name: 'Heritage Temple Necklace', category: 'Traditional Jewellery', collection: 'gold-necklaces', image: diwali },
  { id: 'diamond-ring', name: 'Elegant Diamond Ring', category: 'Diamond Jewellery', collection: 'diamond-rings', image: ring },
  { id: 'gold-bangles', name: 'Traditional Gold Bangles', category: 'Gold Jewellery', collection: 'traditional-bangles', image: bangles },
  { id: 'kundan-set', name: 'Bridal Kundan Set', category: 'Bridal Jewellery', collection: 'bridal-jewellery', image: bridal },
  { id: 'gold-earrings', name: 'Premium Gold Earrings', category: 'Gold Jewellery', collection: 'gold-earrings', image: earrings },
  { id: 'mangalsutra', name: 'Timeless Gold Mangalsutra', category: 'Traditional Jewellery', collection: 'mangalsutras', image: mangalsutra },
];
export const offers = [
  { id: 'diwali', eyebrow: 'THE FESTIVAL OF LIGHTS', title: 'Diwali Dhanteras Special', subtitle: 'Celebrate prosperity with timeless jewellery.', label: 'Festive Collection Coming Soon', cta: 'Explore Collection', image: diwali, enquiry: 'Diwali jewellery collection' },
  { id: 'navratri', eyebrow: 'A CELEBRATION OF TRADITION', title: 'Navratri Utsav', subtitle: 'Celebrate every colour of tradition with exquisite jewellery.', label: 'Special Festive Offers', cta: 'View Offers', image: navratri, enquiry: 'Navratri jewellery collection' },
  { id: 'wedding', eyebrow: 'FOR YOUR FOREVER', title: 'The Bridal Edit', subtitle: 'Jewellery that makes your forever moments unforgettable.', label: 'Discover Bridal Luxury', cta: 'Explore Bridal', image: wedding, enquiry: 'wedding season bridal collection' },
];
export function whatsappUrl(topic: string, number = showroom.whatsappNumber) {
  if (!/^\d{10,15}$/.test(number)) return null;
  return `https://wa.me/${number}?text=${encodeURIComponent(`Hello, I am interested in your ${topic}. Please share the available designs and current offers.`)}`;
}
export function selectProducts(slug: string) {
  if (slug === 'gold') return products.filter(p => p.category !== 'Diamond Jewellery' && p.category !== 'Bridal Jewellery');
  if (slug === 'diamonds') return products.filter(p => p.category === 'Diamond Jewellery');
  if (slug === 'bridal') return products.filter(p => p.collection === 'bridal-jewellery');
  return products.filter(p => p.collection === slug);
}

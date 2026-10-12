import { createFileRoute } from '@tanstack/react-router';
import { HeroSection, CollectionGrid, FestiveOffers, FeaturedProducts, TrustSection, AboutSection, Testimonials, ShowroomSection } from '@/components/store/storefront';
export const Route = createFileRoute('/')({
  head: () => ({ meta: [
    { title: 'Royal Aurum — Where Elegance Meets Eternity' },
    { name: 'description', content: 'Explore Royal Aurum’s gold, diamond, bridal and festive jewellery collections. Discover timeless Indian jewellery with prices on request.' },
    { property: 'og:title', content: 'Royal Aurum — Where Elegance Meets Eternity' },
    { property: 'og:description', content: 'Gold, diamonds and bridal jewellery for your most precious moments.' },
    { property: 'og:type', content: 'website' }, { name: 'twitter:card', content: 'summary_large_image' },
  ] }), component: Index,
});
function Index() { return <main><HeroSection /><CollectionGrid /><FestiveOffers /><FeaturedProducts /><TrustSection /><AboutSection /><Testimonials /><ShowroomSection /></main>; }

# Royal Aurum storefront

## Local development
Install dependencies with `bun install`, then run `bun run dev -- --port 8080`.
Run tests with `bun run test`. To prepare a production bundle outside Lovable, run `bun run build`; preview it with `bun run preview`.
The site uses React, TypeScript, Tailwind v4 and Vite through the existing TanStack Start framework. No additional framework or backend was introduced.

## Files created or changed
- `src/styles.css`: luxury design system, layout and responsive styling.
- `src/config/showroom.ts`: showroom identity, catalogue, collection data, offers, verification switches and WhatsApp URL helper.
- `src/components/store/storefront.tsx`: shared navigation, sections, search, wishlist, enquiry dialogs and footer.
- `src/components/ui/button.tsx`: luxury and editorial button variants.
- `src/routes/__root.tsx`: shared storefront shell, fonts and favicon.
- `src/routes/index.tsx`: complete homepage and page metadata.
- `src/routes/collections.$collection.tsx`, `festive-offers.tsx`, `about.tsx`, `contact.tsx`: complete content pages with individual metadata.
- `src/assets/`: generated jewellery campaign images and individually cropped product/offer photographs.
- `public/favicon.svg`: crown brand mark; removed template favicon.
- `src/test/showroom.test.ts`: accuracy safeguards, enquiry formatting and collection filter tests.
- `AGENTS.md`, `roadmap.md`, `CUSTOMIZATION.md`: architecture and handover notes.

## Replace before launch
In `src/config/showroom.ts`, update `showroom.name`, `tagline`, `logoUrl`, `whatsappNumber` (international digits only), `address`, `phone`, `email`, `openingHours`, `instagramUrl`, `facebookUrl`, and the showroom story. Empty fields intentionally display pending details or hide unavailable links. Replace route titles and brand-specific prose when changing the showroom name.

Update `offers` with confirmed promotional copy and status. There are no invented discounts, rates, waivers or expiry dates. Review festival timing before launch. BIS and diamond certification switches must remain false unless the showroom verifies the claims.

All jewellery photography is AI-generated and illustrative. Replace products and photos with accurate showroom stock, approved prices/specifications and properly licensed photography. Replace clearly marked sample testimonials with consented real customer reviews.

Provide a verified Google Maps embed URL in `mapsEmbedUrl`; until then a labelled map placeholder is shown. No Maps API or external lookup is connected. Validate the embed on your authorized deployed website.

WhatsApp is not live without a real number. Once configured, buttons open WhatsApp with a selected-collection message. Test the number and messages before launch. Search works across the sample catalogue; wishlists last for the current visit only. No shopping bag, checkout, payments, inventory or user accounts are implied. This is an enquiry-led storefront.

## Launch checklist
1. Supply and verify all showroom details, actual imagery, reviews, offer terms and certification claims.
2. Add legal/privacy and business policy pages appropriate to the real business before collecting customer data or taking orders.
3. Test WhatsApp, showroom location, product availability, mobile navigation and external social links.
4. Confirm prices and offers directly with the showroom; remove sample labels only after actual content is supplied.
5. Publish through Lovable when ready; configure your domain. Nothing has been published automatically.
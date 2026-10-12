<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

## Storefront architecture
- Keep showroom details, sample catalogue, promotional copy and certification switches in `src/config/showroom.ts`; one configuration source prevents inconsistent or invented claims.
- Use the existing TanStack Start router with dedicated collection, festive, about and contact routes; preserve SSR and typed navigation instead of adding another router.
- Keep reusable storefront UI and session-only wishlist/search state in `src/components/store/storefront.tsx`; no customer data persistence or checkout is implied by this enquiry-led catalogue.
- Route every WhatsApp enquiry through the shared URL helper and component; missing contact configuration must show an honest notice rather than send to a dummy number.
- Define visual styling and semantic colour tokens in `src/styles.css`; shared controls use the Button luxury and editorial variants.

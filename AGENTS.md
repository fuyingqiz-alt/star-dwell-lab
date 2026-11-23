# Architecture rules
- Keep existing detail routes available when changing homepage navigation, so previously shared links remain valid.
- Store confirmed consultation offerings in one typed data module, so rendered prices and booking subjects cannot diverge.
- Render testimonials only through the public, deidentified approval filter; never seed production testimonials with examples.
- Use shared accessible image dialogs for testimonial screenshots and booking QR codes, so zoom behavior and keyboard dismissal remain consistent.
- Keep this revision frontend-only with bilingual copy and contact links; no booking data is collected by the site.
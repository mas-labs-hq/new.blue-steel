==========================================================
Blue Nile Rolling Mills Ltd - Steel & Building Materials
E-Commerce Website
README-SETUP (v3.2)
==========================================================

V3.2 UPDATE (mobile cart drawer fix)
-------------------------------------
  On phones, the cart drawer's "Review Cart" and "Order on
  WhatsApp" buttons could sit BELOW the visible screen (behind
  the browser address bar) with no way to scroll to them.
  Fixed: the drawer, quick-view modal, contact form and nav
  drawer now size themselves to the REAL visible screen height
  (100dvh + a JS height tracker for older phones). The cart
  item list scrolls smoothly inside the drawer and the buttons
  stay pinned at the bottom, always reachable.

V3.1 UPDATE (go-live domain)
-----------------------------
  The SEO now uses the real domain https://bluenileltd.com in
  every canonical URL, Open Graph/Twitter tag, JSON-LD block,
  robots.txt and sitemap.xml. Nothing else changed - v3.0 files
  are superseded by the ones listed below.
  If you prefer serving the site at www.bluenileltd.com instead,
  find-replace "https://bluenileltd.com" -> "https://www.bluenileltd.com"
  across index.html, shop.html, cart.html, checkout.html,
  robots.txt and sitemap.xml, and set a 301 redirect from the
  non-www version on your host so Google only indexes one form.

V2.1 UPDATE (visual polish)
--------------------------
  1. Header/footer logo now displays at the reference site's exact
     sizes (60px desktop / 48px tablet / 42px mobile header, 55px
     footer) so the company name is fully readable. Earlier builds
     squeezed the wide logo into a small square.
  2. Hero slider backgrounds replaced with sharp high-resolution
     banners: TMT steel bars, box profile mabati roofing and a water
     storage tank (1536x768, optimized JPG).
  3. Fixed the mobile navigation drawer: the hamburger menu now
     opens a proper slide-in panel with a dark overlay. In earlier
     builds the menu content sat invisibly below the footer.

V3.0 UPDATE (final round)
-------------------------
  1. TESTIMONIALS: 7 customer reviews on the homepage (mixed 3/4/5 star
     ratings, Kenyan names with positions, natural tone) plus an average
     rating summary card. Fully responsive.
  2. CATEGORY UX: on the shop page, selecting a category now smooth-scrolls
     the visitor straight to the results (previously mobile users were left
     at the top of the category list). Also auto-scrolls when arriving from
     a homepage category card.
  3. SEO: unique keyword-rich titles/descriptions per page, canonical URLs,
     Open Graph + Twitter cards, JSON-LD structured data (Organization,
     LocalBusiness, WebSite search, Breadcrumbs), robots.txt + sitemap.xml.
     (Domain updated to the real one, bluenileltd.com, in v3.1.)
  4. REAL CONTACTS ACTIVE: phone/WhatsApp +254 733 355 564 everywhere
     (top bar, footers, sidebar, drawer, WhatsApp ordering, checkout).
     The email spot is now an "Email Us" button that opens a contact form
     (Name, Email, Message) - submissions and ALL checkout orders are
     emailed through Formspree endpoint https://formspree.io/f/myezrgeq
     with clearly labelled fields (customer, phone, address, county,
     payment method, itemized order, totals).
  5. MOBILE: testimonials, contact modal, email buttons and the order flow
     all verified smooth at 390px.

  FILES CHANGED IN V3.2 (replace these on the server):
     index.html, shop.html, cart.html, checkout.html
     (only the asset version number ?v=3.2.0 changed in these -
     it forces browsers to load the fixed CSS/JS instead of a
     cached copy), plus style.css, script.js, README-SETUP.txt
  FILES CHANGED IN V3.0 (already in your v3.1 copy):
     index.html, shop.html, cart.html, checkout.html,
     script.js, style.css, README-SETUP.txt
  FILES ADDED IN V3.0 (upload these new):
     robots.txt, sitemap.xml

WHAT THIS IS
------------
A complete 4-page e-commerce website for a construction steel
and building materials business, built as a faithful duplicate
of the reference site's design and user experience (same
structure, styling, animations, cart system and checkout flow).
The catalog carries the full product range: KIFARU steel (TMT
bars, round bars, hollow sections), wire mesh, fencing, nails,
cement, mabati and roofing, pipes, tiles, bathroom ware, water
tanks and construction chemicals. Real contact details
(phone/WhatsApp +254 733 355 564, Formspree email forms) are
already active.

PAGES
-----
  index.html      Homepage: hero slider, categories, promo banners,
                  featured products, about/story, trust bar, footer
  shop.html       Full catalog (106 products) with category group
                  filters, live search & price sorting
  cart.html       Cart review with quantity steppers + FAQ section
  checkout.html   Billing form + order summary + payment method.
                  Placing an order shows a well-designed
                  "Order Placed" popup that auto-dismisses, then a
                  full order receipt with a WhatsApp confirm button.

FILES
-----
  style.css       All styling (reference palette: navy #132235 +
                  gold #f5a623, Inter font)
  script.js       All logic + CONFIG + PRODUCTS data (edit here!)
  assets/         Original logo (logo-2.png), hero images, product
                  photos (same imagery as the reference site)
  icons/          Complete favicon set built from the logo emblem
  favicon.ico     Root favicon (all modern browsers)

==========================================================
CONTACT DETAILS - ALREADY LIVE (change here if ever needed)
==========================================================

The real details below were wired in during v3.0. To change
any of them later, these are the exact spots:

1) PHONE NUMBER (+254 733 355 564)
   Appears in top bar, footer, shop sidebar, mobile drawer,
   cart page and checkout page, plus the tel: links.
   Find-and-replace across all .html files: +254 733 355 564
   (and tel:+254733355564 for the link versions).

2) WHATSAPP NUMBER (254733355564)
   Powers the WhatsApp order buttons, the floating chat
   button and the checkout "Confirm via WhatsApp" message.
   Find-and-replace across all .html files AND script.js:
   254733355564 (international format, no plus, no spaces).

3) EMAIL / CONTACT FORM
   The "Email Us" buttons open a contact form (Name, Email,
   Message). Submissions are emailed through the Formspree
   endpoint set in script.js -> CONFIG (see the Formspree
   section below).

4) LOCATION
   "Thika, Kenya" in footers and the story text - replace with
   the client's real location if different.

5) PRICES & PRODUCTS
   All products, sizes/variants and prices live in ONE place:
   script.js -> the PRODUCTS array (top of the file).
   106 products across 48 categories. Edit freely; the whole
   site (homepage, shop, search, cart, checkout, WhatsApp
   message) updates automatically. The 8 products featured on
   the homepage are listed in FEATURED_IDS (just below PRODUCTS).

6) STORY / ABOUT TEXT
   index.html -> "Our Story & Heritage" section. The history
   (2006 wire products, 2012 rolling mill, KIFARU 500+) mirrors
   the reference site - adjust dates and details to the client's
   real story if needed.

BRAND & LOGO
------------
The site is branded "Blue Nile Rolling Mills Ltd" and uses the
original logo (assets/logo-2.png) throughout: header, footer,
checkout header, mobile drawer and favicons (the "B" rebar
emblem). If the client ever wants a different logo, replace
assets/logo-2.png (keep the same file name) and regenerate
icons/ from the square emblem on the left side of the logo.

==========================================================
FORMSPREE INTEGRATION (ALREADY ACTIVE)
==========================================================
The endpoint https://formspree.io/f/myezrgeq is already set
in script.js -> CONFIG (formspreeEndpoint). Both contact
form inquiries and every checkout order are emailed there
with clearly labelled fields (customer name, phone, email,
delivery address, county, payment method, itemized order
rows, subtotal/VAT/total, order reference).

To switch to a different Formspree inbox later:
1. Open script.js
2. Find CONFIG at the very top
3. Change formspreeEndpoint to the new endpoint
4. Save. Done - no other code changes required.

TIP: after hosting goes live, confirm the first real order
arrives in the Formspree inbox (check spam too).

==========================================================
HOSTING
==========================================================
This is a 100% static website - no server, no database.
Upload the entire folder contents (index.html, shop.html,
cart.html, checkout.html, style.css, script.js, assets/,
icons/, favicon.ico) to any web host:
cPanel file manager, Netlify drop, Vercel, GitHub Pages, etc.

The cart is stored in the visitor's browser (localStorage),
so it survives page reloads and navigation between pages.

==========================================================
NOTES
==========================================================
- WhatsApp ordering: the header button, floating button, mobile
  drawer, shop sidebar and the post-checkout receipt all open
  WhatsApp with a pre-composed message. The checkout also
  composes a full order summary (items, VAT breakdown, customer
  details, order reference) into the WhatsApp message.
- Order references are generated per browser session (format:
  BNRM-XXXXXXX).
- VAT display follows the reference site's convention: prices
  are VAT-inclusive; the checkout splits out 16% VAT for display.
- Category links support both exact categories ("TMT Bars",
  "Cement") and group keywords ("Steel", "Mabati", "Fencing",
  "Tiles", "Wire Mesh", "Nails", "Pipes", "Bathroom") - the
  group behaviour matches the reference site.

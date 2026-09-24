==========================================================
Blue Nile Rolling Mills Ltd - Steel & Building Materials
E-Commerce Website
README-SETUP (v2.1)
==========================================================

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

WHAT THIS IS
------------
A complete 4-page e-commerce website for a construction steel
and building materials business, built as a faithful duplicate
of the reference site's design and user experience (same
structure, styling, animations, cart system and checkout flow).
The catalog carries the full product range: KIFARU steel (TMT
bars, round bars, hollow sections), wire mesh, fencing, nails,
cement, mabati and roofing, pipes, tiles, bathroom ware, water
tanks and construction chemicals. Contact details are
placeholders ready to be swapped.

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
IMPORTANT - PLACEHOLDERS TO REPLACE BEFORE GOING LIVE
==========================================================

1) PHONE NUMBER
   Current placeholder: +254xxxxxx  (appears in top bar, footer,
   cart page, checkout page, tel: links)
   Do a find-and-replace across all .html files: +254xxxxxx

2) EMAIL ADDRESS
   Current placeholder: info@bizxxxx.com
   Find-and-replace across all .html files: info@bizxxxx.com

3) WHATSAPP NUMBER
   Current placeholder: 254XXXXXXXXX
   Find-and-replace across all .html files AND script.js:
   254XXXXXXXXX  ->  e.g. 254712345678 (international format,
   no plus sign, no spaces). This powers the WhatsApp order
   buttons, the floating chat button and the checkout
   "Confirm via WhatsApp" message.

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
FORMSPREE INTEGRATION (for emailing checkout details)
==========================================================
When you get the Formspree endpoint from the client:

1. Open script.js
2. Find CONFIG at the very top
3. Set formspreeEndpoint like this:
      formspreeEndpoint: 'https://formspree.io/f/abcdwxyz'
4. Save. Done.

Every placed order will then be POSTed to Formspree
(customer details + items + totals) as JSON, while the
"Order Placed" popup and receipt continue to work as normal.
No other code changes are required.

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

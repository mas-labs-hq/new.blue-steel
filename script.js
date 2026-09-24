/* =========================================================
   Blue Nile Rolling Mills Ltd - script.js
   Duplicate architecture of the reference e-commerce site.
   Placeholder contacts are set in CONFIG below - replace them
   when the client provides real details (see README-SETUP.txt).
   ========================================================= */

/* ============ CONFIG - EDIT THESE VALUES ONLY ============ */
const CONFIG = {
  brandName: 'Blue Nile Rolling Mills Ltd',
  phone: '+254xxxxxx',            // ← REPLACE with real phone e.g. +254712345678
  whatsapp: '254XXXXXXXXX',       // ← REPLACE with real WhatsApp digits e.g. 254712345678
  email: 'info@bizxxxx.com',      // ← REPLACE with real email
  location: 'Thika, Kenya',
  // OPTIONAL (later): paste Formspree endpoint here to email every checkout,
  // e.g. 'https://formspree.io/f/abcdwxyz' - leave '' to disable.
  formspreeEndpoint: ''
};
const WHATSAPP_PHONE = CONFIG.whatsapp;

/* ===================== PRODUCTS ===================== */
const PRODUCTS = [
  {
    id: 1, category: 'TMT Bars', name: 'KIFARU TMT Bars', badge: 'Grade BS 4449',
    image: 'assets/products/tmt-bars-1.jpg',
    images: ['assets/products/tmt-bars-1.jpg', 'assets/products/tmt-bars-2.png'],
    description: 'Premium concrete reinforcement rebars with thermo-mechanical treatment for superior strength and seismic resistance.',
    fromPrice: 430,
    variants: [
      { label: 'D8 (8mm) - 12m piece', price: 430 },
      { label: 'D10 (10mm) - 12m piece', price: 650 },
      { label: 'D12 (12mm) - 12m piece', price: 850 },
      { label: 'D16 (16mm) - 12m piece', price: 1490 },
      { label: 'D20 (20mm) - 12m piece', price: 2250 },
      { label: 'D25 (25mm) - 12m piece', price: 3190 },
      { label: 'D32 (32mm) - 12m piece', price: 4390 }
    ]
  },
  {
    id: 2, category: 'TMT Rings', name: 'KIFARU TMT Rings / Stirrups', badge: 'KEBS Certified',
    image: 'assets/products/tmt-rings-1.jpg',
    images: ['assets/products/tmt-rings-1.jpg', 'assets/products/tmt-rings-2.jpg'],
    description: 'Pre-bent column rings and stirrups for structural concrete reinforcement.',
    fromPrice: 30,
    variants: [
      { label: '6x6" - per piece', price: 30 },
      { label: '8x8" - per piece', price: 40 },
      { label: '9x9" - per piece', price: 50 },
      { label: '10x10" - per piece', price: 60 },
      { label: '12x12" - per piece', price: 70 },
      { label: '16x16" - per piece', price: 80 },
      { label: '18x18" - per piece', price: 90 }
    ]
  },
  {
    id: 3, category: 'BRC Mesh', name: 'KIFARU BRC Mesh', badge: 'KEBS Certified',
    image: 'assets/products/kifaru-brc-mesh-1.jpeg',
    images: ['assets/products/kifaru-brc-mesh-1.jpeg', 'assets/products/kifaru-brc-mesh-2.jpeg'],
    description: 'Reinforced concrete mesh panels for slabs, floors and structural reinforcement.',
    fromPrice: 5700,
    variants: [
      { label: 'A610 (2.5mm) - per sheet', price: 5700 },
      { label: 'A66 (3.0mm) - per sheet', price: 7900 },
      { label: 'A65 (4.0mm) - per sheet', price: 9800 },
      { label: 'A98 (5.0mm) - per sheet', price: 11900 },
      { label: 'A142 (6.0mm) - per sheet', price: 15900 }
    ]
  },
  {
    id: 4, category: 'Chain Link', name: 'KIFARU Chain Link (Galvanized)', badge: '18m Roll',
    image: 'assets/products/chainlink-galvanized-1.jpg',
    images: ['assets/products/chainlink-galvanized-1.jpg', 'assets/products/chainlink-galvanized-2.jpg', 'assets/products/chainlink-galvanized-3.png'],
    description: 'Wholesale prices for Galvanized Chain Link (Length 18 meters). High-durability boundary fencing.',
    fromPrice: 1250,
    variants: [
      { label: '16G (1.6mm) - 4 ft (18m)', price: 1250 },
      { label: '16G (1.6mm) - 5 ft (18m)', price: 1870 },
      { label: '16G (1.6mm) - 6 ft (18m)', price: 2490 },
      { label: '16G (1.6mm) - 7 ft (18m)', price: 2960 },
      { label: '16G (1.6mm) - 8 ft (18m)', price: 3740 },
      { label: '16G (1.6mm) - 9 ft (18m)', price: 4340 },
      { label: '16G (1.6mm) - 10 ft (18m)', price: 4825 },
      { label: '16G (1.6mm) - 11 ft (18m)', price: 5285 },
      { label: '16G (1.6mm) - 12 ft (18m)', price: 5680 },
      { label: '15G (1.8mm) - 4 ft (18m)', price: 1850 },
      { label: '15G (1.8mm) - 5 ft (18m)', price: 2270 },
      { label: '15G (1.8mm) - 6 ft (18m)', price: 2650 },
      { label: '15G (1.8mm) - 7 ft (18m)', price: 2980 },
      { label: '15G (1.8mm) - 8 ft (18m)', price: 3540 },
      { label: '15G (1.8mm) - 9 ft (18m)', price: 3950 },
      { label: '15G (1.8mm) - 10 ft (18m)', price: 4540 },
      { label: '15G (1.8mm) - 11 ft (18m)', price: 4960 },
      { label: '15G (1.8mm) - 12 ft (18m)', price: 5420 },
      { label: '14G (2.0mm) - 4 ft (18m)', price: 2380 },
      { label: '14G (2.0mm) - 5 ft (18m)', price: 2960 },
      { label: '14G (2.0mm) - 6 ft (18m)', price: 3465 },
      { label: '14G (2.0mm) - 7 ft (18m)', price: 3965 },
      { label: '14G (2.0mm) - 8 ft (18m)', price: 4460 },
      { label: '14G (2.0mm) - 9 ft (18m)', price: 4950 },
      { label: '14G (2.0mm) - 10 ft (18m)', price: 5360 },
      { label: '14G (2.0mm) - 11 ft (18m)', price: 5970 },
      { label: '14G (2.0mm) - 12 ft (18m)', price: 6450 },
      { label: '12.5G (2.5mm) - 4 ft (18m)', price: 3270 },
      { label: '12.5G (2.5mm) - 5 ft (18m)', price: 3755 },
      { label: '12.5G (2.5mm) - 6 ft (18m)', price: 3970 },
      { label: '12.5G (2.5mm) - 7 ft (18m)', price: 4180 },
      { label: '12.5G (2.5mm) - 8 ft (18m)', price: 4780 },
      { label: '12.5G (2.5mm) - 9 ft (18m)', price: 5460 },
      { label: '12.5G (2.5mm) - 10 ft (18m)', price: 5945 },
      { label: '12.5G (2.5mm) - 11 ft (18m)', price: 6650 },
      { label: '12.5G (2.5mm) - 12 ft (18m)', price: 7170 }
    ]
  },
  {
    id: 5, category: 'Round Bars', name: 'KIFARU Round Bars', badge: 'KEBS Certified',
    image: 'assets/products/round-bars-1.jpeg',
    images: ['assets/products/round-bars-1.jpeg', 'assets/products/round-bars-2.jpg'],
    description: 'High-quality mild steel round bars for fabrication, fencing and general construction.',
    fromPrice: 130,
    variants: [
      { label: 'R6 (6mm) - 12m piece', price: 130 },
      { label: 'R8 (8mm) - 12m piece', price: 330 },
      { label: 'R10 (10mm) - 12m piece', price: 480 },
      { label: 'R12 (12mm) - 12m piece', price: 680 },
      { label: 'R16 (16mm) - 12m piece', price: 860 },
      { label: 'R20 (20mm) - 12m piece', price: 1180 },
      { label: 'R25 (25mm) - 12m piece', price: 1790 },
      { label: 'R32 (32mm) - 12m piece', price: 2350 }
    ]
  },
  {
    id: 6, category: 'Chicken Mesh', name: 'Chicken Mesh (Galvanized Hexagonal)', badge: 'Hexagonal',
    image: 'assets/products/chicken-mesh-1.jpg',
    images: ['assets/products/chicken-mesh-1.jpg', 'assets/products/chicken-mesh-2.jpg'],
    description: 'Galvanized hexagonal wire mesh opening for poultry enclosures, agricultural fences and partitions.',
    fromPrice: 1080,
    variants: [
      { label: 'Gauge 22 ½" (13 mm) - 3ft x 30m', price: 1180 },
      { label: 'Gauge 22 ½" (13 mm) - 4ft x 30m', price: 1650 },
      { label: 'Gauge 20 1" (25 mm) - 3ft x 30m', price: 1080 },
      { label: 'Gauge 20 1" (25 mm) - 4ft x 30m', price: 1550 },
      { label: 'Gauge 20 1" (25 mm) - 6ft x 30m', price: 2150 },
      { label: '18 Gauge 2" (50 mm) - 4ft x 30m', price: 2100 },
      { label: '18 Gauge 2" (50 mm) - 6ft x 30m', price: 2950 }
    ]
  },
  {
    id: 7, category: 'Mild Plate', name: 'KIFARU Mild Plate', badge: 'KEBS Certified',
    image: 'assets/products/mild-plate-1.jpg',
    images: ['assets/products/mild-plate-1.jpg', 'assets/products/mild-plate-2.jpg'],
    description: 'Versatile mild steel plates for fabrication, construction and industrial applications.',
    fromPrice: 2970,
    variants: [
      { label: '16G 1.6mm - 4ftx8ft sheet', price: 2970 },
      { label: '14G 2.0mm - 4ftx8ft sheet', price: 3780 },
      { label: '13G 2.5mm - 4ftx8ft sheet', price: 4850 },
      { label: '11G 3.0mm - 4ftx8ft sheet', price: 5900 },
      { label: '8G 4.0mm - 4ftx8ft sheet', price: 6500 }
    ]
  },
  {
    id: 8, category: 'Common Nails', name: 'Common Nails', badge: 'Wholesale',
    image: 'assets/products/common-nails-1.jpg',
    images: ['assets/products/common-nails-1.jpg', 'assets/products/common-nails-2.jpg'],
    description: 'High-tensile common nails for general construction, roofing and carpentry.',
    fromPrice: 90,
    variants: [
      { label: '1" & 1.5" - per Kg', price: 90 },
      { label: '1" & 1.5" - 25Kg bag', price: 2250 },
      { label: '1" & 1.5" - 50Kg bag', price: 4500 },
      { label: '2", 2.5", 3", 4", 5" - per Kg', price: 130 },
      { label: '2", 2.5", 3", 4", 5" - 25Kg bag', price: 3250 },
      { label: '2", 2.5", 3", 4", 5" - 50Kg bag', price: 6500 },
      { label: '6" - per Kg', price: 170 },
      { label: '6" - 25Kg bag', price: 4250 },
      { label: '6" - 50Kg bag', price: 8500 }
    ]
  },
  {
    id: 9, category: 'Roofing Nails', name: 'Roofing Nails - Galvanized', badge: 'Galvanized',
    image: 'assets/products/roofing-nails-1.jpg',
    images: ['assets/products/roofing-nails-1.jpg', 'assets/products/roofing-nails-2.jpg', 'assets/products/roofing-nails-3.jpg'],
    description: 'Galvanized roofing nails with leak-proof washers for corrugated and tile roofing sheets.',
    fromPrice: 190,
    variants: [
      { label: '2½ inch - per kg', price: 190 },
      { label: '2½ inch - 25kg bag', price: 4750 },
      { label: '2½ inch - 50kg bag', price: 9500 }
    ]
  },
  {
    id: 10, category: 'U-Nails', name: 'U-Nails (Staple Nails)', badge: 'Galvanized',
    image: 'assets/products/u-nails-1.jpg',
    images: ['assets/products/u-nails-1.jpg', 'assets/products/u-nails-2.jpg'],
    description: 'Galvanized U-shaped staple nails for fencing, wire attachment and agricultural post fastening.',
    fromPrice: 240,
    variants: [
      { label: '1"-3" - per kg', price: 240 },
      { label: '1"-3" - 25kg bag', price: 6000 }
    ]
  },
  {
    id: 11, category: 'Anti-Climb Fence', name: 'Anti-Climb Security Fence', badge: 'High Security',
    image: 'assets/products/anti-climb-fence-1.jpg',
    images: ['assets/products/anti-climb-fence-1.jpg', 'assets/products/anti-climb-fence-2.jpg'],
    description: 'High-security anti-climb perimeter fencing panels for residential estates, factories and institutions.',
    fromPrice: 5800,
    variants: [
      { label: '1.8m height - 3m panel', price: 5800 },
      { label: '2.1m height - 3m panel', price: 7900 },
      { label: '2.4m height - 3m panel', price: 10900 }
    ]
  },
  {
    id: 12, category: 'Wire Rods', name: 'Hot-Rolled Wire Rods', badge: 'Per Kg',
    image: 'assets/products/wire-rods-1.jpg',
    images: ['assets/products/wire-rods-1.jpg', 'assets/products/wire-rods-2.jpg'],
    description: 'Hot-rolled wire rods used as raw material for nail, mesh and wire manufacturing.',
    fromPrice: 97,
    variants: [
      { label: '5.5mm - per kg', price: 97 },
      { label: '6.0mm - per kg', price: 101 },
      { label: '6.5mm - per kg', price: 107 },
      { label: '8.0mm - per kg', price: 114 }
    ]
  },
  {
    id: 13, category: 'Concrete Nails', name: 'Concrete Nails - Hardened Steel', badge: 'Hardened',
    image: 'assets/products/concrete-nails-1.jpg',
    images: ['assets/products/concrete-nails-1.jpg', 'assets/products/concrete-nails-2.jpg', 'assets/products/concrete-nails-3.png.png', 'assets/products/concrete-nails-4.png.png'],
    description: 'Hardened steel concrete nails for masonry, concrete walls and brick fixing.',
    fromPrice: 245,
    variants: [
      { label: '1"-4" - per kg', price: 245 },
      { label: '1"-4" - 25kg bag', price: 6125 }
    ]
  },
  {
    id: 14, category: 'Weld Mesh', name: 'KIFARU Weld Mesh', badge: 'KEBS Certified',
    image: 'assets/products/kifaru-weld-mesh-1.jpg',
    images: ['assets/products/kifaru-weld-mesh-1.jpg', 'assets/products/kifaru-weld-mesh-2.jpg', 'assets/products/kifaru-weld-mesh-3.jpg'],
    description: 'Welded wire mesh panels for partitions, cages, security grilles and floor reinforcement.',
    fromPrice: 350,
    variants: [
      { label: 'Light 2.0mm - 2.4mx1.2m sheet', price: 350 },
      { label: 'Medium 2.5mm - 2.4mx1.2m sheet', price: 450 },
      { label: 'Heavy 3.0mm - 2.4mx1.2m sheet', price: 650 }
    ]
  },
  {
    id: 15, category: 'Expanded Metal', name: 'KIFARU Expanded Metal', badge: 'Heavy Duty',
    image: 'assets/products/kifaru-expanded-metal-1.jpg',
    images: ['assets/products/kifaru-expanded-metal-1.jpg', 'assets/products/kifaru-expanded-metal-2.jpg', 'assets/products/kifaru-expanded-metal-3.jpg'],
    description: 'Heavy-duty expanded metal sheets for security doors, window grilles and industrial walkways.',
    fromPrice: 1500,
    variants: [
      { label: 'Standard 2.0mm - 8ftx4ft sheet', price: 1500 },
      { label: 'Heavy Duty 3.0mm - 8ftx4ft sheet', price: 2500 }
    ]
  },
  {
    id: 16, category: 'Copper Gas Rods', name: 'KIFARU Copper Gas Rods', badge: 'Premium Grade',
    image: 'assets/products/copper-gas-rods-1.jpg',
    images: ['assets/products/copper-gas-rods-1.jpg', 'assets/products/copper-gas-rods-2.jpg', 'assets/products/copper-gas-rods-3.jpg'],
    description: 'High-quality copper coated gas welding rods for industrial steel and pipe fabrication.',
    fromPrice: 40,
    variants: [
      { label: 'Per Rod (All Diameters) @Ksh 40', price: 40 },
      { label: '1.6mm (60 pcs/kg) - 1kg pack', price: 2400 },
      { label: '1.6mm - 25kg carton', price: 60000 },
      { label: '2.0mm (40 pcs/kg) - 1kg pack', price: 1600 },
      { label: '2.0mm - 25kg carton', price: 40000 },
      { label: '2.5mm (25 pcs/kg) - 1kg pack', price: 1000 },
      { label: '2.5mm - 25kg carton', price: 25000 },
      { label: '3.2mm (15 pcs/kg) - 1kg pack', price: 600 },
      { label: '3.2mm - 25kg carton', price: 15000 }
    ]
  },
  {
    id: 17, category: 'Rectangular Hollow Sections', name: 'Kifaru Rectangular Hollow Sections (RHS)', badge: 'RHS',
    image: 'assets/products/kifaru-rectangular-hallow-1.jpeg',
    images: ['assets/products/kifaru-rectangular-hallow-1.jpeg', 'assets/products/kifaru-rectangular-hallow-2.jpg', 'assets/products/kifaru-rectangular-hallow-3.jpg'],
    description: 'High-quality Rectangular Hollow Sections (RHS) for structural steel frameworks and gates.',
    fromPrice: 790,
    variants: [
      { label: '20x40 mm 1.5 mm - 6m piece', price: 790 },
      { label: '20x40 mm 2.0 mm - 6m piece', price: 970 },
      { label: '25x50 mm 1.5 mm - 6m piece', price: 970 },
      { label: '25x50 mm 2.0 mm - 6m piece', price: 1350 },
      { label: '40x40 mm 1.5 mm - 6m piece', price: 1350 },
      { label: '40x40 mm 2.0 mm - 6m piece', price: 1670 },
      { label: '40x60 mm 2.0 mm - 6m piece', price: 1890 },
      { label: '50x50 mm 2.0 mm - 6m piece', price: 2150 },
      { label: '50x75 mm 2.5 mm - 6m piece', price: 2650 },
      { label: '75x75 mm 2.5 mm - 6m piece', price: 2950 },
      { label: '100x50 mm 2.5 mm - 6m piece', price: 3150 },
      { label: '100x100 mm 3.0 mm - 6m piece', price: 3870 }
    ]
  },
  {
    id: 18, category: 'Square Hollow Sections', name: 'Kifaru Square Hollow Sections (SHS)', badge: 'SHS',
    image: 'assets/products/kifaru-square-hallow-1.jpeg',
    images: ['assets/products/kifaru-square-hallow-1.jpeg', 'assets/products/kifaru-square-hallow-2.jpeg', 'assets/products/kifaru-square-hallow-3.jpeg'],
    description: 'Durable Square Hollow Sections (SHS) ideal for construction and structural frameworks.',
    fromPrice: 490,
    variants: [
      { label: '20x20 mm 1.5 mm - 6m piece', price: 490 },
      { label: '25x25 mm 1.5 mm - 6m piece', price: 550 },
      { label: '25x25 mm 2.0 mm - 6m piece', price: 690 },
      { label: '30x30 mm 1.5 mm - 6m piece', price: 790 },
      { label: '30x30 mm 2.0 mm - 6m piece', price: 930 },
      { label: '40x40 mm 1.5 mm - 6m piece', price: 1090 },
      { label: '40x40 mm 2.0 mm - 6m piece', price: 1490 },
      { label: '50x50 mm 2.0 mm - 6m piece', price: 1850 },
      { label: '60x60 mm 2.5 mm - 6m piece', price: 2490 },
      { label: '75x75 mm 2.5 mm - 6m piece', price: 2980 },
      { label: '100x100 mm 3.0 mm - 6m piece', price: 3470 }
    ]
  },
  {
    id: 19, category: 'Corrugated Mabati', name: 'KIFARU Corrugated Mabati (Gauge 30)', badge: 'Gauge 30',
    image: 'assets/products/corrugated-mabati-1.jpeg',
    images: ['assets/products/corrugated-mabati-1.jpeg', 'assets/products/corrugated-mabati-2.jpeg', 'assets/products/corrugated-mabati-3.jpeg'],
    description: 'High-quality corrugated roofing sheets. Gauge 30 @ Ksh 300 per meter.',
    fromPrice: 600,
    variants: [
      { label: '2 meter', price: 600 },
      { label: '2.5 meter', price: 750 },
      { label: '3 meter', price: 900 }
    ]
  },
  {
    id: 20, category: 'Box Profile', name: 'KIFARU Box Profile Mabati (Gauge 30)', badge: 'Gauge 30',
    image: 'assets/products/box-profile-1.jpg',
    images: ['assets/products/box-profile-1.jpg', 'assets/products/box-profile-2.jpeg', 'assets/products/box-profile-3.jpeg'],
    description: 'Durable modern box profile roofing sheets. Gauge 30 @ Ksh 350 per meter.',
    fromPrice: 700,
    variants: [
      { label: '2 meter', price: 700 },
      { label: '2.5 meter', price: 875 },
      { label: '3 meter', price: 1050 }
    ]
  },
  {
    id: 21, category: 'Cement', name: 'National Simba Cement', badge: 'KEBS Approved',
    image: 'assets/products/simba-cement-1.jpg',
    images: ['assets/products/simba-cement-1.jpg', 'assets/products/simba-cement-2.jpg', 'assets/products/simba-cement-3.jpg', 'assets/products/simba-cement-4.jpg'],
    description: 'National Simba Cement. High-strength cement for structural and general construction.',
    fromPrice: 550,
    variants: [
      { label: 'National Simba Cement (32.5R)', price: 550 },
      { label: 'National Simba Cement (Power 42.5N / 42.5R)', price: 580 }
    ]
  },
  {
    id: 22, category: 'Cement', name: 'Bamburi Cement', badge: 'Premium',
    image: 'assets/products/bamburi-cement-1.jpg',
    images: ['assets/products/bamburi-cement-1.jpg', 'assets/products/bamburi-cement-2.jpg', 'assets/products/bamburi-cement-3.jpg', 'assets/products/bamburi-cement-4.jpg'],
    description: 'Premium quality Bamburi cement for solid concrete foundations, columns and slabs.',
    fromPrice: 630,
    variants: [
      { label: 'Bamburi Cement - 50kg bag', price: 630 }
    ]
  },
  {
    id: 23, category: 'Chain Link', name: 'PVC Coated Chain Link (Green, Black, Brown)', badge: '18m Length',
    image: 'assets/products/pvc-coated-chain-link-1.jpeg',
    images: ['assets/products/pvc-coated-chain-link-1.jpeg', 'assets/products/pvc-coated-chain-link-2.jpeg', 'assets/products/pvc-coated-chain-link-3.jpeg'],
    description: 'Premium PVC Coated Chain link (available in Green, Black, Brown). Length 18 meters roll.',
    fromPrice: 2450,
    variants: [
      { label: '10 Gauge (3.2mm) - 4 ft', price: 2450 },
      { label: '10 Gauge (3.2mm) - 5 ft', price: 2850 },
      { label: '10 Gauge (3.2mm) - 6 ft', price: 3150 },
      { label: '10 Gauge (3.2mm) - 7 ft', price: 3350 },
      { label: '10 Gauge (3.2mm) - 8 ft', price: 3850 },
      { label: '10 Gauge (3.2mm) - 9 ft', price: 4350 },
      { label: '10 Gauge (3.2mm) - 10 ft', price: 4750 },
      { label: '10 Gauge (3.2mm) - 11 ft', price: 5350 },
      { label: '10 Gauge (3.2mm) - 12 ft', price: 6150 },
      { label: '8 Gauge (4.0mm) - 4 ft', price: 3450 },
      { label: '8 Gauge (4.0mm) - 5 ft', price: 3950 },
      { label: '8 Gauge (4.0mm) - 6 ft', price: 4350 },
      { label: '8 Gauge (4.0mm) - 7 ft', price: 4750 },
      { label: '8 Gauge (4.0mm) - 8 ft', price: 5350 },
      { label: '8 Gauge (4.0mm) - 9 ft', price: 5630 },
      { label: '8 Gauge (4.0mm) - 10 ft', price: 5970 },
      { label: '8 Gauge (4.0mm) - 11 ft', price: 6340 },
      { label: '8 Gauge (4.0mm) - 12 ft', price: 6885 }
    ]
  },
  {
    id: 24, category: 'Cement', name: 'Savannah Cement', badge: 'High Quality',
    image: 'assets/products/savannah-cement-1.jpg',
    images: ['assets/products/savannah-cement-1.jpg'],
    description: 'High quality Savannah cement for reliable construction work.',
    fromPrice: 580,
    variants: [
      { label: 'Savannah Cement - 50kg bag', price: 580 }
    ]
  },
  {
    id: 25, category: 'Cement', name: 'Rai Cement', badge: 'Premium',
    image: 'assets/products/rai-cement-1.jpg',
    images: ['assets/products/rai-cement-1.jpg'],
    description: 'Premium quality Rai cement for residential and commercial masonry.',
    fromPrice: 560,
    variants: [
      { label: 'Rai Cement - 50kg bag', price: 560 }
    ]
  },
  {
    id: 26, category: 'Tile Mabati', name: 'Roman, Elegant & Eurotile Mabati', badge: 'Gauge 28',
    image: 'assets/products/roman-tile-1.jpg',
    images: ['assets/products/roman-tile-1.jpg', 'assets/products/roman-tile-2.jpg'],
    description: 'Roman tile, Elegant tile, and Eurotile Mabati. Gauge 28 @ Ksh 450 per meter.',
    fromPrice: 900,
    variants: [
      { label: '2 meter', price: 900 },
      { label: '2.5 meter', price: 1125 },
      { label: '3 meter', price: 1350 }
    ]
  },
  {
    id: 27, category: 'Versatile Mabati', name: 'Charcoal Grey Versatile Mabati', badge: 'Gauge 28',
    image: 'assets/products/charcoal-grey-mabati-1.jpg',
    images: ['assets/products/charcoal-grey-mabati-1.jpg', 'assets/products/charcoal-grey-mabati-2.jpg', 'assets/products/charcoal-grey-mabati-3.jpg'],
    description: 'Premium Charcoal Grey Versatile Mabati. Gauge 28 @ Ksh 550 per meter.',
    fromPrice: 1100,
    variants: [
      { label: '2 meter', price: 1100 },
      { label: '2.5 meter', price: 1375 },
      { label: '3 meter', price: 1650 }
    ]
  },
  {
    id: 28, category: 'Roofing Accessories', name: 'Ridge\'s and Valley\'s (Gauge 28)', badge: 'Gauge 28',
    image: 'assets/products/ridge-valleys-1.jpeg',
    images: ['assets/products/ridge-valleys-1.jpeg', 'assets/products/ridge-valleys-2.jpeg', 'assets/products/ridge-valleys-3.jpeg'],
    description: 'Ridge\'s and Valley\'s Gauge 28 for roof finishing and weatherproofing.',
    fromPrice: 350,
    variants: [
      { label: 'Glazed Ridges (per piece)', price: 450 },
      { label: 'Flat Ridges (per piece)', price: 400 },
      { label: 'Valley Trays (per piece)', price: 350 }
    ]
  },
  {
    id: 99, category: 'Plain Sheets Mabati', name: 'Plain Sheets', badge: 'Per Meter',
    image: 'assets/products/plain-sheets-1.jpeg',
    images: ['assets/products/plain-sheets-1.jpeg', 'assets/products/plain-sheets-2.jpeg', 'assets/products/plain-sheets-3.jpeg'],
    description: 'Plain galvanized steel sheets for roofing, walling and general construction.',
    fromPrice: 350,
    variants: [
      { label: 'G32 ~0.25mm - per meter', price: 350 },
      { label: 'G30 ~0.30mm - per meter', price: 450 },
      { label: 'G28 ~0.30-0.32mm - per meter', price: 550 },
      { label: 'G26 ~0.40mm - per meter', price: 650 }
    ]
  },
  {
    id: 29, category: 'Hoop Iron', name: 'Standard Hoop Iron Roll', badge: 'Standard',
    image: 'assets/products/standard-hoop-iron-roll-1.jpg',
    images: ['assets/products/standard-hoop-iron-roll-1.jpg', 'assets/products/standard-hoop-iron-roll-2.jpg'],
    description: 'Standard Hoop Iron Roll for truss binding and masonry reinforcement.',
    fromPrice: 2100,
    variants: [
      { label: 'Standard Hoop Iron Roll', price: 2100 }
    ]
  },
  {
    id: 30, category: 'Binding Wire', name: 'Binding Wire', badge: 'High Tensile',
    image: 'assets/products/binding-wire-1.jpg',
    images: ['assets/products/binding-wire-1.jpg', 'assets/products/binding-wire-2.jpg'],
    description: 'High quality annealed binding wire available in various gauges and rolls.',
    fromPrice: 90,
    variants: [
      { label: '18G 1.2mm (Price per kg)', price: 90 },
      { label: '18G 1.2mm (Price per Roll)', price: 2250 },
      { label: '16G 1.6mm (Price per kg)', price: 109 },
      { label: '16G 1.6mm (Price per Roll)', price: 2725 },
      { label: '14G 2.0mm (Price per kg)', price: 124 },
      { label: '14G 2.0mm (Price per Roll)', price: 3100 },
      { label: '12G 2.5mm (Price per kg)', price: 156 },
      { label: '12G 2.5mm (Price per Roll)', price: 3900 }
    ]
  },
  {
    id: 31, category: 'Gabion Boxes', name: 'Gabion Boxes', badge: 'Typical Mesh',
    image: 'assets/products/Gabion-boxes-1.jpg',
    images: ['assets/products/Gabion-boxes-1.jpg', 'assets/products/Gabion-boxes-2.jpg'],
    description: 'Heavy duty Gabion Boxes (Typical Mesh 80x100mm) for river bank protection and soil retention.',
    fromPrice: 1350,
    variants: [
      { label: '1 x 1 x 1 meter', price: 1350 },
      { label: '2 x 1 x 0.5 meter', price: 1850 },
      { label: '2 x 1 x 1 meter', price: 2350 },
      { label: '3 x 1 x 1 meter', price: 3150 },
      { label: '4 x 1 x 1 meter', price: 4250 }
    ]
  },
  {
    id: 32, category: 'Razor Wire', name: 'Razor Wire', badge: 'Security',
    image: 'assets/products/razor-wire-1.jpg',
    images: ['assets/products/razor-wire-1.jpg', 'assets/products/razor-wire-2.jpg'],
    description: 'High quality concertina razor wire for high-security perimeter protection.',
    fromPrice: 1050,
    variants: [
      { label: 'Galvanized 450mm - 8mtrs', price: 1050 },
      { label: 'PVC-Coated 450mm - 10mtrs', price: 1250 },
      { label: 'Galvanized Heavy Duty 730mm - 8mtrs', price: 1800 },
      { label: 'PVC-Coated Heavy Duty 730mm - 10mtrs', price: 2300 },
      { label: 'Industrial Razor Wire 980mm - (7mtrs)', price: 3100 }
    ]
  },
  {
    id: 33, category: 'Barbed Wire', name: 'Barbed Wire', badge: 'Galvanized',
    image: 'assets/products/barbed-wire-1.png',
    images: ['assets/products/barbed-wire-1.png', 'assets/products/barbed-wire-2.jpg', 'assets/products/barbed-wire-3.jpg'],
    description: 'High-tensile galvanized barbed wire for agricultural and perimeter fencing.',
    fromPrice: 3150,
    variants: [
      { label: '12.5G - 50Kgs (480m)', price: 4350 },
      { label: '12.5G - 65Kgs (610m)', price: 6150 },
      { label: '16G - 20Kgs (480m)', price: 3150 },
      { label: '16G - 25Kgs (610m)', price: 3950 }
    ]
  },
  {
    id: 34, category: 'Wire Rods', name: 'Wire Rods (Bulk Coils)', badge: 'Metric Tonnes',
    image: 'assets/products/wire-rods-2.jpg',
    images: ['assets/products/wire-rods-1.jpg', 'assets/products/wire-rods-2.jpg'],
    description: 'High quality industrial wire rod coils in metric tonnes for manufacturing.',
    fromPrice: 97,
    variants: [
      { label: '5.5mm (Price Per Kg)', price: 97 },
      { label: '6.0mm (Price Per Kg)', price: 101 },
      { label: '6.5mm (Price Per Kg)', price: 107 },
      { label: '8.0mm (Price Per Kg)', price: 114 },
      { label: '1.8 (MT) Metric tonnes (Per Coil)', price: 127000 },
      { label: '2.0 (MT) Metric tonnes (Per Coil)', price: 140000 },
      { label: '2.2 (MT) Metric tonnes (Per Coil)', price: 175000 }
    ]
  },
  {
    id: 35, category: 'Galvanized Wire', name: 'Galvanized Wire', badge: 'Standard',
    image: 'assets/products/Galvanized-wire-1.jpg',
    images: ['assets/products/Galvanized-wire-1.jpg', 'assets/products/Galvanized-wire-2.jpg'],
    description: 'Rust-resistant galvanized steel wire for general fencing and fabrication.',
    fromPrice: 85,
    variants: [
      { label: '16G 1.6mm (Price per kg)', price: 120 },
      { label: '16G 1.6mm (Price per 50kg Roll)', price: 6000 },
      { label: '14G 2.0mm (Price per kg)', price: 112 },
      { label: '14G 2.0mm (Price per 50kg Roll)', price: 5600 },
      { label: '12.5G 2.5mm (Price per kg)', price: 105 },
      { label: '12.5G 2.5mm (Price per 50kg Roll)', price: 5250 },
      { label: '10G 3.2mm (Price per kg)', price: 95 },
      { label: '10G 3.2mm (Price per 50kg Roll)', price: 4750 },
      { label: '8G 4.0mm (Price per kg)', price: 85 },
      { label: '8G 4.0mm (Price per 50kg Roll)', price: 4250 }
    ]
  },
  {
    id: 36, category: 'Angle Lines', name: 'Angle Lines', badge: '6m Long',
    image: 'assets/products/angle-lines-1.jpg',
    images: ['assets/products/angle-lines-1.jpg', 'assets/products/angle-lines-2.jpg'],
    description: 'High quality structural angle lines. Factory price per 6m length.',
    fromPrice: 280,
    variants: [
      { label: '20 x 20 mm (3 mm) - 6m', price: 280 },
      { label: '25 x 25 mm (3 mm) - 6m', price: 375 },
      { label: '30 x 30 mm (3 mm) - 6m', price: 495 },
      { label: '40 x 40 mm (4 mm) - 6m', price: 740 },
      { label: '50 x 50 mm (5 mm) - 6m', price: 965 },
      { label: '65 x 65 mm (6 mm) - 6m', price: 1487 },
      { label: '75 x 75 mm (6 mm) - 6m', price: 1939 },
      { label: '90 x 90 mm (8 mm) - 6m', price: 2680 },
      { label: '100 x 100 mm (10 mm) - 6m', price: 3470 }
    ]
  },
  {
    id: 37, category: 'Round Pipes', name: 'Round Pipes', badge: '6m Long',
    image: 'assets/products/round-pipes-1.jpg',
    images: ['assets/products/round-pipes-1.jpg', 'assets/products/round-pipes-2.jpg'],
    description: 'Durable round steel pipes. Factory price per 6m length.',
    fromPrice: 250,
    variants: [
      { label: '½" (18G) - 6m', price: 250 },
      { label: '¾" (18G) - 6m', price: 330 },
      { label: '1" (16G) - 6m', price: 480 },
      { label: '1¼" (16G) - 6m', price: 640 },
      { label: '1½" (16G) - 6m', price: 880 },
      { label: '2" (14G) - 6m', price: 1080 },
      { label: '2½" (14G) - 6m', price: 1390 },
      { label: '3" (14G) - 6m', price: 1840 },
      { label: '4" (12G) - 6m', price: 2450 }
    ]
  },
  {
    id: 38, category: 'Stainless Steel Chrome Pipes', name: 'Stainless Steel Chrome Pipes', badge: '6m Long',
    image: 'assets/products/stainless-steel-chrome-pipes-1.jpg',
    images: ['assets/products/stainless-steel-chrome-pipes-1.jpg', 'assets/products/stainless-steel-chrome-pipes-2.jpg', 'assets/products/stainless-steel-chrome-pipes-3.jpg'],
    description: 'Stainless Steel Chrome Pipes for handrails, balustrades and furniture. Factory price per 6m.',
    fromPrice: 580,
    variants: [
      { label: '19 mm / ¾" (0.8 mm) - 6m', price: 580 },
      { label: '25 mm / 1" (0.8 mm) - 6m', price: 780 },
      { label: '32 mm / 1¼" (1.0 mm) - 6m', price: 990 },
      { label: '38 mm / 1½" (1.0 mm) - 6m', price: 1340 },
      { label: '50 mm / 2" (1.2 mm) - 6m', price: 1870 },
      { label: '63 mm / 2½" (1.2 mm) - 6m', price: 2390 },
      { label: '76 mm / 3" (1.5 mm) - 6m', price: 2830 }
    ]
  },
  {
    id: 39, category: 'Floor Tile', name: 'Floor Tile', badge: 'Tiles',
    image: 'assets/products/floor-tile-1.jpg',
    images: ['assets/products/floor-tile-1.jpg', 'assets/products/floor-tile-2.jpg', 'assets/products/floor-tile-3.jpg', 'assets/products/floor-tile-4.jpg'],
    description: 'High quality durable ceramic and porcelain Floor Tiles.',
    fromPrice: 470,
    variants: [
      { label: '30x30 (17 Pcs per box)', price: 470 },
      { label: '40x40 (12 Pcs per box)', price: 640 },
      { label: '50x50 (7 Pcs per box)', price: 830 },
      { label: '60x60 (4 Pcs per box)', price: 1150 }
    ]
  },
  {
    id: 40, category: 'Wall Tile', name: 'Wall Tile', badge: 'Tiles',
    image: 'assets/products/wall-tile-1.jpg',
    images: ['assets/products/wall-tile-1.jpg', 'assets/products/wall-tile-2.jpg'],
    description: 'Beautiful glazed ceramic Wall Tiles for kitchens and bathrooms.',
    fromPrice: 530,
    variants: [
      { label: '25x40 (15 Pcs per box)', price: 530 },
      { label: '30x60 (8 Pcs per box)', price: 790 }
    ]
  },
  {
    id: 41, category: 'Tanks', name: 'Water Tanks', badge: 'Various Brands',
    image: 'assets/products/tank-1.jpg',
    images: ['assets/products/tank-1.jpg', 'assets/products/tank-2.jpg', 'assets/products/tank-3.jpg', 'assets/products/tank-4.jpg', 'assets/products/tank-5.jpg', 'assets/products/tank-6.jpg', 'assets/products/tank-7.jpg', 'assets/products/tank-8.jpg'],
    description: 'High quality water storage tanks. Available brands: Kentank, Roto, Polytanks, Reliance & Royal Tanks.',
    fromPrice: 3300,
    variants: [
      { label: '500 Ltrs', price: 3300 },
      { label: '1000 Ltrs', price: 6500 },
      { label: '1500 Ltrs', price: 9500 },
      { label: '2000 Ltrs', price: 12500 },
      { label: '3000 Ltrs', price: 18500 },
      { label: '4000 Ltrs', price: 23500 },
      { label: '5000 Ltrs', price: 27500 },
      { label: '6000 Ltrs', price: 31500 },
      { label: '8000 Ltrs', price: 46500 },
      { label: '10000 Ltrs', price: 62500 },
      { label: '16000 Ltrs', price: 92500 },
      { label: '20000 Ltrs', price: 126500 },
      { label: '24000 Ltrs', price: 189500 }
    ]
  },
  {
    id: 42, category: 'Chicken Mesh', name: 'Plastic Poultry Mesh (HDPE)', badge: 'HDPE Mesh',
    image: 'assets/products/plastic-poultry-mesh-1.jpeg',
    images: ['assets/products/plastic-poultry-mesh-1.jpeg', 'assets/products/plastic-poultry-mesh-2.jpeg', 'assets/products/plastic-poultry-mesh-3.jpg', 'assets/products/plastic-poultry-mesh-4.jpeg'],
    description: 'Durable Plastic Poultry Mesh (HDPE). UV stabilized, rust-proof, ideal for poultry runs and garden enclosures.',
    fromPrice: 3500,
    variants: [
      { label: '1 m x 25 m roll', price: 3500 },
      { label: '1 m x 50 m roll', price: 4800 }
    ]
  },
  {
    id: 43, category: 'Toilets & Urinals', name: 'White Tetragon Rimless Wall-Hung Toilet Pan', badge: 'Rimless',
    image: 'assets/products/toilets-and-urinals/white_tetragon_wall_hung_toilet_pan.jpg',
    images: ['assets/products/toilets-and-urinals/white_tetragon_wall_hung_toilet_pan.jpg'],
    description: 'Premium modern rimless wall-hung toilet pan in brilliant white ceramic.',
    fromPrice: 12780,
    variants: [
      { label: 'Complete Pan Unit', price: 12780 }
    ]
  },
  {
    id: 44, category: 'Toilets & Urinals', name: 'Boston White Rimless Wall-Hung Pan', badge: 'Wall-Hung',
    image: 'assets/products/toilets-and-urinals/toilet-1.jpg',
    images: ['assets/products/toilets-and-urinals/toilet-2.jpg', 'assets/products/toilets-and-urinals/toilet-3.jpg', 'assets/products/toilets-and-urinals/toilet-1.jpg'],
    description: 'Sleek Boston white rimless wall-hung pan with ergonomic design and hygienic flush.',
    fromPrice: 10498,
    variants: [
      { label: 'Standard Unit', price: 10498 }
    ]
  },
  {
    id: 45, category: 'Toilets & Urinals', name: 'Soul Compact Wall-Hung Toilet Pan', badge: 'Compact',
    image: 'assets/products/toilets-and-urinals/soul-wall-hung-pan.webp',
    images: ['assets/products/toilets-and-urinals/soul-wall-hung-pan.webp'],
    description: 'Space-saving compact wall-hung toilet pan ideal for modern bathrooms and powder rooms.',
    fromPrice: 9970,
    variants: [
      { label: 'Standard Unit', price: 9970 }
    ]
  },
  {
    id: 46, category: 'Toilets & Urinals', name: 'White Maya Dual-Flush Close-Coupled Toilet Suite', badge: 'Dual-Flush',
    image: 'assets/products/toilets-and-urinals/white-maya-toilet-suite.webp',
    images: ['assets/products/toilets-and-urinals/white-maya-toilet-suite.webp'],
    description: 'Water-saving dual-flush close-coupled toilet suite with soft-close seat and cistern.',
    fromPrice: 9450,
    variants: [
      { label: 'Complete Suite (Pan + Cistern)', price: 9450 }
    ]
  },
  {
    id: 47, category: 'Toilets & Urinals', name: 'Inca Maya Premium Close-Coupled Toilet Suite', badge: 'Premium',
    image: 'assets/products/toilets-and-urinals/inca-maya-toilet-suite.webp',
    images: ['assets/products/toilets-and-urinals/inca-maya-toilet-suite.webp'],
    description: 'High-end Inca Maya close-coupled ceramic suite offering luxury styling and silent flush mechanism.',
    fromPrice: 11390,
    variants: [
      { label: 'Complete Suite', price: 11390 }
    ]
  },
  {
    id: 48, category: 'Toilets & Urinals', name: 'Cotto Simply Modish Dual Top-Flush Toilet Suite', badge: 'Cotto',
    image: 'assets/products/toilets-and-urinals/toilet-2.jpg',
    images: ['assets/products/toilets-and-urinals/toilet-2.jpg', 'assets/products/toilets-and-urinals/toilet-3.jpg', 'assets/products/toilets-and-urinals/toilet-1.jpg'],
    description: 'Top-of-the-line Cotto Simply Modish dual top-flush designer toilet suite.',
    fromPrice: 16767,
    variants: [
      { label: 'Complete Luxury Suite', price: 16767 }
    ]
  },
  {
    id: 49, category: 'Toilets & Urinals', name: 'Senso Automatic Infrared Sensor Urinal', badge: 'Sensor',
    image: 'assets/products/toilets-and-urinals/senso-whung-sensor-urinal.jpg',
    images: ['assets/products/toilets-and-urinals/senso-whung-sensor-urinal.jpg'],
    description: 'Touchless automatic infrared sensor urinal for commercial offices, hotels and institutions.',
    fromPrice: 17599,
    variants: [
      { label: 'Automatic Sensor Urinal Unit', price: 17599 }
    ]
  },
  {
    id: 50, category: 'Toilets & Urinals', name: 'Novo Wall-Hung Ceramic Urinal', badge: 'Ceramic',
    image: 'assets/products/toilets-and-urinals/novo-wall-hung-urinal.jpg',
    images: ['assets/products/toilets-and-urinals/novo-wall-hung-urinal.jpg'],
    description: 'Durable commercial wall-hung ceramic urinal bowl with high splash resistance.',
    fromPrice: 5780,
    variants: [
      { label: 'Wall-Hung Bowl', price: 5780 }
    ]
  },
  {
    id: 51, category: 'Toilets & Urinals', name: 'Cotto Chrome Urinal Flush Valve', badge: 'Chrome',
    image: 'assets/products/toilets-and-urinals/toilet-3.jpg',
    images: ['assets/products/toilets-and-urinals/toilet-2.jpg', 'assets/products/toilets-and-urinals/toilet-3.jpg', 'assets/products/toilets-and-urinals/toilet-1.jpg'],
    description: 'Heavy duty chrome-plated brass urinal flush valve engineered for high traffic use.',
    fromPrice: 3249,
    variants: [
      { label: 'Chrome Flush Valve Unit', price: 3249 }
    ]
  },
  {
    id: 52, category: 'Toilets & Urinals', name: 'Unix Push-Button Urinal Flush Valve', badge: 'Push Button',
    image: 'assets/products/toilets-and-urinals/toilet-2.jpg',
    images: ['assets/products/toilets-and-urinals/toilet-2.jpg', 'assets/products/toilets-and-urinals/toilet-3.jpg', 'assets/products/toilets-and-urinals/toilet-1.jpg'],
    description: 'Reliable Unix push-button mechanical urinal flush valve for commercial restrooms.',
    fromPrice: 2678,
    variants: [
      { label: 'Push-Button Valve', price: 2678 }
    ]
  },
  {
    id: 53, category: 'Toilets & Urinals', name: 'White Beta Floor-Mounted Ceramic Bidet', badge: 'Bidet',
    image: 'assets/products/toilets-and-urinals/white-beta-bidet.jpg',
    images: ['assets/products/toilets-and-urinals/white-beta-bidet.jpg'],
    description: 'Classic floor-mounted ceramic bidet in pristine white porcelain finish.',
    fromPrice: 8466,
    variants: [
      { label: 'Floor-Mounted Bidet', price: 8466 }
    ]
  },
  {
    id: 54, category: 'Cabinets', name: 'Casa White Mirror Bathroom Cabinet', badge: 'Vanity',
    image: 'assets/products/cabinets/casa-white-mirror-cabinet.webp',
    images: ['assets/products/cabinets/casa-white-mirror-cabinet.webp'],
    description: 'Elegant Casa white wall-hung bathroom mirror vanity cabinet with internal shelving.',
    fromPrice: 15000,
    variants: [
      { label: 'Casa White Cabinet Unit', price: 15000 }
    ]
  },
  {
    id: 55, category: 'Cabinets', name: 'Ekos Cabinet Basin', badge: 'With Basin',
    image: 'assets/products/cabinets/ekos-cabinet-basin.webp',
    images: ['assets/products/cabinets/ekos-cabinet-basin.webp'],
    description: 'Contemporary Ekos bathroom storage cabinet integrated with a premium ceramic wash basin.',
    fromPrice: 18000,
    variants: [
      { label: 'Cabinet + Basin Suite', price: 18000 }
    ]
  },
  {
    id: 56, category: 'Cabinets', name: 'Le Luxe White Mirror Cabinet', badge: 'Luxury',
    image: 'assets/products/cabinets/le-luxe-wh-mirror-cabinet.jpg',
    images: ['assets/products/cabinets/le-luxe-wh-mirror-cabinet.jpg'],
    description: 'High-end luxury Le Luxe white bathroom vanity with multi-tier mirror storage.',
    fromPrice: 22000,
    variants: [
      { label: 'Le Luxe Vanity Suite', price: 22000 }
    ]
  },
  {
    id: 57, category: 'Cabinets', name: 'Spazio Grey Mirror Cabinet', badge: 'Modern Grey',
    image: 'assets/products/cabinets/spazio-grey-mirror-cabinet.webp',
    images: ['assets/products/cabinets/spazio-grey-mirror-cabinet.webp'],
    description: 'Sophisticated Spazio slate-grey bathroom mirror vanity unit with soft-close doors.',
    fromPrice: 19500,
    variants: [
      { label: 'Spazio Grey Vanity Unit', price: 19500 }
    ]
  },
  {
    id: 58, category: 'Cabinets', name: 'Deluxe Modern Bathroom Vanity Cabinet Suite', badge: 'Suite',
    image: 'assets/products/cabinets/cabinets.jpg',
    images: ['assets/products/cabinets/cabinets.jpg', 'assets/products/cabinets/casa-white-mirror-cabinet.webp', 'assets/products/cabinets/ekos-cabinet-basin.webp', 'assets/products/cabinets/le-luxe-wh-mirror-cabinet.jpg', 'assets/products/cabinets/spazio-grey-mirror-cabinet.webp'],
    description: 'Complete deluxe modular bathroom vanity and mirror cabinet set with maximum storage.',
    fromPrice: 24500,
    variants: [
      { label: 'Deluxe Vanity Suite', price: 24500 }
    ]
  },
  {
    id: 59, category: 'Kitchen Sinks', name: 'Trendy Black Quartz Double Bowl Kitchen Sink', badge: 'Quartz',
    image: 'assets/products/kitchen-sinks/trendy-black-kitchen-sink.webp',
    images: ['assets/products/kitchen-sinks/trendy-black-kitchen-sink.webp'],
    description: 'High-quality Trendy Black Quartz Double Bowl Kitchen Sink.',
    fromPrice: 18600,
    variants: [
      { label: 'Trendy Black Quartz Double Bowl', price: 18600 }
    ]
  },
  {
    id: 60, category: 'Kitchen Sinks', name: 'SUS304 Stainless Steel Double Bowl Sink with Board', badge: 'SUS304',
    image: 'assets/products/kitchen-sinks/stainless-kitchen-sinks.webp',
    images: ['assets/products/kitchen-sinks/stainless-kitchen-sinks.webp'],
    description: 'Premium SUS304 Stainless Steel Double Bowl Sink with drain board.',
    fromPrice: 9200,
    variants: [
      { label: 'SUS304 Double Bowl Sink with Board', price: 9200 }
    ]
  },
  {
    id: 61, category: 'Kitchen Sinks', name: 'Stainless Steel Deep Single Bowl Undermount Sink', badge: 'Undermount',
    image: 'assets/products/kitchen-sinks/steel-kitchen-sink.jpg',
    images: ['assets/products/kitchen-sinks/steel-kitchen-sink.jpg'],
    description: 'Durable Stainless Steel Deep Single Bowl Undermount Sink.',
    fromPrice: 5500,
    variants: [
      { label: 'Deep Single Bowl Undermount', price: 5500 }
    ]
  },
  {
    id: 62, category: 'Kitchen Sinks', name: 'Stainless Steel Double Bowl Drop-In Sink with Board', badge: 'Drop-In',
    image: 'assets/products/kitchen-sinks/kitchen-sink-2.jpg',
    images: ['assets/products/kitchen-sinks/kitchen-sink-2.jpg'],
    description: 'Convenient Stainless Steel Double Bowl Drop-In Sink with drain board.',
    fromPrice: 7800,
    variants: [
      { label: 'Double Bowl Drop-In with Board', price: 7800 }
    ]
  },
  {
    id: 65, category: 'Anti-Twist', name: 'Shaka Black & Chrome Nylon-Silicone Anti-Twist Hose', badge: 'Anti-Twist',
    image: 'assets/products/anti-twist/shaka-black-anti-twist-nickel-plate.jpg',
    images: ['assets/products/anti-twist/shaka-black-anti-twist-nickel-plate.jpg'],
    description: 'Flexible Shaka Black & Chrome Nylon-Silicone Anti-Twist Shower Hose.',
    fromPrice: 980,
    variants: [
      { label: 'Black & Chrome Nylon-Silicone', price: 980 }
    ]
  },
  {
    id: 66, category: 'Anti-Twist', name: 'Shaka Chrome Luxe Spyral Anti-Twist Shower Hose', badge: 'Luxe',
    image: 'assets/products/anti-twist/shaka-chrome-black-nyl-sil-anti-twist.jpg',
    images: ['assets/products/anti-twist/shaka-chrome-black-nyl-sil-anti-twist.jpg'],
    description: 'Premium Shaka Chrome Luxe Spyral Anti-Twist Shower Hose.',
    fromPrice: 1150,
    variants: [
      { label: 'Chrome Luxe Spyral', price: 1150 }
    ]
  },
  {
    id: 67, category: 'Anti-Twist', name: 'Shaka White & Chrome Anti-Twist Shower Hose', badge: 'Anti-Twist',
    image: 'assets/products/anti-twist/shaka-chrome-white-anti-twist.jpg',
    images: ['assets/products/anti-twist/shaka-chrome-white-anti-twist.jpg'],
    description: 'Durable Shaka White & Chrome Anti-Twist Shower Hose.',
    fromPrice: 1050,
    variants: [
      { label: 'White & Chrome', price: 1050 }
    ]
  },
  {
    id: 68, category: 'Anti-Twist', name: 'Shaka White Anti-Twist Hose with Nickel Plated Nuts', badge: 'Nickel Plated',
    image: 'assets/products/anti-twist/shaka-white-anti-twist-nickel-plate.jpg',
    images: ['assets/products/anti-twist/shaka-white-anti-twist-nickel-plate.jpg'],
    description: 'Shaka White Anti-Twist Hose with durable Nickel Plated Nuts.',
    fromPrice: 970,
    variants: [
      { label: 'White with Nickel Plated Nuts', price: 970 }
    ]
  },
  {
    id: 69, category: 'Showers', name: 'Corner Pentagon Glass Shower Enclosure with Tray', badge: 'Enclosure',
    image: 'assets/products/showers/shower-enclosure-pentagon-chrome-frame.jpg',
    images: ['assets/products/showers/shower-enclosure-pentagon-chrome-frame.jpg'],
    description: 'Modern Corner Pentagon Glass Shower Enclosure complete with Tray.',
    fromPrice: 19600,
    variants: [
      { label: 'Corner Pentagon Glass Enclosure', price: 19600 }
    ]
  },
  {
    id: 70, category: 'Showers', name: 'Chrome Adjustable Pivot Shower Door', badge: 'Pivot Door',
    image: 'assets/products/showers/shower-1.jpg',
    images: ['assets/products/showers/shower-1.jpg'],
    description: 'Sleek Chrome Adjustable Pivot Shower Door for modern bathrooms.',
    fromPrice: 14500,
    variants: [
      { label: 'Chrome Adjustable Pivot Door', price: 14500 }
    ]
  },
  {
    id: 71, category: 'Showers', name: 'Square Corner Glass Shower Enclosure (White Frame)', badge: 'Enclosure',
    image: 'assets/products/showers/square-shower-enclosure-white.jpg',
    images: ['assets/products/showers/square-shower-enclosure-white.jpg'],
    description: 'Stylish Square Corner Glass Shower Enclosure with White Frame.',
    fromPrice: 18500,
    variants: [
      { label: 'Square Corner Glass (White Frame)', price: 18500 }
    ]
  },
  {
    id: 72, category: 'Showers', name: 'Ekos Pentagon Acrylic Shower Tray', badge: 'Shower Tray',
    image: 'assets/products/showers/ekos-shower-tray-pentagon.webp',
    images: ['assets/products/showers/ekos-shower-tray-pentagon.webp'],
    description: 'High-quality Ekos Pentagon Acrylic Shower Tray.',
    fromPrice: 6500,
    variants: [
      { label: 'Ekos Pentagon Acrylic Tray', price: 6500 }
    ]
  },
  {
    id: 73, category: 'Showers', name: 'Shaka Chrome Luxe Spyral Anti-Twist Shower Hose (Showers)', badge: 'Luxe',
    image: 'assets/products/showers/shaka-chrome-black-nyl-sil-anti-twist.jpg',
    images: ['assets/products/showers/shaka-chrome-black-nyl-sil-anti-twist.jpg'],
    description: 'Premium Shaka Chrome Luxe Spyral Anti-Twist Shower Hose.',
    fromPrice: 1100,
    variants: [
      { label: 'Chrome Luxe Spyral', price: 1100 }
    ]
  },
  {
    id: 74, category: 'Showers', name: 'Shaka White & Chrome Anti-Twist Shower Hose (Showers)', badge: 'Anti-Twist',
    image: 'assets/products/showers/shaka-white-anti-twist-nickel-plate.jpg',
    images: ['assets/products/showers/shaka-white-anti-twist-nickel-plate.jpg'],
    description: 'Durable Shaka White & Chrome Anti-Twist Shower Hose.',
    fromPrice: 1030,
    variants: [
      { label: 'White & Chrome', price: 1030 }
    ]
  },
  {
    id: 75, category: 'Showers', name: 'Matte Black Aluminum Corner Shower Caddy Shelf', badge: 'Caddy',
    image: 'assets/products/showers/shower-enclosure-pentagon-chrome-frame.jpg',
    images: ['assets/products/showers/shower-enclosure-pentagon-chrome-frame.jpg'],
    description: 'Convenient Matte Black Aluminum Corner Shower Caddy Shelf.',
    fromPrice: 2080,
    variants: [
      { label: 'Matte Black Corner Caddy', price: 2080 }
    ]
  },
  {
    id: 76, category: 'Cabinets', name: 'Premium Bathroom Cabinets', badge: 'New',
    image: 'assets/products/cabinets/cabinets.jpg',
    images: ['assets/products/cabinets/cabinets.jpg'],
    description: 'High-quality Premium Bathroom Cabinets for your home.',
    fromPrice: 15000,
    variants: [
      { label: 'Bathroom Cabinet', price: 15000 }
    ]
  },
  {
    id: 77, category: 'Cabinets', name: 'Casa White Mirror Cabinet', badge: 'Mirror',
    image: 'assets/products/cabinets/casa-white-mirror-cabinet.webp',
    images: ['assets/products/cabinets/casa-white-mirror-cabinet.webp'],
    description: 'High-quality Casa White Mirror Cabinet for your home.',
    fromPrice: 18500,
    variants: [
      { label: 'White Mirror Cabinet', price: 18500 }
    ]
  },
  {
    id: 78, category: 'Cabinets', name: 'Ekos Cabinet Basin', badge: 'Basin',
    image: 'assets/products/cabinets/ekos-cabinet-basin.webp',
    images: ['assets/products/cabinets/ekos-cabinet-basin.webp'],
    description: 'High-quality Ekos Cabinet Basin for your home.',
    fromPrice: 21000,
    variants: [
      { label: 'Cabinet Basin', price: 21000 }
    ]
  },
  {
    id: 79, category: 'Cabinets', name: 'Le Luxe White Mirror Cabinet', badge: 'Luxe',
    image: 'assets/products/cabinets/le-luxe-wh-mirror-cabinet.jpg',
    images: ['assets/products/cabinets/le-luxe-wh-mirror-cabinet.jpg'],
    description: 'High-quality Le Luxe White Mirror Cabinet for your home.',
    fromPrice: 24500,
    variants: [
      { label: 'White Mirror Cabinet', price: 24500 }
    ]
  },
  {
    id: 80, category: 'Cabinets', name: 'Spazio Grey Mirror Cabinet', badge: 'Grey',
    image: 'assets/products/cabinets/spazio-grey-mirror-cabinet.webp',
    images: ['assets/products/cabinets/spazio-grey-mirror-cabinet.webp'],
    description: 'High-quality Spazio Grey Mirror Cabinet for your home.',
    fromPrice: 22000,
    variants: [
      { label: 'Grey Mirror Cabinet', price: 22000 }
    ]
  },
  {
    id: 81, category: 'Taps', name: 'Chrome Bidet Mixer Tap', badge: 'Chrome',
    image: 'assets/products/taps/chrome_bidet_mixer_tap.jpg',
    images: ['assets/products/taps/chrome_bidet_mixer_tap.jpg'],
    description: 'High-quality Chrome Bidet Mixer Tap for your home.',
    fromPrice: 4500,
    variants: [
      { label: 'Chrome Bidet Mixer', price: 4500 }
    ]
  },
  {
    id: 82, category: 'Taps', name: 'Classico Single Lever Sink Mixer Chrome', badge: 'Classico',
    image: 'assets/products/taps/classico-single-lever-sink-mixer-chrome.webp',
    images: ['assets/products/taps/classico-single-lever-sink-mixer-chrome.webp'],
    description: 'High-quality Classico Single Lever Sink Mixer Chrome for your home.',
    fromPrice: 5800,
    variants: [
      { label: 'Classico Sink Mixer', price: 5800 }
    ]
  },
  {
    id: 83, category: 'Taps', name: 'Cross Chrome Sink Mixer Pillar Tap', badge: 'Cross Chrome',
    image: 'assets/products/taps/cross-chrome-sink-mixer-pillar-tap.webp',
    images: ['assets/products/taps/cross-chrome-sink-mixer-pillar-tap.webp'],
    description: 'High-quality Cross Chrome Sink Mixer Pillar Tap for your home.',
    fromPrice: 5200,
    variants: [
      { label: 'Cross Chrome Mixer', price: 5200 }
    ]
  },
  {
    id: 84, category: 'Taps', name: 'Diamond Sink Mixer Pillar', badge: 'Diamond',
    image: 'assets/products/taps/diamond-sink-mixer-pillar.webp',
    images: ['assets/products/taps/diamond-sink-mixer-pillar.webp'],
    description: 'High-quality Diamond Sink Mixer Pillar for your home.',
    fromPrice: 6500,
    variants: [
      { label: 'Diamond Sink Mixer', price: 6500 }
    ]
  },
  {
    id: 85, category: 'Taps', name: 'Margot Bronze Pre-rinse Bowl Tap', badge: 'Bronze',
    image: 'assets/products/taps/margot-bronze-preb-bowl.jpg',
    images: ['assets/products/taps/margot-bronze-preb-bowl.jpg'],
    description: 'High-quality Margot Bronze Pre-rinse Bowl Tap for your home.',
    fromPrice: 8900,
    variants: [
      { label: 'Margot Bronze Tap', price: 8900 }
    ]
  },
  {
    id: 86, category: 'Taps', name: 'Marot Sink Mixer Bronze', badge: 'Bronze',
    image: 'assets/products/taps/marot_sink_mixer_bronze.jpg',
    images: ['assets/products/taps/marot_sink_mixer_bronze.jpg'],
    description: 'High-quality Marot Sink Mixer Bronze for your home.',
    fromPrice: 7800,
    variants: [
      { label: 'Marot Bronze Mixer', price: 7800 }
    ]
  },
  {
    id: 87, category: 'Taps', name: 'Moderna Lever Sink Mixer Chrome', badge: 'Moderna',
    image: 'assets/products/taps/moderna-lever-sink-mixer-chrome.webp',
    images: ['assets/products/taps/moderna-lever-sink-mixer-chrome.webp'],
    description: 'High-quality Moderna Lever Sink Mixer Chrome for your home.',
    fromPrice: 6200,
    variants: [
      { label: 'Moderna Sink Mixer', price: 6200 }
    ]
  },
  {
    id: 88, category: 'Taps', name: 'Sink Mixer Spout Tap', badge: 'Spout',
    image: 'assets/products/taps/sink-mixer-spout-tap.webp',
    images: ['assets/products/taps/sink-mixer-spout-tap.webp'],
    description: 'High-quality Sink Mixer Spout Tap for your home.',
    fromPrice: 4800,
    variants: [
      { label: 'Sink Mixer Spout', price: 4800 }
    ]
  },
  {
    id: 89, category: 'Taps', name: 'Snello Sink Mixer Dark Mirror', badge: 'Dark Mirror',
    image: 'assets/products/taps/snello-sink-mixer-dark-mirror.webp',
    images: ['assets/products/taps/snello-sink-mixer-dark-mirror.webp'],
    description: 'High-quality Snello Sink Mixer Dark Mirror for your home.',
    fromPrice: 7500,
    variants: [
      { label: 'Snello Dark Mirror Mixer', price: 7500 }
    ]
  },
  {
    id: 90, category: 'Toilets & Urinals', name: 'Inca Maya Toilet Suite', badge: 'Suite',
    image: 'assets/products/toilets-and-urinals/inca-maya-toilet-suite.webp',
    images: ['assets/products/toilets-and-urinals/inca-maya-toilet-suite.webp'],
    description: 'High-quality Inca Maya Toilet Suite for your home.',
    fromPrice: 18500,
    variants: [
      { label: 'Inca Maya Suite', price: 18500 }
    ]
  },
  {
    id: 91, category: 'Toilets & Urinals', name: 'Novo Wall Hung Urinal', badge: 'Urinal',
    image: 'assets/products/toilets-and-urinals/novo-wall-hung-urinal.jpg',
    images: ['assets/products/toilets-and-urinals/novo-wall-hung-urinal.jpg'],
    description: 'High-quality Novo Wall Hung Urinal for your home.',
    fromPrice: 12500,
    variants: [
      { label: 'Novo Urinal', price: 12500 }
    ]
  },
  {
    id: 92, category: 'Toilets & Urinals', name: 'Senso Wall Hung Sensor Urinal', badge: 'Sensor',
    image: 'assets/products/toilets-and-urinals/senso-whung-sensor-urinal.jpg',
    images: ['assets/products/toilets-and-urinals/senso-whung-sensor-urinal.jpg'],
    description: 'High-quality Senso Wall Hung Sensor Urinal for your home.',
    fromPrice: 28000,
    variants: [
      { label: 'Senso Sensor Urinal', price: 28000 }
    ]
  },
  {
    id: 93, category: 'Toilets & Urinals', name: 'Soul Wall Hung Pan', badge: 'Wall Hung',
    image: 'assets/products/toilets-and-urinals/soul-wall-hung-pan.webp',
    images: ['assets/products/toilets-and-urinals/soul-wall-hung-pan.webp'],
    description: 'High-quality Soul Wall Hung Pan for your home.',
    fromPrice: 14500,
    variants: [
      { label: 'Soul Wall Hung Pan', price: 14500 }
    ]
  },
  {
    id: 94, category: 'Toilets & Urinals', name: 'Premium Toilet Suite (2)', badge: 'Premium',
    image: 'assets/products/toilets-and-urinals/toilet-2.jpg',
    images: ['assets/products/toilets-and-urinals/toilet-2.jpg'],
    description: 'High-quality Premium Toilet Suite (2) for your home.',
    fromPrice: 16500,
    variants: [
      { label: 'Premium Toilet Suite', price: 16500 }
    ]
  },
  {
    id: 95, category: 'Toilets & Urinals', name: 'Premium Toilet Suite (3)', badge: 'Premium',
    image: 'assets/products/toilets-and-urinals/toilet-3.jpg',
    images: ['assets/products/toilets-and-urinals/toilet-3.jpg'],
    description: 'High-quality Premium Toilet Suite (3) for your home.',
    fromPrice: 17500,
    variants: [
      { label: 'Premium Toilet Suite', price: 17500 }
    ]
  },
  {
    id: 96, category: 'Toilets & Urinals', name: 'Standard Toilet Suite', badge: 'Standard',
    image: 'assets/products/toilets-and-urinals/toilet-1.jpg',
    images: ['assets/products/toilets-and-urinals/toilet-1.jpg'],
    description: 'High-quality Standard Toilet Suite for your home.',
    fromPrice: 12000,
    variants: [
      { label: 'Standard Toilet Suite', price: 12000 }
    ]
  },
  {
    id: 97, category: 'Toilets & Urinals', name: 'White Beta Bidet', badge: 'Bidet',
    image: 'assets/products/toilets-and-urinals/white-beta-bidet.jpg',
    images: ['assets/products/toilets-and-urinals/white-beta-bidet.jpg'],
    description: 'High-quality White Beta Bidet for your home.',
    fromPrice: 9500,
    variants: [
      { label: 'White Beta Bidet', price: 9500 }
    ]
  },
  {
    id: 98, category: 'Toilets & Urinals', name: 'White Maya Toilet Suite', badge: 'Suite',
    image: 'assets/products/toilets-and-urinals/white-maya-toilet-suite.webp',
    images: ['assets/products/toilets-and-urinals/white-maya-toilet-suite.webp'],
    description: 'High-quality White Maya Toilet Suite for your home.',
    fromPrice: 19500,
    variants: [
      { label: 'White Maya Suite', price: 19500 }
    ]
  },
  {
    id: 100, category: 'Tile Adhesive', name: 'GripMaster Quality Ceramic & Porcelain Tile Adhesive (25kg)', badge: '25kg',
    image: 'assets/products/gripmaster-quality-ceramic-porcelain-tile-1.jpeg',
    images: ['assets/products/gripmaster-quality-ceramic-porcelain-tile-1.jpeg', 'assets/products/gripmaster-quality-ceramic-porcelain-tile-2.jpeg', 'assets/products/gripmaster-quality-ceramic-porcelain-tile-3.jpeg'],
    description: 'GripMaster Quality Ceramic & Porcelain Tile Adhesive - 25kg bag for professional tile installation.',
    fromPrice: 650,
    variants: [
      { label: 'GripMaster Quality Ceramic & Porcelain (25kg)', price: 650 }
    ]
  },
  {
    id: 101, category: 'Tile Adhesive', name: 'GripMaster Plus Porcelain Tile Adhesive (25kg)', badge: '25kg',
    image: 'assets/products/gripmaster-plus-porcelain-tile-adhesive-1.jpeg',
    images: ['assets/products/gripmaster-plus-porcelain-tile-adhesive-1.jpeg', 'assets/products/gripmaster-plus-porcelain-tile-adhesive-2.jpeg', 'assets/products/gripmaster-plus-porcelain-tile-adhesive-3.jpeg'],
    description: 'GripMaster Plus Porcelain Tile Adhesive - premium 25kg bag for porcelain and large format tiles.',
    fromPrice: 870,
    variants: [
      { label: 'GripMaster Plus Porcelain (25kg)', price: 870 }
    ]
  },
  {
    id: 102, category: 'Wall Tile', name: 'Ariana White Ceramic Wall Tile', badge: 'Wall Tile',
    image: 'assets/products/ariana-white-ceramic-wall-tile.webp',
    images: ['assets/products/ariana-white-ceramic-wall-tile.webp'],
    description: 'Premium Ariana White Ceramic Wall Tile with a clean, modern aesthetic for interior walls.',
    fromPrice: 550,
    variants: [
      { label: '25x40 cm (15 Pcs per box)', price: 550 },
      { label: '30x60 cm (8 Pcs per box)', price: 820 }
    ]
  },
  {
    id: 103, category: 'Wall Tile', name: 'Space Mix White Pattern Gloss Ceramic Decor Wall Tile', badge: 'Decor Tile',
    image: 'assets/products/space-mix-white-pattern-look-gloss-ceramic-decor-wall-tile.webp',
    images: ['assets/products/space-mix-white-pattern-look-gloss-ceramic-decor-wall-tile.webp'],
    description: 'Gloss ceramic feature decor wall tile with sophisticated geometric and textured pattern accents.',
    fromPrice: 650,
    variants: [
      { label: '25x40 cm Decor (15 Pcs per box)', price: 650 },
      { label: '30x60 cm Decor (8 Pcs per box)', price: 950 }
    ]
  },
  {
    id: 104, category: 'Wall Tile', name: 'Nature Honey Ceramic Wall Tile', badge: 'Wall Tile',
    image: 'assets/products/nature-honey-wall-tile.jpg',
    images: ['assets/products/nature-honey-wall-tile.jpg'],
    description: 'Warm Nature Honey Ceramic Wall Tile for elegant and inviting interior living spaces.',
    fromPrice: 550,
    variants: [
      { label: '25x40 cm (15 Pcs per box)', price: 550 },
      { label: '30x60 cm (8 Pcs per box)', price: 820 }
    ]
  },
  {
    id: 105, category: 'Z-Purlin Mabati', name: 'KIFARU Z-Purlin', badge: 'Structural Steel',
    image: 'assets/products/z-purlin-1.jpeg',
    images: ['assets/products/z-purlin-1.jpeg', 'assets/products/z-purlin-2.jpeg', 'assets/products/z-purlin-3.jpeg'],
    description: 'High-strength cold-formed galvanized Z-Purlin sections for roofing, wall claddings and structural steel buildings.',
    fromPrice: 1450,
    variants: [
      { label: '3" × 2" (2.0 mm)', price: 1450 },
      { label: '4" × 2" (2.0 mm)', price: 1870 },
      { label: '4½" × 2" (2.0 mm)', price: 2470 },
      { label: '5" × 2" (2.0 mm)', price: 2830 },
      { label: '5½" × 2" (2.0 mm)', price: 3160 },
      { label: '6" × 2" (2.0 mm)', price: 3470 },
      { label: '6½" × 2" (2.0 mm)', price: 3765 },
      { label: '7" × 2" (2.0 mm)', price: 4120 },
      { label: '7" × 2½" (2.0 mm)', price: 4350 },
      { label: '7" × 2" (2.5 mm)', price: 4710 }
    ]
  },
  {
    id: 106, category: 'DPC', name: 'DPC - Damp Proof Course', badge: '30m Roll',
    image: 'assets/products/dpc-1.jpeg',
    images: ['assets/products/dpc-1.jpeg', 'assets/products/dpc-2.jpeg', 'assets/products/dpc-3.jpeg'],
    description: 'High-quality polyethylene Damp Proof Course (DPC) rolls for preventing moisture ingress through walls and foundations. Available in various widths in 30-metre rolls.',
    fromPrice: 1180,
    variants: [
      { label: '100 mm × 30 m', price: 1180 },
      { label: '150 mm × 30 m', price: 1570 },
      { label: '225 mm × 30 m', price: 2290 },
      { label: '300 mm × 30 m', price: 2760 },
      { label: '450 mm × 30 m', price: 3380 },
      { label: '600 mm × 30 m', price: 4170 }
    ]
  },
  {
    id: 107, category: 'DPM', name: 'DPM - Damp Proof Membrane', badge: '4m × 25m',
    image: 'assets/products/dpm-1.jpeg',
    images: ['assets/products/dpm-1.jpeg', 'assets/products/dpm-2.jpeg', 'assets/products/dpm-3.jpeg'],
    description: 'Heavy-duty polyethylene Damp Proof Membrane (DPM) for sub-floor and ground-floor moisture protection. Available in multiple gauges in 4 m × 25 m rolls.',
    fromPrice: 2250,
    variants: [
      { label: '500 Gauge - 4 m × 25 m', price: 2250 },
      { label: '750 Gauge - 4 m × 25 m', price: 2840 },
      { label: '1,000 Gauge - 4 m × 25 m', price: 3370 },
      { label: '1,200 Gauge - 4 m × 25 m', price: 3850 },
      { label: '1,500 Gauge - 4 m × 25 m', price: 4450 },
      { label: '2,000 Gauge - 4 m × 25 m', price: 4960 }
    ]
  },
  {
    id: 108, category: 'Waterproofing', name: 'Gladiator 4TC', badge: 'Waterproofing',
    image: 'assets/products/gladiator-4tc-1.jpeg',
    images: ['assets/products/gladiator-4tc-1.jpeg', 'assets/products/gladiator-4tc-2.jpeg'],
    description: 'Gladiator 4TC is a premium-quality waterproofing compound for concrete, masonry and roofing applications. Provides long-lasting protection against water ingress.',
    fromPrice: 1300,
    variants: [
      { label: '1 Litre', price: 1300 },
      { label: '5 Litres', price: 4350 },
      { label: '20 Litres', price: 15450 }
    ]
  }
];

/* Products showcased on the homepage (same set as the reference site) */
const FEATURED_IDS = [1, 3, 51, 58, 4, 20, 43, 54];;

/* ===================== UTILITIES ===================== */
function fmtPrice(val) {
  return 'Ksh ' + Number(val).toLocaleString('en-KE');
}

/* ===================== CART MANAGER ===================== */
const Cart = {
  KEY: 'bnrm_cart',

  get() {
    try { return JSON.parse(localStorage.getItem(this.KEY)) || []; }
    catch { return []; }
  },

  save(items) {
    localStorage.setItem(this.KEY, JSON.stringify(items));
    this.updateBadge();
    if (typeof renderCartDrawer === 'function') renderCartDrawer();
    if (typeof renderCartPage === 'function') renderCartPage();
    if (typeof renderCheckoutSummary === 'function') renderCheckoutSummary();
  },

  add(productId, variantIndex, qty = 1) {
    const prod = PRODUCTS.find(p => p.id === productId);
    if (!prod || !prod.variants[variantIndex]) return;
    const v = prod.variants[variantIndex];
    const items = this.get();
    const key = `${productId}__v${variantIndex}`;
    const existing = items.find(i => i.key === key);
    if (existing) {
      existing.qty += qty;
    } else {
      items.push({
        key, productId, name: prod.name, variant: v.label,
        price: v.price, qty, image: prod.image
      });
    }
    this.save(items);
  },

  remove(key) {
    this.save(this.get().filter(i => i.key !== key));
  },

  updateQty(key, delta) {
    const items = this.get();
    const it = items.find(i => i.key === key);
    if (!it) return;
    it.qty = Math.max(1, it.qty + delta);
    this.save(items);
  },

  total() {
    return this.get().reduce((sum, i) => sum + (i.price * i.qty), 0);
  },

  count() {
    return this.get().reduce((sum, i) => sum + i.qty, 0);
  },

  updateBadge() {
    const n = this.count();
    document.querySelectorAll('.cart-count').forEach(b => {
      b.textContent = n;
      b.style.display = n > 0 ? 'flex' : 'none';
    });
  }
};

/* ===================== CART DRAWER ===================== */
function renderCartDrawer() {
  const drawer = document.getElementById('cart-drawer-items');
  if (!drawer) return;
  const items = Cart.get();
  if (!items.length) {
    drawer.innerHTML = `<div style="text-align:center;padding:60px 20px;color:var(--muted);">
      <i class="fa-solid fa-cart-shopping" style="font-size:42px;opacity:.25;margin-bottom:16px;display:block;"></i>
      <p style="font-weight:600;margin:0 0 6px;">Your cart is empty.</p>
      <p style="margin-top:8px;font-size:13px;">Browse our products and add items to your order.</p></div>`;
  } else {
    drawer.innerHTML = items.map(item => `
      <div class="cart-item">
        <img src="${item.image}" class="cart-item-img" alt="${item.name}" onerror="this.src='assets/logo-2.png'">
        <div class="cart-item-info">
          <div class="cart-item-name">${item.name}</div>
          <div class="cart-item-variant">${item.variant}</div>
          <div class="cart-item-price">${fmtPrice(item.price * item.qty)}</div>
          <div class="cart-item-controls">
            <button class="cart-qty-btn" onclick="Cart.updateQty('${item.key}', -1)"><i class="fa-solid fa-minus"></i></button>
            <span class="cart-qty-val">${item.qty}</span>
            <button class="cart-qty-btn" onclick="Cart.updateQty('${item.key}', 1)"><i class="fa-solid fa-plus"></i></button>
            <button class="cart-remove-btn" onclick="Cart.remove('${item.key}')"><i class="fa-solid fa-trash-can"></i></button>
          </div>
        </div>
      </div>`).join('');
  }
  const sub = document.getElementById('cart-subtotal-amount');
  if (sub) sub.textContent = fmtPrice(Cart.total());
}

function openCartDrawer() {
  document.getElementById('cart-drawer')?.classList.add('open');
  document.getElementById('cart-overlay')?.classList.add('open');
  document.body.style.overflow = 'hidden';
}
function closeCartDrawer() {
  document.getElementById('cart-drawer')?.classList.remove('open');
  document.getElementById('cart-overlay')?.classList.remove('open');
  document.body.style.overflow = '';
}

/* ===================== QUICK VIEW MODAL ===================== */
function openQuickView(productId) {
  const modal = document.getElementById('quick-view-modal');
  if (!modal) return;
  const prod = PRODUCTS.find(p => p.id === productId);
  if (!prod) return;
  modal.querySelector('.modal-main-img').src = prod.image;
  modal.querySelector('.modal-main-img').alt = prod.name;
  modal.querySelector('.modal-title').textContent = prod.name;
  modal.querySelector('.modal-price').innerHTML = `<span class="from">From</span> ${fmtPrice(prod.fromPrice)}`;
  modal.querySelector('.modal-desc').textContent = prod.description;
  const sel = modal.querySelector('.modal-variant-select');
  sel.innerHTML = prod.variants.map((v, i) =>
    `<option value="${v.price}" data-vindex="${i}">${v.label} - ${fmtPrice(v.price)}</option>`).join('');
  modal.querySelector('.modal-qty-val').value = 1;
  modal.dataset.productId = productId;
  modal.classList.add('open');
  document.body.style.overflow = 'hidden';
}
function closeQuickView() {
  document.getElementById('quick-view-modal')?.classList.remove('open');
  document.body.style.overflow = '';
}

function nextImg(event, delta) {
  const btn = event.currentTarget;
  const modal = btn.closest('#quick-view-modal');
  const img = modal ? modal.querySelector('.modal-main-img') : btn.closest('.product-img-wrap').querySelector('img');
  if (!img) return;
  let imgs = [];
  try { imgs = (img.dataset.images || img.src).split(','); } catch (e) { imgs = [img.src]; }
  if (imgs.length < 2) return;
  let idx = parseInt(img.dataset.index || '0', 10);
  idx = (idx + delta + imgs.length) % imgs.length;
  img.dataset.index = idx;
  img.src = imgs[idx];
}

/* ===================== HERO SLIDER ===================== */
let curSlide = 0;
let heroTimer = null;
function showHeroSlide(n) {
  const slides = document.querySelectorAll('.hero-slide');
  const dots = document.querySelectorAll('.hero-dot');
  if (!slides.length) return;
  curSlide = (n + slides.length) % slides.length;
  slides.forEach((s, i) => s.classList.toggle('active', i === curSlide));
  dots.forEach((d, i) => d.classList.toggle('active', i === curSlide));
}
function startHeroTimer() {
  clearInterval(heroTimer);
  heroTimer = setInterval(() => showHeroSlide(curSlide + 1), 5500);
}

/* ===================== MOBILE NAV DRAWER ===================== */
function ensureMobileNavDrawer() {
  if (document.getElementById('m-nav-drawer')) return;
  const path = location.pathname.split('/').pop() || 'index.html';
  const isShop = path.includes('shop');
  const isCart = path.includes('cart');
  const isCheckout = path.includes('checkout');
  const isHome = !isShop && !isCart && !isCheckout;
  const drawer = document.createElement('div');
  drawer.id = 'm-nav-drawer';
  drawer.className = 'm-drawer';
  drawer.innerHTML = `
    <div class="m-drawer-header">
      <div class="m-drawer-brand">
        <img src="assets/logo-2.png" alt="${CONFIG.brandName}" onerror="this.style.display='none'">
        <span class="m-drawer-title">Navigation Menu</span>
      </div>
      <button class="m-drawer-close" id="m-drawer-close"><i class="fa-solid fa-xmark"></i></button>
    </div>
    <ul class="m-drawer-links">
      <li><a href="index.html" class="m-link ${isHome ? 'active' : ''}">
        <span class="m-icon-box"><i class="fa-solid fa-house"></i></span>
        <span class="m-link-text">Home</span>
        <i class="fa-solid fa-chevron-right m-arrow"></i></a></li>
      <li><a href="index.html#about" class="m-link">
        <span class="m-icon-box"><i class="fa-solid fa-circle-info"></i></span>
        <span class="m-link-text">About Us</span>
        <i class="fa-solid fa-chevron-right m-arrow"></i></a></li>
      <li><a href="shop.html" class="m-link ${isShop ? 'active' : ''}">
        <span class="m-icon-box"><i class="fa-solid fa-store"></i></span>
        <span class="m-link-text">Shop All Products</span>
        <i class="fa-solid fa-chevron-right m-arrow"></i></a></li>
      <li class="m-divider-label">Product Categories</li>
      <li><a href="shop.html?cat=TMT Bars" class="m-link sub-link">
        <span class="m-icon-box"><i class="fa-solid fa-bars-staggered"></i></span>
        <span class="m-link-text">TMT Bars</span></a></li>
      <li><a href="shop.html?cat=BRC Mesh" class="m-link sub-link">
        <span class="m-icon-box"><i class="fa-solid fa-border-all"></i></span>
        <span class="m-link-text">BRC Mesh</span></a></li>
      <li><a href="shop.html?cat=Chain Link" class="m-link sub-link">
        <span class="m-icon-box"><i class="fa-solid fa-link"></i></span>
        <span class="m-link-text">Chain Link</span></a></li>
      <li><a href="shop.html?cat=Round Bars" class="m-link sub-link">
        <span class="m-icon-box"><i class="fa-solid fa-grip-lines"></i></span>
        <span class="m-link-text">Round Bars</span></a></li>
      <li><a href="shop.html?cat=Nails" class="m-link sub-link">
        <span class="m-icon-box"><i class="fa-solid fa-thumbtack"></i></span>
        <span class="m-link-text">Wire Nails</span></a></li>
      <li><a href="shop.html?cat=Cement" class="m-link sub-link">
        <span class="m-icon-box"><i class="fa-solid fa-sack-dollar"></i></span>
        <span class="m-link-text">Cement</span></a></li>
      <li><a href="shop.html?cat=Mabati" class="m-link sub-link">
        <span class="m-icon-box"><i class="fa-solid fa-warehouse"></i></span>
        <span class="m-link-text">Mabati & Roofing</span></a></li>
      <li><a href="shop.html?cat=Fencing" class="m-link sub-link">
        <span class="m-icon-box"><i class="fa-solid fa-fence"></i></span>
        <span class="m-link-text">Fencing & Wire</span></a></li>
      <li><a href="shop.html?cat=Tiles" class="m-link sub-link">
        <span class="m-icon-box"><i class="fa-solid fa-grip"></i></span>
        <span class="m-link-text">Tiles</span></a></li>
      <li><a href="shop.html?cat=Tanks" class="m-link sub-link">
        <span class="m-icon-box"><i class="fa-solid fa-database"></i></span>
        <span class="m-link-text">Water Tanks</span></a></li>
      <li><a href="cart.html" class="m-link ${isCart ? 'active' : ''}">
        <span class="m-icon-box"><i class="fa-solid fa-cart-shopping"></i></span>
        <span class="m-link-text">My Cart</span>
        <i class="fa-solid fa-chevron-right m-arrow"></i></a></li>
      <li><a href="index.html#contact" class="m-link">
        <span class="m-icon-box"><i class="fa-solid fa-phone-volume"></i></span>
        <span class="m-link-text">Contact Us</span>
        <i class="fa-solid fa-chevron-right m-arrow"></i></a></li>
    </ul>
    <div class="m-drawer-footer">
      <a href="https://wa.me/${CONFIG.whatsapp}?text=${encodeURIComponent('Hello ' + CONFIG.brandName + '! I want to place an order.')}" target="_blank" class="m-footer-wa-btn">
        <i class="fa-brands fa-whatsapp"></i> Order on WhatsApp</a>
      <a href="tel:${CONFIG.phone}" class="m-footer-call-btn">
        <i class="fa-solid fa-phone"></i> Helpline: ${CONFIG.phone}</a>
    </div>`;
  document.body.appendChild(drawer);
  const ov = document.createElement('div');
  ov.id = 'm-nav-overlay'; ov.className = 'm-nav-overlay';
  document.body.appendChild(ov);
  document.getElementById('m-drawer-close')?.addEventListener('click', closeMobileNav);
  ov.addEventListener('click', closeMobileNav);
}
function openMobileNav() { ensureMobileNavDrawer(); document.getElementById('m-nav-drawer')?.classList.add('open'); document.getElementById('m-nav-overlay')?.classList.add('open'); document.body.style.overflow = 'hidden'; }
function closeMobileNav() { document.getElementById('m-nav-drawer')?.classList.remove('open'); document.getElementById('m-nav-overlay')?.classList.remove('open'); document.body.style.overflow = ''; }
function toggleMobileNav() {
  const d = document.getElementById('m-nav-drawer');
  if (d && d.classList.contains('open')) closeMobileNav(); else openMobileNav();
}

/* ===================== PRODUCT CARD TEMPLATE ===================== */
function escAttr(s) {
  return String(s).replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;');
}

function productCardHTML(p) {
  const imgs = (p.images && p.images.length ? p.images : [p.image]).join(',');
  return `
    <div class="product-card reveal" data-category="${escAttr(p.category)}" data-price="${p.fromPrice}" data-aos="fade-up">
      <div class="product-img-wrap">
        <span class="product-badge">${p.badge}</span>
        <div style="position:relative; width:100%; height:100%;">
          <img src="${p.image}" alt="${escAttr(p.name)}" loading="lazy" onerror="this.src='assets/logo-2.png'" data-images="${imgs}" data-index="0">
        </div>
        <div class="card-actions">
          <button class="card-add-btn" onclick="openQuickView(${p.id})"><i class="fa-solid fa-cart-plus"></i> Add to Cart</button>
        </div>
      </div>
      <div class="card-body product-card-body">
        <h3><a href="shop.html?q=${encodeURIComponent(p.name)}">${p.name}</a></h3>
        <div class="star-rating"><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star-half-stroke"></i><span>(${20 + p.id * 7})</span></div>
        <div class="product-price"><span class="from">From</span>${fmtPrice(p.fromPrice)}</div>
        <button class="card-btn-mobile" onclick="openQuickView(${p.id})"><i class="fa-solid fa-cart-plus"></i> Add to Cart</button>
      </div>
    </div>`;
}

function observeReveals(scope) {
  (scope || document).querySelectorAll('.reveal:not(.active)').forEach(el => {
    const obs = new IntersectionObserver(entries => {
      entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('active'); obs.unobserve(e.target); } });
    }, { threshold: 0.1 });
    obs.observe(el);
  });
}

/* ===================== SHOP PAGE ===================== */
let shopFilter = { cat: 'All Products', q: '' };
function cardCat(p) { return p.category; }

/* Flexible category matching, same behaviour as the reference site */
function matchesCategory(target, category) {
  const c = (target || '').toLowerCase().trim();
  const cat = (category || '').toLowerCase();
  if (!c || c === 'all' || c === 'all products') return true;
  if (c === 'nails') return cat.includes('nail');
  if (c === 'tile' || c === 'tiles' || c === 'floor tile' || c === 'wall tile')
    return (cat.includes('tile') || cat.includes('floor') || cat.includes('wall')) && !cat.includes('mabati');
  if (c === 'mabati')
    return cat.includes('mabati') || cat.includes('profile') || cat.includes('roof') ||
           cat.includes('corrugated') || cat.includes('versatile') || cat.includes('plain sheets') || cat.includes('purlin');
  if (c === 'tmt' || c === 'tmt bars' || c === 'steel')
    return cat.includes('tmt') || cat.includes('round bars') || cat.includes('rectangular hollow') ||
           cat.includes('square hollow') || cat.includes('purlin');
  if (c === 'z-purlin' || c === 'purlin') return cat.includes('purlin');
  if (c === 'toilets' || c === 'urinals' || c.includes('toilet')) return cat.includes('toilet');
  if (c === 'cabinets' || c.includes('cabinet')) return cat.includes('cabinet');
  if (c === 'tanks' || c.includes('tank')) return cat.includes('tank');
  if (c === 'chicken mesh') return cat.includes('chicken mesh') || cat.includes('poultry');
  if (c === 'fencing' || c === 'chain link')
    return cat.includes('chain link') || cat.includes('gabion') || cat.includes('chicken mesh') ||
           cat.includes('poultry') || cat.includes('anti-climb');
  if (c === 'wire mesh' || c === 'brc' || c === 'brc mesh' || c.includes('brc'))
    return cat.includes('brc') || cat.includes('weld mesh') || cat.includes('expanded');
  if (c === 'weld mesh') return cat.includes('weld mesh');
  if (c === 'expanded metal') return cat.includes('expanded');
  if (c === 'tile adhesive' || c.includes('adhesive')) return cat.includes('adhesive');
  if (c === 'pipes') return cat.includes('pipe') || cat.includes('hollow') || cat.includes('angle');
  if (c === 'bathroom') return cat.includes('toilet') || cat.includes('cabinet') || cat.includes('sink') ||
                               cat.includes('shower') || cat.includes('tap') || cat.includes('anti-twist');
  return cat === c || cat.includes(c) || c.includes(cat);
}

function applyFilters() {
  const grid = document.getElementById('shop-grid');
  if (!grid) return;
  let list = PRODUCTS.slice();
  if (shopFilter.cat && shopFilter.cat !== 'All Products') {
    list = list.filter(p => matchesCategory(shopFilter.cat, p.category));
  }
  if (shopFilter.q) {
    const q = shopFilter.q.toLowerCase();
    list = list.filter(p => (p.name + ' ' + p.category + ' ' + p.description).toLowerCase().includes(q));
  }
  const sortSel = document.getElementById('shop-sort');
  if (sortSel) {
    const v = sortSel.value;
    if (v === 'price-asc') list.sort((a, b) => a.fromPrice - b.fromPrice);
    else if (v === 'price-desc') list.sort((a, b) => b.fromPrice - a.fromPrice);
    else if (v === 'name') list.sort((a, b) => a.name.localeCompare(b.name));
  }
  const countEl = document.getElementById('shop-results-count');
  if (countEl) countEl.textContent = list.length + ' product' + (list.length === 1 ? '' : 's') + ' found';
  grid.innerHTML = list.length
    ? list.map(productCardHTML).join('')
    : `<div style="grid-column:1/-1;text-align:center;padding:70px 20px;color:var(--muted);">
        <i class="fa-solid fa-magnifying-glass" style="font-size:38px;opacity:.3;display:block;margin-bottom:14px;"></i>
        <p style="font-weight:600;">No products match your search.</p>
        <p style="font-size:13px;margin-top:6px;">Try a different keyword or category.</p></div>`;
  observeReveals(grid);
  if (typeof AOS !== 'undefined') AOS.refreshHard();
}

function initShopPage() {
  if (!document.getElementById('shop-grid')) return;
  const params = new URLSearchParams(location.search);
  shopFilter.cat = params.get('cat') || 'All Products';
  shopFilter.q = params.get('q') || '';
  const searchInput = document.getElementById('shop-search');
  if (searchInput) {
    searchInput.value = shopFilter.q;
    searchInput.addEventListener('input', e => { shopFilter.q = e.target.value; applyFilters(); });
  }
  const sortSel = document.getElementById('shop-sort');
  if (sortSel) sortSel.addEventListener('change', applyFilters);
  document.querySelectorAll('.sidebar-cat-link').forEach(a => {
    a.classList.toggle('active', a.dataset.cat === shopFilter.cat);
    a.addEventListener('click', e => {
      e.preventDefault();
      shopFilter.cat = a.dataset.cat;
      shopFilter.q = searchInput ? searchInput.value : '';
      document.querySelectorAll('.sidebar-cat-link').forEach(x => x.classList.remove('active'));
      a.classList.add('active');
      applyFilters();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  });
  applyFilters();
}

/* ===================== CART PAGE ===================== */
function renderCartPage() {
  const container = document.getElementById('cart-items-container');
  if (!container) return;
  const items = Cart.get();
  const emptyView = document.getElementById('cart-empty-view');
  const mainGrid = document.getElementById('cart-main-grid');
  if (!items.length) {
    if (emptyView) emptyView.style.display = 'block';
    if (mainGrid) mainGrid.style.display = 'none';
    return;
  }
  if (emptyView) emptyView.style.display = 'none';
  if (mainGrid) mainGrid.style.display = '';
  container.innerHTML = items.map(item => `
    <div class="cart-review-card">
      <img src="${item.image}" class="cart-review-img" alt="${item.name}" onerror="this.src='assets/logo-2.png'">
      <div class="cart-review-details">
        <div class="cart-review-name">${item.name}</div>
        <div class="cart-review-variant">${item.variant}</div>
        <div class="cart-review-price-row">
          <span class="cart-review-unit">${fmtPrice(item.price)}</span>
          <span class="cart-review-subtotal">${fmtPrice(item.price * item.qty)}</span>
        </div>
        <div class="cart-review-controls">
          <div class="cart-stepper">
            <button type="button" onclick="Cart.updateQty('${item.key}', -1)"><i class="fa-solid fa-minus"></i></button>
            <span>${item.qty}</span>
            <button type="button" onclick="Cart.updateQty('${item.key}', 1)"><i class="fa-solid fa-plus"></i></button>
          </div>
          <button type="button" class="cart-review-delete" onclick="Cart.remove('${item.key}')" title="Remove item">
            <i class="fa-solid fa-trash-can"></i> Remove</button>
        </div>
      </div>
    </div>`).join('');
  const t = Cart.total();
  const vat = Math.round(t - t / 1.16);
  const el = id => document.getElementById(id);
  if (el('cart-page-subtotal')) el('cart-page-subtotal').textContent = fmtPrice(t - vat);
  if (el('cart-page-vat')) el('cart-page-vat').textContent = fmtPrice(vat);
  if (el('cart-page-total')) el('cart-page-total').textContent = fmtPrice(t);
}

/* ===================== CHECKOUT PAGE ===================== */
function calcVAT(total) { return Math.round(total - total / 1.16); }

function renderCheckoutSummary() {
  const itemsEl = document.getElementById('co-summary-items');
  if (!itemsEl) return;
  const items = Cart.get();
  const t = Cart.total();
  const vat = calcVAT(t);
  itemsEl.innerHTML = items.length ? items.map(i => `
    <div class="co-summary-row">
      <span>${i.name} <small>(${i.variant})</small> × ${i.qty}</span>
      <strong>${fmtPrice(i.price * i.qty)}</strong>
    </div>`).join('')
    : '<p style="color:var(--muted);">Your cart is empty.</p>';
  const el = id => document.getElementById(id);
  if (el('co-summary-subtotal')) el('co-summary-subtotal').textContent = fmtPrice(t - vat);
  if (el('co-summary-vat')) el('co-summary-vat').textContent = fmtPrice(vat);
  if (el('co-summary-total')) el('co-summary-total').textContent = fmtPrice(t);
}

function getCoOrderRef() {
  let ref = sessionStorage.getItem('bnrm_order_ref');
  if (!ref) {
    const chars = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    ref = 'BNRM-';
    for (let i = 0; i < 7; i++) ref += chars.charAt(Math.floor(Math.random() * chars.length));
    sessionStorage.setItem('bnrm_order_ref', ref);
  }
  return ref;
}

/* --- FORMSPREE (optional, for later) ---
   When the client creates a Formspree form, paste the endpoint into
   CONFIG.formspreeEndpoint at the top of this file. Every placed order
   will then also be emailed automatically. No other changes needed. */
async function sendOrderToFormspree(orderData) {
  if (!CONFIG.formspreeEndpoint) return false;
  try {
    const res = await fetch(CONFIG.formspreeEndpoint, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
      body: JSON.stringify(orderData)
    });
    return res.ok;
  } catch (e) {
    console.warn('Formspree submission failed:', e);
    return false;
  }
}

/* --- ORDER PLACED POPUP --- */
function showOrderPlacedPopup(order, onDone) {
  let overlay = document.getElementById('order-popup-overlay');
  if (!overlay) {
    overlay = document.createElement('div');
    overlay.id = 'order-popup-overlay';
    overlay.className = 'order-popup-overlay';
    overlay.innerHTML = `
      <div class="order-popup" role="dialog" aria-modal="true" aria-label="Order placed">
        <div class="op-check">
          <svg viewBox="0 0 52 52"><path d="M14 27l8 8 16-17"/></svg>
        </div>
        <h3 class="op-title">Order Placed Successfully!</h3>
        <div class="op-ref">Order Ref: #${order.ref}</div>
        <p class="op-msg">Thank you ${order.fName}! Your order has been received.
        Our sales team will contact you shortly on <strong>${order.phone}</strong> to
        confirm delivery details.</p>
        <div class="op-progress"><span></span></div>
        <button class="op-continue" type="button">Continue</button>
      </div>`;
    document.body.appendChild(overlay);
  } else {
    overlay.querySelector('.op-ref').textContent = 'Order Ref: #' + order.ref;
    overlay.querySelector('.op-msg').innerHTML =
      `Thank you ${order.fName}! Your order has been received.
      Our sales team will contact you shortly on <strong>${order.phone}</strong> to
      confirm delivery details.`;
  }
  overlay.classList.add('open');
  document.body.style.overflow = 'hidden';
  // restart progress animation
  const bar = overlay.querySelector('.op-progress span');
  const newBar = bar.cloneNode(); bar.replaceWith(newBar);
  let finished = false;
  const finish = () => {
    if (finished) return;
    finished = true;
    clearTimeout(timer);
    overlay.classList.remove('open');
    document.body.style.overflow = '';
    if (typeof onDone === 'function') onDone();
  };
  const timer = setTimeout(finish, 6000); // auto-dismiss after 6s
  overlay.querySelector('.op-continue').onclick = finish;
}

function placeCoOrder() {
  const val = id => (document.getElementById(id)?.value || '').trim();
  const fName = val('co-first-name'), lName = val('co-last-name');
  const street = val('co-street'), street2 = val('co-street2');
  const city = val('co-city'), county = val('co-county');
  const postcode = val('co-postcode'), phone = val('co-phone');
  const email = val('co-email'), notes = val('co-order-notes');
  const termsChk = document.getElementById('co-terms-chk');

  if (!fName || !lName) { alert('Please enter your first and last name.'); return; }
  if (!street) { alert('Please enter your street address.'); return; }
  if (!city) { alert('Please enter your city / town.'); return; }
  if (!county) { alert('Please select your county.'); return; }
  if (!phone) { alert('Please enter your phone number.'); return; }
  if (termsChk && !termsChk.checked) { alert('Please read and agree to the terms and conditions to proceed.'); return; }

  const items = Cart.get();
  if (!items.length) { alert('Your cart is empty.'); return; }

  const ref = getCoOrderRef();
  const total = Cart.total();
  const vat = calcVAT(total);
  const subtotalExcl = total - vat;
  const fullAddress = street + (street2 ? ' (Notes: ' + street2 + ')' : '') + ', ' + city + ', ' + county + (postcode ? ' ' + postcode : '') + ', Kenya';
  const dateStr = new Date().toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric', hour: '2-digit', minute: '2-digit' });
  const paymentMethod = val('co-payment-method') || 'To be confirmed';

  let msg = '*NEW ORDER - ' + CONFIG.brandName.toUpperCase() + '*\n====================================\n';
  msg += '*Order Ref:* #' + ref + '\n*Date:* ' + dateStr + '\n\n';
  msg += '*BILLING DETAILS:*\n';
  msg += '• *Name:* ' + fName + ' ' + lName + '\n';
  msg += '• *Phone:* ' + phone + '\n';
  if (email) msg += '• *Email:* ' + email + '\n';
  msg += '• *Address:* ' + fullAddress + '\n';
  if (notes) msg += '• *Notes:* ' + notes + '\n';
  msg += '\n*ORDER ITEMS:*\n';
  items.forEach(function (item, i) {
    msg += (i + 1) + '. *' + item.name + '* - ' + item.variant + ' x' + item.qty + ' = KES ' + (item.price * item.qty).toLocaleString() + '\n';
  });
  msg += '\n*Subtotal (excl. VAT):* KES ' + subtotalExcl.toLocaleString() + '\n';
  msg += '*VAT (16%):* KES ' + vat.toLocaleString() + '\n';
  msg += '*TOTAL:* KES ' + total.toLocaleString() + '\n';
  msg += '*Payment:* ' + paymentMethod + '\n';
  msg += '====================================\nI confirm this order. Please confirm dispatch & payment.';

  const waUrl = 'https://wa.me/' + WHATSAPP_PHONE + '?text=' + encodeURIComponent(msg);

  const orderSnap = {
    ref, fName, lName, phone, email, address: fullAddress,
    city, county, notes, total, vat, subtotalExcl,
    items: items.slice(), waUrl, paymentMethod, dateFormatted: dateStr
  };

  // Fire-and-forget Formspree submission (only active when endpoint is set in CONFIG)
  sendOrderToFormspree(orderSnap);

  // THE POPUP: shows, then auto-dismisses, then reveals the success/receipt view
  showOrderPlacedPopup(orderSnap, () => {
    showCoSuccessView(orderSnap);
    sessionStorage.removeItem('bnrm_order_ref');
    Cart.save([]);
  });
}

function showCoSuccessView(order) {
  const coView = document.getElementById('co-checkout-view');
  const suView = document.getElementById('co-success-view');
  if (coView) coView.style.display = 'none';
  if (!suView) return;
  suView.style.display = 'block';
  window.scrollTo({ top: 0, behavior: 'smooth' });
  const el = id => document.getElementById(id);
  if (el('co-success-greeting')) el('co-success-greeting').textContent =
    'Hi ' + order.fName + ' ' + order.lName + ', your order #' + order.ref + ' has been received!';
  if (el('co-receipt-ref')) el('co-receipt-ref').textContent = '#' + order.ref;
  if (el('co-receipt-date')) el('co-receipt-date').textContent = order.dateFormatted;
  if (el('co-receipt-customer')) el('co-receipt-customer').textContent = order.fName + ' ' + order.lName + ' · ' + order.phone;
  if (el('co-receipt-delivery')) el('co-receipt-delivery').textContent = order.address;
  if (el('co-receipt-payment')) el('co-receipt-payment').textContent = order.paymentMethod;
  if (el('co-receipt-items-body')) el('co-receipt-items-body').innerHTML = order.items.map(i => `
    <tr><td>${i.name}<br><small style="color:var(--muted);">${i.variant}</small></td>
    <td>${i.qty}</td><td>${fmtPrice(i.price)}</td><td>${fmtPrice(i.price * i.qty)}</td></tr>`).join('');
  if (el('co-receipt-total')) el('co-receipt-total').textContent = fmtPrice(order.total);
  const waBtn = el('co-wa-confirm-btn');
  if (waBtn) waBtn.href = order.waUrl;
}

function toggleCoSection(bodyId, chk) {
  const body = document.getElementById(bodyId);
  if (body) body.style.display = chk.checked ? 'block' : 'none';
}

/* ===================== GLOBAL INIT ===================== */
document.addEventListener('DOMContentLoaded', () => {
  Cart.updateBadge();
  renderCartDrawer();
  initShopPage();
  renderCartPage();
  renderCheckoutSummary();

  // Cart open/close
  document.getElementById('cart-icon-btn')?.addEventListener('click', openCartDrawer);
  document.getElementById('cart-close-btn')?.addEventListener('click', closeCartDrawer);
  document.getElementById('cart-overlay')?.addEventListener('click', closeCartDrawer);

  // Drawer buttons
  document.getElementById('drawer-wa-btn')?.addEventListener('click', () => {
    if (!Cart.get().length) { alert('Your cart is empty. Please add items before proceeding.'); return; }
    closeCartDrawer();
    window.location.href = 'checkout.html#customer-details-step';
  });
  document.getElementById('cart-view-btn')?.addEventListener('click', () => {
    closeCartDrawer();
    window.location.href = 'cart.html';
  });

  // Quick view modal
  document.getElementById('quick-view-close')?.addEventListener('click', closeQuickView);
  document.getElementById('quick-view-modal')?.addEventListener('click', e => {
    if (e.target === e.currentTarget) closeQuickView();
  });
  document.querySelector('.modal-qty-minus')?.addEventListener('click', () => {
    const inp = document.querySelector('.modal-qty-val');
    inp.value = Math.max(1, parseInt(inp.value || '1', 10) - 1);
  });
  document.querySelector('.modal-qty-plus')?.addEventListener('click', () => {
    const inp = document.querySelector('.modal-qty-val');
    inp.value = parseInt(inp.value || '1', 10) + 1;
  });
  document.querySelector('.modal-add-btn')?.addEventListener('click', () => {
    const modal = document.getElementById('quick-view-modal');
    if (!modal) return;
    const prod = PRODUCTS.find(p => p.id === parseInt(modal.dataset.productId, 10));
    const sel = modal.querySelector('.modal-variant-select');
    const opt = sel.selectedOptions[0];
    const qty = parseInt(modal.querySelector('.modal-qty-val').value || '1', 10);
    if (prod && opt) {
      Cart.add(prod.id, parseInt(opt.dataset.vindex, 10), qty);
      closeQuickView();
      openCartDrawer();
    }
  });
  document.querySelector('.modal-variant-select')?.addEventListener('change', e => {
    const modal = document.getElementById('quick-view-modal');
    modal.querySelector('.modal-price').innerHTML =
      '<span class="from">From</span> ' + fmtPrice(parseInt(e.target.value, 10));
  });

  // Hero slider controls
  document.querySelector('.hero-prev')?.addEventListener('click', () => { showHeroSlide(curSlide - 1); startHeroTimer(); });
  document.querySelector('.hero-next')?.addEventListener('click', () => { showHeroSlide(curSlide + 1); startHeroTimer(); });
  document.querySelectorAll('.hero-dot').forEach((d, i) =>
    d.addEventListener('click', () => { showHeroSlide(i); startHeroTimer(); }));
  startHeroTimer();

  // Header search
  document.getElementById('header-search-btn')?.addEventListener('click', () => {
    const q = document.getElementById('header-search-input')?.value?.trim();
    if (q) window.location.href = `shop.html?q=${encodeURIComponent(q)}`;
  });
  document.getElementById('header-search-input')?.addEventListener('keydown', e => {
    if (e.key === 'Enter') {
      const q = e.target.value.trim();
      if (q) window.location.href = `shop.html?q=${encodeURIComponent(q)}`;
    }
  });

  // Mobile nav toggle
  document.getElementById('mobile-nav-toggle')?.addEventListener('click', toggleMobileNav);

  // Featured grid (homepage)
  const grid = document.getElementById('featured-grid');
  if (grid) {
    grid.innerHTML = FEATURED_IDS
      .map(id => PRODUCTS.find(p => p.id === id))
      .filter(Boolean)
      .map(productCardHTML).join('');
    observeReveals(grid);
  }

  // Reveal-on-scroll for static elements
  observeReveals(document);

  // AOS animations
  if (typeof AOS !== 'undefined') {
    AOS.init({ duration: 800, once: true, offset: 50 });
  }
});

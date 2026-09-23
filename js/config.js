/**
 * =========================================================================
 * CONFIG.JS - WEBSITE REBRANDING CONFIGURATION & ENGINE
 * =========================================================================
 * 
 * INSTRUCTIONS:
 * 1. Modify Section 1 (Data Entry) to update branding, styles, images, and content.
 * 2. Include this script at the end of index.html after index.js:
 *    
 * =========================================================================
 */

/* =========================================================================
   SECTION 1: DATA ENTRY CONFIGURATION
   ========================================================================= */
const REBRAND_CONFIG = {
  // --- BRAND IDENTIFICATION & META DATA ---
  brand: {
    name: "Dibs Cafe",
    suffix: ".",
    tagline: "Cozy Artisanal Cafe & Eatery",
    description: "Dibs Cafe offering delicious sandwiches, fresh sourdough open toasts, artisanal coffee, and a cozy ambience in Surajmal Vihar, New Delhi.",
    keywords: "coffee, cafe, dibs cafe, surajmal vihar, sourdough toasts, paninis, bagels, delhi cafe",
    themeColor: "#0d0e12",
    domain: "https://www.instagram.com/dibsdelhi",
    ogImage: "https://lh3.googleusercontent.com/gps-cs-s/AHRPTWkigP8i5s1iNaSfYbF0cwRlEKcX0vd61u6WSEBdwotDiHoVr9RlrOtGUB_TdztFxTaq-40m_8BE8JgiLCNYmDC_S1PT3qXcsEIW3moYPXZR-iVyc0VCfTc88l9uX7ldqQOFTpmx=w141-h177-n-k-no-nu",
    faviconEmoji: "☕",
    whatsappNumber: "918595527795"
  },

  // --- GLOBAL STYLES & THEMING ---
  styles: {
    colors: {
      bg: "#0d0e12",
      bgCard: "#15181e",
      bgLight: "#1c2028",
      primary: "#d4a373",
      primaryHover: "#faedcd",
      text: "#e0e2ec",
      textMuted: "#9aa0b4",
      accent: "#2c313c"
    },
    fonts: {
      heading: "'Syne', sans-serif",
      body: "'Plus Jakarta Sans', sans-serif"
    }
  },

  // --- HERO SECTION ---
  hero: {
    subtitle: "Artisanal Cafe & Kitchen",
    title: "Elevate Your Everyday Cafe Experience",
    description: "Experience artisanal sandwiches, fresh sourdough open toasts, handcrafted brews, and a cozy atmosphere crafted for your daily inspiration.",
    bgImage: "https://lh3.googleusercontent.com/gps-cs-s/AHRPTWkigP8i5s1iNaSfYbF0cwRlEKcX0vd61u6WSEBdwotDiHoVr9RlrOtGUB_TdztFxTaq-40m_8BE8JgiLCNYmDC_S1PT3qXcsEIW3moYPXZR-iVyc0VCfTc88l9uX7ldqQOFTpmx=w141-h177-n-k-no-nu",
    stats: [
      { value: "100%", label: "Fresh Sourdough & Ingredients" },
      { value: "4.8 ★", label: "Customer Rating" },
      { value: "1 PM - 12 AM", label: "Open Daily" }
    ]
  },

  // --- ABOUT US SECTION ---
  about: {
    subtitle: "About Us",
    title: "Crafting Good Food & Cozy Vibes with Passion",
    paragraphs: [
      "Located in the vibrant neighborhood near Keventers Market in Surajmal Vihar, Dibs Cafe is your hidden gem for artisanal bites and comforting beverages[cite: 2].",
      "From gourmet paninis and house-made sourdough open toasts to our signature cold coffees and sweet treats, Dibs Cafe provides a welcoming sanctuary to relax, connect, or work[cite: 1, 2, 3, 4]."
    ],
    image: "https://lh3.googleusercontent.com/gps-cs-s/AHRPTWl9R7FhMk6GG2QZkrZsArKqzJtmzlQOWZyXLFfQ2-wwED5Nqr77bld9IvEN5_FygPLObpi7yNbIUqetRk1rHb8n0qYptsUHEAXYHL9aPTNE3d8nSNY9lK_Tdzz46aWpE4-Hr3p5l496hEoo=s680-w680-h510-rw",
    imageAlt: "Interior view of Dibs Cafe showing cozy seating",
    experienceValue: "4.8 ★",
    experienceLabel: "Top Cafe in East Delhi"
  },

  // --- SPECIALS / NEWLY ADDED FOOD ---
  specials: {
    subtitle: "Fresh From Kitchen",
    title: "Newly Added Specials",
    badge: "New",
    description: "Seasonal & chef-special additions crafted to satisfy your cravings.",
    items: [
      {
        badge: "Must Try",
        img: "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?auto=format&fit=crop&q=80&w=600",
        alt: "French Onion Panini",
        diet: "veg",
        title: "French Onion Panini",
        price: "₹260",
        desc: "Cheesy caramelised onion paired with refreshing mint sauce grilled to perfection[cite: 1]."
      },
      {
        badge: "Chef's Pick",
        img: "https://images.unsplash.com/photo-1509722747041-616f39b57569?auto=format&fit=crop&q=80&w=600",
        alt: "Guac Guac Open Toast",
        diet: "veg",
        title: "Guac Guac Open Toast",
        price: "₹260",
        desc: "Generous spread of fresh guacamole, herbed cream cheese, and crumbled feta on sourdough bread[cite: 1]."
      },
      {
        badge: "Popular",
        img: "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&q=80&w=600",
        alt: "Shroom Melt Focaccia",
        diet: "veg",
        title: "Shroom Melt Focaccia",
        price: "₹320",
        desc: "Cheesy mushroom, aromatic pesto, melted mozzarella, and rich cream cheese inside warm focaccia[cite: 1]."
      }
    ]
  },

  // --- OFFERS SECTION ---
  offers: {
    subtitle: "Exclusive Savings",
    title: "Current Offers",
    items: [
      {
        tag: "FIRST ORDER",
        title: "Flat 15% OFF",
        desc: "Get 15% off on your first food or beverage order when you order via WhatsApp.",
        code: "DIBS15",
        highlight: false
      },
      {
        tag: "COMBO DEAL",
        title: "Panini + Iced Coffee Deal",
        desc: "Pair any signature panini with our OG Cold Coffee for a discounted rate.",
        code: "DIBSSPECIAL",
        highlight: true
      },
      {
        tag: "EVENING HANGOUT",
        title: "Free Cookie with Beverages",
        desc: "Order 2 specialty drinks between 4 PM – 7 PM and get a fresh baked cookie on us.",
        code: "SWEETDIBS",
        highlight: false
      }
    ]
  },

  // --- FEATURED MENU SECTION ---
  menu: {
    subtitle: "Our Full Menu",
    title: "Freshly Prepared & Brewed",
    pdfUrl: "assets/dibs-cafe-menu.pdf",
    pdfFilename: "Dibs_Cafe_Menu.pdf",
    categories: [
      { id: "all", label: "All Items", active: true },
      { id: "sandwiches", label: "Sandwiches", active: false },
      { id: "open-toasts", label: "Open Toasts", active: false }
    ],
    items: [
      {
        category: "sandwiches",
        img: "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?auto=format&fit=crop&q=80&w=600",
        title: "French Onion Panini",
        price: "₹260",
        diet: "veg",
        desc: "Cheesy caramelised onion, mint sauce[cite: 1].",
        swiggyUrl: "https://www.swiggy.com",
        zomatoUrl: "https://www.zomato.com"
      },
      {
        category: "sandwiches",
        img: "https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&q=80&w=600",
        title: "Potato Smash Panini",
        price: "₹260",
        diet: "veg",
        desc: "Cajun baby potatoes, fresh coleslaw, chili oil[cite: 1].",
        swiggyUrl: "https://www.swiggy.com",
        zomatoUrl: "https://www.zomato.com"
      },
      {
        category: "sandwiches",
        img: "https://images.unsplash.com/photo-1621800043295-a73fe2f76e2c?auto=format&fit=crop&q=80&w=600",
        title: "Bom-Bae Bagel",
        price: "₹260",
        diet: "veg",
        desc: "Classic veggies, thecha, sev[cite: 1].",
        swiggyUrl: "https://www.swiggy.com",
        zomatoUrl: "https://www.zomato.com"
      },
      {
        category: "sandwiches",
        img: "https://images.unsplash.com/photo-1539252554453-80ab65ce3586?auto=format&fit=crop&q=80&w=600",
        title: "Tandoori Twist Bagel",
        price: "₹290",
        diet: "veg",
        desc: "Tandoori paneer, mint sauce, cream cheese, fresh greens[cite: 1].",
        swiggyUrl: "https://www.swiggy.com",
        zomatoUrl: "https://www.zomato.com"
      },
      {
        category: "sandwiches",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgU9tWH4Ha5toAh-8rRl9GeSX0U0TG_XTNuwL9-82uxg&s=10",
        title: "Pesto Paneer Pop Focaccia",
        price: "₹290",
        diet: "veg",
        desc: "Crispy marinated paneer, pesto, fresh greens & salad[cite: 1].",
        swiggyUrl: "https://www.swiggy.com",
        zomatoUrl: "https://www.zomato.com"
      },
      {
        category: "sandwiches",
        img: "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&q=80&w=600",
        title: "Shroom Melt Focaccia",
        price: "₹320",
        diet: "veg",
        desc: "Cheesy mushroom, pesto, mozzarella, cream cheese[cite: 1].",
        swiggyUrl: "https://www.swiggy.com",
        zomatoUrl: "https://www.zomato.com"
      },
      {
        category: "open-toasts",
        img: "https://images.unsplash.com/photo-1525351484163-7529414344d8?auto=format&fit=crop&q=80&w=600",
        title: "Triple C",
        price: "₹220",
        diet: "veg",
        desc: "Cottage cheese and chilis served on fresh sourdough[cite: 1].",
        swiggyUrl: "https://www.swiggy.com",
        zomatoUrl: "https://www.zomato.com"
      },
      {
        category: "open-toasts",
        img: "https://images.unsplash.com/photo-1565299585323-38d6b0865b47?auto=format&fit=crop&q=80&w=600",
        title: "Pizza On Toast",
        price: "₹220",
        diet: "veg",
        desc: "Classic pizza flavours served on fresh sourdough[cite: 1].",
        swiggyUrl: "https://www.swiggy.com",
        zomatoUrl: "https://www.zomato.com"
      },
      {
        category: "open-toasts",
        img: "https://images.unsplash.com/photo-1509722747041-616f39b57569?auto=format&fit=crop&q=80&w=600",
        title: "Guac Guac",
        price: "₹260",
        diet: "veg",
        desc: "Generous spread of guacamole, herbed cream cheese, feta on fresh sourdough[cite: 1].",
        swiggyUrl: "https://www.swiggy.com",
        zomatoUrl: "https://www.zomato.com"
      }
    ]
  },

  // --- REVIEWS & TESTIMONIALS ---
  reviews: {
    subtitle: "Testimonials",
    title: "What Our Guests Say",
    items: [
      {
        stars: 5,
        text: "\"Loved this hidden gem near Keventers Market, Surajmal Vihar! 😍 The Creamy Umami Pasta, Potato Smash Panini, and Hummus Falafel Pita Pocket were absolutely delicious. Cozy ambience, great coffee, and quick service. Definitely worth a visit if you’re in East Delhi!\"[cite: 2]",
        avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=100",
        name: "Thefoodieemunda",
        role: "Local Guide · 225 reviews"
      },
      {
        stars: 4,
        text: "\"Had an amazing experience at dibs trying their pina colada and cookie with ice cream. Their hand stitched key rings are also extremely pretty.\"[cite: 3]",
        avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=100",
        name: "Neil Mehta",
        role: "Local Reviewer"
      },
      {
        stars: 5,
        text: "\"visited dibs to try out the og cold coffee and vietnamese coffee along with hummus-falafel pita pocket. It was a delicious feast and an absolute pleasure to having experienced it. Would definitely visit again!\"[cite: 4]",
        avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=100",
        name: "Vivaan Sharma",
        role: "Local Reviewer"
      }
    ],
    googleCta: {
      title: "Enjoyed your experience at Dibs Cafe?",
      desc: "Help others discover us by leaving a review on Google Maps!",
      url: "https://maps.google.com/?q=Dibs+Cafe+Surajmal+Vihar"
    }
  },

  // --- GALLERY SECTION ---
  gallery: {
    subtitle: "Visual Experience",
    title: "Life Inside Dibs Cafe",
    images: [
      { src: "https://lh3.googleusercontent.com/gps-cs-s/AHRPTWnjtTVGLK8jne8NVh-djUHb69CbWO3wcFtgTMKM0VWkVEQOG6orxWfj3-3z2AoLlrj2Eyf6Diywso5efwk1p0cGpLcX0vQAqTZZNkYzFIYwWUi5tH-UoOVwlqfNmYpnDZRQubQeEf1zTuP2=w141-h177-n-k-no-nu", alt: "Dibs Cafe visual 1" },
      { src: "https://lh3.googleusercontent.com/gps-cs-s/AHRPTWnVPIrb76pQ9wIah7DYCmgs-GReqyeLByFMt8vbHalzFv9-ZWcXuOLUdR4zRWF_tJZVItA1dq4Ss0fKy-QIQHiIYGtWDhb1o-OLLNvHN-Am5NdNxsC0_Q1RwRXMTq0J0i2VyYI8LnkcInSU=w141-h142-n-k-no-nu", alt: "Dibs Cafe visual 2" },
      { src: "https://lh3.googleusercontent.com/gps-cs-s/AHRPTWkCd6ilSQWEisG3sgb5iBn3DdbYcHRgqkkbZGzTFzNYGFKr1D6tHEjp2lhLFDxFsLgVHbh3wo9J7Fu1iOtW4Xr-Bb9eZc5E9SerpUHQAmlK7B-z_7z7TqFVBr9i9nunMCNP85sWmJJj8gsT=w141-h142-n-k-no-nu", alt: "Dibs Cafe visual 3" },
      { src: "https://lh3.googleusercontent.com/gps-cs-s/AHRPTWkdqA3I-i8fYZD0bMTz5nNwONvpkzKUCPj3hksvlg760pv-70pKgIMy-13yaGkkVu5V9NMT-iGoK5MKa3te9oEBbuB5KiKN5UIRTw7zhUIptIXruP0aYWxDeT556Dok41u70wB6ZIxQomV8=w141-h142-n-k-no-nu", alt: "Dibs Cafe visual 4" }
    ]
  },

  // --- LOCATION & CONTACT SECTION ---
  location: {
    subtitle: "Locations & Hours",
    title: "Visit Our Cafe",
    description: "We are conveniently located in Surajmal Vihar. Drop in for your daily brew, artisanal toasts, or delicious paninis.",
    address: "First Floor, B-21, DDA Market, Block B, Surajmal Vihar, New Delhi, Delhi, 110092",
    hours: [
      "Mon - Sun: 1:00 PM - 12:00 AM"
    ],
    email: "contact@dibsdelhi.com",
    phone: "+91 85955 27795",
    mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3501.123456789!2d77.3060!3d28.6580!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjh2MzknMjguOCJOIDc3wrAxOCcyMS42IkU!5e0!3m2!1sen!2sin!4v1614134823123!5m2!1sen!2sin"
  },

  // --- FOOTER SECTION ---
  footer: {
    description: "Crafting delightful culinary experiences through artisanal sourdough toasts, paninis, and specialty beverages.",
    socials: [
      { platform: "instagram", url: "https://www.instagram.com/dibsdelhi?stkn=MTEycGg4aWtpbjBrag==", iconClass: "ph-instagram-logo" },
      { platform: "facebook", url: "https://facebook.com", iconClass: "ph-facebook-logo" },
      { platform: "twitter", url: "https://twitter.com", iconClass: "ph-twitter-logo" }
    ],
    copyright: "© 2026 Dibs Cafe. All rights reserved."
  },

  // --- WI-FI MODAL SETTINGS ---
  wifi: {
    ssid: "DibsCafe_Guest_WiFi",
    password: "dibsdelhicafe"
  }
};

/* =========================================================================
   SECTION 2: REBRANDING ENGINE CODE
   ========================================================================= */
(function initRebrandingEngine(cfg) {
  'use strict';

  /**
   * @param {string} selector
   * @param {ParentNode} [ctx]
   * @returns {Element|null}
   */
  const $ = (selector, ctx = document) => ctx.querySelector(selector);

  /**
   * @param {string} selector
   * @param {ParentNode} [ctx]
   * @returns {Element[]}
   */
  const $$ = (selector, ctx = document) => Array.from(ctx.querySelectorAll(selector));

  function applyStyles() {
    const root = document.documentElement;
    if (cfg.styles?.colors) {
      if (cfg.styles.colors.bg) root.style.setProperty('--color-bg', cfg.styles.colors.bg);
      if (cfg.styles.colors.bgCard) root.style.setProperty('--color-bg-card', cfg.styles.colors.bgCard);
      if (cfg.styles.colors.bgLight) root.style.setProperty('--color-bg-light', cfg.styles.colors.bgLight);
      if (cfg.styles.colors.primary) root.style.setProperty('--color-primary', cfg.styles.colors.primary);
      if (cfg.styles.colors.primaryHover) root.style.setProperty('--color-primary-hover', cfg.styles.colors.primaryHover);
      if (cfg.styles.colors.text) root.style.setProperty('--color-text', cfg.styles.colors.text);
      if (cfg.styles.colors.textMuted) root.style.setProperty('--color-text-muted', cfg.styles.colors.textMuted);
      if (cfg.styles.colors.accent) root.style.setProperty('--color-accent', cfg.styles.colors.accent);
    }
    if (cfg.styles?.fonts) {
      if (cfg.styles.fonts.heading) root.style.setProperty('--font-heading', cfg.styles.fonts.heading);
      if (cfg.styles.fonts.body) root.style.setProperty('--font-body', cfg.styles.fonts.body);
    }
  }

  function applyMeta() {
    if (!cfg.brand) return;
    
    const fullTitle = `${cfg.brand.name} | ${cfg.brand.tagline}`;
    document.title = fullTitle;

    /**
     * @param {string} selector
     * @param {string} content
     */
    const setMeta = (selector, content) => {
      const el = $(selector);
      if (el) el.setAttribute('content', content);
    };

    setMeta('meta[name="title"]', fullTitle);
    setMeta('meta[name="description"]', cfg.brand.description);
    setMeta('meta[name="keywords"]', cfg.brand.keywords);
    setMeta('meta[name="theme-color"]', cfg.brand.themeColor);

    setMeta('meta[property="og:title"]', fullTitle);
    setMeta('meta[property="og:description"]', cfg.brand.description);
    setMeta('meta[property="og:image"]', cfg.brand.ogImage);
    setMeta('meta[property="og:url"]', cfg.brand.domain);
    setMeta('meta[property="og:site_name"]', `${cfg.brand.name} Cafe`);

    setMeta('meta[name="twitter:title"]', fullTitle);
    setMeta('meta[name="twitter:description"]', cfg.brand.description);
    setMeta('meta[name="twitter:image"]', cfg.brand.ogImage);
    setMeta('meta[name="twitter:url"]', cfg.brand.domain);

    const favicon = $('link[rel="icon"]');
    if (favicon && cfg.brand.faviconEmoji) {
      favicon.setAttribute('href', `data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>${cfg.brand.faviconEmoji}</text></svg>`);
    }

    const schemaScript = $('script[type="application/ld+json"]');
    if (schemaScript) {
      try {
        const schemaData = JSON.parse(schemaScript.textContent);
        schemaData.name = `${cfg.brand.name} ${cfg.brand.tagline}`;
        schemaData.image = cfg.brand.ogImage;
        schemaData.url = cfg.brand.domain;
        schemaData["@id"] = cfg.brand.domain;
        if (cfg.location) {
          schemaData.telephone = cfg.location.phone;
        }
        schemaScript.textContent = JSON.stringify(schemaData, null, 2);
      } catch (err) {
        console.warn("Failed to update JSON-LD schema:", err);
      }
    }
  }

  function applyBrandLogos() {
    $$('.logo').forEach(logoEl => {
      if (logoEl.childNodes.length > 0) {
        logoEl.childNodes[0].nodeValue = cfg.brand.name;
      } else {
        logoEl.textContent = cfg.brand.name;
      }
      let span = $('span', logoEl);
      if (!span && cfg.brand.suffix) {
        span = document.createElement('span');
        logoEl.appendChild(span);
      }
      if (span) span.textContent = cfg.brand.suffix;
      logoEl.setAttribute('aria-label', `${cfg.brand.name} Home`);
    });
  }

  function applyHero() {
    if (!cfg.hero) return;
    const heroSec = $('#home');
    if (heroSec && cfg.hero.bgImage) {
      heroSec.style.background = `linear-gradient(to right, rgba(13,14,18,0.95), rgba(13,14,18,0.6)), url('${cfg.hero.bgImage}') center/cover no-repeat`;
    }
    
    const sub = $('.hero-content .section-subtitle');
    if (sub) sub.textContent = cfg.hero.subtitle;
    
    const title = $('.hero-title');
    if (title) title.textContent = cfg.hero.title;
    
    const desc = $('.hero-description');
    if (desc) desc.textContent = cfg.hero.description;

    const statsContainer = $('.hero-stats');
    if (statsContainer && cfg.hero.stats) {
      statsContainer.innerHTML = cfg.hero.stats.map(s => `
        <div class="stat-item">
          <p class="stat-value">${s.value}</p>
          <p class="stat-label">${s.label}</p>
        </div>
      `).join('');
    }
  }

  function applyAbout() {
    if (!cfg.about) return;
    const aboutSec = $('#about');
    if (!aboutSec) return;

    const img = $('.about-img', aboutSec);
    if (img) {
      img.src = cfg.about.image;
      img.alt = cfg.about.imageAlt;
    }

    const badge = $('.about-experience-badge', aboutSec);
    if (badge) {
      badge.innerHTML = `
        <div style="font-size: 1.8rem; line-height: 1;">${cfg.about.experienceValue}</div>
        <div style="font-size: 0.8rem;">${cfg.about.experienceLabel}</div>
      `;
    }

    const sub = $('.section-subtitle', aboutSec);
    if (sub) sub.textContent = cfg.about.subtitle;

    const title = $('.section-title', aboutSec);     if (title) title.textContent = cfg.about.title;      const textMuted = $$('.text-muted', aboutSec);
    if (cfg.about.paragraphs && cfg.about.paragraphs.length >= 2) {
      if (textMuted[0]) textMuted[0].textContent = cfg.about.paragraphs[0];
      if (textMuted[1]) textMuted[1].textContent = cfg.about.paragraphs[1];
    }
  }

  function applySpecials() {
    if (!cfg.specials) return;
    const specSec = $('#new-food');
    if (!specSec) return;

    const sub = $('.section-subtitle', specSec);
    if (sub) sub.textContent = cfg.specials.subtitle;

    const title = $('.section-title', specSec);
    if (title) {
      title.innerHTML = `${cfg.specials.title} <span class="badge-new">${cfg.specials.badge}</span>`;
    }

    const desc = $('.text-muted', specSec);
    if (desc) desc.textContent = cfg.specials.description;

    const grid = $('.new-items-grid', specSec);
    if (grid && cfg.specials.items) {
      grid.innerHTML = cfg.specials.items.map(item => `
        <article class="new-food-card">
          <div class="new-food-img-wrapper">
            <span class="new-food-badge">${item.badge}</span>
            <img src="${item.img}" alt="${item.alt}" loading="lazy" decoding="async">
          </div>
          <div class="new-food-content">
            <div class="new-food-header">
              <h3 class="new-food-title">
                <span class="diet-badge diet-${item.diet}" title="${item.diet === 'veg' ? 'Vegetarian' : 'Non-Vegetarian'}" aria-label="${item.diet === 'veg' ? 'Vegetarian' : 'Non-Vegetarian'}"></span> 
                ${item.title}
              </h3>
              <span class="new-food-price">${item.price}</span>
            </div>
            <p class="new-food-desc">${item.desc}</p>
            <a href="#location" class="btn btn-outline btn-compact">Order Fresh</a>
          </div>
        </article>
      `).join('');
    }
  }

  function applyOffers() {
    if (!cfg.offers) return;
    const offerSec = $('#offers');
    if (!offerSec) return;

    const sub = $('.section-subtitle', offerSec);
    if (sub) sub.textContent = cfg.offers.subtitle;

    const title = $('.section-title', offerSec);
    if (title) title.textContent = cfg.offers.title;

    const grid = $('.offers-grid', offerSec);
    if (grid && cfg.offers.items) {
      grid.innerHTML = cfg.offers.items.map(o => `
        <div class="offer-card ${o.highlight ? 'highlight-offer' : ''}">
          <div class="offer-tag">${o.tag}</div>
          <h3 class="offer-title">${o.title}</h3>
          <p class="offer-desc">${o.desc}</p>
          <div class="offer-code-wrapper">
            <span>Code: <strong>${o.code}</strong></span>
          </div>
        </div>
      `).join('');
    }
  }

  function applyMenu() {
    if (!cfg.menu) return;
    const menuSec = $('#menu');
    if (!menuSec) return;

    const sub = $('.section-subtitle', menuSec);
    if (sub) sub.textContent = cfg.menu.subtitle;

    const title = $('.section-title', menuSec);
    if (title) title.textContent = cfg.menu.title;

    const dlBtn = $('.btn-download-menu', menuSec);
    if (dlBtn) {
      dlBtn.setAttribute('href', cfg.menu.pdfUrl);
      dlBtn.setAttribute('download', cfg.menu.pdfFilename);
    }

    const catContainer = $('.category-filter-container', menuSec);
    if (catContainer && cfg.menu.categories) {
      catContainer.innerHTML = cfg.menu.categories.map(c => `
        <button class="category-btn ${c.active ? 'active' : ''}" role="tab" aria-selected="${c.active}" aria-controls="menu-grid" data-filter="${c.id}">${c.label}</button>
      `).join('');
    }

    const menuGrid = $('#menu-grid');
    if (menuGrid && cfg.menu.items) {
      menuGrid.innerHTML = cfg.menu.items.map(item => `
        <article class="food-card" data-category="${item.category}">
          <div class="food-card-img-wrapper">
            <img src="${item.img}" alt="${item.title}" loading="lazy" decoding="async">
          </div>
          <div class="food-card-body">
            <div class="food-card-header">
              <h3 class="food-card-title">
                <span class="diet-badge diet-${item.diet}" title="${item.diet === 'veg' ? 'Vegetarian' : 'Non-Vegetarian'}" aria-label="${item.diet === 'veg' ? 'Vegetarian' : 'Non-Vegetarian'}"></span> 
                ${item.title}
              </h3>
              <span class="food-card-price">${item.price}</span>
            </div>
            <p class="food-card-desc">${item.desc}</p>
            <div class="food-card-actions">
              <a href="${item.swiggyUrl}" target="_blank" rel="noopener" class="btn btn-order btn-swiggy">Order with Swiggy</a>
              <a href="${item.zomatoUrl}" target="_blank" rel="noopener" class="btn btn-order btn-zomato">Order with Zomato</a>
              <button type="button" class="btn btn-order btn-whatsapp order-wa-btn" data-item-name="${item.title}" data-item-price="${item.price}">Order via WhatsApp</button>
            </div>
          </div>
        </article>
      `).join('');
    }
  }

  function applyReviews() {
    if (!cfg.reviews) return;
    const revSec = $('#reviews');
    if (!revSec) return;

    const sub = $('.section-subtitle', revSec);
    if (sub) sub.textContent = cfg.reviews.subtitle;

    const title = $('.section-title', revSec);
    if (title) title.textContent = cfg.reviews.title;

    const grid = $('.reviews-grid', revSec);
    if (grid && cfg.reviews.items) {
      grid.innerHTML = cfg.reviews.items.map(r => `
        <figure class="review-card">
          <blockquote class="review-text">
            <div class="review-stars" aria-label="Rating: ${r.stars} out of 5 stars">
              ${Array(r.stars).fill('<i class="ph-fill ph-star" aria-hidden="true"></i>').join('')}
            </div>
            <p>${r.text}</p>
          </blockquote>
          <figcaption class="reviewer-info">
            <img src="${r.avatar}" alt="${r.name}" class="reviewer-avatar" loading="lazy" decoding="async">
            <div>
              <span class="reviewer-name">${r.name}</span>
              <span class="reviewer-role">${r.role}</span>
            </div>
          </figcaption>
        </figure>
      `).join('');
    }

    if (cfg.reviews.googleCta) {
      const ctaTitle = $('.cta-title', revSec);
      if (ctaTitle) ctaTitle.textContent = cfg.reviews.googleCta.title;

      const ctaDesc = $('.cta-desc', revSec);
      if (ctaDesc) ctaDesc.textContent = cfg.reviews.googleCta.desc;

      const ctaBtn = $('.btn-google-review', revSec);
      if (ctaBtn) ctaBtn.setAttribute('href', cfg.reviews.googleCta.url);
    }
  }

  function applyGallery() {
    if (!cfg.gallery) return;
    const galSec = $('#gallery');
    if (!galSec) return;

    const sub = $('.section-subtitle', galSec);
    if (sub) sub.textContent = cfg.gallery.subtitle;

    const title = $('.section-title', galSec);
    if (title) title.textContent = cfg.gallery.title;

    const grid = $('.gallery-grid', galSec);
    if (grid && cfg.gallery.images) {
      grid.innerHTML = cfg.gallery.images.map(img => `
        <button type="button" class="gallery-item" aria-label="Expand image: ${img.alt}">
          <img src="${img.src}" alt="${img.alt}" loading="lazy" decoding="async">
          <span class="gallery-overlay"><i class="ph ph-arrows-out-simple" aria-hidden="true"></i></span>
        </button>
      `).join('');
    }
  }

  function applyLocation() {
    if (!cfg.location) return;
    const locSec = $('#location');
    if (!locSec) return;

    const sub = $('.section-subtitle', locSec);
    if (sub) sub.textContent = cfg.location.subtitle;

    const title = $('.section-title', locSec);
    if (title) title.textContent = cfg.location.title;

    const desc = $('.text-muted', locSec);     if (desc) desc.textContent = cfg.location.description;      const infoItems = $$('.info-item', locSec);
    if (infoItems.length >= 3) {
      const addrText = $('.text-muted', infoItems[0]);       if (addrText) addrText.textContent = cfg.location.address;        const hoursContainer = infoItems[1];       if (hoursContainer && cfg.location.hours) {         const lines = $$('.text-muted', hoursContainer);
        cfg.location.hours.forEach((h, idx) => {
          if (lines[idx]) lines[idx].textContent = h;
        });
      }

      const contactText = $('.text-muted', infoItems[2]);
      if (contactText) contactText.textContent = `${cfg.location.email} | ${cfg.location.phone}`;
    }

    const mapIframe = $('iframe', locSec);
    if (mapIframe && cfg.location.mapEmbedUrl) {
      mapIframe.src = cfg.location.mapEmbedUrl;
    }
  }

  function applyFooter() {
    if (!cfg.footer) return;
    const foot = $('.footer');
    if (!foot) return;

    const desc = $('.footer-desc', foot);
    if (desc) desc.textContent = cfg.footer.description;

    const socialContainer = $('.social-links', foot);
    if (socialContainer && cfg.footer.socials) {
      socialContainer.innerHTML = cfg.footer.socials.map(s => `
        <a href="${s.url}" class="social-icon" aria-label="${s.platform}" target="_blank" rel="noopener">
          <i class="ph ${s.iconClass}" aria-hidden="true"></i>
        </a>
      `).join('');
    }

    const copy = $('.footer-bottom p', foot);
    if (copy) copy.textContent = cfg.footer.copyright;
  }

  function applyWifiModal() {
    if (!cfg.wifi) return;
    const wifiModal = $('#wifi-modal');
    if (!wifiModal) return;

    const qrImg = $('.wifi-qr-img', wifiModal);
    if (qrImg) {
      qrImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=180x180&data=WIFI:S:${cfg.wifi.ssid};T:WPA;P:${cfg.wifi.password};;`;
    }

    const values = $$('.wifi-value', wifiModal);
    if (values[0]) values[0].textContent = cfg.wifi.ssid;
    if (values[1]) values[1].textContent = cfg.wifi.password;
  }

  document.addEventListener('DOMContentLoaded', () => {
    applyStyles();
    applyMeta();
    applyBrandLogos();
    applyHero();
    applyAbout();
    applySpecials();
    applyOffers();
    applyMenu();
    applyReviews();
    applyGallery();
    applyLocation();
    applyFooter();
    applyWifiModal();
  });
})(REBRAND_CONFIG);

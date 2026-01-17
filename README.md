<h1>MEN OF GOD — CMS USER GUIDE</h1>

This guide explains how to create and manage content for the Men of God website using the CMS. It covers:

- Blog posts
- Episodes
- Pages
- Products
- Navigation
- Hosts
- Hero system
- Styling system

<h1>🧱 1. BLOG POSTS</h1>

<h3>Front Matter Fields</h3>

| Field | Description |
|---|---|
| `title` | Blog post title. |
| `date` | Publish date. |
| `author` |Name of the author. |
| `cover` | Featured image for the post. |
| `summary` | Short excerpt used in previews.|
| `comments` | Enable/disable comments. |
| `publish` | Controls visibility on the site. |
| `body` | Main content (rich text). |

Hero Behavior

Blog posts automatically use:

- `title`
- `summary`
- `cover` (as hero background)

You can override with:

hero_title:
hero_subtitle:
hero_image:

<h1>🧱 2. EPISODES</h1>

<h3>Front Matter Fields</h3>

| Field | Description |
|---|---|
| `title` | Episode title.|
| `date` | Release date. |
| `author` | Host or contributor. |
| `cover` | Episode artwork. |
| `summary` | Short description. |
| `audio` | MP3 URL. |
| `video` | YouTube ID. |
| `publish` | Controls visibility. |
| `comments` | Enable/disable comments. |
| `body` | Episode notes or transcript. |

<h3>Hero Behavior</h3>

Episodes automatically use:

- `title`
- `summary`
- `cover`

You can override with hero fields.

<h1>🧱 3. PAGES</h1>

Pages are the most flexible content type.

<h3>Front Matter Fields</h3>

| Field | Description |
|---|---|
| `title` | Page title. |
| `layout` | Layout template. |
| `permalink` | Custom URL. |
| `nav` | Show in navigation. |
| `nav_order` | Navigation order. |
| `body` | Main content. |

<h3>Hero Fields</h3>

| Field | Description |
|---|---|
| `hero_enabled` | Turn hero on/off. |
| `hero_title` | Main hero title. |
| `hero_subtitle` | Subtitle/tagline. |
| `hero_image` | Background image. |
| `hero_overlay_text` | Scripture or mission statement. |
| `hero_overlay_source` | Attribution or reference. |
| `hero_scripture_text` | Bible verse. |
| `hero_scripture_ref` | Verse reference. |
| `hero_cta` | List of CTA buttons. |

<h3>CTA Button Fields</h3>

| Field | Description |
|---|---|
| `label` | Button text. |
| `url` | Link target. |
| `style` | primary or secondary. |

<h1>🧱 4. PRODUCTS</h1>

Products include:

- title
- slug
- price
- cover image
- gallery
- Stripe + Printful IDs
- summary
- body

These fields power the store system.

<h1>🧱 5. NAVIGATION</h1>

Navigation items include:

- title
- url
- order
- visible

This controls the header menu.

<h1>🧱 6. HOSTS</h1>

Hosts include:

- name
- image
- bio
- visible

Used on the “About / Hosts” page.

<h1>🧱 7. USING THE STYLING SYSTEM</h1>

Your SCSS system is built around:

<h3>Rugged Palette</h3>

```scss
$rugged-accent
$rugged-dark
$rugged-light
$rugged-steel
```
<h3>Reusable Components</h3>

- `.mog-hero`
- `.mog-hero-inner`
- `.mog-hero-overlay`
- `.mog-hero-scripture`
- `.mog-hero-cta`
- `.mog-btn`
- `.mog-container`
- `.mog-main`
- `.mog-section`
- `.mog-contact-*`

<h3>How to use styling in content</h3>

Inside CMS rich text fields, you can apply classes like:
```html
<div class="mog-section">
  <h2 class="mog-heading">Our Mission</h2>
  <p>We forge men of courage...</p>
</div>
```
Or add buttons:
```html
<a href="/episodes/" class="mog-btn mog-btn-primary">Listen Now</a>
```
Or add scripture blocks:
```html
<div class="mog-hero-overlay">
  <p>"Be strong and courageous."</p>
  <span>Joshua 1:9</span>
</div>
```

<h1>🧱 8. FRONTMATTER EXAMPLES</h1>
These are examples of all the different types of frontmatter available for each page. 

<h3>BLOG-POST — Full Example Frontmatter</h3>

```
---
layout: blog-post
title: "Forging Strength Through Discipline"
date: 2026-01-17
author: "Tom Parks"
cover: /assets/blog/discipline.jpg
summary: "A practical look at how discipline shapes godly men."
comments: true
publish: true

# Optional hero overrides
hero_enabled: true
hero_title: "Forging Strength Through Discipline"
hero_subtitle: "Becoming the man God calls you to be."
hero_image: /assets/blog/discipline-hero.jpg

hero_overlay_text: "Discipline is choosing what matters most over what feels good now."
hero_overlay_source: Men of God

hero_scripture_text: "For the Spirit God gave us does not make us timid, but gives us power, love and self-discipline."
hero_scripture_ref: 2 Timothy 1:7

hero_cta:
  - label: Listen to Related Episode
    url: /episodes/
    style: primary
  - label: Join the Brotherhood
    url: /community/
    style: secondary
---
```

<h3>EPISODE — Full Example Frontmatter</h3>

```
---
layout: episode
title: "Standing Firm in a Shifting Culture"
date: 2026-01-17
author: "Tom & John"
cover: /assets/episodes/standing-firm.jpg
summary: "How Christian men can stand strong when culture moves the goalposts."
audio: https://cdn.menofgod.com/audio/standing-firm.mp3
video: dQw4w9WgXcQ
comments: true
publish: true

# Optional hero overrides
hero_enabled: true
hero_title: "Standing Firm in a Shifting Culture"
hero_subtitle: "Truth doesn’t move — and neither should we."
hero_image: /assets/episodes/standing-firm-hero.jpg

hero_overlay_text: "Culture changes. Christ doesn’t."
hero_overlay_source: Men of God

hero_scripture_text: "Be watchful, stand firm in the faith, act like men, be strong."
hero_scripture_ref: 1 Corinthians 16:13

hero_cta:
  - label: Listen Now
    url: "#audio"
    style: primary
  - label: Watch on YouTube
    url: "https://youtube.com/watch?v=dQw4w9WgXcQ"
    style: secondary
---
```

<h3>PAGE — Full Example Frontmatter</h3>

```
---
layout: page
title: "Our Mission"
permalink: /mission/
nav: true
nav_order: 2

# Hero system
hero_enabled: true
hero_title: "Our Mission"
hero_subtitle: "Forging men of courage, conviction, and strength in Christ."
hero_image: /assets/page/images/mission-hero.jpg

hero_overlay_text: "We are called to build men who build families who build communities."
hero_overlay_source: Men of God Ministry

hero_scripture_text: "As iron sharpens iron, so one man sharpens another."
hero_scripture_ref: Proverbs 27:17

hero_cta:
  - label: Join the Brotherhood
    url: /community/
    style: primary
  - label: Listen to the Podcast
    url: /episodes/
    style: secondary
---
```

<h3>PRODUCT — Full Example Frontmatter</h3>

```
---
layout: product
title: "Men of God Premium Hoodie"
slug: men-of-god-hoodie
publish: true
price: 49.99

cover: /assets/products/hoodie-cover.jpg
gallery:
  - /assets/products/hoodie-1.jpg
  - /assets/products/hoodie-2.jpg
  - /assets/products/hoodie-3.jpg

stripe_price_id: price_1QXYZ123abc
printful_product_id: 1234567
printful_variant_id: 9876543

summary: "A rugged, comfortable hoodie built for men who stand firm in the faith."

# Full hero support for product pages too
hero_enabled: true
hero_title: "Men of God Hoodie"
hero_subtitle: "Built for strength. Built for purpose."
hero_image: /assets/products/hoodie-hero.jpg

hero_overlay_text: "Wear your faith boldly."
hero_overlay_source: Men of God Apparel

hero_scripture_text: "Put on the full armor of God."
hero_scripture_ref: Ephesians 6:11

hero_cta:
  - label: Buy Now
    url: "#purchase"
    style: primary
  - label: View Size Guide
    url: "#sizes"
    style: secondary
---
```

<h3>HOMEPAGE — Full Example Frontmatter</h3>

```
---
layout: default
title: "Men of God"
permalink: /

# Hero system
hero_enabled: true
hero_title: "Men of God"
hero_subtitle: "Forging men of courage, conviction, and Christlike strength."
hero_image: /assets/page/images/home-hero.jpg

hero_overlay_text: "Be watchful, stand firm in the faith, act like men, be strong."
hero_overlay_source: 1 Corinthians 16:13

hero_scripture_text: "We are called to lead with strength and humility."
hero_scripture_ref: Men of God Ministry

hero_cta:
  - label: Listen to the Latest Episode
    url: /episodes/
    style: primary
  - label: Read the Latest Articles
    url: /blog/
    style: secondary
---
```

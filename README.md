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
```css
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
# DrawGifts India - Secret Santa Generator

A free, no-account Secret Santa generator with Wish Lists and Gift Finder features. Inspired by drawnames.in but completely free and open source.

## Features

- **Secret Santa Generator** - Draw names randomly with exclusions support
- **Wish Lists** - Create and share wish lists for gift givers
- **Gift Finder** - Search products with Amazon affiliate links
- **No Registration Required** - Completely free, no account needed
- **Mobile Friendly** - Works on all devices

## Tech Stack

- HTML5, CSS3, JavaScript (Vanilla)
- No backend required - uses LocalStorage
- Free hosting on GitHub Pages

## Setup Local Development

1. Clone this repository or download files
2. Open `index.html` in your browser
3. That's it! No server needed.

## Deploy to GitHub Pages

1. Create a GitHub account (if you don't have one)
2. Create a new repository named `drawnames`
3. Push your code:

```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/drawnames.git
git push -u origin main
```

4. Go to Repository Settings > Pages
5. Set Source to "Deploy from a branch"
6. Select branch "main" and folder "/ (root)"
7. Save and wait 1-2 minutes

Your site will be live at: `https://YOUR_USERNAME.github.io/drawgifts/`

## Amazon Affiliate Setup

1. Apply for [Amazon Associates](https://affiliate-program.amazon.in/)
2. Once approved, replace the affiliate tag in `script.js`:

```javascript
// Find this line and replace YOUR_TAG with your actual tag
const AMAZON_AFFILIATE_TAG = 'YOUR_TAG-21';
```

3. When users click your Amazon links and purchase, you earn commission!

## Custom Domain (Optional)

To use a custom domain like `drawnames.in`:

1. Buy domain from GoDaddy/Google Domains
2. In GitHub Pages settings, enter your custom domain
3. Create CNAME record pointing to `YOUR_USERNAME.github.io`

## License

MIT License - Free to use and modify!

## Disclaimer

This is an open source project. Not affiliated with Amazon or drawnames.in. Amazon Associate links are used for monetization - purchases through these links earn commission.
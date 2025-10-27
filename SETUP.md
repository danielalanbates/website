# BatesAI Website - Simple Setup Guide

## 🚀 Deploy Your Site in 5 Minutes

### Step 1: Push to GitHub

1. Create new repo on GitHub (name it whatever you want, like "batesai-website")
2. In your terminal:

```bash
cd batesai-site
git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/YOUR-USERNAME/YOUR-REPO-NAME.git
git push -u origin main
```

### Step 2: Enable GitHub Pages

1. Go to your repo on GitHub
2. Click **Settings** (top menu)
3. Click **Pages** (left sidebar)
4. Under "Build and deployment":
   - Source: **GitHub Actions**
5. Done! Your site will auto-deploy on every push

### Step 3: Get Your URL

Your site will be live at:
`https://YOUR-USERNAME.github.io/YOUR-REPO-NAME/`

**If using a custom domain:**
- Just enter your domain in the "Custom domain" field
- Follow GitHub's DNS instructions

---

## 📝 Making Changes

Every time you push to GitHub, your site automatically rebuilds!

```bash
# Make your changes, then:
git add .
git commit -m "Updated homepage"
git push
```

Wait 1-2 minutes and your changes are live!

---

## ⚙️ Configuration

**If using a repo name (not custom domain):**

Edit `astro.config.mjs`:
```js
site: 'https://YOUR-USERNAME.github.io',
base: '/YOUR-REPO-NAME',
```

**If using custom domain:**
```js
site: 'https://batesai.com',
// base: '/YOUR-REPO-NAME', // Remove this line
```

---

## 🆘 Troubleshooting

**Site not deploying?**
- Check Actions tab on GitHub for errors
- Make sure GitHub Pages is enabled in Settings

**CSS not loading?**
- Update the `base` config in astro.config.mjs

**Need help?**
- Check the Actions tab for build logs
- Most common issue: forgot to update site/base URLs

---

That's it! Your site auto-deploys on every push to GitHub.

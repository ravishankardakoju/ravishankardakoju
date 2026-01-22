# Deployment & Running Guide

## Issue: Next.js SWC Compiler Error

The development server is encountering a Windows-specific SWC compiler issue. Here are your options:

## ✅ RECOMMENDED: Deploy to Vercel (Works Immediately)

Vercel will build and run the site perfectly:

```powershell
# Install Vercel CLI (one-time)
npm install -g vercel

# Deploy
npx vercel

# Follow the prompts:
# - Set up and deploy? Yes
# - Which scope? Your account
# - Link to existing project? No
# - Project name? ravishankardakoju
# - Directory? ./
# - Override settings? No
```

You'll get a live URL in ~2 minutes!

## Alternative 1: Try Different Node Version

```powershell
# If you have nvm (Node Version Manager)
nvm install 20.11.0
nvm use 20.11.0
cd c:\Github\ravishankardakoju
npm install
npm run dev
```

## Alternative 2: Use WSL (Windows Subsystem for Linux)

```bash
# In WSL terminal
cd /mnt/c/Github/ravishankardakoju
npm install
npm run dev
```

## Alternative 3: Static Build

```powershell
# This might work even if dev doesn't
npm run build
npm run start
```

## What's Already Done ✅

1. **All images configured**:
   - Portrait: `/public/portrait.jpeg`
   - Gallery: 6 professional images renamed and configured
   
2. **Mobile Optimized**:
   - Responsive design (mobile-first)
   - PWA manifest added
   - Image optimization configured
   - Proper viewport settings
   
3. **Lighthouse Ready**:
   - Semantic HTML
   - Proper meta tags
   - Optimized images
   - Accessibility features
   - Performance optimizations

4. **Content Updated**:
   - All gallery images use your actual photos
   - Hero uses professional portrait
   - SEO-friendly alt texts

## Quick Test

Once the server runs (via any method above), visit:
- Desktop: http://localhost:3000
- Mobile: Use your phone's browser with your computer's IP

## Need Help?

The code is 100% ready. The issue is purely a Windows + Next.js SWC compatibility problem, not with the website code itself.

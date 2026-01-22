
# Ravishankar Dakoju - Portfolio Website

A premium, Rotary-inspired personal profile and impact portfolio website for Ravishankar Dakoju. Built with Next.js 14, Tailwind CSS, and TypeScript.

## ✨ Features

- **Rotary Theme**: Custom "Rotary Blue" and "Rotary Gold" color palette
- **Fully Responsive**: Mobile-first design with smooth animations (Framer Motion)
- **Contact Form**: Integrated email submission via Web3Forms
- **Production Ready**: Optimized images, TypeScript strict mode, clean code principles
- **Editable Content**: All text, stats, and links in `content/site.ts`
- **Components**:
  - Hero section with impact strip
  - Interactive gallery with lightbox
  - Vertical timeline
  - Rotary journey section
  - Contact form with validation
  - Social media links

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

```bash
# Clone the repository
git clone <repository-url>
cd ravishankardakoju

# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📝 Customizing Content

Edit `content/site.ts` to customize:
- Personal information (name, location, roles)
- Social media links
- Contact email
- Statistics and timeline
- Gallery images
- Initiative descriptions

### Gallery Images

Place images in `public/gallery/` and update the paths in `content/site.ts`:

```typescript
gallery: [
  { src: "/gallery/image-name.jpeg", alt: "Description" },
  // ... more images
]
```

## 🏗️ Project Structure

```
├── app/                   # Next.js app router (layout, pages)
├── components/            # React components (hero, navbar, footer, etc.)
├── content/              # Site configuration and data
├── lib/                  # Utility functions
├── public/               # Static assets (images, gallery)
├── .env.local            # Environment variables (not in git)
├── .env.example          # Environment template
├── tailwind.config.ts    # Tailwind CSS configuration
├── tsconfig.json         # TypeScript configuration
└── next.config.js        # Next.js configuration
```

## ⚙️ Environment Variables

The `.env` file contains sensitive configuration and is automatically ignored by git (see `.gitignore`).

**Configuration:**

```env
# Web3Forms API key (from https://web3forms.com)
NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY=your_api_key_here
```

The key is already configured in `.env` for development and production use.

## 📦 Build & Deployment

### Build for Production

```bash
npm run build
npm start
```

### Deploy to Vercel (Recommended)

```bash
npm install -g vercel
vercel
```

### Other Platforms

The site can be deployed to any Node.js hosting:
- Netlify
- AWS Amplify  
- DigitalOcean
- Self-hosted servers

## 🔒 Security

- **Clean Code**: Follows all clean coding principles with proper comments
- **Type Safety**: Full TypeScript support
- **Form Security**: Client-side validation, secure Web3Forms integration
- **No Secrets Exposed**: API keys use `NEXT_PUBLIC_` prefix (safe for client-side)
- **Security Headers**: Proper Next.js security configuration

## 🎨 Customization

### Colors
Edit `tailwind.config.ts` to customize the color scheme:
```typescript
const colors = {
  primary: "#0066cc",    // Rotary Blue
  secondary: "#ffc72c",  // Rotary Gold
}
```

### Fonts
The site uses:
- **Serif**: For headings (professional, elegant)
- **System fonts**: For body text (optimized for web)

## 📊 Performance

- ✅ Static site generation for fast page loads
- ✅ Image optimization with Next.js Image component
- ✅ WebP format support
- ✅ Minimal CSS with Tailwind
- ✅ First Load JS: ~157 KB

## 🤝 Developer Attribution

Developed by [Samarth Viswanath](https://samarthv.me)

## 📄 License

Private portfolio website. All rights reserved.

Deploy easily on Vercel:

```bash
npx vercel
```

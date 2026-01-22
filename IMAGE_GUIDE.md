# Image Placement Guide

## Folder Structure

```
public/
├── portrait.jpg              # Main portrait for Hero section
├── favicon.ico              # Site icon (already exists)
├── gallery/                 # Gallery images (6-9 recommended)
│   ├── img1.jpg
│   ├── img2.jpg
│   ├── img3.jpg
│   ├── img4.jpg
│   ├── img5.jpg
│   └── img6.jpg
└── projects/                # Optional: Project-specific images
    ├── happy-schools.jpg
    ├── koti-nati.jpg
    └── water-tank.jpg
```

## Image Specifications

### Portrait (Hero Section)
- **Location**: `public/portrait.jpg`
- **Recommended Size**: 800x1000px (4:5 aspect ratio)
- **Format**: JPG or PNG
- **File Size**: < 500KB (optimize for web)

### Gallery Images
- **Location**: `public/gallery/img1.jpg` through `img6.jpg`
- **Recommended Size**: 1200x1200px (square)
- **Format**: JPG
- **File Size**: < 300KB each

### Favicon (Optional Update)
- **Location**: `public/favicon.ico`
- **Size**: 32x32px or 16x16px
- **Format**: ICO or PNG

## After Adding Images

### 1. Update Gallery Config
Edit `content/site.ts` line 59-66:

```typescript
gallery: [
  { src: "/gallery/img1.jpg", alt: "Ravishankar Dakoju speaking at Rotary event" },
  { src: "/gallery/img2.jpg", alt: "Inaugurating a Happy School in Karnataka" },
  { src: "/gallery/img3.jpg", alt: "Tree plantation drive" },
  { src: "/gallery/img4.jpg", alt: "With family" },
  { src: "/gallery/img5.jpg", alt: "Award ceremony" },
  { src: "/gallery/img6.jpg", alt: "Community service in action" },
],
```

### 2. Update Hero Portrait
Edit `components/hero.tsx` around line 50:

Replace the placeholder div with:
```tsx
<Image
  src="/portrait.jpg"
  alt="Ravishankar Dakoju"
  fill
  className="object-cover"
  priority
/>
```

Don't forget to import Image at the top:
```tsx
import Image from "next/image";
```

## Image Optimization Tips

1. **Compress images** before uploading (use tools like TinyPNG or Squoosh)
2. **Use descriptive alt text** for accessibility and SEO
3. **Maintain aspect ratios** to avoid distortion
4. **Use JPG for photos**, PNG for graphics with transparency

## Need Help?

After adding images, the website will automatically use them when you run:
```bash
npm run dev
```

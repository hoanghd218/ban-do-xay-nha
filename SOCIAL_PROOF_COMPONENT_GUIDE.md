# Social Proof Section Component Guide

## Overview
A beautiful carousel component displaying customer testimonials using shadcn/ui and Embla Carousel. Fully responsive and accessible.

## Files Created

### 1. **Main Component**
- `components/social-proof-section.tsx` - The main SocialProofSection component with testimonial carousel

### 2. **UI Components**
- `components/ui/carousel.tsx` - Shadcn carousel component (uses Embla Carousel)
- `components/ui/button.tsx` - Shadcn button component for carousel navigation

### 3. **Dependencies Installed**
- `embla-carousel-react` - Headless carousel library
- `@radix-ui/react-slot` - Radix UI slot component for button polymorphism

## Usage

### Import and Use
```tsx
import { SocialProofSection } from "@/components/social-proof-section";

export default function HomePage() {
  return (
    <div>
      {/* Other sections */}
      <SocialProofSection />
    </div>
  );
}
```

### Example Integration in page.tsx
Replace the `<Testimonials />` component or add alongside it:

```tsx
import { SocialProofSection } from "@/components/social-proof-section";

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      {/* Other sections */}
      
      {/* Social Proof Carousel */}
      <SocialProofSection />
      
      {/* CTA Section */}
    </div>
  );
}
```

## Features

✅ **Responsive Design**
- Full width on mobile (1 item visible)
- 2 items on tablets
- 3-4 items on desktop
- 4-6 items on ultra-wide screens

✅ **Accessibility**
- Keyboard navigation (arrow keys)
- ARIA labels for screen readers
- Focus management

✅ **Interactive**
- Auto-looping carousel
- Previous/Next navigation buttons
- Smooth hover animations
- Image zoom effect on hover

✅ **Customizable**
- Easy to modify testimonials array
- Supports custom styling
- Can adjust carousel speed and behavior

## Component Structure

The testimonial object structure:
```tsx
interface Testimonial {
  quote: string;
  author: string;
  location: string;
  project: string;
  image: StaticImageData;
}
```

## Customization

### Adding New Testimonials
Edit the `testimonials` array in `social-proof-section.tsx`:

```tsx
const testimonials: Testimonial[] = [
  {
    quote: "Your testimonial text",
    author: "Name",
    location: "City",
    project: "Project Type",
    image: contractPhotoX,
  },
  // ... more testimonials
];
```

### Changing Carousel Behavior
Modify carousel options in the component:

```tsx
<Carousel
  opts={{
    align: "start",
    loop: true,
    slidesToScroll: 1,
    // Add more options as needed
  }}
>
```

### Styling
All styling uses Tailwind CSS with shadcn theme tokens:
- `bg-card` - Card background
- `text-foreground` - Primary text
- `text-muted-foreground` - Secondary text
- `border-border` - Border color

## Images
All images are sourced from `/public/ảnh ký hợp đồng/` directory:
- `1.png` through `10.png` (included by default)
- Add more images and import them as needed

## Browser Support
- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers

## Performance Notes
- Images are optimized through Next.js Image Optimization
- Carousel uses virtual scrolling for performance
- No external CDN dependencies needed

## Troubleshooting

**Images not loading?**
- Ensure images exist in `/public/ảnh ký hợp đồng/` directory
- Check import paths match the file names
- Verify Next.js public folder is correctly configured

**Carousel not working?**
- Ensure `embla-carousel-react` is installed
- Check browser console for errors
- Verify carousel wrapper isn't constrained by parent overflow

**Styling issues?**
- Ensure Tailwind CSS is properly configured
- Check `globals.css` for base styles
- Verify theme tokens in your `tailwind.config`

## Dependencies Summary
```json
{
  "embla-carousel-react": "latest",
  "@radix-ui/react-slot": "latest",
  "lucide-react": "^0.552.0",
  "class-variance-authority": "^0.7.1",
  "tailwind-merge": "^3.3.1"
}
```


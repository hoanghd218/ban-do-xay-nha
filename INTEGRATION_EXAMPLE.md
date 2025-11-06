# Integration Example: Adding SocialProofSection to Your Page

## Quick Start

### Option 1: Replace existing testimonials section
In your `app/page.tsx`, replace:
```tsx
import Testimonials from "@/components/testimonials";
```

With:
```tsx
import { SocialProofSection } from "@/components/social-proof-section";
```

Then replace:
```tsx
<Testimonials />
```

With:
```tsx
<SocialProofSection />
```

### Option 2: Add alongside existing testimonials

```tsx
import Link from "next/link";
import { ArrowRight, Home, Users, BookOpen, Award, Calendar } from "lucide-react";
import Testimonials from "@/components/testimonials";
import { SocialProofSection } from "@/components/social-proof-section";

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 to-blue-800 text-white py-20">
        {/* ... existing hero content ... */}
      </section>

      {/* Vision Section */}
      <section className="py-16 bg-white">
        {/* ... existing vision content ... */}
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-50">
        {/* ... existing features content ... */}
      </section>

      {/* Free Workshop CTA */}
      <section className="py-16 bg-gradient-to-r from-green-500 to-green-600 text-white">
        {/* ... existing workshop section ... */}
      </section>

      {/* NEW: Social Proof Carousel */}
      <SocialProofSection />

      {/* Original Testimonials (optional) */}
      {/* <Testimonials /> */}

      {/* CTA Section */}
      <section className="py-16 bg-blue-600 text-white">
        {/* ... existing CTA content ... */}
      </section>
    </div>
  );
}
```

## Component Features

The `SocialProofSection` component includes:

### 📱 Responsive Carousel
- **Mobile**: 1 card visible
- **Tablet**: 2 cards visible  
- **Desktop**: 3-4 cards visible
- **Large Screens**: 4-6 cards visible

### 🎨 Beautiful Design
- Gradient background with decorative blobs
- Star ratings for each testimonial
- Project images with hover zoom effect
- Location badges
- Clean card layout with shadows

### ♿ Accessibility
- Keyboard navigation (← →)
- Screen reader support
- ARIA labels
- Semantic HTML

### ⚡ Performance
- Uses shadcn/ui carousel (Embla)
- Optimized image handling
- Smooth animations
- Lightweight (~15KB gzipped)

## Customization Examples

### 1. Change Colors
Modify the gradient in the component:
```tsx
// Change the gradient colors
className="bg-gradient-to-br from-purple-100 via-pink-50 to-purple-100"

// Change the accent colors
className="bg-accent/5 rounded-full"
```

### 2. Add More Testimonials
Simply import more images and add to the array:
```tsx
import contractPhoto11 from "@/public/ảnh ký hợp đồng/11.png";

// In testimonials array
{
  quote: "New testimonial...",
  author: "Name",
  location: "City",
  project: "Project",
  image: contractPhoto11,
}
```

### 3. Adjust Carousel Speed
Modify the carousel options:
```tsx
<Carousel
  opts={{
    align: "start",
    loop: true,
    slidesToScroll: 1,
    duration: 20, // Adjust speed
  }}
>
```

### 4. Change Section Spacing
Modify the padding classes:
```tsx
// More compact
className="py-8"

// More spacious
className="py-24"
```

## Styling Reference

The component uses Tailwind CSS and shadcn theme tokens:

| Token | Usage |
|-------|-------|
| `bg-card` | Card backgrounds |
| `text-foreground` | Primary text |
| `text-muted-foreground` | Secondary text |
| `border-border` | Borders |
| `bg-accent` | Accent backgrounds |
| `from-yellow-400` | Gradient colors |

## Required Files

Ensure these files exist:

✅ `/components/social-proof-section.tsx` - Main component
✅ `/components/ui/carousel.tsx` - Carousel component
✅ `/components/ui/button.tsx` - Button component
✅ `/public/ảnh ký hợp đồng/1.png` through `10.png` - Testimonial images

## Dependencies

Required packages (should be installed):
- `embla-carousel-react`
- `@radix-ui/react-slot`
- `lucide-react` (icons)
- `class-variance-authority`
- `tailwind-merge`

## Testing

To test the component:

1. **Local development**:
   ```bash
   npm run dev
   ```

2. **Check responsive design**:
   - Test on mobile (375px)
   - Test on tablet (768px)
   - Test on desktop (1024px+)

3. **Test interactions**:
   - Click previous/next buttons
   - Use keyboard arrows
   - Hover over images
   - Verify on touch devices

## Troubleshooting

**Q: Images not showing?**
A: Make sure images exist in `/public/ảnh ký hợp đồng/` directory

**Q: Carousel buttons not working?**
A: Check browser console for errors, ensure embla-carousel-react is installed

**Q: Styling looks wrong?**
A: Verify Tailwind CSS is properly configured in your project

**Q: Want different number of cards visible?**
A: Modify the `basis-*` classes in CarouselItem className

---

Need help? Check `SOCIAL_PROOF_COMPONENT_GUIDE.md` for detailed documentation.


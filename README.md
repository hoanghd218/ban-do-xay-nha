# Bản Đồ Xây Nhà

A comprehensive platform to guide Vietnamese families through their house-building journey with knowledge, technology, and a supportive ecosystem.

## 🏗️ About

**Bản Đồ Xây Nhà** (House Building Map) is designed to make the house-building process transparent, intelligent, and joyful for every Vietnamese family. We provide a knowledge map, technology, and an ecosystem connecting homeowners, contractors, architects, and suppliers.

## ✨ Features

- **Homepage**: Inspiring hero section with vision statement and call-to-actions
- **Services Page**: 
  - Free workshops and Zoom sessions
  - Entry offers (books, courses, tools)
  - Core coaching program (7-Day Challenge)
  - Membership community
- **About Page**: Mission, vision, core values, team section, and company story
- **Consulting Page**: Free consultation form with contact methods
- **Blog**: Knowledge base with categorized articles
- **Testimonials**: Customer success stories with filtering
- **Responsive Design**: Optimized for all screen sizes

## 🚀 Getting Started

### Prerequisites

- Node.js 20+ installed
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/ban-do-xay-nha.git
cd ban-do-xay-nha
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

### Build for Production

```bash
npm run build
npm start
```

## 🛠️ Tech Stack

- **Framework**: Next.js 16
- **UI Library**: React 19
- **Styling**: Tailwind CSS 4
- **Icons**: Lucide React
- **Language**: TypeScript

## 📁 Project Structure

```
ban-do-xay-nha/
├── app/
│   ├── page.tsx           # Homepage
│   ├── about/             # About page
│   ├── services/          # Services page
│   ├── consulting/        # Consulting page
│   ├── blog/              # Blog page
│   ├── layout.tsx         # Root layout
│   └── globals.css        # Global styles
├── components/
│   ├── navigation.tsx     # Header navigation
│   ├── footer.tsx         # Footer
│   ├── testimonials.tsx   # Testimonials section
│   └── team.tsx           # Team section
├── lib/
│   └── utils.ts           # Utility functions
└── public/                # Static assets
```

## 🎨 Customization

### Colors

The website uses a blue and purple gradient theme. You can customize colors in `app/globals.css` by modifying the CSS variables.

### Content

- Update team members in `components/team.tsx`
- Modify testimonials in `components/testimonials.tsx`
- Edit blog posts in `app/blog/page.tsx`
- Customize services in `app/services/page.tsx`

## 📱 Responsive Design

The website is fully responsive and optimized for:
- Mobile devices (< 768px)
- Tablets (768px - 1024px)
- Desktop (> 1024px)

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

This project is licensed under the MIT License.

## 📞 Contact

For questions or support, please contact:
- Email: contact@bandoxaynha.vn
- Phone: 0123 456 789

## 🌟 Vision

**Bản Đồ Xây Nhà** aims to create a smart, transparent, and joyful house-building journey for every Vietnamese family. The platform offers a knowledge map, technology, and an ecosystem that connects homeowners, contractors, architects, and suppliers, ensuring that each home becomes a journey to fulfilling dreams.

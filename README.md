# EcoBiogas Website

A modern, responsive website for a biogas business built with Next.js, Tailwind CSS, and TypeScript.

## Features

- **Modern Design**: Clean, green, eco-friendly design with professional aesthetics
- **Responsive Layout**: Fully responsive design that works on all devices
- **Interactive Components**: Smooth animations and transitions using Framer Motion
- **TypeScript**: Full type safety throughout the application
- **Tailwind CSS**: Utility-first CSS framework for rapid styling

## Pages

### 1. Home Page (`/`)
- Hero section with compelling call-to-action
- About Biogas introduction
- Key services overview cards
- Customer testimonials
- Footer with contact information

### 2. About Page (`/about`)
- Company mission and vision
- Team members and expertise
- Achievements and recognition
- Impact statistics

### 3. Services Page (`/services`)
- Detailed service offerings:
  - Biogas Plant Installation
  - Maintenance & Support
  - Biogas Training
  - Consultation Services
- Process overview
- Why choose us section

### 4. How It Works Page (`/how-it-works`)
- Step-by-step biogas process explanation
- Environmental benefits
- Technical specifications
- System components

### 5. Projects Page (`/projects`)
- Portfolio of completed installations
- Project statistics
- Featured case study
- Project filtering by type

### 6. Contact Page (`/contact`)
- Contact form with validation
- Contact information
- Google Maps integration
- WhatsApp contact button
- FAQ section

### 7. Request Quote Page (`/quote`)
- Detailed quote request form
- Project information collection
- Quote benefits explanation
- Process overview

### 8. Blog Page (`/blog`)
- Article listings with categories
- Featured post highlighting
- Search and filter functionality
- Newsletter signup

## Technology Stack

- **Next.js 14**: React framework with App Router
- **TypeScript**: Type-safe JavaScript
- **Tailwind CSS**: Utility-first CSS framework
- **Framer Motion**: Animation library
- **Lucide React**: Icon library
- **clsx & tailwind-merge**: Utility functions for conditional styling

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd biogas-website
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── about/             # About page
│   ├── blog/              # Blog page
│   ├── contact/           # Contact page
│   ├── how-it-works/      # How it works page
│   ├── projects/          # Projects page
│   ├── quote/             # Quote request page
│   ├── services/          # Services page
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Home page
├── components/            # Reusable components
│   ├── Footer.tsx         # Site footer
│   └── Navbar.tsx         # Navigation bar
└── lib/                   # Utility functions
    └── utils.ts           # Helper functions
```

## Design System

### Colors
- **Primary Green**: #3BAF29 (biogas theme)
- **Secondary Blue**: Light blue accents
- **Neutral**: Gray scale for text and backgrounds

### Typography
- **Font Family**: Poppins (Google Fonts)
- **Weights**: 300, 400, 500, 600, 700

### Components
- Responsive navigation with mobile menu
- Card-based layouts
- Form components with validation
- Interactive buttons and links
- Smooth animations and transitions

## Features Implemented

✅ **Responsive Design**: Mobile-first approach with Tailwind CSS
✅ **Modern UI**: Clean, professional design with green eco-friendly theme
✅ **Interactive Forms**: Contact form and quote request form with validation
✅ **Animations**: Smooth scroll animations using Framer Motion
✅ **Navigation**: Responsive navbar with mobile menu
✅ **SEO Ready**: Proper meta tags and semantic HTML
✅ **TypeScript**: Full type safety
✅ **Component Architecture**: Reusable components
✅ **Google Maps**: Integrated map for contact page
✅ **WhatsApp Integration**: Direct contact via WhatsApp

## Customization

### Adding New Pages
1. Create a new directory in `src/app/`
2. Add a `page.tsx` file
3. Update navigation in `src/components/Navbar.tsx`

### Modifying Styles
- Edit `tailwind.config.js` for theme customization
- Update `src/app/globals.css` for global styles
- Use Tailwind utility classes for component styling

### Adding Content
- Update dummy data in page components
- Replace placeholder images with actual images
- Modify text content to match your business needs

## Deployment

The application can be deployed to various platforms:

- **Vercel** (recommended for Next.js)
- **Netlify**
- **AWS Amplify**
- **Heroku**

### Vercel Deployment
1. Push code to GitHub
2. Connect repository to Vercel
3. Deploy automatically

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## License

This project is licensed under the MIT License.

## Support

For support or questions, please contact:
- Email: info@ecobiogas.com
- Phone: +1 (555) 123-4567

---

Built with ❤️ for sustainable energy solutions.

# Dr. Mitesh Gandhi Dental Clinic Website

A modern, fully responsive dental clinic website built with React.js (Vite) and Tailwind CSS.

## Features

✨ **Modern Design**
- Responsive mobile-first design
- Smooth scrolling navigation
- Sticky navbar with blur background
- Beautiful animations with Framer Motion

📱 **Responsive Across All Devices**
- Mobile (320px+)
- Tablet (768px+)
- Desktop (1024px+)

🔍 **SEO Optimized**
- Dynamic meta tags
- Proper heading hierarchy (H1, H2, H3)
- Alt tags for images
- Fast performance

🎨 **Key Sections**
- Hero section with CTA buttons
- Services grid (8 dental services)
- About section with highlights
- Testimonials/Reviews section
- Appointment booking form
- FAQ with accordion UI
- Contact information with Google Maps
- Floating action buttons (Call & WhatsApp)
- Professional footer

## Tech Stack

- **React.js 18.3** - UI library
- **Vite 5.0** - Build tool & dev server
- **Tailwind CSS 3.4** - Utility-first CSS
- **Framer Motion 10.16** - Animations
- **React Icons 5.0** - Icon library

## Installation

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Start development server:**
   ```bash
   npm run dev
   ```
   The app will open at `http://localhost:5173`

3. **Build for production:**
   ```bash
   npm run build
   ```

## Project Structure

```
src/
├── components/
│   ├── Navbar.jsx          # Navigation with mobile menu
│   ├── Hero.jsx            # Hero section with CTAs
│   ├── Services.jsx        # Services grid
│   ├── About.jsx           # About section
│   ├── Reviews.jsx         # Testimonials
│   ├── Appointment.jsx     # Booking form
│   ├── FAQ.jsx             # Accordion FAQ
│   ├── Contact.jsx         # Contact info & map
│   ├── FloatingButtons.jsx # Call & WhatsApp buttons
│   └── Footer.jsx          # Footer
├── App.jsx                 # Main app component
├── main.jsx                # Entry point
└── index.css               # Tailwind imports & custom styles
```

## Configuration

### Tailwind Theme
Customizable colors and spacing in `tailwind.config.js`:
```javascript
colors: {
  primary: '#0891b2',    // Cyan
  secondary: '#06b6d4'   // Light cyan
}
```

### Clinic Information
Update in each component as needed:
- **Name:** Dr. Mitesh Gandhi Dental Clinic
- **Phone:** +91 9930813579
- **Email:** clinic@example.com
- **Location:** Kandivali West, Mumbai
- **Hours:** 9 AM – 8 PM

## Customization

### Change Colors
Edit `tailwind.config.js` and `src/index.css`:
```javascript
primary: '#0891b2'      // Change primary color
secondary: '#06b6d4'    // Change secondary color
dark: '#1e293b'         // Change dark text color
```

### Update Clinic Details
- Update phone, email, and address in components
- Modify Google Maps embed URL in Contact.jsx
- Edit testimonials in Reviews.jsx
- Update services list in Services.jsx
- Modify FAQ questions and answers in FAQ.jsx

### Animations
Adjust Framer Motion animation timings in any component:
```javascript
initial={{ opacity: 0, y: 20 }}
animate={{ opacity: 1, y: 0 }}
transition={{ duration: 0.8 }}
```

## SEO Optimization

- **Title:** "Dr. Mitesh Gandhi | Best Dentist in Mumbai"
- **Description:** "Best dental clinic in Kandivali West Mumbai offering implants, root canal, braces, and smile makeover."
- **Meta tags:** Updated in `index.html`
- **Heading hierarchy:** Proper H1, H2, H3 structure
- **Image alt tags:** Added to all images
- **Sitemap & robots.txt:** Add for production deployment

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Performance

- Optimized bundle size
- Lazy loading for images
- CSS-in-JS with Tailwind (tree-shaking)
- Smooth animations with hardware acceleration
- Fast First Contentful Paint (FCP)

## Features to Add (Optional)

- [ ] Appointment management system (backend)
- [ ] Patient login/portal
- [ ] Online payment integration
- [ ] Newsletter subscription
- [ ] Blog section
- [ ] Team member profiles
- [ ] Before/after gallery
- [ ] Multi-language support
- [ ] Dark mode toggle

## Deployment

### Vercel (Recommended)
```bash
npm run build
# Push to GitHub and connect with Vercel
```

### Netlify
```bash
npm run build
# Drag & drop 'dist' folder to Netlify
```

### GitHub Pages
```bash
npm run build
# Push 'dist' folder to gh-pages branch
```

## License

© 2024 Dr. Mitesh Gandhi Dental Clinic. All rights reserved.

## Support

For issues or customizations, contact support or visit the clinic.

---

**Built with ❤️ using React & Tailwind CSS**

# Interior Design Company Website

A modern, responsive React website for an interior design company featuring clean design, smooth animations, and a component-based architecture.

## Features

- **Responsive Design**: Works perfectly on desktop, tablet, and mobile devices
- **Modern UI**: Clean, professional design with smooth animations
- **Component-Based**: Reusable components for easy maintenance and customization
- **React Router**: Seamless navigation between pages
- **Framer Motion**: Smooth animations and transitions
- **Contact Form**: Functional contact form with validation
- **Project Gallery**: Filterable project showcase
- **Team Section**: Meet the team with professional profiles

## Pages

1. **Home Page** - Hero section, services overview, featured projects
2. **About Us** - Company story, team members, our process
3. **Services** - Detailed service offerings with features
4. **Projects** - Filterable project gallery with categories
5. **Project Details** - Individual project pages with galleries
6. **Contact** - Contact form, office information, map integration

## Technologies Used

- **React 18** - Frontend framework
- **React Router DOM** - Client-side routing
- **Framer Motion** - Animation library
- **CSS3** - Styling with modern features
- **HTML5** - Semantic markup
- **JavaScript ES6+** - Modern JavaScript features

## Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd interior-design-website
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

4. Open your browser and navigate to `http://localhost:3000`

### Available Scripts

- `npm start` - Runs the app in development mode
- `npm build` - Builds the app for production
- `npm test` - Launches the test runner
- `npm eject` - Ejects from Create React App (one-way operation)

## Project Structure

```
src/
├── components/          # Reusable components
│   ├── Navbar.js       # Navigation component
│   ├── Footer.js       # Footer component
│   ├── ProjectCard.js  # Project card component
│   ├── ServiceCard.js  # Service card component
│   └── ContactForm.js  # Contact form component
├── pages/              # Page components
│   ├── Home.js         # Home page
│   ├── About.js        # About page
│   ├── Services.js     # Services page
│   ├── Projects.js     # Projects listing page
│   ├── ProjectDetails.js # Individual project page
│   └── Contact.js      # Contact page
├── data/               # Data files
│   ├── projects.js     # Project data
│   ├── services.js     # Service data
│   └── team.js         # Team member data
├── App.js              # Main app component
├── App.css             # Global styles
├── index.js            # App entry point
└── index.css           # Base styles
```

## Customization

### Adding New Projects

Edit `src/data/projects.js` to add new projects:

```javascript
{
  id: 7,
  title: "Your Project Name",
  category: "House",
  location: "City, State",
  area: "150 m²",
  completed: "2024",
  description: "Project description...",
  images: [
    "image-url-1",
    "image-url-2"
  ],
  featured: true
}
```

### Adding New Services

Edit `src/data/services.js` to add new services:

```javascript
{
  id: 7,
  title: "Your Service",
  description: "Service description...",
  icon: "🏠",
  features: [
    "Feature 1",
    "Feature 2"
  ]
}
```

### Styling

- Global styles: `src/index.css`
- Component styles: Individual `.css` files for each component
- Responsive breakpoints: 768px for mobile/tablet

### Colors

- Primary: #1a1a1a (Dark)
- Accent: #f4d03f (Yellow)
- Background: #ffffff (White)
- Text: #666666 (Gray)
- Dark Section: #1a1a1a

## Deployment

### Build for Production

```bash
npm run build
```

This creates a `build` folder with optimized production files.

### Deploy to Netlify

1. Build the project: `npm run build`
2. Drag and drop the `build` folder to Netlify
3. Configure custom domain if needed

### Deploy to Vercel

1. Install Vercel CLI: `npm i -g vercel`
2. Run: `vercel`
3. Follow the prompts

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Performance

- Optimized images with proper sizing
- Lazy loading for better performance
- Smooth animations with Framer Motion
- Responsive images for different screen sizes

## Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature-name`
3. Commit changes: `git commit -m 'Add feature'`
4. Push to branch: `git push origin feature-name`
5. Submit a pull request

## License

This project is licensed under the MIT License.

## Support

For support or questions, please contact us at name@email.com or visit our website.

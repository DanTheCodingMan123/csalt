# CSalt Cornell Website

Website for CSalt Cornell - a student-led initiative developing sustainable desalination systems powered by ocean wave energy.

## 🚀 Quick Start - Clone the Repository

**To get started with this website on your local computer:**

1. **Open Terminal/Command Prompt** on your computer
2. **Navigate to where you want to save the project** (e.g., Desktop, Documents folder)
3. **Run this command** to clone the repository:

   ```bash
   git clone https://github.com/[username]/csalt.git
   ```

   _Replace `[username]` with the actual GitHub username who owns the repository_

4. **Navigate into the project folder**:

   ```bash
   cd csalt
   ```

5. **Open the website** by double-clicking on `index.html` or opening it in a web browser

**That's it!** The website will now be running locally on your computer. Any changes you make to the files will be visible when you refresh the browser.

> **Note**: You don't need to install anything special - this is a static website that runs directly in your web browser!

## 📁 Project Structure

```
csalt/
├── index.html          # Homepage
├── about.html          # About Us page
├── team.html           # Team page
├── apply.html          # Application page
├── styles.css          # Main stylesheet
├── scripts.js          # JavaScript functionality
├── images/             # Website images
│   ├── csalt-logo.png
│   ├── websitehomepage.jpeg
│   ├── calmwave.jpg
│   ├── fatwave.jpg
│   └── wave-background.svg
└── team/               # Team member photos
    ├── leader/         # Leadership photos
    ├── membrane/       # Membrane subteam photos
    ├── mechanical/     # Mechanical subteam photos
    ├── business/       # Business subteam photos
    └── community-connections/ # Community connections photos
```

## 🎨 Website Code Structure & Annotations

### Homepage (index.html)

**Header Section (Lines 15-45)**

- **Purpose**: Fixed navigation bar with logo and menu
- **Key Elements**: CSalt logo, navigation links (About, Team, Apply, Contact), mobile menu toggle
- **Styling**: Uses `header` class with fixed positioning and shadow

**Hero Section (Lines 49-75)**

- **Purpose**: Main landing area with background image and call-to-action
- **Key Elements**: Main title, description, two action buttons (Join Team, Learn More)
- **Background**: Uses `websitehomepage.jpeg` with dark overlay
- **Styling**: Full viewport height with centered content

**Subteams Section (Lines 77-233)**

- **Purpose**: Showcases the four subteams with descriptions and icons
- **Key Elements**:
  - Membrane subteam (filtration technology)
  - Mechanical subteam (physical components)
  - Business subteam (funding and outreach)
  - Community Connections subteam (education and collaboration)
- **Styling**: Dark gradient background with glass-morphism cards

**Metrics Section (Lines 235-347)**

- **Purpose**: Displays key statistics and achievements
- **Key Elements**: Team size (26), MECC participation, founding year (2024), wave-powered system
- **Background**: Uses `fatwave.jpg` with dark overlay
- **Styling**: Grid layout with animated cards

**Footer Section (Lines 350-413)**

- **Purpose**: Contact information and quick links
- **Key Elements**: Logo, navigation links, email, social media, Ezra Cornell quote
- **Styling**: Dark background with organized sections

### About Page (about.html)

**About Hero Section (Lines 49-75)**

- **Purpose**: Introduction to CSalt with background image
- **Background**: Uses `calmwave.jpg`
- **Content**: Team description and MECC competition details

**Mission Section (Lines 77-99)**

- **Purpose**: Explains CSalt's mission and goals
- **Content**: Detailed description of the organization's purpose

**Core Values Section (Lines 101-151)**

- **Purpose**: Highlights three core values
- **Key Elements**: Sustainability, Innovation, Community
- **Styling**: Cards with hover effects and animated circles

**MECC Section (Lines 153-271)**

- **Purpose**: Details about Marine Energy Collegiate Competition
- **Key Elements**: Competition features, impact description, external link
- **Styling**: Feature cards with icons and descriptions

### Team Page (team.html)

**Team Hero Section (Lines 49-70)**

- **Purpose**: Introduction to the team
- **Background**: Uses `team/team-photo.JPG`
- **Content**: Team overview and subteam descriptions

**Leadership Section (Lines 72-121)**

- **Purpose**: Displays leadership team
- **Key Elements**: Advisor (Lenan Zhang), President (Max Kinder), Vice President (Grace Coleman)
- **Styling**: Card layout with photos and contact information

**Subteam Sections (Lines 123-528)**

- **Purpose**: Individual subteam member listings
- **Structure**: Each subteam has its own section with member cards
- **Key Elements**: Member photos, names, titles, descriptions, email addresses
- **Styling**: Grid layout with consistent card design

### Apply Page (apply.html)

**Main Content Section (Lines 49-94)**

- **Purpose**: Application information and recruitment schedule
- **Key Elements**: Title, recruitment image, description text, application button
- **Image**: Uses `fall_recruitment.jpeg`
- **Button**: Links to Google Forms application

## 🎨 CSS Structure (styles.css)

### Color Variables (Lines 1-9)

```css
:root {
  --cornell-carnelian: #b31b1b; /* Cornell red */
  --cornell-dark-gray: #222222; /* Dark text */
  --cornell-white: #ffffff; /* White background */
  --cornell-light-gray: #f7f7f7; /* Light background */
  --cornell-warm-gray: #a2998b; /* Warm accent */
  --cornell-sea-gray: #9fad9f; /* Sea-themed accent */
}
```

### Key Sections:

- **Header Styles** (Lines 40-123): Fixed navigation with logo and menu
- **Hero Styles** (Lines 125-335): Full-screen hero sections with background images
- **Button Styles** (Lines 292-335): Primary and secondary button designs
- **Section Styles** (Lines 337-356): Consistent section headers and descriptions
- **Subteams Styles** (Lines 358-519): Dark gradient section with glass-morphism cards
- **Metrics Styles** (Lines 543-641): Statistics display with animated cards
- **Footer Styles** (Lines 643-752): Dark footer with organized content
- **Team Styles** (Lines 1416-1626): Member card layouts and leadership display
- **Apply Styles** (Lines 1628-1991): Application page specific styling
- **Responsive Design** (Lines 754-923): Mobile-first responsive breakpoints

## ⚙️ JavaScript Functionality (scripts.js)

### Scroll Behavior (Lines 1-17)

- **Purpose**: Hides header when scrolling down, shows when scrolling up
- **Implementation**: Tracks scroll direction and adjusts header position

### Scroll Animations (Lines 19-39)

- **Purpose**: Animates elements as they come into view
- **Implementation**: Uses Intersection Observer API
- **Targets**: Subteam items with slide-in effects

### Counter Animation (Lines 41-68)

- **Purpose**: Animates number counters in metrics section
- **Implementation**: Smooth counting animation when elements are visible
- **Targets**: Statistics numbers (26, MECC, 2024, 100%)

## 🛠️ Maintenance Guide

### Adding New Team Members

1. **Add Photo**:

   - Save member photo in appropriate subteam folder (`team/[subteam-name]/`)
   - Use consistent naming: `lastname.jpg` or `lastname.JPG`
   - Recommended size: 400x400px or square aspect ratio

2. **Update HTML**:
   - Open `team.html`
   - Find the appropriate subteam section (lines 123-528)
   - Add new member card following this structure:
   ```html
   <div class="member-card">
     <div class="member-image">
       <img src="team/[subteam]/[lastname].jpg" alt="[Full Name]" />
     </div>
     <div class="member-info">
       <h3 class="member-name">[Full Name]</h3>
       <p class="member-title">[Position]</p>
       <p class="member-description">[Class and Major]</p>
       <p class="member-email">[email@cornell.edu]</p>
     </div>
   </div>
   ```

### Updating Text Content

1. **Page Titles**: Edit the `<title>` tag in each HTML file's `<head>` section
2. **Main Content**: Update text within `<p>`, `<h1>`, `<h2>`, `<h3>` tags
3. **Descriptions**: Modify content in section descriptions and member bios
4. **Contact Info**: Update email addresses and social media links in footer

### Changing Images

1. **Background Images**:

   - Replace image files in `images/` folder
   - Update `background-image: url()` in CSS or inline styles
   - Recommended formats: JPG for photos, SVG for graphics

2. **Team Photos**:

   - Replace files in `team/` subfolders
   - Maintain consistent naming convention
   - Update `src` attributes in HTML

3. **Logo**:
   - Replace `images/csalt-logo.png`
   - Update all references in HTML files
   - Maintain aspect ratio for best results

### Updating Team Information

1. **Leadership Changes**:

   - Update leadership section in `team.html` (lines 72-121)
   - Change names, titles, and contact information
   - Replace photos if needed

2. **Subteam Descriptions**:

   - Modify subteam descriptions in `index.html` (lines 108-220)
   - Update team page subteam descriptions (lines 123-528)

3. **Contact Information**:
   - Update email addresses throughout the site
   - Modify social media links in footer sections
   - Change phone numbers or other contact details

### Styling Changes

1. **Colors**: Modify CSS variables in `styles.css` (lines 1-9)
2. **Fonts**: Change font families in body and heading styles
3. **Layout**: Adjust grid layouts and spacing in CSS
4. **Animations**: Modify or add new animations in CSS and JavaScript

## 🚀 Deployment Guide

### Prerequisites

- GitHub account
- Vercel account (free)
- Domain name from Namecheap (optional)

### Step 1: Deploy to Vercel

1. **Push to GitHub**:

   ```bash
   git add .
   git commit -m "Initial website deployment"
   git push origin main
   ```

2. **Connect to Vercel**:

   - Go to [vercel.com](https://vercel.com)
   - Sign up/login with GitHub
   - Click "New Project"
   - Import your GitHub repository
   - Vercel will automatically detect it's a static site
   - Click "Deploy"

3. **Automatic Updates**:
   - Any push to the main branch will automatically deploy
   - Vercel provides a preview URL for each deployment
   - Production URL will be something like: `your-project.vercel.app`

### Step 2: Custom Domain Setup (Namecheap)

1. **Purchase Domain**:

   - Go to [namecheap.com](https://namecheap.com)
   - Search for and purchase your desired domain
   - Complete the purchase process

2. **Configure DNS**:

   - In Namecheap dashboard, go to "Domain List"
   - Click "Manage" next to your domain
   - Go to "Advanced DNS" tab
   - Add these records:

     ```
     Type: CNAME
     Host: www
     Value: cname.vercel-dns.com
     TTL: Automatic

     Type: A
     Host: @
     Value: 76.76.19.61
     TTL: Automatic
     ```

3. **Add Domain to Vercel**:

   - In Vercel dashboard, go to your project
   - Click "Settings" → "Domains"
   - Add your domain (e.g., `yourdomain.com`)
   - Add www subdomain (e.g., `www.yourdomain.com`)
   - Vercel will provide DNS instructions

4. **SSL Certificate**:
   - Vercel automatically provides SSL certificates
   - Your site will be available at `https://yourdomain.com`

### Step 3: Testing Deployment

1. **Check Live Site**:

   - Visit your domain to ensure it loads correctly
   - Test all pages and navigation
   - Verify images and styling work properly

2. **Mobile Testing**:
   - Test on different devices and screen sizes
   - Use browser developer tools to simulate mobile devices

## 🔄 Git Repository Transfer

### Transferring Repository Ownership

1. **Current Owner Actions**:

   ```bash
   # Navigate to repository settings on GitHub
   # Go to Settings → General → Transfer ownership
   # Enter new owner's GitHub username
   # Confirm transfer
   ```

2. **New Owner Actions**:

   - Accept the transfer invitation via email
   - Clone the repository locally:

   ```bash
   git clone https://github.com/[new-owner]/csalt.git
   cd csalt
   ```

3. **Update Remote URLs** (if needed):
   ```bash
   git remote set-url origin https://github.com/[new-owner]/csalt.git
   ```

### Setting Up New Development Environment

1. **Install Prerequisites**:

   - Git
   - Code editor (VS Code recommended)
   - Web browser for testing

2. **Clone Repository**:

   ```bash
   git clone https://github.com/[new-owner]/csalt.git
   cd csalt
   ```

3. **Make Changes**:

   - Edit HTML, CSS, or JavaScript files
   - Test changes locally by opening HTML files in browser
   - Use live server extension in VS Code for real-time updates

4. **Commit and Push Changes**:
   ```bash
   git add .
   git commit -m "Description of changes"
   git push origin main
   ```

### Vercel Deployment After Transfer

1. **Update Vercel Project**:

   - Go to Vercel dashboard
   - Find your project
   - Go to Settings → Git
   - Update the connected repository to the new owner's repo

2. **Verify Deployment**:
   - Check that automatic deployments still work
   - Test the live site after making changes

### Getting Help

- **ChatGPT**: Very effective for debugging HTML, CSS, and JavaScript issues
- **Vercel Documentation**: [vercel.com/docs](https://vercel.com/docs)
- **GitHub Issues**: Create issues in the repository for tracking problems
- **Web Development Resources**: MDN Web Docs, W3Schools, Stack Overflow

## 📝 Regular Maintenance Tasks

### Monthly

- [ ] Check all links are working
- [ ] Verify contact information is current
- [ ] Update team member information as needed
- [ ] Test website on different devices

### Semesterly

- [ ] Update team photos and member information
- [ ] Review and update content for accuracy
- [ ] Check for broken links or outdated information
- [ ] Update application deadlines and information

### Yearly

- [ ] Review and update overall design
- [ ] Update technology and dependencies
- [ ] Backup all files
- [ ] Review domain and hosting renewals

## 🎯 Best Practices

1. **Always test changes locally before pushing**
2. **Use descriptive commit messages**
3. **Keep images optimized for web (compress large files)**
4. **Maintain consistent naming conventions**
5. **Regular backups of important files**
6. **Document any custom changes made**

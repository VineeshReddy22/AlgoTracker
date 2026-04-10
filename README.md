# AlgoTracker - DSA Progress Tracker

## Overview

AlgoTracker is a comprehensive web application designed to help students and developers master Data Structures and Algorithms (DSA). The platform provides a structured DSA problem sheet, progress tracking, study resources, and community features in one unified interface.

## Features

### 1. User Authentication
- **Login & Signup** with validation
- Password strength indicator
- Age verification (18+)
- Terms & conditions acceptance

### 2. DSA Progress Tracker
- **84 curated DSA problems** across 12+ topics
- Topics covered:
  - Learn the Basics (STL, Recursion, Bit Manipulation, Backtracking, Hashing)
  - Sorting Techniques
  - Arrays
  - Searching Techniques
  - Strings
  - Linked List
  - Trees
  - Graphs
  - Dynamic Programming
  - Sliding Window & Two Pointers
  - Heaps
  - Greedy Algorithms
- **Progress tracking** with:
  - Overall completion percentage
  - Difficulty-wise counts (Easy/Medium/Hard)
  - Visual progress bar
- **Collapsible sections** for organized topic navigation

### 3. Profile Dashboard
- Personal bio and information display
- Student profiles table with status (Online/Offline)
- DSA Leaderboard with rankings (Gold/Silver/Bronze medals)
- Detailed user information:
  - Profile Information (Name, Email, Username, Location)
  - Login Activity (Last login, sessions, device)
  - DSA Rankings (Global, Country, Platform ranks)
  - Achievements list

### 4. Resources Hub
- **Recommended Books** table with:
  - Book covers, prices, ratings, descriptions
  - Add to Cart functionality
- **YouTube Channels** (takeUforward, CodeHelp, GeeksforGeeks)
- **Online Platforms** (LeetCode, Codeforces, HackerRank, GFG)
- **Study Materials** and **Study Tips**

### 5. Contact & Feedback
- Contact form with:
  - Full name, email, phone number
  - Subject selection
  - Topics of interest (checkboxes)
  - Message field
  - File attachment option
  - Declaration checkbox
- Live validation for email and phone fields
- Contact information display (Address, Phone, Email)
- Map placeholder

## Tech Stack

| Technology | Purpose |
|------------|---------|
| HTML5 | Structure |
| CSS3 | Styling (custom properties, flexbox, grid) |
| JavaScript | Interactivity, form validation, progress tracking |
| Bootstrap 5 | Additional styling utilities |
| Google Fonts | JetBrains Mono & DM Sans fonts |

## File Structure

```
AlgoTracker/
├── index.html          # Landing page with Login/Signup
├── login.css           # Styles for landing page
├── login.js            # Auth logic, validation, modals
├── home.html           # Main DSA progress tracker
├── home.css            # Styles for tracker page
├── home.js             # Progress tracking, toggle functions
├── profile.html        # User profile dashboard
├── profile.css         # Profile page styles
├── resource.html       # Resources hub
├── resource.css        # Resources page styles
├── resource.js         # Resource page interactions
├── contact.html        # Contact & feedback page
├── contact.css         # Contact page styles
└── contact.js          # Form validation & submission
```

## Key Functionality

### Progress Tracking
```javascript
// Checkboxes automatically update:
// - Total completed problems
// - Progress bar width
// - Easy/Medium/Hard counts
```

### Form Validations
- **Email**: Regex pattern validation with live feedback
- **Phone**: 10-digit numeric validation with live character counting
- **Password**: Minimum 8 characters with strength indicator
- **Age**: Minimum 18 years validation

### Interactive Components
- **Dropdown menus** for Resources navigation
- **Collapsible sections** for DSA topics
- **Modal dialogs** for Login/Signup
- **Live form validation** with visual indicators

## Design System

### Color Palette
| Variable | Color | Usage |
|----------|-------|-------|
| `--bg` | #0d0f14 | Main background |
| `--bg2` | #13161e | Card background |
| `--bg3` | #1a1e2a | Hover states |
| `--accent` | #6366f1 | Primary buttons |
| `--accent2` | #818cf8 | Accent text |
| `--green` | #22c55e | Easy difficulty |
| `--yellow` | #facc15 | Medium difficulty |
| `--red` | #ef4444 | Hard difficulty |
| `--text` | #e2e8f0 | Primary text |
| `--muted` | #64748b | Secondary text |

### Typography
- **Headings & Code**: 'JetBrains Mono', monospace
- **Body Text**: 'DM Sans', sans-serif

## Getting Started

### Prerequisites
- Modern web browser (Chrome, Firefox, Edge, Safari)
- Internet connection (for CDN resources)

### Installation

1. Clone or download all files to a directory
2. No build process required - static HTML/CSS/JS
3. Open `index.html` in your browser

### Demo Credentials
```
Username: demo_user
Password: demo_password
```

## Responsive Design

- Mobile-friendly breakpoint at 768px
- Collapsible navigation on smaller screens
- Flexible grid layouts that adapt to screen size
- Touch-friendly interactive elements

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Future Enhancements

- Backend integration with database
- User-specific progress persistence
- Real-time leaderboard updates
- Social sharing features
- Problem solution submissions
- Discussion forums
- Email notifications

## Credits

Developed as a comprehensive DSA learning platform - AlgoTracker helps learners track their progress systematically through curated problem sets and valuable resources.

## License

© 2026 AlgoTracker. All rights reserved.

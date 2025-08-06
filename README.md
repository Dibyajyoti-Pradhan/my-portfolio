# 🎮 Portfolio Quest - Gamified Portfolio Experience

Welcome to **Portfolio Quest**, an extremely fancy gamified version of Dibyajyoti Pradhan's professional portfolio! Transform your browsing experience into an epic interactive adventure.

## 🌟 Game Features

### 🎯 Core Gameplay
- **Level-Based Progression**: Start at Level 1 and advance by exploring sections
- **Achievement System**: Unlock 10 unique achievements with special rewards
- **Scoring Mechanics**: Earn points for every interaction and discovery
- **Section Unlocking**: Progress through locked areas like a real RPG

### ✨ Visual Excellence
- **Particle Background**: Dynamic interactive particle effects
- **3D Animations**: Smooth Framer Motion transitions
- **Game HUD**: Real-time stats display with score, level, and achievements
- **Achievement Toasts**: Celebratory notifications with confetti effects
- **Enhanced Scrollbars**: Custom game-styled scrollbars
- **Glow Effects**: Beautiful lighting and shadow effects

### 🎪 Interactive Elements
- **Smart Navigation**: Game-style menu with unlock requirements
- **Progress Tracking**: Visual progress bars and completion statistics
- **Requirement System**: Clear indicators for unlocking new sections
- **Responsive Design**: Optimized for all devices

## 🚀 Quick Start

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Installation & Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/Dibyajyoti-Pradhan/my-portfolio.git
   cd my-portfolio
   ```

2. **Switch to the gamified branch**
   ```bash
   git checkout gamified-portfolio
   ```

3. **Install dependencies**
   ```bash
   npm install
   ```

4. **Start the development server**
   ```bash
   npm start
   ```

5. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

6. **Activate Game Mode**
   Click the "Game Mode" button in the bottom-left corner to start your adventure!

## 🎮 How to Play

### Getting Started
1. **Welcome Screen**: Read the introduction and click "Start Adventure"
2. **Begin with About**: Your journey starts in the About section (Level 1)
3. **Explore & Unlock**: Visit sections to earn points and unlock new areas
4. **Level Up**: Reach 200 points to advance to the next level
5. **Collect Achievements**: Complete specific actions to unlock special rewards

### Achievement Guide
- 🔍 **Explorer**: Visit your first section (50 pts)
- 🧠 **Curious Mind**: Visit 3 different sections (100 pts)
- 📚 **Researcher**: Visit all sections (200 pts)
- ⚡ **Skill Hunter**: Explore the skills section (75 pts)
- 💼 **Experience Seeker**: Check out work experience (75 pts)
- 🛠️ **Project Creator**: View project portfolio (75 pts)
- 🏆 **Achievement Hunter**: Browse achievements section (75 pts)
- 🎓 **Scholar**: Learn about education background (75 pts)
- 📞 **Networker**: Visit contact section (75 pts)
- 👑 **Portfolio Master**: Reach Level 5 (500 pts)

### Section Unlock Requirements
- **Level 1**: About, Skills
- **Level 2**: Experience, Projects (requires About + Skills visited)
- **Level 3**: Achievements, Education (requires Experience completed)
- **Level 4**: Contact (requires Projects completed)

## 🛠️ Technology Stack

### Core Technologies
- **React 18**: Modern React with hooks and context
- **Styled Components**: CSS-in-JS styling solution
- **React Router**: Client-side routing

### Game & Animation Libraries
- **Framer Motion**: Smooth animations and transitions
- **React Spring**: Physics-based animations
- **@tsparticles/react**: Interactive particle backgrounds
- **React Confetti**: Celebration effects
- **React Intersection Observer**: Scroll-based interactions

### Enhanced Features
- **Three.js Ready**: 3D graphics support (via @react-three/fiber)
- **Lottie Animations**: JSON-based animations support
- **React Use Gesture**: Touch and gesture interactions

## 📁 Project Structure

```
src/
├── components/
│   ├── GameHUD.js              # Real-time game statistics
│   ├── GameNavigation.js       # Level-based navigation menu
│   ├── GameModeToggle.js       # Switch between normal/game mode
│   ├── ParticleBackground.js   # Interactive particle effects
│   ├── AnimatedSection.js      # Gamified section wrapper
│   ├── AchievementToast.js     # Achievement notifications
│   └── common/                 # Shared components
├── context/
│   ├── GameContext.js          # Game state management
│   └── ThemeContext.js         # Theme and dark mode
├── pages/
│   └── GameHome.js             # Main gamified page
├── styles/
│   ├── GlobalStyle.js          # Enhanced global styles
│   └── theme.js                # Theme configuration
└── GameApp.js                  # Main gamified app component
```

## 🎨 Customization

### Theme Modifications
Edit `src/styles/theme.js` to customize colors, fonts, and spacing.

### Adding New Achievements
Modify the `allAchievements` array in `src/context/GameContext.js`:

```javascript
{
  id: 'unique_id',
  name: 'Achievement Name',
  description: 'What the user needs to do',
  points: 100
}
```

### Particle Customization
Adjust particle settings in `src/components/ParticleBackground.js`:
- Number of particles
- Colors and opacity
- Movement speed
- Interaction effects

## 🚢 Deployment

### Build for Production
```bash
npm run build
```

### Deploy to GitHub Pages
```bash
npm run deploy
```

### Environment Variables
Create a `.env` file for custom configurations:
```
REACT_APP_GAME_MODE_DEFAULT=true
REACT_APP_PARTICLES_COUNT=80
REACT_APP_ACHIEVEMENT_SOUND=true
```

## 🎯 Game Modes

### Normal Mode
- Standard portfolio navigation
- Clean, professional layout
- All sections immediately accessible

### Game Mode (Default)
- Progressive unlocking system
- Achievement tracking
- Particle effects and animations
- Scoring and leveling system

## 🔧 Development

### Available Scripts
- `npm start`: Run development server
- `npm test`: Run test suite
- `npm run build`: Build for production
- `npm run deploy`: Deploy to GitHub Pages

### Performance Optimization
- Lazy loading of heavy animations
- Optimized particle rendering
- Efficient re-renders with React.memo
- Intersection observer for scroll performance

## 📱 Browser Support

- Chrome (recommended)
- Firefox
- Safari
- Edge
- Mobile browsers (iOS Safari, Chrome Mobile)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Commit changes: `git commit -m 'Add amazing feature'`
4. Push to branch: `git push origin feature/amazing-feature`
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **Framer Motion**: For incredible animation capabilities
- **TSParticles**: For beautiful particle effects
- **React Three Fiber**: For 3D graphics support
- **Styled Components**: For elegant CSS-in-JS styling

## 📞 Contact

**Dibyajyoti Pradhan**
- Email: dibyojyotipradhan@gmail.com
- LinkedIn: [dibyajyoti-pradhan-83a649146](https://www.linkedin.com/in/dibyajyoti-pradhan-83a649146/)
- GitHub: [Dibyajyoti-Pradhan](https://github.com/Dibyajyoti-Pradhan)

---

## 🎮 Ready to Start Your Adventure?

Experience the future of portfolio browsing with **Portfolio Quest**! Click the Game Mode button and embark on your professional journey like never before.

**Happy Gaming! 🚀**

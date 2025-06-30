import React, { createContext, useState, useEffect } from 'react';

export const ThemeContext = createContext();

const lightThemeVars = {
    // General
    '--section-background-color': 'linear-gradient(to bottom left, #ffffff, #f0f0f0)',
    '--image-gradient': 'linear-gradient(to bottom left, #ffffff, #eaeaea)',
    '--imp-text-color': '#6b47dc',
    '--exp-background': '#ffffffcc',
    '--exp-border': '#00000026',
    '--text-color': '#000000',
    
    // Navigation colors
    '--nav-item-color': '#333333',
    '--navbar-bg-color': '#ffffff90',
    '--navbar-toggler-bg-color': '#6b47dc',
    '--navbar-mobile-bg-color': '#ffffff',
    '--navbar-brand-color': '#333333',
    '--nav-item-hover-bg': '#6b47dc',
    
    // Home section colors
    '--home-bg-color': '#333333',
    '--main-name-color': '#6b47dc',
    '--typewriter-color': '#5a3cb8',
    '--typewriter-cursor-color': '#4f2a9c',
    '--home-about-description-color': '#333333',
    '--home-about-social-color': '#333333',
    '--home-social-icons-bg': 'rgba(255, 255, 255, 0.9)',
    '--home-social-icons-before-bg': '#6b47dc',
    '--home-social-icons-hover-shadow': '#5a3cb8',
    '--home-social-icons-hover-color': '#4f2a9c',
    '--icon-colour': '#6b47dc',
    
    // Preloader and scrollbar
    '--preloader-bg': '#ffffff',
    '--webkit-scrollbar-track-bg-color': '#e0e0e0',
    '--webkit-scrollbar-thumb-bg-color': 'rgba(107, 71, 220, 0.8)',
    '--webkit-scrollbar-thumb-bg-hover-color': 'rgba(90, 60, 184, 0.9)',
    
    // Footer colors
    '--footer-bg-color': '#f8f9fa',
    '--footer-text-color': '#333333',
    '--blockquote-footer-color': '#666666',
    
    // Project and blog card colors
    '--project-card-shadow': 'rgba(107, 71, 220, 0.3)',
    '--project-card-hover-shadow': 'rgba(90, 60, 184, 0.4)',
    '--project-card-view-color': '#333333',
    '--blog-card-shadow': 'rgba(107, 71, 220, 0.25)',
    '--blog-card-hover-shadow': 'rgba(90, 60, 184, 0.4)',
    '--blog-link-color': '#333333',
    '--btn-primary-color': '#ffffff',
    '--btn-primary-bg': '#6b47dc',
    '--btn-primary-hover-bg': '#5a3cb8',
    '--project-heading-color': '#333333',
    
    // About section colors
    '--about-section-color': '#333333',
    '--tech-icons-border': 'rgba(107, 71, 220, 0.4)',
    '--tech-icons-shadow': 'rgba(107, 71, 220, 0.15)',
    '--tech-icons-hover-border': 'rgba(90, 60, 184, 0.6)',
    '--quote-card-view-color': '#333333',
    
    // Resume section colors
    '--resume-section-color': '#333333',
    '--resume-item-border': '#6b47dc',
    '--resume-item-title-bg': '#6b47dc20',
    '--resume-item-before-bg': '#ffffff',
    '--resume-item-before-border': '#6b47dc',
    
    // Button colors
    '--like-btn-bg': '#6b47dc40',
    '--like-btn-hover-bg': '#5a3cb860',
    '--fork-btn-inner-bg': '#6b47dc40',
    '--fork-btn-inner-hover-bg': '#5a3cb860',
    
    // Profile circle
    '--profile-circle-bg-color': '#6b47dc',
    '--profile-circle-border-color': '#333333',
  };
  
  const darkThemeVars = {
    // General
    '--section-background-color': 'linear-gradient(to bottom left, rgba(17,16,16,0.582), rgba(12,8,24,0.904))',
    '--image-gradient': 'linear-gradient(to bottom left, rgba(17,16,16,0.678), rgba(12,10,22,0.863))',
    '--imp-text-color': '#c770f0',
    '--exp-background': '#ebebeb32',
    '--exp-border': '#fdfdfd26',
    '--text-color': '#ffffff',
    
    // Navigation colors
    '--nav-item-color': 'white',
    '--navbar-bg-color': '#1b1a2ea9',
    '--navbar-toggler-bg-color': '#be50f4',
    '--navbar-mobile-bg-color': '#181a27',
    '--navbar-brand-color': 'rgb(250, 250, 250)',
    '--nav-item-hover-bg': '#c95bf5',
    
    // Home section colors
    '--home-bg-color': 'whitesmoke',
    '--main-name-color': '#cd5ff8',
    '--typewriter-color': '#be6adf',
    '--typewriter-cursor-color': '#b562d6',
    '--home-about-description-color': 'white',
    '--home-about-social-color': 'white',
    '--home-social-icons-bg': 'rgba(255, 255, 255, 0.972)',
    '--home-social-icons-before-bg': '#68187a',
    '--home-social-icons-hover-shadow': '#801f95',
    '--home-social-icons-hover-color': '#87209e',
    '--icon-colour': '#700c86',
    
    // Preloader and scrollbar
    '--preloader-bg': '#0c0513',
    '--webkit-scrollbar-track-bg-color': '#2d1950',
    '--webkit-scrollbar-thumb-bg-color': 'rgba(178, 121, 216, 0.959)',
    '--webkit-scrollbar-thumb-bg-hover-color': 'rgba(222, 130, 235, 0.911)',
    
    // Footer colors
    '--footer-bg-color': 'rgb(10, 4, 22)',
    '--footer-text-color': 'white',
    '--blockquote-footer-color': '#a588c0',
    
    // Project and blog card colors
    '--project-card-shadow': 'rgba(119, 53, 136, 0.459)',
    '--project-card-hover-shadow': 'rgba(129, 72, 144, 0.561)',
    '--project-card-view-color': 'white',
    '--blog-card-shadow': 'rgba(145, 77, 161, 0.459)',
    '--blog-card-hover-shadow': 'rgba(155, 88, 173, 0.65)',
    '--blog-link-color': 'white',
    '--btn-primary-color': '#fff',
    '--btn-primary-bg': '#623686',
    '--btn-primary-hover-bg': '#6d20c5d7',
    '--project-heading-color': 'white',
    
    // About section colors
    '--about-section-color': 'white',
    '--tech-icons-border': 'rgba(200, 137, 230, 0.637)',
    '--tech-icons-shadow': 'rgba(89, 4, 168, 0.137)',
    '--tech-icons-hover-border': 'rgba(197, 115, 230, 0.883)',
    '--quote-card-view-color': 'white',
    
    // Resume section colors
    '--resume-section-color': 'white',
    '--resume-item-border': '#8a49a8',
    '--resume-item-title-bg': '#5234795d',
    '--resume-item-before-bg': '#fff',
    '--resume-item-before-border': '#8a49a8',
    
    // Button colors
    '--like-btn-bg': '#934cce5e',
    '--like-btn-hover-bg': '#a24dd386',
    '--fork-btn-inner-bg': '#934cce5e',
    '--fork-btn-inner-hover-bg': '#a24dd386',
    
    // Profile circle
    '--profile-circle-bg-color': '#61dafb',
    '--profile-circle-border-color': 'whitesmoke',
  };

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(() =>
    localStorage.getItem('theme') || 'dark'
  );

  useEffect(() => {
    const root = document.documentElement;
    const vars = theme === 'light' ? lightThemeVars : darkThemeVars;

    Object.entries(vars).forEach(([key, value]) => {
      root.style.setProperty(key, value);
    });

    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () =>
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

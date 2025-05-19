// src/contexts/LanguageContext.jsx
import React, { createContext, useState, useContext } from 'react';

export const LanguageContext = createContext(); // Add export here

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('en'); // Default to English

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'en' ? 'sv' : 'en');
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  return useContext(LanguageContext);
};
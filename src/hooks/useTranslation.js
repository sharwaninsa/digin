// hooks/useTranslation.js
import { useApp } from '../context/AppContext';
import { translations } from '../translations';

export const useTranslation = () => {
  const { language } = useApp();

  const t = (key) => {
    return translations[language][key] || key;
  };

  return { t, language };
};
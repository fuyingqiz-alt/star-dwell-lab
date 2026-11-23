import { createContext, useContext, useState, type ReactNode } from "react";

const LanguageContext = createContext({ english: false, toggle: () => {} });
export function LanguageProvider({ children }: { children: ReactNode }) {
  const [english, setEnglish] = useState(false);
  return <LanguageContext.Provider value={{ english, toggle: () => setEnglish(value => !value) }}>{children}</LanguageContext.Provider>;
}
export const useLanguage = () => useContext(LanguageContext);
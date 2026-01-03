import { useCallback } from 'react';

const HEADER_HEIGHT = 80;

export const useSmoothScroll = () => {
  const scrollToSection = useCallback((targetId: string, options?: { 
    mode?: 'quote' | 'intervention';
    offset?: number;
  }) => {
    const element = document.getElementById(targetId);
    if (!element) return;
    
    const elementPosition = element.getBoundingClientRect().top + window.scrollY;
    const offsetPosition = elementPosition - (options?.offset ?? HEADER_HEIGHT);

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth",
    });
    
    // Handle quote form mode selection
    if (targetId === "quote" && options?.mode) {
      setTimeout(() => {
        const targetBtn = document.querySelector(
          options.mode === 'intervention' ? '[data-intervention-btn]' : '[data-quote-btn]'
        ) as HTMLButtonElement;
        if (targetBtn) {
          targetBtn.click();
        }
      }, 500);
    }
  }, []);

  return { scrollToSection };
};

// Standalone function for use outside components
export const smoothScrollTo = (targetId: string, offset: number = HEADER_HEIGHT) => {
  const element = document.getElementById(targetId);
  if (!element) return;
  
  const elementPosition = element.getBoundingClientRect().top + window.scrollY;
  const offsetPosition = elementPosition - offset;

  window.scrollTo({
    top: offsetPosition,
    behavior: "smooth",
  });
};

export default useSmoothScroll;

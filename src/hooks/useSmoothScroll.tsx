import { useCallback } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const HEADER_HEIGHT = 80;

export const useSmoothScroll = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const scrollToSection = useCallback((targetId: string, options?: { 
    mode?: 'quote' | 'intervention';
    offset?: number;
  }) => {
    const performScroll = () => {
      const element = document.getElementById(targetId);
      if (!element) return;
      
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementPosition - (options?.offset ?? HEADER_HEIGHT);

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
      
      // Add focus animation to quote section
      if (targetId === "quote") {
        // Add focus class for animation
        element.classList.add('quote-focused');
        
        // Remove the class after animation completes
        setTimeout(() => {
          element.classList.remove('quote-focused');
        }, 4500); // 1.5s * 3 repetitions
        
        // Handle quote form mode selection
        if (options?.mode) {
          setTimeout(() => {
            const targetBtn = document.querySelector(
              options.mode === 'intervention' ? '[data-intervention-btn]' : '[data-quote-btn]'
            ) as HTMLButtonElement;
            if (targetBtn) {
              targetBtn.click();
            }
          }, 500);
        }
      }
    };

    // If we're not on the home page and targeting quote, navigate first
    if (location.pathname !== '/' && targetId === 'quote') {
      navigate('/');
      setTimeout(performScroll, 150);
    } else {
      performScroll();
    }
  }, [navigate, location.pathname]);

  return { scrollToSection };
};

// Standalone function for use outside components (without navigation capability)
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

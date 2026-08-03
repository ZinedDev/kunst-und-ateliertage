import { useEffect, useRef } from "react";
import { useLocation, useNavigate } from "react-router";
import { navbarItems } from "../data/NavData";

export function usePageScroll() {
  const navigate = useNavigate();
  const location = useLocation();
  const isScrolling = useRef(false);
  const cooldownPeriod = 1000; // ms

  useEffect(() => {
    // Only apply for desktop (screens >= 1024px)
    if (window.innerWidth < 1024) return;

    const handleNavigation = (direction: 'up' | 'down') => {
      if (isScrolling.current) return;

      const currentIndex = navbarItems.findIndex(
        (item) => item.path === location.pathname
      );

      if (currentIndex === -1) return;

      if (direction === 'down') {
        // Scroll down -> next page
        if (currentIndex < navbarItems.length - 1) {
          isScrolling.current = true;
          navigate(navbarItems[currentIndex + 1].path);
          setTimeout(() => {
            isScrolling.current = false;
          }, cooldownPeriod);
        }
      } else {
        // Scroll up -> previous page
        if (currentIndex > 0) {
          isScrolling.current = true;
          navigate(navbarItems[currentIndex - 1].path);
          setTimeout(() => {
            isScrolling.current = false;
          }, cooldownPeriod);
        }
      }
    };

    const isInternalScrollable = (target: HTMLElement | null, deltaY: number) => {
      let current = target;
      while (current && current !== document.body) {
        const style = window.getComputedStyle(current);
        const isOverflow = style.overflowY === 'auto' || style.overflowY === 'scroll';
        const canScroll = current.scrollHeight > current.clientHeight;
        
        if (isOverflow && canScroll) {
          const atTop = current.scrollTop <= 0;
          const atBottom = current.scrollTop + current.clientHeight >= current.scrollHeight - 1;

          if (deltaY > 0 && !atBottom) return true; // Still can scroll down in element
          if (deltaY < 0 && !atTop) return true;    // Still can scroll up in element
        }
        current = current.parentElement;
      }
      return false;
    };

    const handleWheel = (event: WheelEvent) => {
      if (isInternalScrollable(event.target as HTMLElement, event.deltaY)) return;

      // Ignore horizontal scrolls
      if (Math.abs(event.deltaY) < Math.abs(event.deltaX)) return;
      
      // Threshold to avoid accidental tiny scrolls
      if (Math.abs(event.deltaY) < 30) return;

      handleNavigation(event.deltaY > 0 ? 'down' : 'up');
    };

    window.addEventListener("wheel", handleWheel, { passive: false });

    return () => {
      window.removeEventListener("wheel", handleWheel);
    };
  }, [location.pathname, navigate]);
}

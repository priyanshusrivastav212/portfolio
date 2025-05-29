import animateScrollTo from "animated-scroll-to";

export const openLink = (event: React.MouseEvent, link: string, target: string): void => {
  event.preventDefault();
  window.open(link, target);
}

export const scrollToElement = (element: HTMLElement | null, time: number = 9000): void => {
  if (element) {
    animateScrollTo(element, {
      maxDuration: time,  // guarantees scroll finishes within this time (in ms)
      cancelOnUserAction: false,
      elementToScroll: window,
      easing: t => t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1
  });
  }
};




export const isMobile = (): boolean => {
  if (typeof window !== 'undefined') {
    return window.matchMedia('(max-width: 768px)').matches;
  }
  return false;
}

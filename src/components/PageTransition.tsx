import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

interface PageTransitionProps {
  children: React.ReactNode;
}

export const PageTransition: React.FC<PageTransitionProps> = ({ children }) => {
  const location = useLocation();
  const [displayChildren, setDisplayChildren] = useState(children);
  const [transitionState, setTransitionState] = useState<'enter' | 'exit'>('enter');

  useEffect(() => {
    // When location changes, trigger exit then enter
    setTransitionState('exit');
    const timeout = setTimeout(() => {
      setDisplayChildren(children);
      setTransitionState('enter');
    }, 200); // exit duration

    return () => clearTimeout(timeout);
  }, [location.pathname]);

  // On first render, just show immediately
  useEffect(() => {
    setDisplayChildren(children);
  }, [children]);

  return (
    <div
      className={`page-transition ${
        transitionState === 'enter' ? 'page-enter' : 'page-exit'
      }`}
    >
      {displayChildren}
    </div>
  );
};

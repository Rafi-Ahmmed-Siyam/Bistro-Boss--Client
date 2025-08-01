import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
   const { pathname } = useLocation();

   useEffect(() => {
      const scrollToTopPaths = ['/', '/menu', '/order', '/contact', '/signUp', '/signin'];
      const scrollToPartialDownPaths = ['/order/'];

      if (scrollToTopPaths.includes(pathname)) {
         window.scrollTo(0, 0);
      } else if (scrollToPartialDownPaths.some(path => pathname.startsWith(path))) {
         window.scrollTo(0, 255);
      }
   }, [pathname]);




   return null;
};

export default ScrollToTop;
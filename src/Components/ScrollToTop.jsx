import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
   const { pathname } = useLocation();

   useEffect(() => {
      const scrollToTopPaths = ['/', '/menu', '/order'];
      const scrollToPartialDownPaths = ['/order/']; // ডাইনামিক ক্যাটেগরি URL গুলো এখানে

      if (scrollToTopPaths.includes(pathname)) {
         window.scrollTo(0, 0);
      } else if (scrollToPartialDownPaths.some(path => pathname.startsWith(path))) {
         window.scrollTo(0, 255);
      }
   }, [pathname]);




   return null;
};

export default ScrollToTop;
"use client";

import Aos from "aos";
import  { useEffect } from "react";
import "aos/dist/aos.css";

function AOSInit() {
  useEffect(() => {
    Aos.init();
  }, []);

  return null;
}

export default AOSInit;

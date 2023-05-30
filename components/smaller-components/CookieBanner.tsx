"use client";

import { montserrat } from "@/app/fonts";
import { getLocalStorage, setLocalStorage } from "@/lib/storageHelper";
import { motion } from "framer-motion";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function CookieBanner() {
  const [cookieConsent, setCookieConsent] = useState(false);

  useEffect(() => {
    const storedCookieConsent = getLocalStorage("cookie_consent", null);

    setCookieConsent(storedCookieConsent);
  }, [setCookieConsent]);

  useEffect(() => {
    const newValue = cookieConsent ? "granted" : "denied";
    window.gtag("consent", "update", {
      analytics_storage: newValue,
    });

    setLocalStorage("cookie_consent", cookieConsent);
  }, [cookieConsent]);

  return (
    <motion.div
      initial={{ y: 80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8 }}
      className={`my-10 mx-auto max-w-[350px] sml:max-w-[600px] mdl:max-w-containerxs z-50
                        fixed bottom-0 left-0 right-0 
                        ${
                          cookieConsent != null ? "hidden" : "flex"
                        } px-3 md:px-4 py-3 justify-between items-center flex-col sml:flex-row gap-4  
                         bg-textGreen text-bodyColor rounded-lg shadow`}
    >
      <div className="text-center">
        <Link href="/info/cookies">
          <p>
            We use <span className="font-bold">cookies</span> on our site.
          </p>
        </Link>
      </div>

      <div className="flex gap-2">
        <button
          className={` w-36 h-12 rounded-md text-bodyColor font-semibold hover:bg-[#4ab5ad] duration-300`}
          onClick={() => setCookieConsent(false)}
        >
          Decline
        </button>
        <button
          className={` w-36 h-12 rounded-md text-bodyColor font-semibold border border-bodyColor hover:bg-[#4ab5ad] duration-300`}
          onClick={() => setCookieConsent(true)}
        >
          Allow Cookies
        </button>
      </div>
    </motion.div>
  );
}

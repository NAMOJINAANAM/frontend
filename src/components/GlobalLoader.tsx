"use client";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Loader from "./Loader";

export default function GlobalLoader({ children }: { children: React.ReactNode }) {
  const [loading, setLoading] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setLoading(true);

    // Fake delay so even static pages show loader briefly
    const timer = setTimeout(() => setLoading(false), 1000);

    return () => clearTimeout(timer);
  }, [pathname]);

  return (
    <>
      {loading && <Loader />}
      {children}
    </>
  );
}

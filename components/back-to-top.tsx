"use client";

import { ArrowUp } from "lucide-react";
import { useEffect, useState } from "react";

export function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const getPageScrollTop = () =>
      Math.max(
        window.scrollY,
        document.documentElement.scrollTop,
        document.body.scrollTop,
        document.scrollingElement?.scrollTop ?? 0,
      );

    const updateVisibility = (event?: Event) => {
      const target = event?.target;
      const containerScrollTop =
        target instanceof HTMLElement && target.closest("main")
          ? target.scrollTop
          : 0;

      setVisible(Math.max(getPageScrollTop(), containerScrollTop) > 520);
    };

    updateVisibility();
    window.addEventListener("scroll", updateVisibility, { passive: true });
    document.addEventListener("scroll", updateVisibility, { passive: true, capture: true });

    return () => {
      window.removeEventListener("scroll", updateVisibility);
      document.removeEventListener("scroll", updateVisibility, { capture: true });
    };
  }, []);

  return <button
    type="button"
    className={`back-to-top${visible ? " is-visible" : ""}`}
    onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
    aria-label="Back to top"
    title="Back to top"
  ><ArrowUp aria-hidden="true" /></button>;
}

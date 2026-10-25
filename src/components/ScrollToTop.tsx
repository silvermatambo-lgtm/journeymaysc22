import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

export function ScrollToTop() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const fn = () => setShow(window.scrollY > 600);
    fn();
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);
  if (!show) return null;
  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      aria-label="Scroll to top"
      className="fixed bottom-44 right-4 z-40 inline-flex h-11 w-11 items-center justify-center rounded-full bg-secondary text-foreground shadow-brand transition hover:scale-110 lg:bottom-24"
    >
      <ArrowUp className="h-5 w-5" />
    </button>
  );
}

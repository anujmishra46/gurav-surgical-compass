import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

export function BackToTop() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const on = () => setShow(window.scrollY > 480);
    on();
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      aria-label="Back to top"
      className={`fixed bottom-6 right-6 z-40 grid size-11 place-items-center rounded-full bg-primary text-primary-foreground shadow-elevated transition-all duration-300 hover:bg-primary/90 ${
        show ? "opacity-100 translate-y-0" : "opacity-0 pointer-events-none translate-y-2"
      }`}
    >
      <ArrowUp className="size-5" />
    </button>
  );
}

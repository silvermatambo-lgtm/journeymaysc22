import { useEffect, useState } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import { Menu, X, Phone, MessageCircle } from "lucide-react";
import { ASSETS, NAV, SITE } from "@/lib/site";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 24);
    fn();
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  useEffect(() => { setOpen(false); }, [pathname]);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
          scrolled ? "glass border-b border-border py-2" : "bg-transparent py-4"
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6">
          <Link to="/" className="flex items-center gap-2 min-w-0">
            <img src={ASSETS.logo} alt={SITE.name} className="h-11 w-11 shrink-0 object-contain" />
            <div className="hidden sm:block min-w-0">
              <div className="truncate text-sm font-bold leading-tight">My Journey My Scars</div>
              <div className="text-[10px] uppercase tracking-widest text-ember">From Pain to Power</div>
            </div>
          </Link>
          <nav className="hidden lg:flex items-center gap-1">
            {NAV.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                className="rounded-md px-3 py-2 text-sm font-medium text-foreground/80 transition hover:text-foreground"
                activeProps={{ className: "text-foreground bg-secondary/60" }}
                activeOptions={{ exact: true }}
              >
                {n.label}
              </Link>
            ))}
          </nav>
          <div className="flex items-center gap-2">
            <a
              href={`tel:${SITE.phoneIntl}`}
              className="hidden md:inline-flex items-center gap-2 rounded-full bg-gradient-brand px-4 py-2 text-sm font-semibold text-brand-foreground shadow-brand transition hover:brightness-110"
            >
              <Phone className="h-4 w-4" /> Call Now
            </a>
            <button
              onClick={() => setOpen(true)}
              aria-label="Open menu"
              className="lg:hidden inline-flex h-11 w-11 items-center justify-center rounded-full bg-secondary/80 text-foreground"
            >
              <Menu className="h-5 w-5" />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile slide-in menu */}
      <div
        className={`fixed inset-0 z-[60] lg:hidden transition ${open ? "pointer-events-auto" : "pointer-events-none"}`}
        aria-hidden={!open}
      >
        <div
          className={`absolute inset-0 bg-black/60 transition-opacity ${open ? "opacity-100" : "opacity-0"}`}
          onClick={() => setOpen(false)}
        />
        <aside
          className={`absolute right-0 top-0 h-full w-[86%] max-w-sm bg-background border-l border-border shadow-2xl transition-transform duration-300 ${
            open ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex items-center justify-between p-4 border-b border-border">
            <div className="flex items-center gap-2">
              <img src={ASSETS.logo} className="h-9 w-9 object-contain" alt="" />
              <span className="font-bold">MJMS Foundation</span>
            </div>
            <button
              onClick={() => setOpen(false)}
              aria-label="Close menu"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-secondary text-foreground transition hover:rotate-90"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
          <nav className="flex flex-col p-4 gap-1">
            {NAV.map((n, i) => (
              <Link
                key={n.to}
                to={n.to}
                style={{ animationDelay: `${i * 60}ms` }}
                className="animate-fade-up rounded-xl px-4 py-3 text-base font-medium text-foreground/90 transition hover:bg-secondary"
                activeProps={{ className: "bg-secondary text-foreground" }}
                activeOptions={{ exact: true }}
              >
                {n.label}
              </Link>
            ))}
          </nav>
          <div className="p-4 space-y-3">
            <a href={`tel:${SITE.phoneIntl}`} className="flex items-center justify-center gap-2 rounded-xl bg-gradient-brand py-3 font-semibold text-brand-foreground">
              <Phone className="h-4 w-4" /> Call {SITE.phone}
            </a>
            <a href={`https://wa.me/${SITE.whatsapp}`} target="_blank" rel="noreferrer" className="flex items-center justify-center gap-2 rounded-xl bg-secondary py-3 font-semibold">
              <MessageCircle className="h-4 w-4" /> WhatsApp Us
            </a>
          </div>
        </aside>
      </div>
    </>
  );
}

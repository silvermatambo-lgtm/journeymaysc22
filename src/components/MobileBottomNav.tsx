import { Link, useRouterState } from "@tanstack/react-router";
import { Home, Info, Heart, Phone } from "lucide-react";

const items = [
  { to: "/", label: "Home", icon: Home },
  { to: "/about", label: "About", icon: Info },
  { to: "/donate", label: "Donate", icon: Heart },
  { to: "/contact", label: "Contact", icon: Phone },
] as const;

export function MobileBottomNav() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  return (
    <nav className="fixed inset-x-0 bottom-0 z-40 lg:hidden">
      <div className="mx-auto max-w-md px-3 pb-[max(env(safe-area-inset-bottom),0.5rem)] pt-2">
        <div className="grid grid-cols-4 rounded-2xl border border-border glass shadow-brand">
          {items.map(({ to, label, icon: Icon }) => {
            const active = pathname === to;
            return (
              <Link
                key={to}
                to={to}
                className={`flex flex-col items-center gap-1 rounded-2xl py-2.5 text-[11px] font-medium transition ${
                  active ? "text-brand-foreground" : "text-muted-foreground"
                }`}
              >
                <span className={`flex h-9 w-9 items-center justify-center rounded-xl transition ${active ? "bg-gradient-brand shadow-brand" : ""}`}>
                  <Icon className="h-4 w-4" />
                </span>
                <span className={active ? "text-foreground" : ""}>{label}</span>
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
}

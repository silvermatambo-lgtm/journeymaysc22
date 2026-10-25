import { Link } from "@tanstack/react-router";
import { Facebook, MessageCircle, Phone, Mail, MapPin } from "lucide-react";
import { ASSETS, NAV, SITE } from "@/lib/site";

export function Footer() {
  return (
    <footer className="relative mt-24 border-t border-border bg-card/40 pb-28 lg:pb-10">
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-px"
        style={{ background: "var(--gradient-brand)" }}
      />
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 lg:grid-cols-4">
        <div>
          <div className="flex items-center gap-2">
            <img src={ASSETS.logo} className="h-12 w-12 object-contain" alt="" />
            <div>
              <div className="font-bold leading-tight">My Journey My Scars</div>
              <div className="text-[11px] uppercase tracking-widest text-ember">Foundation</div>
            </div>
          </div>
          <p className="mt-4 text-sm text-muted-foreground">
            Fostering hope and creating positive change in marginalized
            communities across South Africa and Africa.
          </p>
          <div className="mt-4 flex gap-3">
            <a href={SITE.facebook} target="_blank" rel="noreferrer" aria-label="Facebook" className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-secondary transition hover:bg-gradient-brand">
              <Facebook className="h-4 w-4" />
            </a>
            <a href={`https://wa.me/${SITE.whatsapp}`} target="_blank" rel="noreferrer" aria-label="WhatsApp" className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-secondary transition hover:bg-gradient-brand">
              <MessageCircle className="h-4 w-4" />
            </a>
            <a href={SITE.whatsappChannel} target="_blank" rel="noreferrer" aria-label="WhatsApp Channel" className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-secondary transition hover:bg-gradient-brand">
              <MessageCircle className="h-4 w-4" />
            </a>
          </div>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wider">Quick Links</h4>
          <ul className="mt-4 space-y-2 text-sm">
            {NAV.map((n) => (
              <li key={n.to}>
                <Link to={n.to} className="text-muted-foreground transition hover:text-foreground">{n.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wider">Contact</h4>
          <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
            <li className="flex items-start gap-2"><Phone className="mt-0.5 h-4 w-4 text-ember" /> <a href={`tel:${SITE.phoneIntl}`}>{SITE.phone}</a></li>
            <li className="flex items-start gap-2"><Mail className="mt-0.5 h-4 w-4 text-ember" /> {SITE.email}</li>
            <li className="flex items-start gap-2"><MapPin className="mt-0.5 h-4 w-4 text-ember" /> {SITE.address}</li>
          </ul>
          <a href={`https://wa.me/${SITE.whatsapp}`} target="_blank" rel="noreferrer" className="mt-4 inline-flex items-center gap-2 rounded-full bg-gradient-brand px-4 py-2 text-sm font-semibold text-brand-foreground shadow-brand">
            <MessageCircle className="h-4 w-4" /> Chat on WhatsApp
          </a>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wider">Find Us</h4>
          <div className="mt-4 overflow-hidden rounded-xl border border-border">
            <iframe
              src={SITE.mapEmbed}
              title="Map"
              loading="lazy"
              className="h-40 w-full"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>

      <div className="border-t border-border">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-4 py-5 text-center text-xs text-muted-foreground sm:flex-row sm:px-6">
          <div>© {new Date().getFullYear()} {SITE.name}. All rights reserved.</div>
          <div>
            Website designed by{" "}
            <a href="https://www.webdevpro.co.za" target="_blank" rel="noreferrer" className="font-semibold text-ember underline">
              www.webdevpro.co.za
            </a>{" "}
            · <a href="tel:+27812159792" className="text-foreground">+27 81 215 9792</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

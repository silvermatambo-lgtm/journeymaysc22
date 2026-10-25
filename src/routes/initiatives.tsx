import { createFileRoute } from "@tanstack/react-router";
import { ASSETS } from "@/lib/site";
import { Backpack, Heart, Gift, PartyPopper } from "lucide-react";

export const Route = createFileRoute("/initiatives")({
  head: () => ({
    meta: [
      { title: "Key Initiatives — MJMS Foundation" },
      { name: "description", content: "Back to School Campaign, Sanitary Pads Drive, Christmas Toy Drive and our flagship Christmas Hampers Drive." },
      { property: "og:image", content: ASSETS.mm8 },
    ],
  }),
  component: Init,
});

const ITEMS = [
  { i: Backpack, t: "Back to School Campaign", w: "January – February each year", d: "Stationery, uniforms and essentials so every learner walks in ready." },
  { i: Heart, t: "Sanitary Pads Drive", w: "Throughout the year", d: "Donations to Imemeza Secondary, Ebhudlweni Primary, Sikhulile Secondary & Dumezizweni Primary." },
  { i: Gift, t: "Christmas Toy Drive", w: "December", d: "Joy for disadvantaged child-headed households." },
  { i: PartyPopper, t: "Christmas Hampers Drive", w: "Our flagship year-end event", d: "Family hampers delivered with love and dignity." },
];

const SCHOOLS = ["Imemeza Secondary School", "Ebhudlweni Primary School", "Sikhulile Secondary School", "Dumezizweni Primary School"];

function Init() {
  return (
    <>
      <section className="mx-auto max-w-7xl px-4 pt-12 sm:px-6">
        <p className="text-xs font-semibold uppercase tracking-widest text-ember">Our Key Initiatives</p>
        <h1 className="mt-2 text-4xl font-black sm:text-6xl">Initiatives with impact</h1>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6">
        <div className="grid gap-5 lg:grid-cols-2">
          {ITEMS.map(({ i: Icon, t, w, d }, idx) => (
            <div key={t} style={{ transitionDelay: `${idx * 70}ms` }} className="reveal rounded-2xl border border-border bg-card p-6">
              <div className="flex items-start gap-4">
                <div className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-brand text-brand-foreground shadow-brand">
                  <Icon className="h-6 w-6" />
                </div>
                <div className="min-w-0">
                  <h3 className="text-xl font-bold">{t}</h3>
                  <p className="text-xs uppercase tracking-wider text-ember">{w}</p>
                  <p className="mt-2 text-sm text-muted-foreground">{d}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-16 sm:px-6">
        <div className="reveal overflow-hidden rounded-2xl border border-border bg-card">
          <div className="grid lg:grid-cols-2">
            <img src={ASSETS.mmmain} alt="Sanitary Pads Drive recipients" className="h-full w-full object-cover" loading="lazy" />
            <div className="p-6 sm:p-10">
              <h3 className="text-2xl font-black">Sanitary Pads Drive — Partner Schools</h3>
              <ul className="mt-4 space-y-2">
                {SCHOOLS.map((s) => (
                  <li key={s} className="flex items-center gap-3 rounded-xl border border-border bg-background/40 px-4 py-3">
                    <span className="inline-flex h-2 w-2 rounded-full bg-gradient-brand" />
                    <span className="text-sm font-medium">{s}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

import { createFileRoute } from "@tanstack/react-router";
import { ASSETS, SITE } from "@/lib/site";
import { Target, Eye, Heart } from "lucide-react";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — My Journey My Scars Foundation" },
      { name: "description", content: "Our story, mission and vision. Founder Sandile P Sibande leads our work across South Africa." },
      { property: "og:title", content: "About MJMS Foundation" },
      { property: "og:image", content: ASSETS.mm13 },
    ],
  }),
  component: About,
});

function About() {
  return (
    <>
      <section className="relative overflow-hidden border-b border-border">
        <img src={ASSETS.mm13} alt="" className="absolute inset-0 h-full w-full object-cover opacity-30" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/40 to-background" />
        <div className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6 sm:py-32">
          <p className="text-xs font-semibold uppercase tracking-widest text-ember">About Us</p>
          <h1 className="mt-2 text-4xl font-black sm:text-6xl">Hope in motion.<br /><span className="text-gradient-brand">Power from pain.</span></h1>
          <p className="mt-4 max-w-2xl text-muted-foreground">MY JOURNEY MY SCARS Foundation is dedicated to fostering hope and creating positive change in marginalized communities across South Africa and the African Continent.</p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
        <div className="grid gap-5 sm:grid-cols-3">
          {[
            { i: Target, t: "Our Goal", d: "To strengthen the capacity of duty bearers through scaling up violence-prevention programmes." },
            { i: Eye, t: "Our Motto", d: SITE.motto },
            { i: Heart, t: "Our Slogan", d: `“${SITE.slogan}” — turning lived experience into community impact.` },
          ].map(({ i: Icon, t, d }) => (
            <div key={t} className="reveal rounded-2xl border border-border bg-card p-6">
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-brand text-brand-foreground shadow-brand">
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="mt-4 text-xl font-bold">{t}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{d}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-20 sm:px-6">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <div className="reveal overflow-hidden rounded-2xl border border-border">
            <img src={ASSETS.founder} alt={SITE.founder} className="aspect-[3/4] w-full object-cover" loading="lazy" />
          </div>
          <div className="reveal">
            <p className="text-xs font-semibold uppercase tracking-widest text-ember">Founder & Director</p>
            <h2 className="mt-2 text-3xl font-black sm:text-5xl">{SITE.founder}</h2>
            <p className="mt-4 text-muted-foreground">
              Sandile founded MJMS Foundation from a place of conviction — that scars do not define us, they refine us. Under his leadership the foundation has delivered sanitary pad drives, food parcels, youth workshops and Christmas hampers to children, families and schools that need them most.
            </p>
            <p className="mt-3 text-muted-foreground">
              Together with a passionate team of volunteers and partner organisations, we work to strengthen duty-bearers and scale violence-prevention across South Africa.
            </p>
            <a href={`tel:${SITE.phoneIntl}`} className="mt-6 inline-flex rounded-full bg-gradient-brand px-5 py-3 text-sm font-semibold text-brand-foreground shadow-brand">Reach Sandile</a>
          </div>
        </div>
      </section>
    </>
  );
}

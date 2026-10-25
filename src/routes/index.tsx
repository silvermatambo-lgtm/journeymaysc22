import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Phone, MessageCircle, ArrowRight, Heart, Users, BookOpen, Trees, Apple, Sparkles } from "lucide-react";
import { ASSETS, SITE } from "@/lib/site";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "My Journey My Scars Foundation — From Pain to Power" },
      { name: "description", content: "Empowering communities across South Africa through violence prevention, sanitary pads drives, food parcels, and youth development." },
      { property: "og:title", content: "My Journey My Scars Foundation" },
      { property: "og:description", content: "From Pain to Power — community upliftment across South Africa." },
      { property: "og:image", content: ASSETS.mmmain },
    ],
  }),
  component: Home,
});

const SLIDES = [
  { img: ASSETS.mmmain, eyebrow: "Sanitary Pads Drive", title: "Dignity for Every Girl", sub: "Donations to 4 local schools — keeping girls in class." },
  { img: ASSETS.mm5, eyebrow: "Youth Workshops", title: "Building the Future Today", sub: "Mentorship, tutoring & violence-prevention talks in schools." },
  { img: ASSETS.mm8, eyebrow: "Food Parcels", title: "Hope, Delivered", sub: "Feeding child-headed households and vulnerable families." },
];

const TYPES = ["From Pain to Power.", "From Scars to Strength.", "From Hope to Action."];

function Home() {
  const [slide, setSlide] = useState(0);
  const [typed, setTyped] = useState("");
  const [ti, setTi] = useState(0);
  const [del, setDel] = useState(false);

  useEffect(() => {
    const id = setInterval(() => setSlide((s) => (s + 1) % SLIDES.length), 5500);
    return () => clearInterval(id);
  }, []);

  useEffect(() => {
    const word = TYPES[ti];
    const t = setTimeout(() => {
      if (!del) {
        const next = word.slice(0, typed.length + 1);
        setTyped(next);
        if (next === word) setTimeout(() => setDel(true), 1500);
      } else {
        const next = word.slice(0, typed.length - 1);
        setTyped(next);
        if (next === "") { setDel(false); setTi((i) => (i + 1) % TYPES.length); }
      }
    }, del ? 40 : 80);
    return () => clearTimeout(t);
  }, [typed, del, ti]);

  return (
    <>
      {/* HERO */}
      <section className="relative -mt-20 h-[100svh] min-h-[640px] w-full overflow-hidden">
        {SLIDES.map((s, i) => (
          <div
            key={i}
            className={`absolute inset-0 transition-opacity duration-1000 ${i === slide ? "opacity-100" : "opacity-0"}`}
          >
            <img src={s.img} alt={s.title} className="h-full w-full object-cover" loading={i === 0 ? "eager" : "lazy"} />
            <div className="absolute inset-0" style={{ background: "var(--gradient-hero)" }} />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
          </div>
        ))}

        {/* floating orbs */}
        <div className="pointer-events-none absolute -left-20 top-1/4 h-72 w-72 rounded-full bg-brand/30 blur-3xl animate-float" />
        <div className="pointer-events-none absolute right-0 bottom-10 h-80 w-80 rounded-full bg-ember/20 blur-3xl animate-float" style={{ animationDelay: "-2s" }} />

        <div className="relative z-10 mx-auto flex h-full max-w-7xl flex-col justify-end px-4 pb-32 sm:px-6 lg:justify-center lg:pb-0">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card/60 px-3 py-1 text-xs font-medium uppercase tracking-widest text-ember backdrop-blur-md animate-fade-up">
              <Sparkles className="h-3 w-3" /> {SLIDES[slide].eyebrow}
            </span>
            <h1 className="mt-4 text-4xl font-black leading-[1.05] sm:text-6xl lg:text-7xl animate-fade-up">
              {SLIDES[slide].title}
              <span className="block text-gradient-brand">
                {typed}
                <span className="inline-block w-[2px] animate-pulse bg-ember align-middle">&nbsp;</span>
              </span>
            </h1>
            <p className="mt-4 max-w-xl text-base text-foreground/80 sm:text-lg animate-fade-up">
              {SLIDES[slide].sub}
            </p>
            <div className="mt-6 flex flex-wrap gap-3 animate-fade-up">
              <a href={`tel:${SITE.phoneIntl}`} className="inline-flex items-center gap-2 rounded-full bg-gradient-brand px-5 py-3 text-sm font-semibold text-brand-foreground shadow-brand transition hover:brightness-110">
                <Phone className="h-4 w-4" /> Call Now
              </a>
              <a href={`https://wa.me/${SITE.whatsapp}`} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full bg-secondary/80 px-5 py-3 text-sm font-semibold backdrop-blur-md transition hover:bg-secondary">
                <MessageCircle className="h-4 w-4" /> WhatsApp
              </a>
              <Link to="/contact" className="inline-flex items-center gap-2 rounded-full border border-border bg-card/40 px-5 py-3 text-sm font-semibold backdrop-blur-md transition hover:bg-card">
                Request a Quote <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>

          {/* slide dots */}
          <div className="absolute bottom-40 left-4 flex gap-2 sm:left-6 lg:bottom-10">
            {SLIDES.map((_, i) => (
              <button key={i} onClick={() => setSlide(i)} aria-label={`Slide ${i + 1}`}
                className={`h-1.5 rounded-full transition-all ${i === slide ? "w-10 bg-gradient-brand" : "w-4 bg-foreground/30"}`} />
            ))}
          </div>
        </div>
      </section>

      {/* STATS strip */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="reveal -mt-12 grid grid-cols-2 gap-3 rounded-2xl border border-border glass p-5 shadow-brand sm:grid-cols-4">
          {[
            { k: "4", l: "Schools Served" },
            { k: "500+", l: "Lives Impacted" },
            { k: "12+", l: "Active Programmes" },
            { k: "100%", l: "Community Driven" },
          ].map((s) => (
            <div key={s.l} className="text-center">
              <div className="text-3xl font-black text-gradient-brand">{s.k}</div>
              <div className="mt-1 text-xs uppercase tracking-wider text-muted-foreground">{s.l}</div>
            </div>
          ))}
        </div>
      </section>

      {/* WHAT WE DO */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6">
        <div className="reveal max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-widest text-ember">What We Do</p>
          <h2 className="mt-2 text-3xl font-black sm:text-4xl">Programmes that change lives</h2>
          <p className="mt-3 text-muted-foreground">Strengthening duty-bearers, scaling violence-prevention, and feeding hope into communities.</p>
        </div>
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {[
            { i: Heart, t: "Sanitary Pads Drive", d: "Distributing dignity packs to schoolgirls in need." },
            { i: Apple, t: "Food Parcels", d: "Supporting vulnerable families & child-headed homes." },
            { i: BookOpen, t: "Tutoring & Mentorship", d: "Lifting academic outcomes through guidance." },
            { i: Users, t: "Youth Workshops", d: "Conversations on violence, health, identity." },
            { i: Trees, t: "Community Service", d: "Tree planting in schools, libraries & parks." },
            { i: Sparkles, t: "Art & Culture", d: "Performance, debate and cultural expression." },
          ].map(({ i: Icon, t, d }, idx) => (
            <div key={t} style={{ transitionDelay: `${idx * 60}ms` }} className="reveal group relative overflow-hidden rounded-2xl border border-border bg-card p-6 transition hover:-translate-y-1 hover:shadow-brand">
              <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-gradient-brand opacity-0 blur-3xl transition group-hover:opacity-40" />
              <div className="relative">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-brand text-brand-foreground shadow-brand">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="mt-4 text-lg font-bold">{t}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{d}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* IMPACT VIDEO + FOUNDER */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
          <div className="reveal overflow-hidden rounded-2xl border border-border shadow-brand">
            <video src={ASSETS.video1} poster={ASSETS.mm5} controls playsInline preload="metadata" className="aspect-video w-full bg-black" />
          </div>
          <div className="reveal">
            <p className="text-xs font-semibold uppercase tracking-widest text-ember">Founder & Director</p>
            <h2 className="mt-2 text-3xl font-black sm:text-4xl">{SITE.founder}</h2>
            <p className="mt-4 text-muted-foreground">
              A visionary leader committed to scaling violence-prevention programmes and uplifting marginalised communities across South Africa and the African continent. Driven by lived experience and unwavering hope.
            </p>
            <div className="mt-6 grid grid-cols-3 gap-3">
              <img src={ASSETS.founder} alt="Founder" className="aspect-[3/4] w-full rounded-xl object-cover" loading="lazy" />
              <img src={ASSETS.mm13} alt="Team" className="aspect-[3/4] w-full rounded-xl object-cover" loading="lazy" />
              <img src={ASSETS.mm14} alt="Branded packs" className="aspect-[3/4] w-full rounded-xl object-cover" loading="lazy" />
            </div>
            <Link to="/about" className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-ember">
              Read our story <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto mt-20 max-w-7xl px-4 sm:px-6">
        <div className="reveal relative overflow-hidden rounded-3xl border border-border bg-gradient-brand p-8 text-brand-foreground sm:p-14">
          <div className="pointer-events-none absolute -right-20 -top-20 h-80 w-80 rounded-full bg-white/10 blur-3xl" />
          <h3 className="text-3xl font-black sm:text-5xl">Be part of the change.</h3>
          <p className="mt-3 max-w-xl opacity-90">Partner with us, volunteer or donate. Every contribution builds the future, today.</p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link to="/donate" className="rounded-full bg-background px-5 py-3 text-sm font-semibold text-foreground">Donate</Link>
            <Link to="/contact" className="rounded-full border border-white/30 px-5 py-3 text-sm font-semibold">Get in touch</Link>
          </div>
        </div>
      </section>
    </>
  );
}

import { createFileRoute } from "@tanstack/react-router";
import { ASSETS } from "@/lib/site";
import { Heart, Apple, BookOpen, Users, Trees, Sparkles, Activity, ShieldCheck, Megaphone, GraduationCap } from "lucide-react";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — MJMS Foundation" },
      { name: "description", content: "Community service, food parcels, sanitary pads drives, mentorship, health awareness, youth workshops and more." },
      { property: "og:image", content: ASSETS.mm5 },
    ],
  }),
  component: Services,
});

const SVC = [
  { i: Trees, t: "Community Service", d: "Tree planting in schools, libraries and local parks." },
  { i: Apple, t: "Food Parcel Donations", d: "Monthly parcels to vulnerable households." },
  { i: BookOpen, t: "Tutoring & Mentorship", d: "Academic support and life mentorship for youth." },
  { i: Heart, t: "Sanitary Pads to Schools", d: "Dignity packs distributed to four partner schools." },
  { i: Users, t: "Youth Workshops", d: "Identity, leadership and violence-prevention conversations." },
  { i: Megaphone, t: "Debates", d: "Civic dialogue and public-speaking platforms." },
  { i: Sparkles, t: "Art & Culture Performance", d: "Creative expression as healing and advocacy." },
  { i: ShieldCheck, t: "Volunteerism Promotion", d: "Mobilising community volunteers for impact." },
  { i: GraduationCap, t: "Education & Research", d: "Task team driving evidence-based programmes." },
  { i: Activity, t: "Health Awareness", d: "Educating on abstinence, safe practices and wellbeing." },
];

function Services() {
  return (
    <>
      <section className="mx-auto max-w-7xl px-4 pt-12 sm:px-6">
        <p className="text-xs font-semibold uppercase tracking-widest text-ember">What We Do</p>
        <h1 className="mt-2 text-4xl font-black sm:text-6xl">Services & Programmes</h1>
        <p className="mt-3 max-w-2xl text-muted-foreground">A holistic toolkit for community upliftment — focused on dignity, opportunity and prevention.</p>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {SVC.map(({ i: Icon, t, d }, idx) => (
            <div key={t} style={{ transitionDelay: `${idx * 40}ms` }} className="reveal group relative overflow-hidden rounded-2xl border border-border bg-card p-6 transition hover:-translate-y-1 hover:shadow-brand">
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
    </>
  );
}

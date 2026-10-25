import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { z } from "zod";
import { Phone, Mail, MapPin, MessageCircle, Send, CheckCircle2, Loader2 } from "lucide-react";
import { SITE, ASSETS } from "@/lib/site";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — MJMS Foundation" },
      { name: "description", content: "Get in touch with My Journey My Scars Foundation. Call, WhatsApp or send us a message." },
      { property: "og:image", content: ASSETS.mm13 },
    ],
  }),
  component: Contact,
});

const SERVICES = ["Sanitary Pads Drive", "Food Parcel Donation", "Tutoring & Mentorship", "Christmas Hampers", "Youth Workshop", "Volunteer", "Partnership", "Other"];

const schema = z.object({
  name: z.string().trim().min(2, "Please enter your name").max(80),
  phone: z.string().trim().min(7, "Enter a valid phone").max(20),
  email: z.string().trim().email("Enter a valid email").max(120),
  service: z.string().min(1),
  message: z.string().trim().min(5, "Message is too short").max(1000),
});

function Contact() {
  const [form, setForm] = useState({ name: "", phone: "", email: "", service: SERVICES[0], message: "" });
  const [err, setErr] = useState<Record<string, string>>({});
  const [loading, setLoading] = useState(false);
  const [done, setDone] = useState(false);

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErr({});
    const r = schema.safeParse(form);
    if (!r.success) {
      const x: Record<string, string> = {};
      r.error.issues.forEach((i) => { x[i.path[0] as string] = i.message; });
      setErr(x);
      return;
    }
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setDone(true);
      const t = encodeURIComponent(`Hello MJMS 👋\n\nName: ${form.name}\nPhone: ${form.phone}\nEmail: ${form.email}\nService: ${form.service}\n\n${form.message}`);
      window.open(`https://wa.me/${SITE.whatsapp}?text=${t}`, "_blank");
    }, 900);
  };

  const upd = (k: keyof typeof form) => (e: any) => setForm({ ...form, [k]: e.target.value });

  return (
    <>
      <section className="mx-auto max-w-7xl px-4 pt-12 sm:px-6">
        <p className="text-xs font-semibold uppercase tracking-widest text-ember">Contact</p>
        <h1 className="mt-2 text-4xl font-black sm:text-6xl">Let's talk</h1>
        <p className="mt-3 max-w-2xl text-muted-foreground">Reach out to volunteer, partner with us, or request support for a community programme.</p>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6">
        <div className="grid gap-8 lg:grid-cols-5">
          <div className="space-y-3 lg:col-span-2">
            {[
              { i: Phone, t: "Call us", v: SITE.phone, href: `tel:${SITE.phoneIntl}` },
              { i: MessageCircle, t: "WhatsApp", v: SITE.phone, href: `https://wa.me/${SITE.whatsapp}` },
              { i: Mail, t: "Email", v: SITE.email, href: `mailto:${SITE.email}` },
              { i: MapPin, t: "Address", v: SITE.address },
            ].map(({ i: Icon, t, v, href }) => (
              <a key={t} href={href ?? "#"} target={href?.startsWith("http") ? "_blank" : undefined} rel="noreferrer"
                className="reveal flex items-center gap-4 rounded-2xl border border-border bg-card p-4 transition hover:-translate-y-0.5 hover:shadow-brand">
                <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-brand text-brand-foreground">
                  <Icon className="h-5 w-5" />
                </div>
                <div>
                  <div className="text-xs uppercase tracking-wider text-muted-foreground">{t}</div>
                  <div className="font-semibold">{v}</div>
                </div>
              </a>
            ))}
          </div>

          <form onSubmit={onSubmit} className="reveal lg:col-span-3 space-y-4 rounded-2xl border border-border bg-card p-6 sm:p-8">
            {done ? (
              <div className="flex flex-col items-center py-10 text-center animate-fade-up">
                <CheckCircle2 className="h-14 w-14 text-ember" />
                <h3 className="mt-4 text-2xl font-black">Message sent!</h3>
                <p className="mt-1 text-sm text-muted-foreground">Opening WhatsApp to complete the conversation…</p>
                <button onClick={() => { setDone(false); setForm({ name: "", phone: "", email: "", service: SERVICES[0], message: "" }); }} className="mt-5 rounded-full bg-gradient-brand px-5 py-2 text-sm font-semibold text-brand-foreground">Send another</button>
              </div>
            ) : (
              <>
                <div className="grid gap-4 sm:grid-cols-2">
                  <Field label="Full Name" err={err.name}>
                    <input value={form.name} onChange={upd("name")} className="field" placeholder="John Dlamini" />
                  </Field>
                  <Field label="Phone Number" err={err.phone}>
                    <input value={form.phone} onChange={upd("phone")} className="field" placeholder="076 000 0000" />
                  </Field>
                </div>
                <Field label="Email" err={err.email}>
                  <input value={form.email} onChange={upd("email")} className="field" placeholder="you@email.com" />
                </Field>
                <Field label="Service" err={err.service}>
                  <select value={form.service} onChange={upd("service")} className="field">
                    {SERVICES.map((s) => <option key={s}>{s}</option>)}
                  </select>
                </Field>
                <Field label="Message" err={err.message}>
                  <textarea value={form.message} onChange={upd("message")} rows={5} className="field" placeholder="How can we help?" />
                </Field>
                <button disabled={loading} className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-brand py-3 font-semibold text-brand-foreground shadow-brand transition hover:brightness-110 disabled:opacity-70">
                  {loading ? <><Loader2 className="h-4 w-4 animate-spin" /> Sending…</> : <><Send className="h-4 w-4" /> Send Message</>}
                </button>
              </>
            )}
          </form>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-16 sm:px-6">
        <div className="reveal overflow-hidden rounded-2xl border border-border">
          <iframe
            src={SITE.mapEmbed}
            title="Map"
            loading="lazy"
            className="h-[420px] w-full"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </section>

      <style>{`.field{width:100%;border-radius:0.75rem;border:1px solid var(--color-border);background:color-mix(in oklab, var(--card) 50%, transparent);padding:0.75rem 1rem;font-size:0.95rem;outline:none;transition:box-shadow .2s}.field:focus{box-shadow:0 0 0 2px var(--brand)}`}</style>
    </>
  );
}

function Field({ label, err, children }: { label: string; err?: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-muted-foreground">{label}</span>
      {children}
      {err && <span className="mt-1 block text-xs text-destructive">{err}</span>}
    </label>
  );
}

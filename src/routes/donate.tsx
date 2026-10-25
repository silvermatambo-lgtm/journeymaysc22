import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { Heart, MessageCircle, Phone, Gift, Users, Shirt, Check, Send, Sparkles } from "lucide-react";
import { z } from "zod";
import { ASSETS, SITE } from "@/lib/site";

export const Route = createFileRoute("/donate")({
  head: () => ({
    meta: [
      { title: "Donate — MJMS Foundation" },
      { name: "description", content: "Support our drives — sanitary pads, food parcels, school supplies and Christmas hampers." },
      { property: "og:image", content: ASSETS.mm14 },
    ],
  }),
  component: Donate,
});

const WAYS = [
  { i: Heart, t: "Sanitary Pads", d: "Sponsor a pack and keep a girl in school." },
  { i: Gift, t: "Food Parcels", d: "Fund a parcel for a vulnerable family." },
  { i: Shirt, t: "Back to School", d: "Uniforms, stationery and books for learners." },
  { i: Users, t: "Volunteer Time", d: "Give your time, skills and presence." },
];

const PRESET_AMOUNTS = [100, 250, 500, 1000, 2500, 5000];
const CAUSES = [
  "Sanitary Pads Drive",
  "Food Parcels",
  "Back to School Supplies",
  "Christmas Hampers",
  "Youth Workshops & Mentorship",
  "Where Most Needed",
];
const FREQUENCIES = ["One-time", "Monthly", "Quarterly"] as const;
const DONATION_TYPES = ["Cash / EFT", "In-kind (goods)", "Volunteer time", "Corporate partnership"] as const;

const schema = z.object({
  fullName: z.string().trim().min(2, "Please enter your full name").max(80),
  email: z.string().trim().email("Invalid email").max(120),
  phone: z.string().trim().min(7, "Enter a valid phone number").max(20),
  amount: z.number().min(10, "Minimum R10").max(1_000_000),
  cause: z.string(),
  frequency: z.enum(FREQUENCIES),
  type: z.enum(DONATION_TYPES),
  anonymous: z.boolean(),
  newsletter: z.boolean(),
  message: z.string().max(500).optional(),
});

function Donate() {
  const [preset, setPreset] = useState<number | "custom">(500);
  const [custom, setCustom] = useState("");
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [cause, setCause] = useState(CAUSES[0]);
  const [frequency, setFrequency] = useState<typeof FREQUENCIES[number]>("One-time");
  const [type, setType] = useState<typeof DONATION_TYPES[number]>("Cash / EFT");
  const [anonymous, setAnonymous] = useState(false);
  const [newsletter, setNewsletter] = useState(true);
  const [message, setMessage] = useState("");
  const [error, setError] = useState<string | null>(null);

  const amount = useMemo(() => (preset === "custom" ? Number(custom) || 0 : preset), [preset, custom]);
  const impact = useMemo(() => {
    if (amount >= 5000) return "Funds an entire school outreach day 🎒";
    if (amount >= 2500) return "Sponsors a full food-parcel batch for 10 families 🥫";
    if (amount >= 1000) return "Provides sanitary pads for 20 girls for a month 🌸";
    if (amount >= 500) return "Covers school supplies for 5 learners ✏️";
    if (amount >= 250) return "Feeds a family for a week 🍞";
    if (amount >= 100) return "Provides dignity packs for 2 girls 💗";
    return "Every rand pushes us closer to the goal ✨";
  }, [amount]);

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    const parsed = schema.safeParse({
      fullName, email, phone, amount, cause, frequency, type, anonymous, newsletter, message,
    });
    if (!parsed.success) {
      setError(parsed.error.issues[0]?.message ?? "Please complete the form");
      return;
    }
    const lines = [
      "🤝 *NEW DONATION PLEDGE — MJMS Foundation*",
      "",
      `*Name:* ${anonymous ? "Anonymous donor" : fullName}`,
      `*Email:* ${email}`,
      `*Phone:* ${phone}`,
      "",
      `*Amount:* R${amount.toLocaleString("en-ZA")}`,
      `*Frequency:* ${frequency}`,
      `*Donation type:* ${type}`,
      `*Supports:* ${cause}`,
      `*Newsletter opt-in:* ${newsletter ? "Yes" : "No"}`,
    ];
    if (message.trim()) lines.push("", `*Message:*`, message.trim());
    lines.push("", "Please share your banking / next-step details. Thank you 💛");
    window.open(`https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(lines.join("\n"))}`, "_blank");
  };

  return (
    <>
      <section className="relative overflow-hidden border-b border-border">
        <img src={ASSETS.mm14} alt="" className="absolute inset-0 h-full w-full object-cover opacity-30" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/40 to-background" />
        <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-28">
          <p className="text-xs font-semibold uppercase tracking-widest text-ember">Donate</p>
          <h1 className="mt-2 text-4xl font-black sm:text-6xl">Every contribution<br/><span className="text-gradient-brand">builds tomorrow.</span></h1>
          <p className="mt-4 max-w-2xl text-muted-foreground">Pledge below — your details go straight to our founder on WhatsApp who will share banking or collection options.</p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {WAYS.map(({ i: Icon, t, d }, idx) => (
            <div key={t} style={{ transitionDelay: `${idx * 60}ms` }} className="reveal rounded-2xl border border-border bg-card p-6">
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-brand text-brand-foreground shadow-brand">
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="mt-4 text-lg font-bold">{t}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{d}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-16 sm:px-6">
        <div className="grid gap-8 lg:grid-cols-[1.4fr_1fr]">
          <form onSubmit={submit} className="rounded-3xl border border-border bg-card/60 p-6 backdrop-blur sm:p-10">
            <div className="flex items-center gap-2 text-ember">
              <Sparkles className="h-5 w-5" />
              <span className="text-xs font-bold uppercase tracking-widest">Pledge form</span>
            </div>
            <h2 className="mt-2 text-2xl font-black sm:text-4xl">Make your donation</h2>
            <p className="mt-2 text-sm text-muted-foreground">Fill in the form. On submit, a pre-filled message opens in WhatsApp to {SITE.founder}.</p>

            <div className="mt-8">
              <label className="text-sm font-semibold">Choose an amount (ZAR)</label>
              <div className="mt-3 grid grid-cols-3 gap-2 sm:grid-cols-6">
                {PRESET_AMOUNTS.map((a) => (
                  <button type="button" key={a} onClick={() => { setPreset(a); setCustom(""); }}
                    className={`rounded-xl border px-3 py-3 text-sm font-bold transition ${preset === a ? "border-transparent bg-gradient-brand text-brand-foreground shadow-brand" : "border-border bg-background/50 hover:border-ember/50"}`}>
                    R{a.toLocaleString("en-ZA")}
                  </button>
                ))}
              </div>
              <div className="mt-3 flex items-center gap-2">
                <button type="button" onClick={() => setPreset("custom")}
                  className={`rounded-xl border px-3 py-3 text-sm font-bold ${preset === "custom" ? "border-transparent bg-gradient-brand text-brand-foreground shadow-brand" : "border-border bg-background/50"}`}>
                  Custom
                </button>
                <div className="relative flex-1">
                  <span className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">R</span>
                  <input type="number" min={10} value={custom}
                    onChange={(e) => { setCustom(e.target.value); setPreset("custom"); }}
                    placeholder="Enter custom amount"
                    className="w-full rounded-xl border border-border bg-background/50 px-7 py-3 text-sm outline-none focus:ring-2 focus:ring-brand" />
                </div>
              </div>
              <p className="mt-3 text-xs text-muted-foreground">💡 {impact}</p>
            </div>

            <div className="mt-6">
              <label className="text-sm font-semibold">Frequency</label>
              <div className="mt-2 grid grid-cols-3 gap-2">
                {FREQUENCIES.map((f) => (
                  <button type="button" key={f} onClick={() => setFrequency(f)}
                    className={`rounded-xl border px-3 py-2 text-sm font-semibold ${frequency === f ? "border-ember bg-ember/10 text-ember" : "border-border bg-background/50"}`}>
                    {f}
                  </button>
                ))}
              </div>
            </div>

            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <div>
                <label className="text-sm font-semibold">Donation type</label>
                <select value={type} onChange={(e) => setType(e.target.value as typeof DONATION_TYPES[number])}
                  className="mt-2 w-full rounded-xl border border-border bg-background/50 px-3 py-3 text-sm outline-none focus:ring-2 focus:ring-brand">
                  {DONATION_TYPES.map((t) => <option key={t}>{t}</option>)}
                </select>
              </div>
              <div>
                <label className="text-sm font-semibold">Supports</label>
                <select value={cause} onChange={(e) => setCause(e.target.value)}
                  className="mt-2 w-full rounded-xl border border-border bg-background/50 px-3 py-3 text-sm outline-none focus:ring-2 focus:ring-brand">
                  {CAUSES.map((c) => <option key={c}>{c}</option>)}
                </select>
              </div>
            </div>

            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <input value={fullName} onChange={(e) => setFullName(e.target.value)} placeholder="Full name" maxLength={80}
                className="rounded-xl border border-border bg-background/50 px-3 py-3 text-sm outline-none focus:ring-2 focus:ring-brand" />
              <input value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="Phone (WhatsApp preferred)" maxLength={20}
                className="rounded-xl border border-border bg-background/50 px-3 py-3 text-sm outline-none focus:ring-2 focus:ring-brand" />
              <input value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email address" type="email" maxLength={120}
                className="rounded-xl border border-border bg-background/50 px-3 py-3 text-sm outline-none focus:ring-2 focus:ring-brand sm:col-span-2" />
              <textarea value={message} onChange={(e) => setMessage(e.target.value)} placeholder="Message or dedication (optional)" rows={3} maxLength={500}
                className="rounded-xl border border-border bg-background/50 px-3 py-3 text-sm outline-none focus:ring-2 focus:ring-brand sm:col-span-2" />
            </div>

            <div className="mt-5 space-y-2">
              <label className="flex items-start gap-2 text-sm">
                <input type="checkbox" checked={anonymous} onChange={(e) => setAnonymous(e.target.checked)} className="mt-1 h-4 w-4 accent-[var(--ember)]" />
                <span>Keep my donation anonymous publicly</span>
              </label>
              <label className="flex items-start gap-2 text-sm">
                <input type="checkbox" checked={newsletter} onChange={(e) => setNewsletter(e.target.checked)} className="mt-1 h-4 w-4 accent-[var(--ember)]" />
                <span>Send me updates on impact and upcoming drives</span>
              </label>
            </div>

            {error && <p className="mt-4 rounded-lg bg-destructive/10 px-3 py-2 text-sm text-destructive">{error}</p>}

            <button type="submit" className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-brand py-4 text-base font-bold text-brand-foreground shadow-brand transition hover:scale-[1.01]">
              <Send className="h-5 w-5" /> Pledge R{(amount || 0).toLocaleString("en-ZA")} via WhatsApp
            </button>
            <p className="mt-3 text-center text-xs text-muted-foreground">No payment is taken here — banking details are shared on WhatsApp.</p>
          </form>

          <aside className="space-y-6">
            <div className="reveal relative overflow-hidden rounded-3xl border border-border bg-gradient-brand p-8 text-brand-foreground">
              <h3 className="text-2xl font-black">Prefer to talk first?</h3>
              <p className="mt-2 text-sm opacity-90">Call or WhatsApp {SITE.founder} directly to arrange banking, EFT, or in-kind drop-offs.</p>
              <div className="mt-5 flex flex-col gap-2">
                <a href={`tel:${SITE.phoneIntl}`} className="inline-flex items-center justify-center gap-2 rounded-full bg-background px-5 py-3 text-sm font-semibold text-foreground"><Phone className="h-4 w-4" /> Call {SITE.phone}</a>
                <a href={`https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent("Hi, I'd like to donate to MJMS Foundation.")}`} target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-2 rounded-full border border-white/30 px-5 py-3 text-sm font-semibold"><MessageCircle className="h-4 w-4" /> WhatsApp now</a>
              </div>
            </div>

            <div className="rounded-3xl border border-border bg-card p-6">
              <h3 className="text-lg font-bold">Why donate to MJMS?</h3>
              <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
                {[
                  "100% community-driven outreach across SA",
                  "Direct impact — pads, food, school supplies",
                  "Transparent communication on every drive",
                  "In-kind donations are welcomed and celebrated",
                ].map((x) => (
                  <li key={x} className="flex gap-2"><Check className="h-5 w-5 shrink-0 text-ember" />{x}</li>
                ))}
              </ul>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}

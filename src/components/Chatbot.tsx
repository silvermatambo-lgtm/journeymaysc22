import { useEffect, useState } from "react";
import { MessageCircle, X, Send } from "lucide-react";
import { SITE } from "@/lib/site";

const SERVICES = [
  "Sanitary Pads Drive",
  "Food Parcel Donation",
  "Tutoring & Mentorship",
  "Christmas Hampers",
  "Youth Workshop",
  "General Enquiry",
];

export function Chatbot() {
  const [open, setOpen] = useState(false);
  const [popped, setPopped] = useState(false);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [service, setService] = useState(SERVICES[0]);
  const [msg, setMsg] = useState("");

  useEffect(() => {
    const t = setTimeout(() => {
      try {
        if (sessionStorage.getItem("mjms-chat-popped") !== "1") {
          setPopped(true);
          sessionStorage.setItem("mjms-chat-popped", "1");
        }
      } catch { setPopped(true); }
    }, 6000);
    return () => clearTimeout(t);
  }, []);

  const send = () => {
    const text = encodeURIComponent(
      `Hello MJMS Foundation 👋\n\nName: ${name}\nPhone: ${phone}\nService: ${service}\n\n${msg}`
    );
    window.open(`https://wa.me/${SITE.whatsapp}?text=${text}`, "_blank");
  };

  return (
    <div className="fixed bottom-24 right-4 z-50 lg:bottom-6">
      {popped && !open && (
        <div className="mb-3 max-w-xs animate-fade-up rounded-2xl border border-border glass p-4 shadow-brand">
          <button onClick={() => setPopped(false)} className="absolute right-2 top-2 text-muted-foreground hover:text-foreground">
            <X className="h-4 w-4" />
          </button>
          <p className="text-sm font-semibold">👋 Sawubona! Need help?</p>
          <p className="mt-1 text-xs text-muted-foreground">Chat with us — we usually reply within minutes.</p>
          <button onClick={() => { setOpen(true); setPopped(false); }} className="mt-3 w-full rounded-lg bg-gradient-brand px-3 py-2 text-sm font-semibold text-brand-foreground">
            Start Chat
          </button>
        </div>
      )}

      {open && (
        <div className="mb-3 w-[min(92vw,22rem)] animate-fade-up overflow-hidden rounded-2xl border border-border bg-card shadow-brand">
          <div className="flex items-center justify-between bg-gradient-brand p-4 text-brand-foreground">
            <div>
              <div className="text-sm font-bold">MJMS Foundation</div>
              <div className="text-[11px] opacity-90">Typically replies on WhatsApp</div>
            </div>
            <button onClick={() => setOpen(false)} aria-label="Close" className="rounded-full bg-black/20 p-1.5 transition hover:rotate-90">
              <X className="h-4 w-4" />
            </button>
          </div>
          <div className="space-y-3 p-4">
            <input value={name} onChange={(e) => setName(e.target.value)} placeholder="Your name" className="w-full rounded-lg border border-border bg-background/50 px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-brand" />
            <input value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="Phone number" className="w-full rounded-lg border border-border bg-background/50 px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-brand" />
            <select value={service} onChange={(e) => setService(e.target.value)} className="w-full rounded-lg border border-border bg-background/50 px-3 py-2 text-sm">
              {SERVICES.map((s) => <option key={s}>{s}</option>)}
            </select>
            <textarea value={msg} onChange={(e) => setMsg(e.target.value)} placeholder="How can we help?" rows={3} className="w-full rounded-lg border border-border bg-background/50 px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-brand" />
            <div className="flex flex-wrap gap-1.5">
              {["Donate", "Volunteer", "Partner with us"].map((q) => (
                <button key={q} onClick={() => setMsg(q)} className="rounded-full bg-secondary px-3 py-1 text-xs hover:bg-accent">{q}</button>
              ))}
            </div>
            <button onClick={send} className="flex w-full items-center justify-center gap-2 rounded-lg bg-gradient-brand py-2.5 font-semibold text-brand-foreground">
              <Send className="h-4 w-4" /> Send via WhatsApp
            </button>
          </div>
        </div>
      )}

      <button
        onClick={() => { setOpen((o) => !o); setPopped(false); }}
        aria-label="Open chat"
        className="relative inline-flex h-14 w-14 items-center justify-center rounded-full bg-gradient-brand text-brand-foreground shadow-brand transition hover:scale-105"
      >
        <span className="absolute inset-0 rounded-full animate-pulse-ring" />
        {open ? <X className="h-6 w-6" /> : <MessageCircle className="h-6 w-6" />}
      </button>
    </div>
  );
}

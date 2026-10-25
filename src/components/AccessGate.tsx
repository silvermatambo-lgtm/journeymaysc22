import { useEffect, useState } from "react";
import { ASSETS, SITE } from "@/lib/site";

const KEY = "mjms-access-v1";
const CODE = "1234mic";

export function AccessGate({ children }: { children: React.ReactNode }) {
  const [ok, setOk] = useState<boolean | null>(null);
  const [val, setVal] = useState("");
  const [err, setErr] = useState("");

  useEffect(() => {
    try {
      setOk(localStorage.getItem(KEY) === "1");
    } catch {
      setOk(true);
    }
  }, []);

  if (ok === null) return null;
  if (ok) return <>{children}</>;

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (val.trim().toLowerCase() === CODE) {
      try { localStorage.setItem(KEY, "1"); } catch {}
      setOk(true);
    } else {
      setErr("Invalid access code. Please try again.");
    }
  };

  return (
    <div className="fixed inset-0 z-[9999] flex min-h-screen items-center justify-center bg-background px-4">
      <div
        className="pointer-events-none absolute inset-0 opacity-40"
        style={{
          background:
            "radial-gradient(60% 50% at 50% 0%, oklch(0.62 0.24 27 / 0.35), transparent 70%)",
        }}
      />
      <div className="relative w-full max-w-md animate-fade-up rounded-2xl border border-border glass p-8 shadow-brand">
        <div className="flex flex-col items-center text-center">
          <img src={ASSETS.logo} alt={SITE.name} className="h-24 w-24 object-contain animate-float" />
          <h1 className="mt-4 text-2xl font-bold tracking-tight">{SITE.name}</h1>
          <p className="mt-1 text-sm text-muted-foreground">{SITE.slogan}</p>
        </div>
        <form onSubmit={submit} className="mt-6 space-y-3">
          <label className="block text-sm font-medium">Enter access code</label>
          <input
            autoFocus
            value={val}
            onChange={(e) => { setVal(e.target.value); setErr(""); }}
            placeholder="Access code"
            className="w-full rounded-lg border border-border bg-background/60 px-4 py-3 text-base outline-none ring-brand transition focus:ring-2"
          />
          {err && <p className="text-sm text-destructive">{err}</p>}
          <button
            type="submit"
            className="w-full rounded-lg bg-gradient-brand px-4 py-3 font-semibold text-brand-foreground shadow-brand transition hover:brightness-110 active:scale-[.98]"
          >
            Unlock Website
          </button>
        </form>
        <div className="mt-6 rounded-lg border border-border bg-secondary/40 p-3 text-xs leading-relaxed text-muted-foreground">
          <strong className="text-foreground">Demo notice:</strong> This website
          demo is only valid for <span className="text-ember">48 hours</span>.
          The website becomes permanent only after invoice payment.
        </div>
        <p className="mt-4 text-center text-[11px] text-muted-foreground">
          Website designed by{" "}
          <a href="https://www.webdevpro.co.za" target="_blank" rel="noreferrer" className="text-ember underline">
            www.webdevpro.co.za
          </a>{" "}
          · +27 81 215 9792
        </p>
      </div>
    </div>
  );
}

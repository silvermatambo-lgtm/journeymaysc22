import { useEffect, useState } from "react";
import { X, Download } from "lucide-react";
import { ASSETS, SITE } from "@/lib/site";

export function InstallPrompt() {
  const [evt, setEvt] = useState<any>(null);
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handler = (e: Event) => {
      e.preventDefault();
      setEvt(e);
      try {
        if (sessionStorage.getItem("mjms-install-dismissed") === "1") return;
      } catch {}
      setTimeout(() => setShow(true), 8000);
    };
    window.addEventListener("beforeinstallprompt", handler as any);
    return () => window.removeEventListener("beforeinstallprompt", handler as any);
  }, []);

  if (!show) return null;
  const dismiss = () => {
    setShow(false);
    try { sessionStorage.setItem("mjms-install-dismissed", "1"); } catch {}
  };
  const install = async () => {
    if (evt) { await evt.prompt(); }
    dismiss();
  };

  return (
    <div className="fixed inset-x-4 bottom-32 z-[55] lg:left-auto lg:right-6 lg:bottom-24 lg:w-96">
      <div className="animate-fade-up rounded-2xl border border-border glass p-4 shadow-brand">
        <div className="flex items-start gap-3">
          <img src={ASSETS.logo} alt={SITE.name} className="h-12 w-12 shrink-0 object-contain" />
          <div className="min-w-0 flex-1">
            <div className="text-sm font-bold">Install {SITE.name}</div>
            <p className="mt-0.5 text-xs text-muted-foreground">Add our app to your home screen for fast, offline-ready access.</p>
            <div className="mt-3 flex gap-2">
              <button onClick={install} className="inline-flex items-center gap-1.5 rounded-lg bg-gradient-brand px-3 py-1.5 text-xs font-semibold text-brand-foreground">
                <Download className="h-3.5 w-3.5" /> Install App
              </button>
              <button onClick={dismiss} className="rounded-lg bg-secondary px-3 py-1.5 text-xs">Maybe later</button>
            </div>
          </div>
          <button onClick={dismiss} aria-label="Dismiss" className="text-muted-foreground hover:text-foreground">
            <X className="h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  );
}

import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { ASSETS } from "@/lib/site";
import { X } from "lucide-react";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Gallery — MJMS Foundation" },
      { name: "description", content: "Moments from our drives, workshops and community events." },
      { property: "og:image", content: ASSETS.mmmain },
    ],
  }),
  component: Gallery,
});

const PHOTOS = [
  { src: ASSETS.mmmain, c: "Sanitary Pads Drive recipients" },
  { src: ASSETS.mm5, c: "School assembly visit" },
  { src: ASSETS.mm1, c: "Food parcels handover" },
  { src: ASSETS.mm8, c: "Branded community packs" },
  { src: ASSETS.mm13, c: "Team & partners" },
  { src: ASSETS.mm14, c: "Sanitary pads packaging" },
  { src: ASSETS.founder, c: "Founder — Sandile P Sibande" },
];

function Gallery() {
  const [open, setOpen] = useState<string | null>(null);
  return (
    <>
      <section className="mx-auto max-w-7xl px-4 pt-12 sm:px-6">
        <p className="text-xs font-semibold uppercase tracking-widest text-ember">Gallery</p>
        <h1 className="mt-2 text-4xl font-black sm:text-6xl">Moments of impact</h1>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6">
        <div className="columns-2 gap-3 sm:columns-3 lg:columns-4 [&>*]:mb-3">
          {PHOTOS.map((p) => (
            <button key={p.src} onClick={() => setOpen(p.src)} className="reveal group block w-full overflow-hidden rounded-xl border border-border">
              <img src={p.src} alt={p.c} loading="lazy" className="w-full transition duration-500 group-hover:scale-105" />
            </button>
          ))}
        </div>

        <div className="mt-10 grid gap-5 sm:grid-cols-2">
          <div className="reveal overflow-hidden rounded-2xl border border-border">
            <video src={ASSETS.video1} poster={ASSETS.mm5} controls preload="metadata" className="aspect-video w-full bg-black" />
          </div>
          <div className="reveal overflow-hidden rounded-2xl border border-border">
            <video src={ASSETS.video2} poster={ASSETS.mm1} controls preload="metadata" className="aspect-video w-full bg-black" />
          </div>
        </div>
      </section>

      {open && (
        <div onClick={() => setOpen(null)} className="fixed inset-0 z-[80] flex items-center justify-center bg-black/85 p-4 backdrop-blur-sm">
          <button aria-label="close" className="absolute right-4 top-4 rounded-full bg-white/10 p-2 text-white">
            <X className="h-5 w-5" />
          </button>
          <img src={open} alt="" className="max-h-[88vh] max-w-full rounded-xl object-contain" />
        </div>
      )}
    </>
  );
}

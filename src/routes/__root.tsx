import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";

import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { MobileBottomNav } from "@/components/MobileBottomNav";
import { Chatbot } from "@/components/Chatbot";
import { InstallPrompt } from "@/components/InstallPrompt";
import { ScrollToTop } from "@/components/ScrollToTop";
import { Reveal } from "@/components/Reveal";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-gradient-brand">404</h1>
        <h2 className="mt-4 text-xl font-semibold">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">The page you're looking for doesn't exist.</p>
        <a href="/" className="mt-6 inline-flex rounded-lg bg-gradient-brand px-4 py-2 font-medium text-brand-foreground">Go home</a>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  const router = useRouter();
  useEffect(() => { console.error("Website error boundary:", error); }, [error]);
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold">Something went wrong</h1>
        <p className="mt-2 text-sm text-muted-foreground">Try refreshing or head back home.</p>
        <div className="mt-6 flex justify-center gap-2">
          <button onClick={() => { router.invalidate(); reset(); }} className="rounded-md bg-gradient-brand px-4 py-2 text-sm font-medium text-brand-foreground">Try again</button>
          <a href="/" className="rounded-md border border-input bg-background px-4 py-2 text-sm font-medium">Go home</a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1, viewport-fit=cover" },
      { name: "theme-color", content: "#c8261e" },
      { title: "My Journey My Scars Foundation — From Pain to Power" },
      { name: "description", content: "South African community foundation focused on violence prevention, sanitary pads drives, food parcels, youth development and education." },
      { name: "author", content: "My Journey My Scars Foundation" },
      { property: "og:title", content: "My Journey My Scars Foundation — From Pain to Power" },
      { property: "og:description", content: "South African community foundation focused on violence prevention, sanitary pads drives, food parcels, youth development and education." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "My Journey My Scars Foundation — From Pain to Power" },
      { name: "twitter:description", content: "South African community foundation focused on violence prevention, sanitary pads drives, food parcels, youth development and education." },
      { property: "og:image", content: "/media/logo.png" },
      { name: "twitter:image", content: "/media/logo.png" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "manifest", href: "/manifest.webmanifest" },
      { rel: "icon", href: "/media/favicon.png", type: "image/png" },
      { rel: "apple-touch-icon", href: "/media/icon-192.png" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Outfit:wght@500;600;700;800;900&display=swap" },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className="dark">
      <head><HeadContent /></head>
      <body>{children}<Scripts /></body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();
  return (
    <QueryClientProvider client={queryClient}>
      <Header />
      <main className="pt-20">
        <Outlet />
      </main>
      <Footer />
      <MobileBottomNav />
      <Chatbot />
      <InstallPrompt />
      <ScrollToTop />
      <Reveal />
    </QueryClientProvider>
  );
}

"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Clock, ShoppingCart } from "lucide-react";

const HOURS = 72;
const STORAGE_KEY = "nikola_first_visit";
const PURCHASED_KEY = "nikola_purchased";

function getExpiryTime(): number {
  if (typeof window === "undefined") return Date.now() + HOURS * 60 * 60 * 1000;
  const stored = localStorage.getItem(STORAGE_KEY);
  if (stored) return parseInt(stored, 10);
  const expiry = Date.now() + HOURS * 60 * 60 * 1000;
  localStorage.setItem(STORAGE_KEY, expiry.toString());
  return expiry;
}

function formatTime(ms: number): string {
  const hours = Math.floor(ms / (1000 * 60 * 60));
  const minutes = Math.floor((ms % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((ms % (1000 * 60)) / 1000);
  return `${hours}h ${minutes}m ${seconds}s`;
}

export function TimerGate({ children }: { children: React.ReactNode }) {
  const [mounted, setMounted] = useState(false);
  const [expired, setExpired] = useState(false);
  const [purchased, setPurchased] = useState(false);
  const [timeLeft, setTimeLeft] = useState(HOURS * 60 * 60 * 1000);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setMounted(true);
    if (typeof window === "undefined") return;

    // Reset: ?reset=1 clears purchase state (for testing)
    const urlParams = new URLSearchParams(window.location.search);
    if (urlParams.get("reset") === "1") {
      localStorage.removeItem(PURCHASED_KEY);
      localStorage.removeItem(STORAGE_KEY);
      window.history.replaceState({}, "", window.location.pathname);
      window.location.reload();
      return;
    }

    // Check if user already purchased (from Stripe success redirect)
    if (urlParams.get("purchased") === "true") {
      localStorage.setItem(PURCHASED_KEY, "true");
      window.history.replaceState({}, "", window.location.pathname);
      setPurchased(true); // Remove overlay & timer immediately
      return;
    }

    // Demo mode: ?demo=expired shows the expired overlay
    if (urlParams.get("demo") === "expired") {
      setExpired(true);
      setTimeLeft(0);
      return;
    }

    const purchasedStored = localStorage.getItem(PURCHASED_KEY);
    if (purchasedStored === "true") {
      setPurchased(true);
      return;
    }

    const expiry = getExpiryTime();
    const tick = () => {
      const left = expiry - Date.now();
      if (left <= 0) {
        setExpired(true);
        setTimeLeft(0);
        return;
      }
      setTimeLeft(left);
    };

    tick();
    const interval = setInterval(tick, 1000);
    return () => clearInterval(interval);
  }, []);

  const handlePurchase = async () => {
    setLoading(true);
    try {
      const res = await fetch("/api/create-checkout", { method: "POST" });
      const data = await res.json();
      if (data.url) window.location.href = data.url;
      else throw new Error(data.error || "Failed to create checkout");
    } catch (err) {
      console.error(err);
      alert("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  if (!mounted) {
    return <div className="min-h-screen bg-background" />;
  }

  if (purchased) {
    return <>{children}</>;
  }

  if (expired) {
    return (
      <>
        <div className="pb-20 pointer-events-none select-none">
          {children}
        </div>
        <div
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-black/50 backdrop-blur-sm"
          style={{ pointerEvents: "auto" }}
        >
          <div className="max-w-lg text-center space-y-6 mx-4 p-8 rounded-2xl bg-white/95 shadow-2xl border border-white/20">
            <div>
              <h1 className="text-3xl md:text-4xl font-bold text-primary mb-2">
                Buy This Site
              </h1>
              <p className="text-lg text-muted-foreground mb-4">
                Your preview has ended. Own this complete website for $999—everything you see, ready to customize.
              </p>
              <ul className="text-left text-sm text-muted-foreground space-y-2 bg-muted/50 rounded-lg p-4">
                <li>✓ SEO optimized — meta tags, sitemap, structured data</li>
                <li>✓ Mobile responsive with dropdown menu</li>
                <li>✓ Modern Next.js + Tailwind design</li>
                <li>✓ Full source code & content</li>
              </ul>
            </div>
            <div className="space-y-4">
              <Button
                size="lg"
                className="bg-accent hover:bg-amber-600 text-white px-12 py-6 text-lg"
                onClick={handlePurchase}
                disabled={loading}
              >
                {loading ? (
                  "Redirecting to checkout..."
                ) : (
                  <>
                    <ShoppingCart className="w-5 h-5 mr-2" />
                    Buy This Website — $999
                  </>
                )}
              </Button>
              <p className="text-sm text-muted-foreground">
                Secure payment powered by Stripe
              </p>
            </div>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <div className="pb-20">{children}</div>
      <footer className="fixed bottom-0 left-0 right-0 z-50 bg-primary text-white shadow-[0_-4px_20px_rgba(0,0,0,0.15)]">
        <div className="container mx-auto px-4 py-4 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <Clock className="w-5 h-5 shrink-0" />
            <span className="font-medium">
              Free preview ends in: <span className="font-bold text-accent">{formatTime(timeLeft)}</span>
            </span>
          </div>
          <Button
            onClick={handlePurchase}
            disabled={loading}
            className="bg-accent hover:bg-amber-600 text-white shrink-0 w-full sm:w-auto"
          >
            {loading ? "Redirecting..." : (
              <>
                <ShoppingCart className="w-4 h-4 mr-2" />
                Buy Now — $999
              </>
            )}
          </Button>
        </div>
      </footer>
    </>
  );
}

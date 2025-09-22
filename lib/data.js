import { unstable_cache } from "next/cache";
import { TAGS } from "./cacheTags";

// Navigatie (kan later door n8n worden bijgewerkt)
async function loadNavLinksRaw() {
  return [
    { href: "/", label: "Home" },
    { href: "/over", label: "Over" },
    { href: "/checklist", label: "Checklist" },
  ];
}
export const getNavLinks = unstable_cache(
  loadNavLinksRaw,
  ["nav-links"],                         // cache key
  { tags: [TAGS.NAVIGATION], revalidate: false }
);

// Checklist (nu statisch, straks uit CMS/API)
async function loadChecklistItemsRaw() {
  return [
    "Thermostaat 1°C lager zetten",
    "Tochtstrips plaatsen",
    "Radiatorfolie plakken",
  ];
}
export const getChecklistItems = unstable_cache(
  loadChecklistItemsRaw,
  ["checklist-items"],
  { tags: [TAGS.CHECKLIST], revalidate: false }
);

// Homepage-hero (voorbeeld; nu lokaal)
async function loadHomepageHeroRaw() {
  return {
    title: "Praktische tips om je huis comfortabeler én energiezuiniger te maken",
    intro: "We helpen je stap voor stap (korte, haalbare acties) met duidelijke uitleg.",
  };
}
export const getHomepageHero = unstable_cache(
  loadHomepageHeroRaw,
  ["homepage-hero"],
  { tags: [TAGS.HOMEPAGE], revalidate: false }
);

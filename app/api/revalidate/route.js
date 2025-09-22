// app/api/revalidate/route.js
import { NextResponse } from "next/server";
import { revalidateTag } from "next/cache";

export const runtime = "nodejs";         // (runtime = waar code draait)
export const dynamic = "force-dynamic";  // voorkom caching van dit endpoint

function json(data, status = 200) {
  return new NextResponse(JSON.stringify(data), {
    status,
    headers: {
      "content-type": "application/json",
      "cache-control": "no-store",
    },
  });
}

async function handle(req) {
  // 1) Valideer secret (environment variable = veilige sleutel uit Vercel)
  const url = new URL(req.url);
  const secret = url.searchParams.get("secret");
  if (secret !== process.env.REVALIDATE_SECRET) {
    return json({ ok: false, error: "Unauthorized" }, 401);
  }

  // 2) Lees de tag (tag = label voor cachegroepen)
  const tag = url.searchParams.get("tag");
  if (!tag) {
    return json({ ok: false, error: "Missing 'tag' query parameter" }, 400);
  }

  // 3) Revalidate de tag (revalidateTag = Next functie om caches met deze tag te verversen)
  try {
    revalidateTag(tag);
    return json({ ok: true, tag });
  } catch (err) {
    return json({ ok: false, error: err?.message ?? "revalidateTag failed" }, 500);
  }
}

// Sta zowel GET als POST toe (makkelijk testen)
export async function GET(req) { return handle(req); }
export async function POST(req) { return handle(req); }

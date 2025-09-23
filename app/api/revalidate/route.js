// app/api/revalidate/route.js
import { NextResponse } from 'next/server';
import { revalidateTag } from 'next/cache';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

function json(data, status = 200) {
  return new NextResponse(JSON.stringify(data), {
    status,
    headers: {
      'content-type': 'application/json',
      'cache-control': 'no-store',
    },
  });
}

async function handle(req) {
  const url = new URL(req.url);

  // Helpers om query params te lezen
  const getAllQuery = (name) => url.searchParams.getAll(name).filter(Boolean);

  // 1) Secret & tags uit de query
  let secret = url.searchParams.get('secret') || null;
  let tags = getAllQuery('tag'); // ?tag=home&tag=checklist

  // 2) Vallen terug op JSON body indien nodig
  if ((!secret || tags.length === 0) && req.headers.get('content-type')?.includes('application/json')) {
    const body = await req.json().catch(() => ({}));
    secret ||= body?.secret ?? null;
    if (Array.isArray(body?.tags)) tags = body.tags.filter(Boolean);
    if (!tags.length && body?.tag) tags = [body.tag];
  }

  // 3) Validatie
  if (!secret || secret !== process.env.REVALIDATE_SECRET) {
    return json({ ok: false, error: 'Unauthorized' }, 401);
  }
  if (!tags.length) {
    return json({ ok: false, error: 'Missing tag(s)' }, 400);
  }

  // 4) Revalidate alle tags
  try {
    for (const t of tags) {
      await revalidateTag(t);
    }
    const ts = new Date().toISOString();
    console.log('[revalidate]', { tags, ts });
    return json({ ok: true, tags, ts });
  } catch (err) {
    return json({ ok: false, error: err?.message ?? 'revalidateTag failed' }, 500);
  }
}

export async function GET(req)  { return handle(req); }
export async function POST(req) { return handle(req); }

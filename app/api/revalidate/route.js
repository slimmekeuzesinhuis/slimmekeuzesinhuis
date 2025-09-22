// app/api/revalidate/route.js
import { NextResponse } from 'next/server';
import { revalidateTag } from 'next/cache';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

function json(data, status = 200) {
  return new NextResponse(JSON.stringify(data), {
    status,
    headers: { 'content-type': 'application/json', 'cache-control': 'no-store' },
  });
}

async function handle(req) {
  const url = new URL(req.url);

  // 1) Probeer querystring, val terug op JSON-body
  let secret = url.searchParams.get('secret');
  let tag = url.searchParams.get('tag');

  if (!secret || !tag) {
    if (req.headers.get('content-type')?.includes('application/json')) {
      const body = await req.json().catch(() => ({}));
      secret ||= body?.secret;
      tag ||= body?.tag;
    }
  }

  if (!secret || secret !== process.env.REVALIDATE_SECRET) {
    return json({ ok: false, error: 'Unauthorized' }, 401);
  }

  if (!tag) {
    return json({ ok: false, error: 'Missing "tag"' }, 400);
  }

  try {
    revalidateTag(tag);
    const ts = new Date().toISOString();
    console.log(`[revalidate] tag=${tag} ts=${ts}`);
    return json({ ok: true, tag, ts });
  } catch (err) {
    return json({ ok: false, error: err?.message ?? 'revalidateTag failed' }, 500);
  }
}

export async function GET(req)  { return handle(req); }
export async function POST(req) { return handle(req); }

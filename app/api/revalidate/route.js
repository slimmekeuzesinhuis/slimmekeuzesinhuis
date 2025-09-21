import { NextResponse } from 'next/server';
import { revalidateTag } from 'next/cache';

export const runtime = 'nodejs';           // (node-runtime nodig voor revalidateTag)
export const dynamic = 'force-dynamic';    // (voorkom statische caching van deze route)

export async function POST(req) {
  const { searchParams } = new URL(req.url);
  const secret = searchParams.get('secret');
  const tag = searchParams.get('tag');

  if (!secret || secret !== process.env.REVALIDATE_SECRET) {
    return NextResponse.json({ ok: false, message: 'Invalid secret' }, { status: 401 });
  }

  if (tag) {
    revalidateTag(tag);
  } else {
    // fallback: beide tegelijk
    revalidateTag('products');
    revalidateTag('categories');
  }

  return NextResponse.json({ ok: true, revalidated: true, tag: tag ?? 'all' });
}

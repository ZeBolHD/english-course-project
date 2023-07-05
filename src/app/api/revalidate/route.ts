import { revalidate } from "@/helpers/revalidate";
import { NextRequest, NextResponse } from "next/server";

const REVALIDATION_KEY = process.env.REVALIDATION_KEY as string;

export async function POST(request: NextRequest) {
  const req = await request.json();

  const revalidationKey = request.nextUrl.searchParams.get("key");

  if (revalidationKey !== REVALIDATION_KEY) {
    return NextResponse.json({ error: "invalid api key" }, { status: 403 });
  }

  const model = req.model;
  const slug = req.entry?.slug;

  revalidate(model, slug);

  return NextResponse.json({ revalidated: true });
}

import { revalidate } from "@/helpers/revalidate";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  const req = await request.json();

  const model = req.model;
  const slug = req.entry?.slug;

  revalidate(model, slug);

  return NextResponse.json({ revalidated: true });
}

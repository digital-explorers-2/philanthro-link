import { createClient } from "@/utils/supabase/server";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  let page = searchParams.get("page") || 1;
  page = parseInt(page as string, 10);

  const limit = 6;
  const supabase = createClient();

  const { data: donations, error } = await supabase
    .from("donations")
    .select(`*, descriptions(*)`)
    .order("created_at", { ascending: false })
    .range((page - 1) * limit, page * limit - 1);

  if (error) {
    return new NextResponse(JSON.stringify({ error }), {
      status: 500,
    });
  }

  const { count } = await supabase
    .from("donations")
    .select("id", { count: "exact" });

  return new NextResponse(JSON.stringify({ donations, count }), {
    status: 200,
  });
}

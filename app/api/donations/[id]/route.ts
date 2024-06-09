import { createClient } from "@/utils/supabase/server";
import { NextResponse } from "next/server";

type Params = {
  id: string;
};

export async function GET(request: Request, { params }: { params: Params }) {
  const supabase = createClient();

  const { data: donations, error } = await supabase
    .from("donations")
    .select(`*, descriptions(*), users(first_name, last_name)`)
    .eq("id", params.id)
    .single();

  if (error) {
    return new NextResponse(JSON.stringify({ error }), {
      status: 500,
    });
  }

  return new NextResponse(JSON.stringify(donations), {
    status: 200,
  });
}

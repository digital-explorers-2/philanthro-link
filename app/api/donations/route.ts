import { base64ToFile } from "@/lib/utils";
import { createClient } from "@/utils/supabase/server";
import { NextRequest, NextResponse } from "next/server";

type Input = {
  title: string;
  subtitle: number;
  category: string;
  amount: number;
  currency: string;
  user_id: string;
  challenge?: string;
  solution?: string;
  usage?: string;
  image?: string; // base64 string
};

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  let page = searchParams.get("page") || 1;
  page = parseInt(page as string, 10);

  let category = searchParams.get("category") || 0;
  category = parseInt(category as string, 10);

  const q = searchParams.get("q");

  const limit = 6;
  const supabase = createClient();

  let query = supabase
    .from("donations")
    .select(`*, descriptions(*)`)
    .order("created_at", { ascending: false })
    .range((page - 1) * limit, page * limit - 1);

  if (category != 0) {
    query = query.eq("category_id", category);
  }

  if (q) {
    query = query.ilike("title", `%${q}%`);
  }

  const { data: donations, error } = await query;

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

// TODO: optimize search using https://supabase.com/docs/guides/database/full-text-search

export async function POST(request: Request) {
  const {
    title,
    subtitle,
    category,
    amount,
    currency,
    user_id,
    challenge,
    solution,
    usage,
    image,
  }: Input = await request.json();

  const supabase = createClient();

  // handle image upload
  let image_url = null;

  if (image) {
    const fileExtension = image.split(";")[0].split("/")[1];
    const fileName = Date.now() + "." + fileExtension;
    const file = base64ToFile(image, fileName);

    const { error } = await supabase.storage
      .from("donation_images")
      .upload(`public/${fileName}`, file);
    if (error) {
      return new NextResponse(JSON.stringify({ error }), {
        status: 500,
      });
    }

    image_url = supabase.storage
      .from("donation_images")
      .getPublicUrl(`public/${fileName}`).data.publicUrl;
  }

  // handle category search
  let category_id = null;
  const { data: category_data } = await supabase
    .from("categories")
    .select()
    .ilike("name", `%${category}%`)
    .single();

  if (!category_data) {
    // to lower case and capitalize the first letter
    const categoryString = category
      .toLowerCase()
      .replace(/\b\w/g, (l) => l.toUpperCase());

    const { data: new_category, error: new_category_error } = await supabase
      .from("categories")
      .insert({ name: categoryString })
      .select()
      .single();

    if (new_category_error) {
      return new NextResponse(JSON.stringify({ error: new_category_error }), {
        status: 500,
      });
    }

    category_id = new_category.id;
  } else {
    category_id = category_data.id;
  }

  // handle description creation
  const { data: description, error: description_error } = await supabase
    .from("descriptions")
    .insert({
      subtitle,
      challenge,
      solution,
      usage,
      image: image_url,
    })
    .select()
    .single();

  if (description_error) {
    return new NextResponse(JSON.stringify({ error: description_error }), {
      status: 500,
    });
  }

  // handle donation creation
  const { data: donation, error } = await supabase
    .from("donations")
    .insert({
      title,
      description_id: description.id,
      category_id,
      amount_needed: amount,
      amount_currency: currency,
      user_id,
    })
    .select()
    .single();

  if (error) {
    return new NextResponse(JSON.stringify({ error }), {
      status: 500,
    });
  }

  return new NextResponse(JSON.stringify(donation), {
    status: 200,
  });
}

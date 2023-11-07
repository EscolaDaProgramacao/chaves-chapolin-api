import { NextRequest } from "next/server";

import { Show } from "@/app/models/Show";

export async function GET(request: NextRequest,
  { params }: { params: { show_id: string, id?: string } }) {
  try {
    const { show_id, id } = params;

    const show = new Show(show_id);

    const quote = show.getQuotes().find(e => e.id === Number(id));

    return Response.json(quote);
  } catch (error) {
    return Response.error();
  }
}
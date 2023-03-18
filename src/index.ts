import { serve } from "https://deno.land/std@0.180.0/http/server.ts";

const port = parseInt(Deno.env.get("PORT") ?? "8000");

serve((_req) => new Response("Choo Choo! Welcome to your Deno app\n"), {
  port,
});

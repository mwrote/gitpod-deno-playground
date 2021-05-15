import { ServerRequest } from "https://deno.land/std@0.96.0/http/server.ts";

export default async (req: ServerRequest) => {
	req.respond({ body: `こんにちわ, from Deno v${Deno.version.deno}!` });
};
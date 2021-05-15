import { ServerRequest } from "https://deno.land/std@0.96.0/http/server.ts";

export default async (req: ServerRequest) => {
	req.respond({ body: `hello, from Deno v${Deno.version.deno}!` });
};
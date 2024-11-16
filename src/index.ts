import { Elysia } from "elysia";
import { gettransports } from "./model";
import { cors } from '@elysiajs/cors';

const app = new Elysia().use(cors());
app
  .get("/transports", () => gettransports())
  .post("/transports", ({ body }) => {  // Corrected here
    console.log("body", body);
    return { message: "ok" };
  })
  .listen(5000);

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
);

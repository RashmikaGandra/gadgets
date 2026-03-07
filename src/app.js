import { Hono } from "hono";
import { logger } from "hono/logger";
import { serveStatic } from "hono/deno";

export const createApp = () => {
  const app = new Hono();
  app.use(logger());
  app.get(
    "gadgets-data",
    serveStatic({ root: "data", path: "gadgets_data.json" }),
  );
  app.get("*", serveStatic({ root: "public" }));
  return app;
};

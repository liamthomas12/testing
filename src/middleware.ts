import { defineMiddleware } from "astro/middleware";

export const onRequest = defineMiddleware(async (context, next) => {
  try {
    return await next();
  } catch (e) {
    // Send error logs
    console.log(e);
    // Display a 404 page for NotFoundError
    throw e;
  }
});

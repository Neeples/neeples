import { COOKIE_NAME } from "@shared/const";
import { getSessionCookieOptions } from "./_core/cookies";
import { systemRouter } from "./_core/systemRouter";
import { publicProcedure, protectedProcedure, router } from "./_core/trpc";
import { getContentByLanguage, updateContent } from "./db";
import { z } from "zod";

export const appRouter = router({
    // if you need to use socket.io, read and register route in server/_core/index.ts, all api should start with '/api/' so that the gateway can route correctly
  system: systemRouter,
  auth: router({
    me: publicProcedure.query(opts => opts.ctx.user),
    logout: publicProcedure.mutation(({ ctx }) => {
      const cookieOptions = getSessionCookieOptions(ctx.req);
      ctx.res.clearCookie(COOKIE_NAME, { ...cookieOptions, maxAge: -1 });
      return {
        success: true,
      } as const;
    }),
  }),

  content: router({
    getByLanguage: publicProcedure
      .input(z.object({ language: z.string().default("en") }))
      .query(async ({ input }) => {
        return await getContentByLanguage(input.language);
      }),
    update: protectedProcedure
      .input(z.object({ language: z.string(), key: z.string(), value: z.string() }))
      .mutation(async ({ input, ctx }) => {
        if (ctx.user.role !== "admin") {
          throw new Error("Only admins can update content");
        }
        await updateContent(input.language, input.key, input.value);
        return { success: true };
      }),
  }),
});

export type AppRouter = typeof appRouter;

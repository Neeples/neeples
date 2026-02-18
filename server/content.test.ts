import { describe, expect, it } from "vitest";
import { appRouter } from "./routers";
import type { TrpcContext } from "./_core/context";

type AuthenticatedUser = NonNullable<TrpcContext["user"]>;

function createAdminContext(): TrpcContext {
  const user: AuthenticatedUser = {
    id: 1,
    openId: "admin-user",
    email: "admin@example.com",
    name: "Admin User",
    loginMethod: "manus",
    role: "admin",
    createdAt: new Date(),
    updatedAt: new Date(),
    lastSignedIn: new Date(),
  };

  const ctx: TrpcContext = {
    user,
    req: {
      protocol: "https",
      headers: {},
    } as TrpcContext["req"],
    res: {
      clearCookie: () => {},
    } as TrpcContext["res"],
  };

  return ctx;
}

function createPublicContext(): TrpcContext {
  const ctx: TrpcContext = {
    user: null,
    req: {
      protocol: "https",
      headers: {},
    } as TrpcContext["req"],
    res: {
      clearCookie: () => {},
    } as TrpcContext["res"],
  };

  return ctx;
}

describe("content router", () => {
  it("should allow public access to getByLanguage", async () => {
    const ctx = createPublicContext();
    const caller = appRouter.createCaller(ctx);

    // This should not throw even though user is null
    const result = await caller.content.getByLanguage({ language: "en" });
    expect(typeof result).toBe("object");
  });

  it("should allow admin to update content", async () => {
    const ctx = createAdminContext();
    const caller = appRouter.createCaller(ctx);

    const result = await caller.content.update({
      language: "en",
      key: "test.key",
      value: "test value",
    });

    expect(result).toEqual({ success: true });
  });

  it("should reject non-admin users from updating content", async () => {
    const ctx = createPublicContext();
    const caller = appRouter.createCaller(ctx);

    try {
      await caller.content.update({
        language: "en",
        key: "test.key",
        value: "test value",
      });
      expect.fail("Should have thrown an error");
    } catch (error: any) {
      // protectedProcedure requires authentication, so it will throw a login error
      expect(error.message).toContain("login");
    }
  });
});

import { createRouter } from "../createRouter";
import * as trpc from "@trpc/server";
import { getCoursesSchema } from "../../schema/course.schema";

export const appRouter = createRouter().query("get-courses", {
  input: getCoursesSchema,
  resolve: async ({ ctx, input }) => {
    try {
      const response = await ctx.prisma.university.findFirst({
        where: { name: input.universityName },
        include: { courses: true },
      });
      if (!response) {
        throw new trpc.TRPCError({
          code: "NOT_FOUND",
          message: "There arent any courses on provided university",
        });
      }
      return response.courses;
    } catch (error) {
      throw new trpc.TRPCError({
        code: "INTERNAL_SERVER_ERROR",
        message: "Something went wrong",
      });
    }
  },
});

export type AppRouter = typeof appRouter;

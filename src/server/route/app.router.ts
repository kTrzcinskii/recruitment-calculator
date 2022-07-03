import { createRouter } from "../createRouter";
import * as trpc from "@trpc/server";
import { getCoursesSchema } from "../../schema/course.schema";
import { calculateUserScoreSchema } from "../../schema/user.schema";

export const appRouter = createRouter()
  .query("get-courses", {
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
  })
  .query("get-user-score", {
    input: calculateUserScoreSchema,
    resolve: async ({ input }) => {
      if (input.universityName === "PW") {
        const angielski = input.userScoreSchema.czyB2
          ? 100
          : input.userScoreSchema.angielskiRozsz;

        const score =
          input.userScoreSchema.matematykaRozsz +
          input.userScoreSchema.fizykaRozsz +
          0.25 * angielski;

        return score;
      }

      if (input.universityName === "PG") {
        const score =
          input.userScoreSchema.matematykaRozsz +
          input.userScoreSchema.fizykaRozsz +
          0.1 * 0.4 * input.userScoreSchema.polskiPodst +
          0.1 * input.userScoreSchema.angielskiRozsz;

        return score;
      }

      if (input.universityName === "PP") {
        const fizykaPodst =
          input.userScoreSchema.fizykaRozsz < 30
            ? 2 * input.userScoreSchema.fizykaRozsz
            : 0.5 * input.userScoreSchema.fizykaRozsz + 50;
        const score =
          0.5 * input.userScoreSchema.polskiPodst +
          0.5 * input.userScoreSchema.angielskiPodst +
          2.5 *
            (input.userScoreSchema.matematykaPodst +
              input.userScoreSchema.matematykaRozsz) +
          2 * (fizykaPodst + input.userScoreSchema.fizykaRozsz);

        return score;
      }
    },
  });

export type AppRouter = typeof appRouter;

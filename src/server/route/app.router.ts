import { createRouter } from "../createRouter";
import * as trpc from "@trpc/server";
import { getCoursesSchema } from "../../schema/course.schema";
import { userResultSchema } from "../../schema/user.schema";

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
  .query("get-results", {
    input: userResultSchema,
    resolve: async ({ ctx, input }) => {
      let score = 0;
      if (input.universityName === "PW") {
        const angielski = input.userScoreSchema.czyB2
          ? 100
          : input.userScoreSchema.angielskiRozsz;

        score =
          input.userScoreSchema.matematykaRozsz +
          input.userScoreSchema.fizykaRozsz +
          0.25 * angielski;
      }

      if (input.universityName === "PG") {
        score =
          input.userScoreSchema.matematykaRozsz +
          input.userScoreSchema.fizykaRozsz +
          0.1 * 0.4 * input.userScoreSchema.polskiPodst +
          0.1 * input.userScoreSchema.angielskiRozsz;
      }

      if (input.universityName === "PP") {
        const fizykaPodst =
          input.userScoreSchema.fizykaRozsz < 30
            ? 2 * input.userScoreSchema.fizykaRozsz
            : 0.5 * input.userScoreSchema.fizykaRozsz + 50;
        score =
          0.5 * input.userScoreSchema.polskiPodst +
          0.5 * input.userScoreSchema.angielskiPodst +
          2.5 *
            (input.userScoreSchema.matematykaPodst +
              input.userScoreSchema.matematykaRozsz) +
          2 * (fizykaPodst + input.userScoreSchema.fizykaRozsz);
      }

      const courses = await ctx.prisma.course.findMany({
        where: { id: { in: input.courses } },
      });

      const finalCourses = courses.map((course) => ({
        name: course.name,
        faculty: course.faculty,
        isEnough: score >= course.minPoints,
        score: `${score}pkt/${course.minPoints}pkt`,
        id: course.id,
      }));

      return finalCourses;
    },
  });

export type AppRouter = typeof appRouter;

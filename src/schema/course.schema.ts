import z from "zod";

export const getCoursesSchema = z.object({
  universityName: z.enum(["PW", "PP", "PG"]),
});

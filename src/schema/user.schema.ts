import z from "zod";

export const userScoreSchema = z.object({
  polskiPodst: z.number().min(0).max(100),
  matematykaPodst: z.number().min(0).max(100),
  matematykaRozsz: z.number().min(0).max(100),
  fizykaRozsz: z.number().min(0).max(100),
  angielskiPodst: z.number().min(0).max(100),
  angielskiRozsz: z.number().min(0).max(100),
  czyB2: z.boolean(),
});

export type UserScoreInput = z.TypeOf<typeof userScoreSchema>;

export const userResultSchema = z.object({
  userScoreSchema,
  universityName: z.enum(["PW", "PP", "PG"]),
  courses: z.array(z.string()),
});

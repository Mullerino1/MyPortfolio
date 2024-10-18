import { z } from "zod";

export { habitSchema, habitsSchema };

const habitSchema = z.object({
  id: z.string().uuid(),
  title: z.string(),
  createdAt: z.string().datetime(),
  categories: z.array(z.string()),
});

const habitsSchema = z.array(habitSchema);
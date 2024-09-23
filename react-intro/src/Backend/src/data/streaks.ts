import { projects } from "./projects";

export { streaks };

const streaks = new Map(
  projects.map((project) => [
    project.id,
    {
      id: crypto.randomUUID(),
      projectId: project.id,
      streakCount: 0,
    },
  ])
);
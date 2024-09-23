export { projects };

const projects = [
  {
    id: crypto.randomUUID(),
    title: "Jeg skal game hver dag!",
    createdAt: new Date("2024-01-01"),
    categories: ["spill"],
    description: "this is a project",
  },
  {
    id: crypto.randomUUID(),
    title: "Jeg skal kode hver dag!",
    createdAt: new Date("2024-01-04"),
    categories: ["koding", "programmering"],
    description: "this is not a project",
  },
  {
    id: crypto.randomUUID(),
    title: "Jeg skal trene hver dag!",
    createdAt: new Date("2024-01-07"),
    categories: ["trening", "helse"],
    description: "this might be a project",
  },
  {
    id: crypto.randomUUID(),
    title: "Jeg skal lese hver dag",
    createdAt: new Date("2024-01-02"),
    categories: ["programmering"],
    description: "this is probably not a project",
  },
];
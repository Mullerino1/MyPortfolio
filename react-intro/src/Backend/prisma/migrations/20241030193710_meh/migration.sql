-- CreateTable
CREATE TABLE "Project" (
    "id" INTEGER NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT,
    "createdAt" TEXT NOT NULL,
    "publishedAt" TEXT NOT NULL,
    "public" TEXT NOT NULL,
    "status" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Categories" (
    "projectId" INTEGER NOT NULL,
    "categories" TEXT NOT NULL,

    PRIMARY KEY ("projectId", "categories"),
    CONSTRAINT "Categories_projectId_fkey" FOREIGN KEY ("projectId") REFERENCES "Project" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "Project_id_key" ON "Project"("id");

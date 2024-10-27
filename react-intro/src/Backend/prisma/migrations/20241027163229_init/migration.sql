-- CreateTable
CREATE TABLE "Project" (
    "id" INTEGER NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT,
    "dateDay" INTEGER NOT NULL,
    "dateMonth" INTEGER NOT NULL,
    "dateYear" INTEGER NOT NULL,
    "publishedAt" DATETIME NOT NULL,
    "public" BOOLEAN NOT NULL,
    "status" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "Project_id_key" ON "Project"("id");

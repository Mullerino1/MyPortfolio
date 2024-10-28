/*
  Warnings:

  - You are about to drop the column `dateDay` on the `Project` table. All the data in the column will be lost.
  - You are about to drop the column `dateMonth` on the `Project` table. All the data in the column will be lost.
  - You are about to drop the column `dateYear` on the `Project` table. All the data in the column will be lost.
  - Added the required column `createdAt` to the `Project` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `Project` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Project" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "description" TEXT,
    "updatedAt" DATETIME NOT NULL,
    "createdAt" DATETIME NOT NULL,
    "publishedAt" DATETIME NOT NULL,
    "public" BOOLEAN NOT NULL,
    "status" TEXT NOT NULL
);
INSERT INTO "new_Project" ("description", "id", "name", "public", "publishedAt", "status") SELECT "description", "id", "name", "public", "publishedAt", "status" FROM "Project";
DROP TABLE "Project";
ALTER TABLE "new_Project" RENAME TO "Project";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;

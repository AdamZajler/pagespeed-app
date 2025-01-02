/*
  Warnings:

  - The primary key for the `Collection` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The `id` column on the `Collection` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The primary key for the `Config` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The `id` column on the `Config` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The primary key for the `Domain` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The `id` column on the `Domain` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The primary key for the `History` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The `id` column on the `History` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `urlId` column on the `History` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The primary key for the `Url` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The `id` column on the `Url` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - Changed the type of `domainId` on the `Url` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `collectionId` on the `Url` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- DropForeignKey
ALTER TABLE "Collection" DROP CONSTRAINT "Collection_userId_fkey";

-- DropForeignKey
ALTER TABLE "Config" DROP CONSTRAINT "Config_userId_fkey";

-- DropForeignKey
ALTER TABLE "Domain" DROP CONSTRAINT "Domain_userId_fkey";

-- DropForeignKey
ALTER TABLE "History" DROP CONSTRAINT "History_urlId_fkey";

-- DropForeignKey
ALTER TABLE "Url" DROP CONSTRAINT "Url_collectionId_fkey";

-- DropForeignKey
ALTER TABLE "Url" DROP CONSTRAINT "Url_domainId_fkey";

-- AlterTable
ALTER TABLE "Collection" DROP CONSTRAINT "Collection_pkey",
DROP COLUMN "id",
ADD COLUMN     "id" SERIAL NOT NULL,
ALTER COLUMN "userId" SET DATA TYPE TEXT,
ADD CONSTRAINT "Collection_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "Config" DROP CONSTRAINT "Config_pkey",
DROP COLUMN "id",
ADD COLUMN     "id" SERIAL NOT NULL,
ALTER COLUMN "userId" SET DATA TYPE TEXT,
ADD CONSTRAINT "Config_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "Domain" DROP CONSTRAINT "Domain_pkey",
DROP COLUMN "id",
ADD COLUMN     "id" SERIAL NOT NULL,
ALTER COLUMN "userId" SET DATA TYPE TEXT,
ADD CONSTRAINT "Domain_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "History" DROP CONSTRAINT "History_pkey",
DROP COLUMN "id",
ADD COLUMN     "id" SERIAL NOT NULL,
DROP COLUMN "urlId",
ADD COLUMN     "urlId" INTEGER,
ADD CONSTRAINT "History_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "Url" DROP CONSTRAINT "Url_pkey",
DROP COLUMN "id",
ADD COLUMN     "id" SERIAL NOT NULL,
DROP COLUMN "domainId",
ADD COLUMN     "domainId" INTEGER NOT NULL,
DROP COLUMN "collectionId",
ADD COLUMN     "collectionId" INTEGER NOT NULL,
ADD CONSTRAINT "Url_pkey" PRIMARY KEY ("id");

-- AddForeignKey
ALTER TABLE "Config" ADD CONSTRAINT "Config_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Domain" ADD CONSTRAINT "Domain_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Collection" ADD CONSTRAINT "Collection_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Url" ADD CONSTRAINT "Url_domainId_fkey" FOREIGN KEY ("domainId") REFERENCES "Domain"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Url" ADD CONSTRAINT "Url_collectionId_fkey" FOREIGN KEY ("collectionId") REFERENCES "Collection"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "History" ADD CONSTRAINT "History_urlId_fkey" FOREIGN KEY ("urlId") REFERENCES "Url"("id") ON DELETE CASCADE ON UPDATE CASCADE;

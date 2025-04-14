/*
  Warnings:

  - Added the required column `benefits` to the `Aromatherapy` table without a default value. This is not possible if the table is not empty.
  - Added the required column `category` to the `Aromatherapy` table without a default value. This is not possible if the table is not empty.
  - Added the required column `description` to the `Aromatherapy` table without a default value. This is not possible if the table is not empty.
  - Added the required column `imageUrl` to the `Aromatherapy` table without a default value. This is not possible if the table is not empty.
  - Added the required column `origin` to the `Aromatherapy` table without a default value. This is not possible if the table is not empty.
  - Added the required column `symptoms` to the `Aromatherapy` table without a default value. This is not possible if the table is not empty.
  - Added the required column `tags` to the `Aromatherapy` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `Aromatherapy` table without a default value. This is not possible if the table is not empty.
  - Added the required column `usageIdeas` to the `Aromatherapy` table without a default value. This is not possible if the table is not empty.
  - Added the required column `category` to the `HerbalMedicine` table without a default value. This is not possible if the table is not empty.
  - Added the required column `imageUrl` to the `HerbalMedicine` table without a default value. This is not possible if the table is not empty.
  - Added the required column `symptoms` to the `HerbalMedicine` table without a default value. This is not possible if the table is not empty.
  - Added the required column `tags` to the `HerbalMedicine` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `HerbalMedicine` table without a default value. This is not possible if the table is not empty.
  - Added the required column `usageIdeas` to the `HerbalMedicine` table without a default value. This is not possible if the table is not empty.
  - Added the required column `benefits` to the `TraditionalHealing` table without a default value. This is not possible if the table is not empty.
  - Added the required column `description` to the `TraditionalHealing` table without a default value. This is not possible if the table is not empty.
  - Added the required column `imageUrl` to the `TraditionalHealing` table without a default value. This is not possible if the table is not empty.
  - Added the required column `region` to the `TraditionalHealing` table without a default value. This is not possible if the table is not empty.
  - Added the required column `tags` to the `TraditionalHealing` table without a default value. This is not possible if the table is not empty.
  - Made the column `usageIdeas` on table `traditionalhealing` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE `aromatherapy` ADD COLUMN `benefits` VARCHAR(191) NOT NULL,
    ADD COLUMN `category` VARCHAR(191) NOT NULL,
    ADD COLUMN `description` VARCHAR(191) NOT NULL,
    ADD COLUMN `imageUrl` VARCHAR(191) NOT NULL,
    ADD COLUMN `likes` INTEGER NOT NULL DEFAULT 0,
    ADD COLUMN `origin` VARCHAR(191) NOT NULL,
    ADD COLUMN `rating` DOUBLE NULL,
    ADD COLUMN `symptoms` VARCHAR(191) NOT NULL,
    ADD COLUMN `tags` VARCHAR(191) NOT NULL,
    ADD COLUMN `updatedAt` DATETIME(3) NOT NULL,
    ADD COLUMN `usageIdeas` VARCHAR(191) NOT NULL;

-- AlterTable
ALTER TABLE `herbalmedicine` ADD COLUMN `category` VARCHAR(191) NOT NULL,
    ADD COLUMN `imageUrl` VARCHAR(191) NOT NULL,
    ADD COLUMN `likes` INTEGER NOT NULL DEFAULT 0,
    ADD COLUMN `rating` DOUBLE NULL,
    ADD COLUMN `symptoms` VARCHAR(191) NOT NULL,
    ADD COLUMN `tags` VARCHAR(191) NOT NULL,
    ADD COLUMN `updatedAt` DATETIME(3) NOT NULL,
    ADD COLUMN `usageIdeas` VARCHAR(191) NOT NULL;

-- AlterTable
ALTER TABLE `traditionalhealing` ADD COLUMN `benefits` VARCHAR(191) NOT NULL,
    ADD COLUMN `description` VARCHAR(191) NOT NULL,
    ADD COLUMN `imageUrl` VARCHAR(191) NOT NULL,
    ADD COLUMN `likes` INTEGER NOT NULL DEFAULT 0,
    ADD COLUMN `rating` DOUBLE NULL,
    ADD COLUMN `region` VARCHAR(191) NOT NULL,
    ADD COLUMN `tags` VARCHAR(191) NOT NULL,
    ALTER COLUMN `updatedAt` DROP DEFAULT,
    MODIFY `usageIdeas` VARCHAR(191) NOT NULL;
